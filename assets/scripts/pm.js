const apiBase = "https://msg.kelseychen.net";

async function loadMessages() {
  const pwd = document.getElementById("pwdInput").value.trim();
  if (!pwd) return alert("请输入密码！");

  try {
    const res = await fetch(`${apiBase}/messages?pwd=${encodeURIComponent(pwd)}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });
    if (!res.ok) throw new Error(`获取留言失败：${res.status}`);

    const data = await res.json();
    const msgBox = document.getElementById("messages");
    msgBox.innerHTML = "";

    if (!Array.isArray(data) || data.length === 0) {
      msgBox.innerHTML = "<p>没有留言哦。</p>";
      return;
    }

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "msg-item";
      div.innerHTML = `<b>${escapeHtml(item.name)} 说：</b>${escapeHtml(item.message)}<br><small>${escapeHtml(item.time)}</small>`;
      msgBox.appendChild(div);
    });
  } catch (err) {
    alert(err.message);
  }
}

async function sendMessage() {
  const pwd = document.getElementById("pwdInput").value.trim();
  const name = document.getElementById("nameInput").value.trim();
  const msg = document.getElementById("msgInput").value.trim();

  if (!pwd || !name || !msg) return alert("密码、姓名和留言都不能为空！");

  try {
    const res = await fetch(`${apiBase}/messages?pwd=${encodeURIComponent(pwd)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, message: msg })
    });
    if (!res.ok) throw new Error(`发送留言失败：${res.status}`);

    document.getElementById("msgInput").value = "";
    loadMessages();
  } catch (err) {
    alert(err.message);
  }
}

// 简单转义函数，防止 XSS 攻击
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
