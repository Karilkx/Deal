// Function to make "No" buttons multiply
function multiplyNo() {
    const noContainer = document.getElementById("no-buttons-container");

    // Create a new No button
    const newNo = document.createElement("button");
    newNo.classList.add("no-button");
    newNo.innerText = "No";

    // Random positioning so the buttons scatter
    newNo.style.left = Math.random() * 80 + "vw";
    newNo.style.top = Math.random() * 50 + "vh";

    // Add function so clicking a new No button also creates more
    newNo.onclick = multiplyNo;

    // Append to the container
    noContainer.appendChild(newNo);
}

// Function when the user clicks "Yes"
function acceptLove() {
    document.body.classList.add("colorful"); // Changes background color
    document.getElementById("question").innerText = "DAHIL JAN HART HART KA SAKIN ❤️";
}
