let category_list = document.querySelector(".category_list");

function open_category_list() {
       category_list.classList.toggle("active")

}



var cart = document.querySelector('.cart');

function open_close_cart() {
       cart.classList.toggle("active")
}





fetch('items_home.json')
       .then(response => response.json())
       .then(data => {
              const addToCartButtons = document.querySelectorAll(".btn_add_cart")

              addToCartButtons.forEach(button => {
                     button.addEventListener("click", (event) => {
                            const productId = event.target.getAttribute('data-id')
                            const selecetedproduct = data.find(product => product.id == productId)



                            addToCart(selecetedproduct)

                            const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)

                            allMatchingButtons.forEach(btn => {
                                   btn.classList.add("active")
                                   btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item In Cart`

                            })
                     })
              })
       })


function addToCart(product) {

       let cart = JSON.parse(localStorage.getItem('cart')) || []
       cart.push({ ...product, quantity: 1 })
       localStorage.setItem('cart', JSON.stringify(cart))
       updateCart()
}

function updateCart() {
       const cartItemContainer = document.getElementById("cart_items")

       const cart = JSON.parse(localStorage.getItem('cart')) || []

       var total_price = 0
       var total_count = 0

       cartItemContainer.innerHTML = "";

       cart.forEach((item, index) => {              
              let total_price_item = item.price_egp * item.quantity;
              total_price += total_price_item
              total_count += item.quantity
              
              cartItemContainer.innerHTML += `

              <div class="item_cart">
                <img src="${item.image}" alt="">
                <div class="content">
                    <h4>${item.trade_name}</h4>
                    <p class="price_cart">EG${total_price_item}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-index="${index}">+</button>

                    </div>
                </div>

                <button class="delete_item" data-index="${index}"> <i class="fa-solid fa-trash-can"></i></button>

            </div>
       
       `
       })

       const price_cart_total = document.querySelector(".price_cart_total")

       const count_item_cart = document.querySelector(".Count_item_cart")
       
       const count_item_header = document.querySelector(".count-item-header")

price_cart_total.innerHTML=` EG ${total_price}`
count_item_cart.innerHTML = total_count
count_item_header.innerHTML= total_count


       const increaseButtons = document.querySelectorAll(".increase_quantity")
       const decreaseButtons = document.querySelectorAll(".decrease_quantity")

       increaseButtons.forEach(button => {
              button.addEventListener("click", (event) => {
                     const itemIndex = event.target.getAttribute("data-index")
                     increaseQuantity(itemIndex)
              })
       })
       decreaseButtons.forEach(button => {
              button.addEventListener("click", (event) => {
                     const itemIndex = event.target.getAttribute("data-index")
                     decreaseQuantity(itemIndex)
              })
       })



       const delteButtons = document.querySelectorAll('.delete_item')
       delteButtons.forEach(button => {
              button.addEventListener('click', (event) => {
                     const itemIndex = event.target.closest('button').getAttribute('data-index')
                     removeFromCart(itemIndex)
              })
       })

}
function increaseQuantity(index){
       let cart = JSON.parse(localStorage.getItem('cart')) || []
       cart[index].quantity += 1
       localStorage.setItem('cart' , JSON.stringify(cart))
       updateCart()
}
function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1
        localStorage.setItem('cart', JSON.stringify(cart))
        updateCart()
    }
}





function removeFromCart(index) {
       const cart = JSON.parse(localStorage.getItem('cart')) || []

       const removeProduct = cart.splice(index, 1)[0]
       localStorage.setItem('cart', JSON.stringify(cart))
       updateCart()
       updateButoonsState(removeProduct.id)
}

function updateButoonsState(productId) {
       const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
       allMatchingButtons.forEach(button => {
              button.classList.remove('active');
              button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart`

       })

}



updateCart()



