let form = document.getElementById("myForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let fatherName = document.getElementById("fatherName").value;
    let seatNo = document.getElementById("seatNo").value;
    let rollNo = document.getElementById("rollNo").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("nameError").innerText = "";
    document.getElementById("fatherError").innerText = "";
    document.getElementById("seatError").innerText = "";
    document.getElementById("rollError").innerText = "";
    document.getElementById("contactError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("addressError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("confirmError").innerText = "";

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerText = "Full Name is required";
        valid = false;
    }

    if(fatherName === ""){
        document.getElementById("fatherError").innerText = "Father Name is required";
        valid = false;
    }

    if(seatNo === ""){
        document.getElementById("seatError").innerText = "Seat Number is required";
        valid = false;
    }

    if(rollNo === ""){
        document.getElementById("rollError").innerText = "Roll Number is required";
        valid = false;
    }

    if(contact.length < 11){
        document.getElementById("contactError").innerText = "Enter valid contact number";
        valid = false;
    }

    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }

    if(address === ""){
        document.getElementById("addressError").innerText = "Address is required";
        valid = false;
    }

    if(password.length < 6){
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if(password !== confirmPassword){
        document.getElementById("confirmError").innerText = "Passwords do not match";
        valid = false;
    }

    if(valid){
        alert("Registration Successful!");

        form.reset();
    }

});