document.addEventListener('DOMContentLoaded', () => {
    const errorMessage = document.querySelector('.error-message');
    const productnameInput = document.querySelector('.productname-input');
    const textInput = document.querySelector('.text-input');
    const reviewContainer = document.querySelector('.review-container');



    const addBtn = document.querySelector('.add-btn');
    const keyStorageProductReviews = "productReviews";
    const createStorageReviews = () => {
        return [];
    }
    const initData = () => {
        const jsonStorage = localStorage.getItem(keyStorageProductReviews);

        if (jsonStorage == null) {
            return createStorageReviews();
        }
        else {
            return JSON.parse(jsonStorage);
        }
    }
    // let initialData = [{ productname: "Продукт 1", text: "Содержимое отзыва 1..." },
    // { productname: "Продукт 2", text: "Содержимое отзыва 2..." },]
    let initialData = initData();

    const createProduct = (productname) => {
        return {
            product: productname,
            reviews: [],
        }
    }



    if (addBtn) {
        addBtn.addEventListener('click', () => {
            let productReviews = initialData.find(item => item.product === productnameInput.value);

            if (productReviews == null) {
                productReviews = createProduct(productnameInput.value);
                initialData.push(productReviews);
            }

            productReviews.reviews.push(textInput.value);

            localStorage.setItem(keyStorageProductReviews, JSON.stringify(initialData));

            // const user = {
            //     productname: productnameInput.value,
            //     text: textInput.value
            // }

            // Сохраняем значения наименование продукта и отзыв пользователя
            // localStorage.setItem('productname', productnameInput.value);
            // localStorage.setItem('text', textInput.value);
            // window.location.href = "view.html"; // переходим на страницу wiew
        });
    }
    function fetchReviews() {
        return new Promise((resolve, reject) => {
            // Имитация задержки сети
            setTimeout(() => {
                if (initialData.length < 1) {
                    reject("Ошибка при загрузке отзывов");
                } else {
                    resolve(initialData);
                }
            }, 1000);
        });
    }

    const loadBtn = document.querySelector('.load-button');
    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            loadBtn.disabled = true;

            fetchReviews()
                .then(reviews => {
                    reviews.forEach(article => {
                        const articleDiv = document.createElement('div');
                        articleDiv.innerHTML = `<h3>${article.product}</h3>`;
                        articleDiv.innerHTML += `<button class="loadReviexs-button">Загрузить отзывы о товаре</button>`
                        // article.reviews.forEach(e => articleDiv.innerHTML += '<p>' + e + '</p>')
                        reviewContainer.appendChild(articleDiv);
                    });
                })
                .catch(error => {
                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = error;
                    reviewContainer.appendChild(errorDiv);
                })
                .finally(() => {
                    loadBtn.disabled = false;
                });
        });
    }

});