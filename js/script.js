// Sample donor data
let donors = [];

// Function to add a new donor
function addDonor(DonorName, Age, RegistrationDate, BloodType, Contact) {
    donors.push({ DonorName, Age, RegistrationDate, BloodType, Contact});
    renderDonors(); // Call renderDonors after adding a new donor
}

// Function to delete a donor
function deleteDonor(index) {
    donors.splice(index, 1);
    renderDonors();
}

function editDonor(index) {
    const modal = document.getElementById("editDonorModal");
    const span = document.getElementsByClassName("close")[0];
    const newNameInput = document.getElementById("newName");
    const newAgeInput = document.getElementById("newAge");
    const newRegistrationInput = document.getElementById("newRegistration");
    const newBloodTypeInput = document.getElementById("newBloodType");
    const newContactInput = document.getElementById("newContact");

    
    // Populate input fields with donor details
    newNameInput.value = donors[index].DonorName;
    newAgeInput.value = donors[index].Age;
    newRegistrationInput.value = donors[index].RegistrationDate;
    newBloodTypeInput.value = donors[index].BloodType;
    newContactInput.value = donors[index].Contact;


    modal.style.display = "block";

    // Close the modal when the user clicks on the close button
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Save the changes when the user clicks the "Save Changes" button
    const saveChangesBtn = document.getElementById("saveChangesBtn");
    saveChangesBtn.onclick = function() {
        const newName = newNameInput.value;
        const newAge = newAgeInput.value;
        const newRegistration = newRegistrationInput.value;
        const newBloodType = newBloodTypeInput.value;
        const newContact = newContactInput.value;
    

        // Check if any field is empty
        if (newName.trim() === "" || newAge.trim() === "" || newRegistration.trim() === "" || newBloodType.trim() === "" || newContact.trim() === "") {
            return; // Exit the function if any field is empty
        }

        // Update donor details in the donors array
        donors[index] = {
            DonorName: newName,
            Age: newAge,
            RegistrationDate: newRegistration,
            BloodType: newBloodType,
            Contact: newContact,
            
        };
        renderDonors(); // Update the donor table
        modal.style.display = "none"; // Close the modal
    };
}




// Function to render the donor table
function renderDonors() {
    const tableBody = document.querySelector('#donorTable tbody');
    tableBody.innerHTML = '';

    donors.forEach((donor, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donor.DonorName}</td>
            <td>${donor.Age}</td>
            <td>${donor.RegistrationDate}</td>
            <td>${donor.BloodType}</td>
            <td>${donor.Contact}</td>
            
            <td>
                <button class="edit" onclick="editDonor(${index})">Edit</button>
                <button class="delete" onclick="deleteDonor(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle form submission
document.getElementById('addDonorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('DonorName').value;
    const age = document.getElementById('Age').value;
    const registrationDate = document.getElementById('RegistrationDate').value;
    const bloodType = document.getElementById('BloodType').value;
    const contact = document.getElementById('Contact').value;
    
    
    addDonor(name, age, registrationDate, bloodType, contact);
    // Reset form fields after submission
    this.reset();
});


// Initial render of donors
renderDonors();
