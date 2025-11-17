document.addEventListener("DOMContentLoaded", () => {
  const heartContainer = document.getElementById("heart-container");
  const likeButton = document.getElementById("like-button");

  likeButton.addEventListener("click", () => {
    createHeart();
  });

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    const size = Math.random() * 20 + 10; // Random size between 10px and 30px
    const x = Math.random() * window.innerWidth; // Random horizontal position
    const duration = Math.random() * 1 + 1; // Random animation duration

    heart.style.fontSize = `${size}px`;
    heart.style.left = `${x}px`;
    heart.style.bottom = "0px";

    heartContainer.appendChild(heart);

    // Animate with GSAP
    gsap.to(heart, {
      y: -window.innerHeight - size,
      opacity: 0,
      duration: duration,
      ease: "power2.out",
      onComplete: () => {
        heart.remove(); // Remove element after animation
      },
    });
  }
});
