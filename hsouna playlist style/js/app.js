// Price and benefits for each VIP level
const prices = {
    Bronze: 100,
    Silver: 200,
    Gold: 300,
    Platinum: 400
  };
  
  const benefits = {
    Bronze: "10% off on all products",
    Silver: "20% off on all products and free shipping",
    Gold: "30% off on all products, free shipping and a free gift",
    Platinum: "40% off on all products, free shipping, free gift and access to exclusive events"
  };
  
  // Update price and benefits based on selected VIP level
  const vipLevelSelect = document.getElementById("vip-level");
  const price = document.getElementById("price");
  const benefitsText = document.getElementById("benefits");
  
  vipLevelSelect.addEventListener("change", () => {
    const selectedLevel = vipLevelSelect.value;
    price.innerText = "$"+ prices[selectedLevel];
    benefitsText.innerText = benefits[selectedLevel];
  });
  