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


// Spin on click
wheel.addEventListener("click", spinWheel);

// Init
updateSection(index);

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Link Checker Example</title>
  <style>
    nav a {
      margin-right: 10px;
      text-decoration: none;
      color: #0077cc;
    }
    nav a:hover {
      color: #005599;
    }
  </style>
</head>
<body>

  <nav>
    <a href="">Home</a> /
    <a href=" ">P1</a> /
    <a href="#">P2</a> /
    <a href="projects.html">Projects</a>
  </nav>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const links = document.querySelectorAll("a");

      links.forEach(link => {
        link.addEventListener("click", function (e) {
          const href = link.getAttribute("href").trim();

          if (href === "" || href === "#" || href === " ") {
            e.preventDefault(); // prevent default navigation
            window.location.href = "page.html"; // redirect
          }
        });
      });
    });
  </script>

</body>
</html>


