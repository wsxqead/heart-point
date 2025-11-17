/* ---------------------------
    ⭐ 하트 버튼 숫자 표시
--------------------------- */
function updateHeartButton() {
  const count = heartCurrency;
  const displayCount = count > 999 ? "999+" : count;
  document.getElementById("heart-count").textContent = displayCount;
}

/* ---------------------------
    ⭐ 재화 시스템
--------------------------- */
let heartCurrency = 20;
updateCurrencyUI();
updateHeartButton();

const sendButton = document.getElementById("heart-button");
const add10 = document.getElementById("add-heart-10");
const add100 = document.getElementById("add-heart-100");

function updateCurrencyUI() {
  document.getElementById("currency-amount").textContent = heartCurrency;
}

/* +10 충전 */
add10.addEventListener("click", () => {
  heartCurrency += 10;
  updateCurrencyUI();
  updateHeartButton();
  sendButton.disabled = false;
});

/* +100 충전 */
add100.addEventListener("click", () => {
  heartCurrency += 100;
  updateCurrencyUI();
  updateHeartButton();
  sendButton.disabled = false;
});

/* 하트 보내기 */
sendButton.addEventListener("click", () => {
  if (heartCurrency <= 0) return;

  heartCurrency--;
  updateCurrencyUI();
  updateHeartButton();

  createHeart();
  addCombo();

  if (heartCurrency <= 0) {
    sendButton.disabled = true;
  }
});

/* ---------------------------
    ⭐ 하트 애니메이션
--------------------------- */
function createHeart() {
  const heartContainer = document.getElementById("heart-container");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heartContainer.appendChild(heart);

  const startX = window.innerWidth / 2;
  const offsetX = (Math.random() - 0.5) * 200;
  const endX = startX + offsetX;

  const startY = window.innerHeight - 50;
  const endY = Math.random() * (window.innerHeight / 2);

  anime({
    targets: heart,
    translateX: endX - startX,
    translateY: -(startY - endY),
    scale: Math.random() * 0.5 + 0.5,
    opacity: [1, 0],
    duration: 2000,
    easing: "easeOutQuad",
    complete: () => heart.remove(),
  });
}

/* ---------------------------
    ⭐ 콤보 시스템
--------------------------- */
let comboCount = 0;
let comboTimeout = null;

function addCombo() {
  comboCount++;
  const comboDisplay = document.getElementById("combo-display");

  comboDisplay.textContent = comboCount + " Combo!";
  comboDisplay.style.opacity = 1;

  comboDisplay.classList.remove("combo-pop");
  void comboDisplay.offsetWidth;
  comboDisplay.classList.add("combo-pop");

  if (comboTimeout) clearTimeout(comboTimeout);
  comboTimeout = setTimeout(() => {
    comboCount = 0;
    comboDisplay.style.opacity = 0;
  }, 1000);
}
