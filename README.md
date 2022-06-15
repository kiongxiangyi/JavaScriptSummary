1. Create an empty array for the students
2. Create a function newStudent() with a prompt asking for the name of the student(https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
3. Push the new student into the array 
4. Create a button in the HTML and launch the function newStudent() on click  
5. Create a function pickStudent() that takes randomly someone from the list - Check math.floor() and math.random()
6. Create a button in the HTML and launch the function pickStudent() on click  
7. Display on the page who has been selected 
8. Fetch a random icon with the name (https://avatars.dicebear.com/api/identicon/name.svg) 
9. Now transform this fetch to use the name of the student (https://avatars.dicebear.com/api/identicon/[name].svg)  - Don't forget to encode it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
10. Now instead of storing just the name of the student let's store the student with the image as an object (e.g. {name: ..., image: .... })
11. Make sure that the student is correctly displayed when picked (name + picture)
