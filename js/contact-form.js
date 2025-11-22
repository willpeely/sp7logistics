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

const form = document.querySelector('.booking-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('/send-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const text = await res.text();
    alert(text); 
    form.reset();
  } catch (err) {
    console.error(err);
    alert('Error sending email.');
  }
});
