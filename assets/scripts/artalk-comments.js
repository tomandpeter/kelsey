document.addEventListener("DOMContentLoaded", function() {
  // 动态加载 Artalk.js 脚本
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js';
  document.head.appendChild(script);

  script.onload = function() {
    // 初始化 Artalk
    Artalk.init({
      el: '#Comments',
      site: 'Kelsey 的博客',
      server: 'https://comments.kelseychen.net',
      apiPrefix: '',              // 取消默认 /api 前缀
      pageKey: window.location.pathname,
      useBackendConf: false,      // 不用后端配置，走前端自带默认
      comment: {
        // 表单字段配置
        fields: ['nick', 'mail', 'link', 'comment'],
        requiredFields: ['nick', 'comment'],
      },
      pageSize: 10,               // 每页显示 10 条
      lang: 'zh-CN'               // 强制中文界面
    });
  }
});
