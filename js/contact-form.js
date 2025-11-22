const boxes = document.querySelectorAll('.van-select');
const selectedText = document.getElementById('selected');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove 'selected' from all boxes
        boxes.forEach(b => b.classList.remove('selected'));

        // Add 'selected' to clicked box
        box.classList.add('selected');

        // Update text
        selectedText.textContent = box.dataset.value;
    });
});
