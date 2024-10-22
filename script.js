
let radius = prompt("Enter the radius of the circle:");


radius = Number(radius);


if (!isNaN(radius) && radius > 0) {

    const pie = 3.142;

    let circumference = (2 * pie * radius).toFixed(2);
    let area = (pie * radius * radius).toFixed(2);

    document.getElementById('radius').textContent = radius;
    document.getElementById('circumference').textContent = circumference;
    document.getElementById('area').textContent = area;
} else {
    alert("Please enter a valid positive number for the radius.");
}
