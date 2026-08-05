function updateCopyrightYear() {
  var year = new Date().getFullYear();
  document.querySelectorAll('.jd-copyright').forEach(function (el) {
    el.innerHTML = el.innerHTML.replace(/©\s*\d{4}/, '© ' + year);
  });
  document.querySelectorAll('.jd-copyright-year').forEach(function (el) {
    el.textContent = year;
  });
}

function includeHTML() {
  let elements = document.querySelectorAll('[data-include]');
  elements.forEach(function (element) {
    let file = element.getAttribute('data-include');
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          element.innerHTML = data;
          updateCopyrightYear();
        })
        .catch(error => console.error('Error loading file:', error));
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  includeHTML();
  updateCopyrightYear();
});
