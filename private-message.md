---
title: 小团体留言板
layout: page
---

<div id="chatBox" style="max-width:600px; margin:auto; font-family: Arial, sans-serif;">
  <h3>🍃 小团体留言板</h3>
  
  <input type="password" id="pwdInput" placeholder="🔑 输入你的密码" style="width:100%; padding:8px; margin:8px 0; box-sizing: border-box;" />
  
  <input type="text" id="nameInput" placeholder="📝 输入你的姓名" style="width:100%; padding:8px; margin:8px 0; box-sizing: border-box;" />
  
  <button onclick="loadMessages()" style="width:100%; padding:10px; margin-bottom:10px; cursor:pointer;">📥 加载留言</button>

  <div id="messages" style="border:1px solid #ddd; min-height:150px; padding:10px; background:#fafafa; overflow-y:auto;"></div>

  <textarea id="msgInput" placeholder="✏️ 写点啥..." style="width:100%; height:100px; margin-top:10px; padding:8px; box-sizing: border-box;"></textarea>
  
  <button onclick="sendMessage()" style="width:100%; padding:10px; margin-top:10px; cursor:pointer;">📤 发送</button>
</div>

<link rel="stylesheet" href="/assets/styles/pm.css">
<script src="/assets/scripts/pm.js"></script>


