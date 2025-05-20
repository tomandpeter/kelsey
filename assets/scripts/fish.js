const fish = document.querySelector('.fish');
const textBox = document.getElementById('floating-text');

const quotes = [
  "白日依山尽，黄河入海流。",
  "To be or not to be.",
  "明月几时有，把酒问青天。",
  "Carpe diem — seize the day.",
  "路漫漫其修远兮，吾将上下而求索。",
  "Stay hungry, stay foolish.",
  "春眠不觉晓，处处闻啼鸟。"
];

function showQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  textBox.textContent = randomQuote;

  const fishRect = fish.getBoundingClientRect();
  const textBoxWidth = 200;

  // 鱼嘴在鱼左边缘，冒泡泡位置设为左边缘向左偏20px
  const top = fishRect.top + fishRect.height * 0.4;
  const left = fishRect.left - textBoxWidth - 20;  // 向左偏20px，显示在鱼嘴左边

  textBox.style.top = `${top}px`;
  textBox.style.left = `${left}px`;
  textBox.style.width = `${textBoxWidth}px`;

  textBox.classList.remove('bubble-pop');
  void textBox.offsetWidth;  // 触发重绘，重置动画
  textBox.classList.add('bubble-pop');
}

fish.addEventListener('click', showQuote);
fish.addEventListener('touchstart', showQuote);
