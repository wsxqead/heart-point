document.getElementById("heart-button").addEventListener("click", () => {
  createHeart();
  addCombo();
});

/* ------------------------------
    ⭐ 하트 애니메이션
------------------------------ */
function createHeart() {
  const heartContainer = document.getElementById("heart-container");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  const startX = window.innerWidth / 2;
  const randXOffset = (Math.random() - 0.5) * 200;
  const endX = startX + randXOffset;

  const startY = window.innerHeight - 50;
  const endY = Math.random() * (window.innerHeight / 2);

  const randScale = Math.random() * 0.5 + 0.5;

  heart.style.left = `${startX}px`;
  heart.style.bottom = "50px";
  heartContainer.appendChild(heart);

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

/* ------------------------------
    ⭐ 콤보 시스템
------------------------------ */
let comboCount = 0;
let comboTimeout = null;

function addCombo() {
  comboCount++;
  updateComboUI();

  // 1초 안에 추가 입력 없으면 콤보 종료
  if (comboTimeout) clearTimeout(comboTimeout);

  comboTimeout = setTimeout(() => {
    comboCount = 0;
    hideComboUI();
  }, 1000);
}

function updateComboUI() {
  const comboDisplay = document.getElementById("combo-display");
  comboDisplay.textContent = comboCount + " Combo!";
  comboDisplay.style.opacity = 1;

  comboDisplay.classList.remove("combo-pop");
  void comboDisplay.offsetWidth; // 리플레이용 강제 리플로우
  comboDisplay.classList.add("combo-pop");
}

function hideComboUI() {
  const comboDisplay = document.getElementById("combo-display");
  comboDisplay.style.opacity = 0;
}
