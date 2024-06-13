import products from "../../data/loja.json" with { type: "json" }

function renderProducts(cart) {

    const list = document.querySelector("#cartList")

    list.innerHTML = ""

    cart.forEach(cartProduct => {

        const product = products.find(element => element.id == cartProduct.id)
        
        list.insertAdjacentHTML("beforeend", `
            <li>
                <img src="${product.imgUrl}">
                <div>
                    <h6>${product.description}</h6>
                    <span>Preço unitário: R$ ${product.price.toFixed(2).replace(".",",")}</span>
                    <span>Quantidade: ${cartProduct.qtd}</span>
                </div>
                <span id="deleteBtn-${product.id}" class="material-symbols-outlined">delete</span>
            </li>
        `)

        document.querySelector(`#deleteBtn-${product.id}`).addEventListener("click", () => {
            localStorage.setItem("@CART", JSON.stringify(JSON.parse(localStorage.getItem("@CART")).filter(element => element.id != product.id)))
            renderProducts(JSON.parse(localStorage.getItem("@CART")))
        })
    })
}

const cart = JSON.parse(localStorage.getItem("@CART"))

renderProducts(cart)