// function Destination(location, timeOfYear, notes) {
//     this.location = location;
//     this.landmarks = [];
//     this.timeOfYear = timeOfYear;
//     this.notes = notes;
// }

// Destination.prototype.addLandmark = function (landmark) {
//     this.landmarks.push(landmark);
// }

// function DestList() {
//     this.list = {};
// }

// DestList.prototype.addDestination = function (destination) {
//     this.list[destination] = destination;
// }

// let place1 = new Destination(location, landmarks, timeOfYear);
// let destList = new DestList();

let list = [];

function addDestination(location, date, landmarks, notes) {
    list.push({ "location": location, "date": date, "landmarks": [landmarks], "notes": notes })
    console.log(list);
}

$(document).ready(function () {
    console.log("JQuery loaded properly.")
    $("form").submit(function (event) {
        event.preventDefault();
        let location = $("input#location").val();
        let landmarks = $("input#landmarks").val();
        let date = $("input#toy").val();
        let notes = $("textarea#notes").val();

        addDestination(location, landmarks, date, notes)
        //destList.addDestination(place1);

        list.forEach(element => {
            $("div#result").append("<h1>" + JSON.stringify(element.location) + "</h1>" + "<p>" + JSON.stringify(element.date) + "</p>" + "<p>" + JSON.stringify(element.landmarks) + "</p>" + "<p>" + JSON.stringify(element.notes) + "</p>")
        });

        console.log("Form submitted.")
    });
});