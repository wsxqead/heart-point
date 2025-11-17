document.getElementById("like-button").addEventListener("click", () => {
  const animationContainer = document.getElementById(
    "like-animation-container"
  );

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  // 크기 + 좌우 랜덤 오프셋
  const randomOffset = (Math.random() - 0.5) * 80;
  const randomScale = Math.random() * 0.4 + 0.8;

  heart.style.left = `${randomOffset}px`;
  heart.style.transform = `scale(${randomScale})`;

  animationContainer.appendChild(heart);

  // 애니메이션 끝나면 삭제
  heart.addEventListener("animationend", () => {
    animationContainer.removeChild(heart);
  });
});
