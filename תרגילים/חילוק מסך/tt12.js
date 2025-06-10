const r = document.getElementById("btnRight");
const l = document.getElementById("btnLeft");

[r, l].forEach(btn => btn.onclick = () => {
  [r.textContent, l.textContent] = [l.textContent, r.textContent];
  r.classList.toggle("blue");
  r.classList.toggle("green");
  l.classList.toggle("blue");
  l.classList.toggle("green");
});
