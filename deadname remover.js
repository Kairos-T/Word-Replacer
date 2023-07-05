// Define the function to replace deadnames
function removeDeadnames() {
  const elements = document.getElementsByTagName('*');

  // Replace deadnames within text nodes
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    for (let j = 0; j < element.childNodes.length; j++) {
      const node = element.childNodes[j];
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/deadname/gi, 'newname');
      }
    }
  }

  // Replace deadnames within input fields
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.type === 'text' || input.type === 'textarea') {
      input.value = input.value.replace(/deadname/gi, 'newname');
    }
  }
}

// Run the removeDeadnames function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  removeDeadnames();
});
