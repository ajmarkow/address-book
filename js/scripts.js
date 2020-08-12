//Capture form input and
$(document).ready(function () {
  $("form").submit(function (event) {
    const name = $("input#name").val();
    const address = $("input#address").val();
    const emailaddress = $("input#emailaddress").val();
    const phonenumber = $("input#phone").val();
    event.preventDefault();
    addToContacts(name);
    addCardInfo(name, address, emailaddress, phonenumber)
  });
});


//Add contact info to right side of page.
function addToContacts(name) {

  $("#contacts").append("<li>" + name + "</li>");
}
function addCardInfo(name, address, emailaddress, phonenumber) {

  $("#contactInfo #name").append("<br>" + "<strong>" + name + "</strong>");
  $("#contactInfo #address").append("<br>" + "<strong>" + address + "</strong>");
  $("#contactInfo #emailaddress").append("<br>" + "<strong>" + emailaddress + "</strong>");
  $("#contactInfo #phone").append("<br>" + "<strong>" + phonenumber + "</strong >");

}

/*function addContactCards(name, address, emailaddress, phonenumber) {
  $("div#contactcards").add("")
});*/







