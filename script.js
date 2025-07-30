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



  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const links = document.querySelectorAll("a");

      links.forEach(link => {
        link.addEventListener("click", function (e) {
          const href = link.getAttribute("href").trim();

          if (href === "" || href === "#" || href === " ") {
            e.preventDefault(); // prevent default navigation
           window.location.href = "https://dorukersoy09.github.io/page.html";
          }
        });
      });
    });
  </script>

</html>


