document.getElementById("title").innerText = "WELCOME TO THE NEWEST BRANCH OF THE JS HOTEL!"
document.getElementById("slogan").innerText = "Where raspberry pi is complimentary at every meal!"

let roomsAvailable = [313, 314, 315, 316, 317];

let dropDownRooms = "<select id = rooms>"
for (let i = 0; i < roomsAvailable.length; i++) {
    dropDownRooms = dropDownRooms + `<option value = "${roomsAvailable[i]}">${roomsAvailable[i]}</option>`
}
dropDownRooms = dropDownRooms + "</select>"

document.getElementById("rooms").innerHTML = dropDownRooms;

function checkIn() {
    let newVar = document.getElementById("rooms").value
    localStorage.setItem("CheckedInRooms", newVar)
}
