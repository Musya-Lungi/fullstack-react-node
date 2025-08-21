// The Document Object Model is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node is an object representing a part of the document like elements , attributes and text.

// the key DOM concepts in js :
// 1. accessing elements
// 2. changing content
// 3. changing style
// 4. Handling events
// 5. creating and removing elements
// 

const accessingElements = () => {
  // Accessing elements can be done using methods like getElementById, getElementsByClassName, querySelector, etc.
  const elementById = document.getElementById('myElement');
  const elementsByClass = document.getElementsByClassName('myClass');
  const firstElement = document.querySelector('.myClass');
  
  console.log(elementById, elementsByClass, firstElement);
}   

const changingContent = () => {
  // Changing the content of an element can be done using innerHTML, textContent, or other properties.
  const element = document.getElementById('myElement');
  element.innerHTML = '<strong>New Content</strong>';
  element.textContent = 'Just text content';
  
  console.log(element.innerHTML, element.textContent);
}   

const changingStyle = () => {
  // Changing the style of an element can be done using the style property.
  const element = document.getElementById('myElement');
  element.style.color = 'blue';
  element.style.backgroundColor = 'lightgray';
  
  console.log(element.style.color, element.style.backgroundColor);
}   
const handlingEvents = () => {
  // Handling events can be done using addEventListener or directly assigning to onEvent properties.
  const button = document.getElementById('myButton');
  
  button.addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  // Alternatively:
  // button.onclick = () => alert('Button clicked!');
}
const creatingRemovingElements = () => {    
    // Creating a new element can be done using createElement, and removing can be done using removeChild or remove.
    const newElement = document.createElement('div');
    newElement.textContent = 'I am a new element';
    document.body.appendChild(newElement);
    
    // To remove the element
    newElement.remove();
    
    console.log('New element created and removed');
    }       
// Example usage
accessingElements();
changingContent();
changingStyle();
handlingEvents();
creatingRemovingElements();     
// Note: Make sure to run this code in an environment where the DOM is available, like a web browser.
// This code is meant to be run in a browser context where the DOM is accessible.
// It won't work in a Node.js environment or any non-browser context.
// You can test this code by creating an HTML file and linking it to this script, or by running it in the browser console.
// Ensure you have elements with IDs and classes used in the code for it to work properly.  
