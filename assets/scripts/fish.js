const fish = document.querySelector('#fish-container img');
const textBox = document.getElementById('floating-text');

const quotes = [
  "春江花月夜",
  "明月几时有",
  "举头望明月",
  "低头思故乡",
  "月落乌啼霜满天",
  "江枫渔火对愁眠",
  "无边落木萧萧下",
  "不尽长江滚滚来"
];

fish.addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  textBox.textContent = randomQuote;

  const fishRect = fish.getBoundingClientRect();
  const textBoxWidth = 200;  // 你可以根据需要调整宽度

  // 诗句位置：鱼的左上方偏上一点（鱼嘴左侧上方）
  const top = fishRect.top - 30;  // 向上偏移30px
  const left = fishRect.left - textBoxWidth - 10; // 向左偏移，避免遮挡鱼嘴

  textBox.style.top = `${top}px`;
  textBox.style.left = `${left}px`;
  textBox.style.width = `${textBoxWidth}px`;

  textBox.classList.remove('bubble-pop', 'show');
  void textBox.offsetWidth;  // 触发重绘，确保动画可重播
  textBox.classList.add('show', 'bubble-pop');

  textBox.addEventListener('animationend', () => {
    textBox.classList.remove('bubble-pop', 'show');
  }, { once: true });
});


fish.addEventListener('click', showQuote);
fish.addEventListener('touchstart', showQuote);
