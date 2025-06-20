const reviews = [
    { name: "Chris Demetri", text: "This toy SLAPS BOI", rating: 5 },
    { name: "Zahr Evans", text: "I mean... Its alright", rating: 3 },
    { name: "Dev Patel", text: "Pretty epic toy", rating: 4 }
];

let remainingReviews = [...reviews];

document.getElementById("action-button").addEventListener("click", function () {
    const container = document.getElementById("reviews-container");

    // If no more reviews remain, reset the pool
    if (remainingReviews.length === 0) {
        remainingReviews = [...reviews];
    }

    // Pick and remove a random review
    const randomIndex = Math.floor(Math.random() * remainingReviews.length);
    const review = remainingReviews.splice(randomIndex, 1)[0];

    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

    // Replace the innerHTML of the container (this shows only one at a time)
container.innerHTML = `
    <div class="review border rounded p-3 mb-2">
        <h5>${review.name}</h5>
        <p>${review.text}</p>
        <p class="review-stars">${stars}</p>
    </div>
`;
});




