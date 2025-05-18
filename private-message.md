---
title: 私密留言区
layout: page
permalink: /private-message/
---
<h2>🎴 私密留言区</h2>
<p>只有输入正确密码才能查看和留言👇</p>

<input type="password" id="msg-pass" placeholder="输入密码">
<button onclick="checkPassword()">确认</button>

<div id="private-comments" style="display:none; margin-top: 2rem;">
  <div id="twikoo"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/twikoo/dist/twikoo.all.min.js"></script>
<script>
function checkPassword() {
  var pass = document.getElementById('msg-pass').value;
  if (pass === '123456') { // 这里改成你们自己的暗号
    document.getElementById('private-comments').style.display = 'block';
    twikoo.init({
      el: '#twikoo',
      envId: 'https://comments.kelseychen.net'
    });
  } else {
    alert('密码不对，拒绝访问 ✋');
  }
}
</script>
