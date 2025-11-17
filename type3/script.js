document.getElementById("heart-button").addEventListener("click", createHeart);

function createHeart() {
  const heartContainer = document.getElementById("heart-container");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  // 하트의 초기 위치 설정
  heartContainer.appendChild(heart);

  const randomX = (Math.random() - 0.5) * 80; // 좌우로 랜덤한 오프셋
  const randomScale = Math.random() * 0.5 + 0.5; // 랜덤 크기
  const randomRotation = Math.random() * 30 - 15; // 좌우 회전 각도

  // GSAP 애니메이션
  gsap.fromTo(
    heart,
    {
      x: randomX,
      y: 0,
      scale: randomScale,
      rotation: randomRotation,
      opacity: 1,
    },
    {
      y: -200, // 하트가 떠오를 높이
      opacity: 0,
      duration: 2,
      ease: "power1.out",
      onComplete: () => heart.remove(), // 애니메이션 종료 시 하트 제거
    }
  );
}
