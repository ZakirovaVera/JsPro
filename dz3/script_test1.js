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
                        articleDiv.classList.add("revWrapp");
                        const btn = document.createElement("button");
                        btn.classList.add('click-product')
                        btn.addEventListener('click', () => {
                            article.reviews.forEach(e => 
                                {
                                const p = document.createElement("p");
                                p.classList.add('product__p');
                                p.innerText = e;
                                articleDiv.appendChild(p);

                                const btnDel = document.createElement("button");
                                btnDel.classList.add('btn__Del');
                                btnDel.innerText = 'Delete';
                                articleDiv.appendChild(btnDel);
                            })

                            // articleDiv.innerHTML += '<p class="product__p">' + e + '</p>' + '<button class="btn__Del">Удалить</button>')
                            // btn.disabled = 'disabled'
                        });
                        btn.innerText = article.product;
                        articleDiv.appendChild(btn);
                        reviewContainer.appendChild(articleDiv);
                    });
                })
                .catch(error => {
                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = error;
                    reviewContainer.appendChild(errorDiv);
                })
                .finally(() => {
                    loadBtn.disabled = 'disabled';
                });
        });
    }
});