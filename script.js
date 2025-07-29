function runScan() {
  const now = new Date().toLocaleString();
  document.getElementById('scanTime').textContent = now;
  logToConsole(`Scan complete at ${now}`);
}

function runCommand(e) {
  if (e.key === 'Enter') {
    const input = e.target.value.trim();
    if (input === '') return;

    logToConsole(`> ${input}`);

    switch (input.toLowerCase()) {
      case 'scan':
        runScan();
        break;
      case 'status':
        logToConsole('SYSTEM STATUS: All systems nominal.');
        break;
      case 'shutdown':
        logToConsole('⚠️ Shutdown sequence initiated... (not really 😅)');
        break;
      default:
        logToConsole(`Unknown command: ${input}`);
    }

    e.target.value = '';
  }
}

function logToConsole(msg) {
  const log = document.getElementById('log');
  log.innerHTML += `<div>${msg}</div>`;
  log.scrollTop = log.scrollHeight;
}
