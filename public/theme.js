// Sets the colour theme before the page is drawn: the visitor's own choice (the button in the
// header), or else the system's. A file of its own, so the Content-Security-Policy needs no inline script.
(function () {
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  function chosen() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }
  function apply() {
    var theme = chosen();
    root.dataset.theme = theme === 'light' || theme === 'dark' ? theme : (media.matches ? 'dark' : 'light');
  }
  apply();
  media.addEventListener('change', function () { if (!chosen()) apply(); });
})();
