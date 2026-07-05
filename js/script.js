document.getElementById("addCart").addEventListener("click", function () {
    alert("カートに追加しました！");
});

dataLayer.push({
  event: "add_to_cart",
  item_name: "Tシャツ",
  price: 3000
});