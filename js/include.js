document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});

function includeHTML() {
  let elements = document.querySelectorAll('[data-include]');
  elements.forEach(function (element) {
    let file = element.getAttribute('data-include');
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          element.innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
    }
  });
}

window.addEventListener('DOMContentLoaded', includeHTML);
