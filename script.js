//Object wit names of ppl and review number
const reviews = [
    {   name: "Chris Demetri", 
        text: "This toy SLAPS BOI", 
        rating: 5 
    },
    {    name: "Zahr Evans",
         text: "I mean... Its alright", 
         rating: 3 
        },
    {    name: "Dev Patel",
         text: "Pretty epic toy", 
         rating: 4 
        },
    {   name: "William Aaron", 
        text: "I ordered the boat and it just instantly broke... I need a refund right NOW. I also bought some other blocks and my kids love it so at least there's that.", 
        rating: 2 
    }
];

let remainingReviews = [...reviews];

document.getElementById("action-button").addEventListener("click", function () {
    const container = document.getElementById("reviews-container");

    // if there are no more reviews left, it resets
    if (remainingReviews.length === 0) {
        remainingReviews = [...reviews];
    }

    // picks and removes a random review
    const randomIndex = Math.floor(Math.random() * remainingReviews.length);
    const review = remainingReviews.splice(randomIndex, 1)[0];

    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

    // replaces innerHTML of the container and it shows once at a time
container.innerHTML = `
    <div class="review border rounded p-3 mb-2">
        <h5>${review.name}</h5>
        <p>${review.text}</p>
        <p class="review-stars">${stars}</p>
    </div>
`;
});




