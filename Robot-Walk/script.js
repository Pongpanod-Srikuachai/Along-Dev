function runCommands() {
  const commands = document.getElementById("commands").value.trim().toUpperCase();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const output = document.getElementById("output");

  if (!commands) {
    alert("กรุณาป้อนคำสั่งก่อน");
    return;
  }

  canvas.style.display = "block";
  output.style.display = "block";

  // ล้าง canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // เริ่มต้นที่ (0,0) กลาง canvas
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let dir = 0; // 0=บน,1=ขวา,2=ล่าง,3=ซ้าย

  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let c of commands) {
    if (c === "L") {
      dir = (dir + 3) % 4;
    } else if (c === "R") {
      dir = (dir + 1) % 4;
    } else if (c === "W") {
      if (dir === 0) y -= 20;
      else if (dir === 1) x += 20;
      else if (dir === 2) y += 20;
      else if (dir === 3) x -= 20;

      ctx.lineTo(x, y);
    }
  }

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();

  // แสดงตำแหน่งสุดท้าย
  output.textContent = `ตำแหน่งสุดท้าย: (${x - canvas.width/2}, ${-(y - canvas.height/2)})`;
}
