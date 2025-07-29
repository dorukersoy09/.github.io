# .github.io
this repository is for practicing and collaboration purpose 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Animated Portfolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background: linear-gradient(to right, #1e3c72, #2a5298);
      color: #fff;
      animation: fadeIn 1.5s ease;
    }

    header {
      padding: 2rem;
      text-align: center;
      background: rgba(0,0,0,0.2);
    }

    header h1 {
      font-size: 2.5rem;
      animation: slideInTop 1s ease-out;
    }

    nav {
      display: flex;
      justify-content: center;
      margin: 1rem 0;
      gap: 2rem;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      position: relative;
    }

    nav a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      height: 2px;
      width: 0;
      background: #fff;
      transition: 0.3s ease;
    }

    nav a:hover::after {
      width: 100%;
    }

    section {
      padding: 3rem 5%;
      min-height: 80vh;
      animation: fadeIn 1s ease;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      border-left: 4px solid #fff;
      padding-left: 1rem;
    }

    .template {
      background: rgba(255,255,255,0.1);
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }

    .template:hover {
      transform: translateY(-5px);
      background: rgba(255,255,255,0.15);
    }

    footer {
      text-align: center;
      padding: 1rem;
      background: rgba(0,0,0,0.2);
      font-size: 0.9rem;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideInTop {
      from { transform: translateY(-50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Your Name</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2 class="section-title">About Me</h2>
    <p>Write a short bio here. You can mention your background, skills, and what drives you.</p>
  </section>

  <section id="projects">
    <h2 class="section-title">Projects</h2>
    <div class="template">
      <h3>Project Title</h3>
      <p>Brief description of your project. You can link to GitHub or live site.</p>
    </div>
    <div class="template">
      <h3>Another Project</h3>
      <p>Another short description. Mention the technologies used.</p>
    </div>
  </section>

  <section id="contact">
    <h2 class="section-title">Contact</h2>
    <p>Email: <a href="mailto:you@example.com" style="color: #ddd;">you@example.com</a></p>
    <p>LinkedIn / GitHub / Twitter etc.</p>
  </section>

  <footer>
    &copy; 2025 Your Name. All rights reserved.
  </footer>
</body>
</html>
