// Sample blood bags data
let bloodBags = [];

// Function to add a new blood bag
function addBloodBag(DonationDate, ExpiryDate, BloodType, Volume) {
    bloodBags.push({ DonationDate, ExpiryDate, BloodType, Volume });
    renderBloodBags(); // Call renderBloodBags after adding a new blood bag
}

// Function to delete a blood bag
function deleteBloodBag(index) {
    bloodBags.splice(index, 1);
    renderBloodBags();
}

// Function to edit a blood bag
function editBloodBag(index) {
    const modal = document.getElementById("editBBModal");
    const span = modal.querySelector(".close");
    const newDonationDateInput = document.getElementById("newBBDonationDate");
    const newExpiryDateInput = document.getElementById("newBBExpiryDate");
    const newBloodTypeInput = document.getElementById("newBBBloodType");
    const newVolumeInput = document.getElementById("newBBVolume");

    // Populate input fields with blood bag details
    const bloodBag = bloodBags[index];
    newDonationDateInput.value = bloodBag.DonationDate;
    newExpiryDateInput.value = bloodBag.ExpiryDate;
    newBloodTypeInput.value = bloodBag.BloodType;
    newVolumeInput.value = bloodBag.Volume;

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
        const newDonationDate = newDonationDateInput.value;
        const newExpiryDate = newExpiryDateInput.value;
        const newBloodType = newBloodTypeInput.value;
        const newVolume = newVolumeInput.value;

        // Check if any field is empty
        if (
            newDonationDate.trim() === "" ||
            newExpiryDate.trim() === "" ||
            newBloodType.trim() === "" ||
            newVolume.trim() === ""
        ) {
            return; // Exit the function if any field is empty
        }

        // Update blood bag details in the bloodBags array
        bloodBags[index] = {
            DonationDate: newDonationDate,
            ExpiryDate: newExpiryDate,
            BloodType: newBloodType,
            Volume: newVolume,
        };
        renderBloodBags(); // Update the blood bag table
        modal.style.display = "none"; // Close the modal
    };
}

// Function to render the blood bag table
function renderBloodBags() {
    const tableBody = document.querySelector('#BBTable tbody');
    tableBody.innerHTML = '';

    bloodBags.forEach((bag, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bag.DonationDate}</td>
            <td>${bag.ExpiryDate}</td>
            <td>${bag.BloodType}</td>
            <td>${bag.Volume}</td>
            <td>
                <button class="edit" onclick="editBloodBag(${index})">Edit</button>
                <button class="delete" onclick="deleteBloodBag(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle form submission
document.getElementById('addBBForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const donationDate = document.getElementById('DonationDate').value;
    const expiryDate = document.getElementById('ExpiryDate').value;
    const bloodType = document.getElementById('BloodBagsBloodType').value;
    const volume = document.getElementById('Volume').value;
    
    addBloodBag(donationDate, expiryDate, bloodType, volume);
    // Reset form fields after submission
    this.reset();
});

// Initial render of blood bags
renderBloodBags();
