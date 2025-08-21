//creating arrays in js
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];   
//combining arrays
const combined = [...fruits, ...vegetables];        
//displaying the combined array
console.log(combined); // Output: ['apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach']    
//adding more items to the combined array
combined.push('grape', 'pepper');
//displaying the updated combined array
console.log(combined); // Output: ['apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach', 'grape', 'pepper']
//removing an item from the combined array
combined.splice(2, 1); // removes 'orange'
//displaying the final combined array
console.log(combined); // Output: ['apple', 'banana', 'carrot', '   
'broccoli', 'spinach', 'grape', 'pepper']
//checking if an item exists in the combined array
const exists = combined.includes('banana'); 
//displaying the existence check result