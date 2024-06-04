document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    const contactTableBody = document.querySelector('#contactTable tbody');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Create a new row and cells
        const newRow = document.createElement('tr');
        const nameCell = document.createElement('td');
        const phoneCell = document.createElement('td');

        // Set the text content of the cells
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Append cells to the row
        newRow.appendChild(nameCell);
        newRow.appendChild(phoneCell);

        // Append the row to the table body
        contactTableBody.appendChild(newRow);

        // Reset form fields
        contactForm.reset();
    });
});
