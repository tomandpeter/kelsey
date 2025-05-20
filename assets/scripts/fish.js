console.log('fish.js 已加载');
document.addEventListener('DOMContentLoaded', () => {
  const fish = document.getElementById('fish-container');
  if (!fish) {
    console.error('fish-container 没找到！');
    return;
  }

  fish.addEventListener('click', () => {
    alert('点到鱼了！');
  });
});
