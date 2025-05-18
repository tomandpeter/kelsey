---
title: 小团体留言板
layout: page
---

<div id="chatBox">
  <h3>🍃 小团体留言板</h3>
  <input type="password" id="pwdInput" placeholder="🔑 输入你的密码" />
  <button onclick="loadMessages()">📥 加载留言</button>

  <div id="messages"></div>

  <textarea id="msgInput" placeholder="✏️ 写点啥..."></textarea>
  <button onclick="sendMessage()">📤 发送</button>
</div>

<link rel="stylesheet" href="/assets/styles/pm.css">
<script src="/assets/scripts/pm.js"></script>
