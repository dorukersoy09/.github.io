<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spin Wheel Interface</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0f0f0f;
      color: #fff;
      text-align: center;
      padding: 2rem;
    }
    nav a {
      color: #00ffff;
      text-decoration: none;
      margin: 0 10px;
    }
    .option.active {
      font-weight: bold;
      color: #00ffcc;
    }
    #wheel {
      cursor: pointer;
      width: 100px;
      height: 100px;
      background-color: #222;
      border: 3px solid #00ffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px auto;
      font-size: 2rem;
    }
    .spin {
      animation: spin 1s linear;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .options {
      margin-top: 20px;
    }
    #commands button {
      margin: 5px;
      padding: 10px 20px;
      background-color: #00ffff;
      border: none;
      border-radius: 4px;
      color: #000;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <nav>
    <a href="">Home</a> /
    <a href=" ">P1</a> /
    <a href="#">P2</a> /
    <a href="Projects.html">Projects</a>
  </nav>

  <h1 id="title">Home</h1>
  <div id="wheel">🎯</div>

  <div class="options">
    <div class="option">Home</div>
    <div class="option">Scan</div>
    <div class="option">Console</div>
    <div class="option">Systems</div>
  </div>

  <div id="commands"></div>

  <script>
    const wheel = document.getElementById("wheel");
    const options = Array.from(document.querySelectorAll(".option"));
    const title = document.getElementById("title");
    const commands = document.getElementById("commands");

    const commandMap = {
      Home: ["Start System", "Open Logs", "Check Status"],
      Scan: ["Initiate Scan", "Deep Diagnostics", "Infrared Sweep"],
      Console: ["Show Terminal", "Run Command", "Clear Buffer"],
      Systems: ["Power Up", "Check Shields", "Restart Core"]
    };

    let index = 0;

    function updateSection(i) {
      options.forEach(opt => opt.classList.remove("active"));
      options[i].classList.add("active");
      const selected = options[i].textContent;
      title.textContent = selected;

      commands.innerHTML = "";
      commandMap[selected].forEach(cmd => {
        const btn = document.createElement("button");
        btn.textContent = cmd;
        commands.appendChild(btn);
      });
    }

    function spinWheel() {
      wheel.classList.add("spin");
      setTimeout(() => {
        wheel.classList.remove("spin");
        index = (index + 1) % options.length;
        updateSection(index);
      }, 1000);
    }

    wheel.addEventListener("click", spinWheel);

    document.addEventListener("DOMContentLoaded", function () {
      updateSection(index);

      const links = document.querySelectorAll("a");
      links.forEach(link => {
        const href = (link.getAttribute("href") || "").trim();

        if (href === "" || href === "#" || href === " ") {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "https://dorukersoy09.github.io/page.html";
          });
        }
      });
    });
  </script>

</body>
</html>
