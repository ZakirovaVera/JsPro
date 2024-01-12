document.addEventListener('DOMContentLoaded', () => {

    // const initialJSON = `[
    //     {"product":"Apple iPhone 13","reviews":[{"id":"1","text":"текст отзыва"}]}]`;
    const initialJSON = `[{"product":""}]`;

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

            // const review = {
            //     product: productName,
            //     rewiews: [
            //         {
            //             id: Date.now(),
            //             text: textrev,
            //         }
            //     ]
            // };
            
            const itemProduct = reviews.find((productName) => reviews.product === productName);
            const review = {
                        id: Date.now(),
                        text: textrev,
            };
            itemProduct.push(review);
    
            // reviews.push(review);
            localStorage.setItem(keyStorageProductReviews, JSON.stringify(itemProduct));

            // conteinerElement.insertAdjacentHTML('beforeend', getReviewHtml(review));
        })
    }

    const reviewContainerElement = document.querySelector('.review-container');
    const loadBtnElement = document.querySelector('.load-button');

    if(loadBtnElement){
        loadBtnElement.addEventListener('click', function () {
            
        });
    }
// const conteinerElement = document.querySelector(".container")

    // conteinerElement.innerHTML = reviewHtml;



    function getReviewHtml(rev) {
        return `<div class="product">
        <button class="click-product">${rev.product}</button>
        <div class="revWrapp">
            <p class="product-review" data-id="${rev.reviews.id}>${rev.reviews.text}</p>
            <button class="product-review__delete">Delete</button>
        </div>
    </div>`;
    }
});