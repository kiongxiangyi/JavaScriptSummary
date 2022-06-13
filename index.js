/*
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
12. Save the list of students in the LocalStorage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
13. Check if the list exists and use it on load
*/

//HERE
//1
const students = [];
//2
const newStudent = () => {
    const student = prompt("What is the name of the student?");
    //console.log(students);
    //8
    fetch(`https://avatars.dicebear.com/api/identicon/${encodeURIComponent(student)}.svg`) //9: replace space as %20 for example
      .then((response) => response.text())
      //3,10
      .then((image) => students.push({ student, image }));
  };
//5
const pickStudent = () => {
    const studentIndex = Math.floor(Math.random() * students.length);
    return students[studentIndex];
    console.log(students[studentIndex]);
};

//4
document.querySelector(".addStudent").addEventListener("click", function () {
    newStudent();
});
//6
document.querySelector(".pickStudent").addEventListener("click", function () {
    //console.log(pickStudent());
    const pickedStudent = pickStudent(); 
    //console.table(pickedStudent);
    //7
    if (students.length > 0) { // === check type and value, == check value but not type
        //11
        document.getElementById("result").innerHTML = `${pickedStudent.student} image ${pickedStudent.image}`;
    } else {
        document.getElementById("result").innerHTML = "Class is empty";
    }

});

