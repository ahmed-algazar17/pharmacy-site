fetch('items_home.json')
    .then(response => response.json())
    .then(data => {

        const cart = JSON.parse(localStorage.getItem('cart')) || []

        const swiper_items_sale = document.getElementById("swiper_items_sale")

        const swiper_cosmotics = document.getElementById("swiper_cosmotics")

        data.forEach(product => {
            if (product.category == "drugs") {

                const isInCart = cart.some(cartItem => cartItem.id === product.id)

                swiper_items_sale.innerHTML +=

                    `
                
                    <div class="swiper-slide product">
                        <!-- <span class="sale_present">50%</span> -->
                        <div class="img_product">
                            <a href="#"><img src="${product.image}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.trade_name}</a></p>

                        <div class="price">
                            <p><span>${product.price_egp}</span></p>
                            <p class="old_price">${product.dosage_form}</p>
                        </div>

                        <div class="icon">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item In Cart' : 'add to cart'}
                            </span>
                            <span class="icon_product ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
                
                `
            };
        });

        data.forEach(product => {

            if (product.category == "cosmetics") {
                const isInCart = cart.some(cartItem => cartItem.id === product.id)


                swiper_cosmotics.innerHTML +=
                    `
                    <div class="swiper-slide product">
                        <!-- <span class="sale_present">50%</span> -->
                        <div class="img_product">
                            <a href="#"><img src="${product.image}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.trade_name}</a></p>

                        <div class="price">
                            <p><span>${product.price_egp}</span></p>
                            <p class="old_price">${product.dosage_form}</p>
                        </div>

                        <div class="icon">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item In Cart' : 'add to cart'}
                            </span>
                            <span class="icon_product ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
                
                `

            }
        });

  })
