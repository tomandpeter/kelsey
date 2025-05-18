---
title: 私密留言板
layout: page
---

<div style="max-width: 600px; margin: 40px auto; font-family: 'Arial', sans-serif; text-align: center;">

  <h2 style="margin-bottom: 20px; font-size: 28px;">🔐 私密留言板</h2>

  <input type="password" id="pwdInput" placeholder="🔑 输入你的密码" style="width:100%; padding:10px; margin:8px 0; box-sizing: border-box; border:1px solid #ccc; border-radius:5px;" />
  
  <input type="text" id="nameInput" placeholder="📝 输入你的姓名" style="width:100%; padding:10px; margin:8px 0; box-sizing: border-box; border:1px solid #ccc; border-radius:5px;" />
  
  <button onclick="loadMessages()" style="width:100%; padding:12px; margin-bottom:10px; cursor:pointer; background:#3498db; color:white; border:none; border-radius:5px;">📥 加载留言</button>

  <div id="messages" style="border:1px solid #ddd; min-height:200px; max-height:300px; padding:10px; background:#fafafa; overflow-y:auto; text-align:left; border-radius:5px; margin-bottom:10px;"></div>

  <textarea id="msgInput" placeholder="✏️ 写点啥..." style="width:100%; height:100px; padding:10px; box-sizing: border-box; border:1px solid #ccc; border-radius:5px; margin-bottom:10px;"></textarea>
  
  <button onclick="sendMessage()" style="width:100%; padding:12px; cursor:pointer; background:#2ecc71; color:white; border:none; border-radius:5px;">📤 发送</button>

</div>

<link rel="stylesheet" href="/assets/styles/pm.css">
<script src="/assets/scripts/pm.js"></script>
