// 等页面DOM结构加载完成后再执行
document.addEventListener("DOMContentLoaded", function() {
  // 创建一个<script>标签，加载Artalk官方托管的脚本文件
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js';

  // 把<script>标签加到页面<head>里，开始加载脚本
  document.head.appendChild(script);

  // 脚本加载完成后执行
  script.onload = function() {
    // 调用Artalk初始化函数
    Artalk.init({
      el: '#Comments',               // 评论容器对应的DOM元素ID
      site: 'Kelsey 的博客',          // 站点名称，会显示在评论区头部
      server: 'https://comments.kelseychen.net', // 你部署的Artalk后端地址
      apiPrefix: '',                 // API路径前缀，这里为空，匹配你Worker接口路径
      pageKey: window.location.pathname,  // 用当前页面路径做为评论区唯一标识，保证每个页面评论不混
      useBackendConf: false,         // 关闭自动从后端拉取配置，避免因为没实现conf接口报错
      comment: {
        fields: ['nick', 'mail', 'link', 'comment'],   // 评论表单字段顺序
        requiredFields: ['nick', 'comment']            // 必填字段，防止提交空昵称和空评论
      },
      pageSize: 10,                  // 每页显示10条评论
      lang: 'zh-CN'                 // 评论区语言设置为简体中文
    });
  }
});
