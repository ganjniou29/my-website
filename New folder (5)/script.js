// Function to change the background color
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#f0f0f0', '#ffeb3b', '#8e44ad', '#3498db', '#2ecc71'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
