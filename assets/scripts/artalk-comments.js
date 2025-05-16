document.addEventListener("DOMContentLoaded", function() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js';
  document.head.appendChild(script);

  script.onload = function() {
    Artalk.init({
      el: '#Comments',
      site: 'Kelsey 的博客',
      server: 'https://comments.kelseychen.net',
      apiPrefix: '',
      pageKey: window.location.pathname,
      useBackendConf: false,
      comment: {
        fields: ['nick', 'mail', 'link', 'comment'],
        requiredFields: ['nick', 'comment'],
      },
      pageSize: 10,
      lang: 'zh-CN'
    });
  }
});

