function Destination(location, timeOfYear, notes) {
    this.location = location;
    this.landmarks = [];
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

let place1 = new Destination('Location', 1990, "notes");

Destination.prototype.addLandmark = function (landmark) {
    this.landmarks.push(landmark);
}

place1.addLandmark("Stone Hedges");
place1.addLandmark("Unicorn Island");

console.log(place1.landmarks);
console.log(place1);

$(document).ready(function () {
    console.log("JQuery loaded properly.")
    $("form").submit(function (event) {
        event.preventDefault();
        const location = $("#location").val();
        const landmarks = $("#landmarks").val();
        const timeOfYear = $("#toy").val();
        console.log(location);
        console.log(landmarks);
        console.log(timeOfYear);
        console.log("Form submitted.")
    });
});