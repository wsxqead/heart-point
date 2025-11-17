document.getElementById("heart-button").addEventListener("click", createHeart);

function createHeart() {
  const heartContainer = document.getElementById("heart-container");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  // 하트의 초기 위치 설정
  const startX = window.innerWidth / 2;
  const randXOffset = (Math.random() - 0.5) * 200; // 랜덤한 좌우 움직임
  const endX = startX + randXOffset;

  const startY = window.innerHeight - 50;
  const endY = Math.random() * (window.innerHeight / 2);

  const randScale = Math.random() * 0.5 + 0.5;

  heart.style.left = `${startX}px`;
  heart.style.bottom = "50px";
  heartContainer.appendChild(heart);

  // Anime.js를 사용한 애니메이션 설정
  anime({
    targets: heart,
    translateX: endX - startX,
    translateY: -(startY - endY),
    scale: randScale,
    opacity: [1, 0],
    duration: 2000,
    easing: "easeOutQuad",
    complete: function () {
      heart.remove();
    },
  });
}
