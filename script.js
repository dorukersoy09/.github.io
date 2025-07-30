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
  <meta charset="UTF-8" />
  <title>Auto Redirect on Select</title>
</head>
<body>

  <h2>Select a Page:</h2>
  <select id="options" onchange="checkSelection()">
    <option value="">-- Select an Option --</option>
    <option value="page1">Page 1</option>
    <option value="page2">Page 2</option>
  </select>

  <script>
    function checkSelection() {
      const selected = document.getElementById("options").value;
      if (selected === "") {
        window.location.href = "page.html"; // Redirect to empty.html if no option chosen
      } else {
        window.location.href = selected + ".html"; // Redirect to selected page (like page1.html)
      }
    }
  </script>

</body>
</html>

