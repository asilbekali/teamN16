let product = document.querySelector(".card");

async function readApi(url) {
    try {
        const response = await axios.get(url);
        const products = response.data; 
        
        products.forEach((item) => {
            console.log(item.name);
            
            product.insertAdjacentHTML(
                "beforeend",
                `<div class="crd">
                    <img src="https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123">
                    <p class="desc">${item.name || 'Mahsulot nomi mavjud emas'}</p>
                    <p class="sariq">2 594 ${item.price_per_month || 'Noma’lum narx'}/oyiga</p>
                    <div class="mainfooter">
                        <div class="footer">
                            <p class="linesum"><del>${item.old_price || '---'}</del></p>
                            <h2>${item.current_price || '---'}</h2>
                        </div>
                        <button class="btn">🛍</button>
                    </div>
                </div>`
            );
        });
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}

readApi("https://6764fcfe52b2a7619f5e0263.mockapi.io/uzum");
