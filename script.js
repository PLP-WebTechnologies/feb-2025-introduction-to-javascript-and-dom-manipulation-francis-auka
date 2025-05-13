// Change text content dynamically
const changeTextButton = document.getElementById('change-text');
const textContent = document.getElementById('text-content');

changeTextButton.addEventListener('click', () => {
  textContent.textContent = "The text has been changed dynamically!";
});

// Modify CSS styles via JavaScript
const changeStyleButton = document.getElementById('change-style');
const styleBox = document.getElementById('style-box');

changeStyleButton.addEventListener('click', () => {
  styleBox.style.backgroundColor = "lightblue";
  styleBox.style.borderColor = "blue";
  styleBox.style.color = "darkblue";
  styleBox.style.fontWeight = "bold";
});

// Add a new element dynamically
const addElementButton = document.getElementById('add-element');

addElementButton.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = "A new paragraph has been added!";
  document.body.appendChild(newElement);
});

// Remove an element dynamically
const removeElementButton = document.getElementById('remove-element');

removeElementButton.addEventListener('click', () => {
  const newElement = document.querySelector('p');
  if (newElement) {
    newElement.remove();
  } else {
    alert('No element to remove');
  }
});
