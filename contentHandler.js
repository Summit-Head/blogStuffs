const divsData = Array.from(document.querySelectorAll('div')).map(div => ({
  text: div.textContent.trim(),
  html: div.innerHTML,
  className: div.className,
  id: div.id
}));
