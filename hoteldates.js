document.getElementById("header").innerText = "Welcome to the CareerDevs Hotel!"
document.getElementById("slogan").innerText = "Code Now, Rest Never"
document.getElementById("instructions").innerText = "Please input the dates you would like to stay and the room number."

let roomsAvailable = [101, 102, 103, 104];

let dropdown = "<select>"
for (let i = 0; i < roomsAvailable.length; i++) {
    dropdown = dropdown + `<option value = "${roomsAvailable[i]}">${roomsAvailable[i]}</option>`
}
    dropdown=dropdown + "</select>"
    document.getElementById("dropdown").innerHTML = dropdown;
    