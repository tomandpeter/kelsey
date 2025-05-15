var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js';
document.head.appendChild(script);

script.onload = function() {
  Artalk.init({
    el: '#Comments',
    site: 'Kelsey 的博客',
    server: 'https://comments.kelseychen.net',
    apiPrefix: '',  // 取消默认 /api 前缀
    pageKey: window.location.pathname
  });
}

