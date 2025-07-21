let students = [
    { name: "Harini", age: 20 },
    { name: "Grishma", age: 24 },
    { name: "Haritha", age: 23 }

];
function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((students, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}.${students.name}-Age:${students.age}`;
        list.appendChild(li);

    });
}
function sortByName() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    displayStudents();
}
function sortByAge() {
    students.sort((a, b) => a.age - b.age);
    displayStudents();
}