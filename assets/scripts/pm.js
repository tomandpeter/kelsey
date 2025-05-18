<script>
  const apiBase = "https://kelsey-private-message.medprober.workers.dev";

  async function loadMessages() {
    const pwd = document.getElementById("pwdInput").value;
    if (!pwd) return alert("请输入密码！");
    const res = await fetch(`${apiBase}/messages?pwd=${encodeURIComponent(pwd)}`);
    const data = await res.json();
    const msgBox = document.getElementById("messages");
    msgBox.innerHTML = "";
    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "msg-item";
      div.innerHTML = `<b>留言：</b>${item.message}<br><small>${item.time}</small>`;
      msgBox.appendChild(div);
    });
  }

  async function sendMessage() {
    const pwd = document.getElementById("pwdInput").value;
    const msg = document.getElementById("msgInput").value;
    if (!pwd || !msg) return alert("密码和留言都不能为空！");
    await fetch(`${apiBase}/messages?pwd=${encodeURIComponent(pwd)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });
    document.getElementById("msgInput").value = "";
    loadMessages();
  }
</script>
