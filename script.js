// Image Carousel
const images = [
  "images/img1.jpg", // first image
  "images/img2.jpg"  // second image
];

let currentIndex = 0;
const carouselImage = document.getElementById("carousel-image");

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImage.src = images[currentIndex];
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImage.src = images[currentIndex];
});

// Joke API
const jokeBtn = document.getElementById("joke-btn");
const jokeEl = document.getElementById("joke");

jokeBtn.addEventListener("click", async () => {
  jokeBtn.disabled = true;
  jokeBtn.textContent = "Loading...";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!res.ok) throw new Error("Failed to fetch joke");
    const data = await res.json();
    jokeEl.textContent = `${data.setup} — ${data.punchline}`;
  } catch (err) {
    jokeEl.textContent = "Oops! Could not fetch a joke.";
  } finally {
    jokeBtn.disabled = false;
    jokeBtn.textContent = "Get Joke";
  }
});
