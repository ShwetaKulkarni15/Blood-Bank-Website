// Sample recipient data
let recipients = [];

// Function to add a new recipient
function addRecipient(RecipientName, RecipientAge, BloodType, Contact) {
    recipients.push({ RecipientName, RecipientAge, BloodType, Contact });
    renderRecipients(); // Call renderRecipients after adding a new recipient
}

// Function to delete a recipient
function deleteRecipient(index) {
    recipients.splice(index, 1);
    renderRecipients();
}

// Function to edit a recipient
function editRecipient(index) {
    const modal = document.getElementById("editRecipientModal");
    const span = document.getElementsByClassName("close")[0];
    const newNameInput = document.getElementById("NewRecipientName");
    const newAgeInput = document.getElementById("newRecipientAge");
    const newBloodTypeInput = document.getElementById("newRecipientBloodType");
    const newContactInput = document.getElementById("newRecipientContact");

    // Populate input fields with recipient details
    newNameInput.value = recipients[index].RecipientName;
    newAgeInput.value = recipients[index].RecipientAge;
    newBloodTypeInput.value = recipients[index].BloodType;
    newContactInput.value = recipients[index].Contact;

    modal.style.display = "block";

    // Close the modal when the user clicks on the close button
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Save the changes when the user clicks the "Save Changes" button
    const saveChangesBtn = document.getElementById("saveChangesBtn");
    saveChangesBtn.onclick = function() {
        const newName = newNameInput.value;
        const newAge = newAgeInput.value;
        const newBloodType = newBloodTypeInput.value;
        const newContact = newContactInput.value;

        // Check if any field is empty
        if (newName.trim() === "" || newAge.trim() === "" || newBloodType.trim() === "" || newContact.trim() === "") {
            return; // Exit the function if any field is empty
        }

        // Update recipient details in the recipients array
        recipients[index] = {
            RecipientName: newName,
            RecipientAge: newAge,
            BloodType: newBloodType,
            Contact: newContact,
        };
        renderRecipients(); // Update the recipient table
        modal.style.display = "none"; // Close the modal
    };
}

// Function to render the recipient table
function renderRecipients() {
    const tableBody = document.querySelector('#recipientTable tbody');
    tableBody.innerHTML = '';

    recipients.forEach((recipient, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${recipient.RecipientName}</td>
            <td>${recipient.RecipientAge}</td>
            <td>${recipient.BloodType}</td>
            <td>${recipient.Contact}</td>
            <td>
                <button class="edit" onclick="editRecipient(${index})">Edit</button>
                <button class="delete" onclick="deleteRecipient(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle form submission
document.getElementById('addRecipientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('RecipientName').value;
    const age = document.getElementById('RecipientAge').value;
    const bloodType = document.getElementById('BloodType').value;
    const contact = document.getElementById('Contact').value;
    
    addRecipient(name, age, bloodType, contact);
    // Reset form fields after submission
    this.reset();
});

// Initial render of recipients
renderRecipients();
