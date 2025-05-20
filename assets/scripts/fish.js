document.addEventListener('DOMContentLoaded', () => {
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

function showQuote(e) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  textBox.textContent = randomQuote;

  // 获取鱼的位置
  const fishRect = fish.getBoundingClientRect();
  const textBoxWidth = 180;

  // 定位在鱼的上方偏左（微调）
  const top = fishRect.top - 50;
  const left = fishRect.left + fishRect.width / 2 - textBoxWidth / 2;

  textBox.style.top = `${top}px`;
  textBox.style.left = `${left}px`;
  textBox.style.opacity = 1;

  if (textBox.timer) {
    clearTimeout(textBox.timer);
  }
  textBox.timer = setTimeout(() => {
    textBox.style.opacity = 0;
  }, 3000);
}

// 绑定点击和手机触摸事件
fish.addEventListener('click', showQuote);
fish.addEventListener('touchstart', showQuote);

