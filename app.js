const user = document.getElementById("user")
const mail = document.getElementById("mail")
const pass1 = document.getElementById("passWord")
const pass2 = document.getElementById("matchpass")

let c = document.querySelector("#user")

let mailvalue = mail.value

// let user2= document.getElementById("user")

function fn() {
    if (user.value === '') {
        document.getElementById("userFail").textContent = "User Name Cant Be Blank"
        user.classList.add("red")
    }
    else {
        user.classList.add("green")
        
    }


    //email verification


    let mailss = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (mail.value.match(mailss)) {
        if (mail.classList.contains("red")) {
            mail.classList.replace("red", "green")
            document.getElementById("useremail").textContent = "Success"
        }

        else {
            mail.classList.add("green")
            document.getElementById("useremail").textContent = "Success"
        }
    }

    else if (mail.value != mailss) {
        if (mail.classList.contains("green")) {
            mail.classList.replace("green", "red")
            document.getElementById("useremail").textContent = "Enter a correct Email Address"

        }
        else {
            mail.classList.add("red")
            document.getElementById("useremail").textContent = "Enter a Email Address"

        }
    }


    else if (mail.value === '') {

        if (mail.classList.contains("green")) {
            mail.classList.replace("green", "red")
            document.getElementById("useremail").textContent = "Enter a Email Address"
        }
        else {
            mail.classList.add("red")
            document.getElementById("useremail").textContent = "Enter a Email Address"

        }
    }

    else {
        mail.classList.add("red")
        document.getElementById("useremail").textContent = "Enter a correct Email Address"

    }

    //password

    if (pass1.value === ''||pass2.value === '') {

        document.getElementById("passerror2").textContent = " password error "
        pass1.classList.add("red")
        pass2.classList.add("red")

    }

    else if (pass1.value == pass2.value) {

        document.getElementById("passerror").textContent = " password success "
        pass1.classList.add("green")
        pass2.classList.add("green")

    }
    else if (pass1 !== pass2) {
        pass1.classList.add("red")
        pass2.classList.add("red")
    }
}

