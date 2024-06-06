// 3D Spline Begin
import { Application } from "https://cdn.skypack.dev/@splinetool/runtime";
const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/6E-m9MtHDNrpdA9L/scene.splinecode");
// 3D Spline End

(function () {
  function iv(a) {
    if (typeof a.getBoundingClientRect !== "function") {
      return false;
    }
    var b = a.getBoundingClientRect();
    return (
      b.bottom + 50 >= 0 &&
      b.right + 50 >= 0 &&
      b.top - 50 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      b.left - 50 <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function ll() {
    var elements = document.querySelectorAll(
      ".animation-left:not(.lineUp-animation)",
    );
    elements.forEach(function (element) {
      if (iv(element)) {
        element.classList.add("lineUp-animation");
      }
    });
    if (elements.length > 0) {
      requestAnimationFrame(ll);
    }
  }
  requestAnimationFrame(ll);
})();
