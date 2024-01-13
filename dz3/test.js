document.addEventListener('DOMContentLoaded', () => {

    const initialJSON = `[
        {"product":"Apple iPhone 13", "id": 1,"reviews":[{"id":"1","text":"отличный"}]}]`;

    const keyStorageProductReviews = "productReviews";
    let initialData = localStorage.getItem(keyStorageProductReviews);

    if (!initialData) {
        localStorage.setItem(keyStorageProductReviews, initialJSON);
    }

    const reviews = JSON.parse(localStorage.getItem(keyStorageProductReviews));

    const reviewHtml = reviews.map((review) => getReviewHtml(review)).join('');



    const addBtnElement = document.querySelector('.add-btn');
    const productnameInput = document.querySelector('.productname-input');
    const textInput = document.querySelector('.text-input');

    // при клике сохраняются в localStorage введенные данные.
    if (addBtnElement) {
        addBtnElement.addEventListener("click", function () {

            const productName = productnameInput.value;
            const textrev = textInput.value;

            const review = {
                product: productName,
                id: Date.now(),
                reviews: [
                    {
                        id: Date.now(),
                        text: textrev,
                    }
                ]
            };

            reviews.push(review);
            localStorage.setItem(keyStorageProductReviews, JSON.stringify(reviews));

        })
    }

    const conteinerProductElement = document.querySelector(".container-product")
    const loadBtnElement = document.querySelector('.load-button');

    if (loadBtnElement) {
        loadBtnElement.addEventListener('click', function () {
            conteinerProductElement.innerHTML = reviewHtml;
        });
    }


    const btnProductElement = document.querySelector('.btn-product');

    conteinerProductElement.addEventListener("click", function (event) {

        if (event.target.classList.contains("btn-product")) {
            const containerProduct = event.target.parentNode;
            const el = containerProduct.querySelector("#welcomeDiv");
            el?.classList.toggle('hidden');
            return;
        }

        if (event.target.classList.contains("product-review__delete")) {
            const reWrappElement = event.target.closest('.product');
            const productId = event.target.getAttribute("product-id");

            const indexProduct = reviews.findIndex(x => x.id == productId);
            reviews.splice(indexProduct, 1);
            localStorage.setItem(keyStorageProductReviews, JSON.stringify(reviews));

            reWrappElement.remove();
            return;
        }
    }
    )

    function getReviewHtml(rev) {
        let id = rev.reviews?.map((item) => item.id);
        let text = rev.reviews?.map((item) => item.text);

        return `<div class="product">
        <button class="btn-product">${rev.product}</button>
        <div class="revWrapp hidden" id="welcomeDiv" >
            <p class="product-review" data-id="${id}">${text}</p>
            <button class="product-review__delete" product-id="${rev.id}" review-id="${id}">Delete</button>
        </div>
    </div>`;
    }
});