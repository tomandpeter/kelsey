document.addEventListener('DOMContentLoaded', () => {
  const fish = document.getElementById('fish-container');
  const textBox = document.getElementById('floating-text');

  // 句子数组
  const quotes = [
    "白日依山尽，黄河入海流。",
    "To be or not to be.",
    "明月几时有，把酒问青天。",
    "Carpe diem — seize the day.",
    "路漫漫其修远兮，吾将上下而求索。",
    "Stay hungry, stay foolish.",
    "春眠不觉晓，处处闻啼鸟。"
  ];

  // 确保鱼容器存在
  if (fish) {
    fish.addEventListener('click', () => {
      // 随机挑一句
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      textBox.textContent = randomQuote;
      textBox.style.top = "50px";
      textBox.style.opacity = 1;

      // 2秒后淡出
      setTimeout(() => {
        textBox.style.top = "20px";
        textBox.style.opacity = 0;
      }, 2000);
    });
  } else {
    console.log("🐟 没找到鱼容器 #fish-container");
  }
});
