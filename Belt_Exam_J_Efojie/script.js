console.log("The script of the java is working....")

var cookies = document.querySelector(".cookies")

// start of Empty Cart function//

function EmptyCart() {
    alert("Your cart is empty!")
}

// end of Empty Cart function//




// start of "I Accept" function//

function accept() {
    cookies.remove();
}
// end of "I Accept" function//





// start of hover functions//

function changePic(getElementById) {
    document.getElementById("img").src = "images/succulents-2.jpg";
}

function changeBack(getElementById) {
    document.getElementById("img").src = "images/succulents-1.jpg";
}
// end of hover functions//