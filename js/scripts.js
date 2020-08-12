//Capture form input and
$(document).ready(function () {
  $("form").submit(function (event) {
    const name = $("input#name").val();
    const address = $("input#address").val();
    const emailaddress = $("input#emailaddress").val();
    const phonenumber = $("input#phone").val();
    event.preventDefault();
    addToContacts(name);

  });


});


//Add contact info to right side of page.
function addToContacts(name) {

  $("#contacts").append("<li>" + name + "</li>");
}
function addCardInfo(name, address, emailaddress, phonenumber) {



}