document.addEventListener("DOMContentLoaded", function () {
    const ticketArray = [];

    // Function to store ticket data in an object and add it to the array
    function storeTicketData() {
        const movieSelect = document.getElementById("movieSelect");
        const amountInput = document.getElementById("amountInput");
        const firstNameInput = document.getElementById("firstNameInput");
        const lastNameInput = document.getElementById("lastNameInput");
        const phoneInput = document.getElementById("phoneInput");
        const emailInput = document.getElementById("emailInput");

        // Clear previous error messages
        clearErrorMessages();

        // Validate input fields
        let isValid = true;

        if (amountInput.value < 1) {
            document.getElementById("amountError").innerText = "<span style ='color rgb(128, 0, 0); font-size: 12px'>Amount must be at least 1.</span>";
            isValid = false;
        }

        if (!firstNameInput.value) {
            document.getElementById("firstNameError").innerText = "<span style ='color rgb(204, 0, 0): ; font-size: 12px'>Please enter your first name.</span>";
            isValid = false;
        }

        if (!lastNameInput.value) {
            document.getElementById("lastNameError").innerText = "<span style ='color rgb(245, 0, 0): ; font-size: 12px'>Please enter your last name.</span>";
            isValid = false;
        }

        if (!isValidPhoneNumber(phoneInput.value)) {
            document.getElementById("phoneError").innerText = "<span style ='color rgb(255, 71, 71); font-size: 12px'>Please enter a valid 8-digit phone number.</span>";
            isValid = false;
        }

        if (!isValidEmail(emailInput.value)) {
            document.getElementById("emailError").innerText = "<span style ='color rgb(255, 112, 112); font-size: 12px'>Please enter a valid email address.</span>";
            isValid = false;
        }

        // If any validation fails, return
        if (!isValid) {
            return;
        }

        // Create ticket object
        const ticket = {
            movie: movieSelect.value,
            amount: parseInt(amountInput.value),
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
        };

        // Add ticket to the array
        ticketArray.push(ticket);

        // Display the ticket in the list
        displayTicket(ticket);

        // Clear input fields
        clearInputFields();
    }

    // Function to display a ticket in the list
    function displayTicket(ticket) {
        const ticketList = document.getElementById("ticketList");
        const listItem = document.createElement("li");

        const ticketInfo = `Movie: ${ticket.movie}, Amount: ${ticket.amount}, FirstName: ${ticket.firstName}, LastName: ${ticket.lastName}, Phone: ${ticket.phone}, Email: ${ticket.email}`;

        listItem.textContent = ticketInfo;
        ticketList.appendChild(listItem);
    }

    function removeAllTickets() {
        ticketArray.length = 0; // Clear the array
        document.getElementById("ticketList").innerHTML = ""; // Clear the list
    }

    function clearErrorMessages() {
        const errorMessages = document.getElementsByClassName("error-message");
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerText = "";
        }
    }

    function clearInputFields() {
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            input.value = "";
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
        const phoneRegex = /^\d{8}$/;
        return phoneRegex.test(phone);
    }

    document.getElementById("buyButton").addEventListener("click", storeTicketData);

    // Event listener for the Remove All Tickets button
    document.getElementById("removeAllButton").addEventListener("click", removeAllTickets);
});