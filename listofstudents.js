let newstudentNames = [];


function addStudentName() {
    let oldArrayNames = JSON.parse(localStorage.getItem('sNames'));
    newstudentNames.push(document.getElementById("name").value)

    let studentNames = oldArrayNames.concat(newstudentNames);
    document.getElementById("name").value = "";
    
    let JSONNames = JSON.stringify(studentNames)

    localStorage.setItem("sNames", JSONNames);

    let arrayNames = JSON.parse(localStorage.getItem('sNames'));

    let list = "<ul style='list-style-type:none'>"
    for (let i = 0; i < arrayNames.length; i++) {
        list = list + `<li>${arrayNames[i]}</li>`
    }
        list = list + "</ul>"
        document.getElementById("listOfNames").innerHTML = list;
    

}


