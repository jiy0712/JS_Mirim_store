const count = document.querySelector("#quantity");
const name = document.querySelector(".name").innerText;
const price = document.querySelector("#가격").innerText;
const img = document.querySelector("#main-img");

$(function () {
  var $firstMenu = $(".nav_select"),
    $header = $("header");

  $firstMenu
    .mouseenter(function () {
      $header.stop().animate({ height: "310px" });
    })
    .mouseleave(function () {
      $header.stop().animate({ height: "140px" });
    });
});

function calculateTotal() {
  // 수량 가져오기
  var quantity = document.getElementById("quantity").value;

  // 고정된 상품 가격
  var fixedPrice = 2000;

  // 총 상품 금액 계산
  var total = quantity * fixedPrice;

  // 결과 업데이트
  document.getElementById("price").innerText = total;
}

//한 버튼을 누르면 나머지 두 버튼의 스타일 변경
function changeBorderColor(clickedButton) {
  var buttons = document.querySelectorAll(".click");

  // Remove 'active' class from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  clickedButton.classList.add("active");
}

// 버튼을 클릭하면 해당 기능을 수행하는 함수들
function showReviewForm() {
  hideAllForms();
  document.getElementById("reviewForm").style.display = "block";
}

function showOtherProducts() {
  hideAllForms();
  document.getElementById("otherProducts").style.display = "block";
}

function showInquiryForm() {
  hideAllForms();
  document.getElementById("inquiryForm").style.display = "block";
}

// 모든 폼을 숨기는 함수
function hideAllForms() {
  document.getElementById("reviewForm").style.display = "none";
  document.getElementById("otherProducts").style.display = "none";
  document.getElementById("inquiryForm").style.display = "none";
}

// 후기 제출 함수
function submitReview() {
  // 여기에 후기 제출에 관한 로직 추가
  alert("후기가 제출되었습니다.");
}

// 문의 제출 함수
function submitInquiry() {
  // 여기에 문의 제출에 관한 로직 추가
  alert("문의가 제출되었습니다.");
}

function getCount(count) {
  switch (count) {
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    default:
      return 0;
  }
}

function addShoppingBasket() {
  console.log("fdff", count);
  if (getCount(count.value) === 0) {
    alert("갯수를 정확하게 입력해주세요!");
    return;
  }
  if (
    window.confirm(
      `장바구니에 담으시겠습니까?\n상품 이름 : ${name} \n상품 가격 : ${price} / 상품 갯수 : ${getCount(
        count.value
      )}개`
    )
  ) {
    const imgRegEx = /\/\/[^\/]+\/(.+)$/;
    let imgUrl = img.src.match(imgRegEx);
    console.log(imgUrl);

    const goodsInfo = {
      imageUrl: imgUrl ? imgUrl[1] : null,
      count: getCount(count.value),
      money: Number(price.replace(/[^0-9]+/g, "")),
      name: name,
    };
    console.log(goodsInfo);
    let value = JSON.parse(localStorage.getItem("shoppingBasket"));
    if (value) {
      let cpList = [...value];
      cpList.push(goodsInfo);

      console.log("dfdf", value, cpList);
      localStorage.setItem("shoppingBasket", JSON.stringify(cpList));
    } else {
      value = [];
      value.push(goodsInfo);
      console.log("dfdf", value);
      localStorage.setItem("shoppingBasket", JSON.stringify(value));
    }
  }
}
