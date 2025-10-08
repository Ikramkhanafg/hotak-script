function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

const vidLinks = document.getElementById("vidLinks");

if (window.matchMedia("(max-width: 768px)").matches) {  // agar screen width 768 px se kam hu to
  console.log("Mobile view");
  vidLinks.innerHTML = `
  <div class="top-vid">
    <li><a href="html.html">HTML</a></li>
    <li><a href="css.html">CSS</a></li>
    <li><a href="javascript.html">JavaScript</a></li>
    <li><a href="python.html">Python</a></li>
  </div>
  <br><br>
  <div class="bottom-vid">
    <li><a href="networking.html">Networking</a></li>
    <li><a href="ethical.html">Ethical Hacking</a></li>
    <li><a href="cyber.html">Cyber Security</a></li>
  </div>
  `;
} else {
  console.log("Desktop view");
}
