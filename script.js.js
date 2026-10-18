const cardData = [
  { id: 1, text: "思いを込めて書いたよ" },
  { id: 2, text: "ぺたぺた" },
  { id: 3, text: "あかちゃん" },
  { id: 4, text: "身だしなみは大事" },
  { id: 5, text: "これからの季節に" },
  { id: 6, text: "あまり着ているイメージないかも？" },
  { id: 7, text: "王道な感じ" },
  { id: 8, text: "かっこいい感じ" },
  { id: 9, text: "スポーツマン" },
  { id: 10, text: "さゆちゃんぽい" }
];

const cardGrid = document.getElementById("cardGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalNumberBadge = document.getElementById("modalNumberBadge");
const modalText = document.getElementById("modalText");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// カード要素の動的生成
cardData.forEach((data) => {
  const wrapper = document.createElement("div");
  wrapper.className = "card-wrapper";

  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `カード ${data.id}`);

  card.innerHTML = `
    <div class="card-face card-front">
      <span class="card-number">${data.id}</span>
    </div>
    <div class="card-face card-back">
      <span class="card-back-icon">♥</span>
    </div>
  `;

  // タップ時の処理
  card.addEventListener("click", () => {
    // まだめくられていない場合のみ実行
    if (!card.classList.contains("is-flipped")) {
      card.classList.add("is-flipped");
      openModal(data.id, data.text);
    }
  });

  wrapper.appendChild(card);
  cardGrid.appendChild(wrapper);
});

// モーダルを開く関数
function openModal(id, text) {
  modalNumberBadge.textContent = `カード ${id}`;
  modalText.textContent = text;
  modalOverlay.classList.add("is-active");
  modalOverlay.setAttribute("aria-hidden", "false");
}

// モーダルを閉じる関数
function closeModal() {
  modalOverlay.classList.remove("is-active");
  modalOverlay.setAttribute("aria-hidden", "true");
}

// 閉じるボタンと背景クリックでモーダルを閉じる
modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});