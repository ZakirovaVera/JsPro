document.getElementById('addReviewButton').addEventListener('click', addReview);
window.onload = loadReviews;

function addReview() {
    const productName = document.getElementById('productNameInput').value.trim();
    const reviewText = document.getElementById('reviewInput').value.trim();

    if (!productName || !reviewText) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(reviewText);

    localStorage.setItem('reviews', JSON.stringify(reviews));
    loadReviews();
    document.getElementById('productNameInput').value = '';
    document.getElementById('reviewInput').value = '';
}

function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    Object.keys(reviews).forEach(productName => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<h3>${productName}</h3>`;

        reviews[productName].forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.innerHTML = `${review} <button onclick="deleteReview('${productName}', ${index})">Удалить</button>`;
            productDiv.appendChild(reviewDiv);
        });

        productsList.appendChild(productDiv);
    });
}

function deleteReview(productName, reviewIndex) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    reviews[productName].splice(reviewIndex, 1);

    if (reviews[productName].length === 0) {
        delete reviews[productName];
    }

    localStorage.setItem('reviews', JSON.stringify(reviews));
    loadReviews();
}