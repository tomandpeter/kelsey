var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js';
document.head.appendChild(script);

script.onload = function() {
  Artalk.init({
    el: '#Comments',
    site: 'Kelsey 的博客',
    server: 'https://comments.kelseychen.net',
    apiPrefix: '',  // 不用带 /api，Worker 里都直接对路由做了兼容
    pageKey: window.location.pathname,
    useBackendConf: true  // 保持开启，worker 里有 /api/v2/conf 响应
  });
}
