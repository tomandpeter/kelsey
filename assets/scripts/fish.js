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

function showQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  textBox.textContent = randomQuote;

  // 获取鱼的位置
  const fishRect = fish.getBoundingClientRect();
  const textBoxWidth = 200;

  // 定位在鱼嘴巴的位置：假设鱼嘴是鱼图片的 65% 宽度、35% 高度处
  const top = fishRect.top + fishRect.height * 0.35;
  const left = fishRect.left + fishRect.width * 0.65 - textBoxWidth / 2;

  textBox.style.top = `${top}px`;
  textBox.style.left = `${left}px`;
  textBox.style.width = `${textBoxWidth}px`;

  // 清除旧动画 class
  textBox.classList.remove('bubble-pop');
  void textBox.offsetWidth;  // 强制 reflow 重置动画
  textBox.classList.add('bubble-pop');
}

// 绑定点击和手机触摸事件
fish.addEventListener('click', showQuote);
fish.addEventListener('touchstart', showQuote);

