const apiBase = "https://msg.kelseychen.net";

// 加载留言
async function loadMessages() {
  const pwd = document.getElementById("pwdInput").value.trim();
  if (!pwd) return alert("请输入密码！");

  try {
    const res = await fetch(`${apiBase}/messages?pwd=${encodeURIComponent(pwd)}`, {
      method: "GET",
      headers: { "Accept": "application/json" }
    });

    if (!res.ok) throw new Error(`获取留言失败：${res.status}`);

    const data = await res.json();
    const msgBox = document.getElementById("messages");
    msgBox.innerHTML = "";

    if (!Array.isArray(data) || data.length === 0) {
      msgBox.innerHTML = "<p>🍃 这里还没有留言，快来留个言吧。</p>";
      return;
    }

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "msg-item";
      div.innerHTML = `<b>留言：</b>${escapeHtml(item.message)}<br><small>${formatTime(item.time)}</small>`;
      msgBox.appendChild(div);
    });
  } catch (err) {
    alert(err.message);
  }
}

// 发送留言
async function sendMessage() {
  const pwd = document.getElementById("pwdInput").value.trim();
  const msg = document.getElementById("msgInput").value.trim();
  if (!pwd || !msg) return alert("密码和留言都不能为空！");

  try {
    const res = await fetch(`${apiBase}/messages?pwd=${encodeURIComponent(pwd)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });

    if (!res.ok) throw new Error(`发送留言失败：${res.status}`);

    document.getElementById("msgInput").value = "";
    loadMessages();
  } catch (err) {
    alert(err.message);
  }
}

// 防 XSS 转义
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 时间格式化
function formatTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString();
}
