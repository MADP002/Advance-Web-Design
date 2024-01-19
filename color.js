let darkMode = false;

function toggleColorMode() {
  darkMode = !darkMode;
  updateColor();
}

function updateColor() {
  const body = document.body;
  const button = document.querySelector('button');
  const skillsSection = document.getElementById('skills');
  const header = document.querySelector('header');

  if (darkMode) {
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    skillsSection.style.backgroundColor = '#666'; 
    header.style.backgroundColor = '#555'; 
  } else {
    body.style.backgroundColor = '#f0f0f0';
    body.style.color = '#000';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    skillsSection.style.backgroundColor = '#ccc';
    header.style.backgroundColor = '#333'; 
  }
}
