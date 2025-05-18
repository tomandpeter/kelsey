---
layout: page
---

<div class="pm-container">
  <h2>🔐 私密留言板</h2>

  <input type="password" id="pwdInput" placeholder="🔑 输入你的暗号" class="pm-input" />
  
  <input type="text" id="nameInput" placeholder="📝 输入你的姓名" class="pm-input" />
  
  <button onclick="loadMessages()" class="pm-button load">📥 加载留言</button>

  <div id="messages" class="pm-messages"></div>

  <textarea id="msgInput" placeholder="✏️ 写点啥..." class="pm-textarea"></textarea>
  
  <button onclick="sendMessage()" class="pm-button send">📤 发送</button>
</div>

<link rel="stylesheet" href="/assets/styles/pm.css">
<script src="/assets/scripts/pm.js"></script>
