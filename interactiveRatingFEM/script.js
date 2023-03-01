const submission = document.querySelector(".submission-form");
const thankYou = document.querySelector(".thank-you");
const submit = document.querySelector(".button");
const ratings = document.querySelectorAll(".rating");
const yourRating = document.querySelector(".your-rating");
let feedback;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((rating) => {
      rating.classList.remove("active");
    });
    rating.classList.add("active");
    feedback = rating.textContent;
  });
});

submit.addEventListener("click", () => {
  if (feedback != undefined) {
    submission.classList.add("visually-hidden");
    thankYou.classList.remove("visually-hidden");
    yourRating.textContent = "You selected " + feedback + " out of 5";
  }
});