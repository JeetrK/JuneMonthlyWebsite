// Array of customer reviews
const reviews = [
    {
        name: "Cubert",
        review: "Toy is very toy",
        rating: 3
    },
    {
        name: "Arye",
        review: "My kids love the wooden train!",
        rating: 4
    },
    {
        name: "KwebbleKop",
        review: "This toy is DANK",
        rating: 5
    }
];

let currentReviewIndex = 0;

function generateStars(rating) {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
}

function showNextReview() {
    const container = document.getElementById("reviews-container");
    const review = reviews[currentReviewIndex];

    container.innerHTML = `
        <div class="review mb-3 p-3 border" style="background-color: white;">
            <h5>${review.name}</h5>
            <p>${review.review}</p>
            <p>${generateStars(review.rating)}</p>
        </div>
    `;

    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
}

document.getElementById("action-button").addEventListener("click", showNextReview);
