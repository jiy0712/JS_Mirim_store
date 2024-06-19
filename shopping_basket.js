const table = document.querySelector("tbody");
const totalMoney = document.querySelector(".totalMoney");

const Dummy = [];

const deleteGoods = (index) => {
  if (confirm("물품을 삭제하시겠습니까?")) {
    Dummy.splice(index, 1);
    localStorage.setItem("shoppingBasket", JSON.stringify(Dummy));
    init();
  }
};

const addGoods = (index) => {
  Dummy[index].count++;
  localStorage.setItem("shoppingBasket", JSON.stringify(Dummy));
  init();
};

const subtractGoods = (index) => {
  if (Dummy[index].count - 1 == 0) {
    deleteGoods(index);
  } else {
    Dummy[index].count--;
    localStorage.setItem("shoppingBasket", JSON.stringify(Dummy));
    init();
  }
};

const initGoods = ({ image, name, countNum, money, index }) => {
  const tr = document.createElement("tr");
  tr.className = "goodsinfo";
  const goodsTd = document.createElement("td");
  const countTd = document.createElement("td");
  const moneyTd = document.createElement("td");
  const selectTd = document.createElement("td");
  const line = document.createElement("div");
  line.className = "goodsLine";

  const goodsWrapper = document.createElement("div");
  goodsWrapper.className = "goods";
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "imgWrap";
  const goodsImage = document.createElement("img");
  const goodsName = document.createElement("p");
  goodsImage.src = image;
  goodsName.innerText = name;
  imageWrapper.appendChild(goodsImage);
  goodsWrapper.appendChild(imageWrapper);
  goodsWrapper.appendChild(goodsName);
  goodsTd.appendChild(goodsWrapper);

  const countWrapper = document.createElement("div");
  countWrapper.className = "count";
  const countButtonWrapper = document.createElement("div");
  countButtonWrapper.className = "countBtnWrap";
  const countPlusBtn = document.createElement("button");
  const countMinusBtn = document.createElement("button");
  const countView = document.createElement("p");
  countView.innerText = countNum;
  countPlusBtn.innerText = "+";
  countMinusBtn.innerText = "-";
  countPlusBtn.addEventListener("click", () => addGoods(index));
  countMinusBtn.addEventListener("click", () => subtractGoods(index));
  countButtonWrapper.appendChild(countMinusBtn);
  countButtonWrapper.appendChild(countView);
  countButtonWrapper.appendChild(countPlusBtn);
  countWrapper.appendChild(countButtonWrapper);
  countTd.appendChild(countWrapper);

  const moneyWrapper = document.createElement("div");
  moneyWrapper.className = "money";
  const moneyView = document.createElement("p");
  moneyView.innerText = `${(money * countNum)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
  moneyWrapper.appendChild(moneyView);
  moneyTd.appendChild(moneyWrapper);
  money = money * countNum + Number(totalMoney.innerText);
  totalMoney.innerText = money;

  const selectWrapper = document.createElement("div");
  selectWrapper.className = "select";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.className = "deleteBtn";
  deleteBtn.addEventListener("click", () => deleteGoods(index));
  selectWrapper.appendChild(deleteBtn);
  selectTd.appendChild(selectWrapper);

  tr.appendChild(goodsTd);
  tr.appendChild(countTd);
  tr.appendChild(moneyTd);
  tr.appendChild(selectTd);
  table.appendChild(tr);
  table.appendChild(line);
};

const init = () => {
  const goods = document.querySelectorAll(".goodsinfo");
  const goodslines = document.querySelectorAll(".goodsLine");

  goods.forEach((element) => {
    element.remove();
  });
  goodslines.forEach((element) => {
    element.remove();
  });

  console.log("dfdffd");
  totalMoney.innerText = 0;
  Dummy.map((item, idx) =>
    initGoods({
      image: item.imageUrl,
      name: item.name,
      countNum: item.count,
      money: item.money,
      index: idx,
    })
  );
};

const getValue = () => {
  const value = JSON.parse(localStorage.getItem("shoppingBasket"));
  console.log(value);
  value.map((item) => Dummy.push(item));
  init();
};

getValue();
