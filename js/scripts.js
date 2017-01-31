//*****FRONT-END*****

function User(firstname, lastname, age, color, live) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.age = age;
  this.color= color;
  this.live = live;
};

User.prototype.getFirstLast = function(userFirstName, userLastName) {
  return this.firstName + " " + this.lastName;
};

//*****FRONT-END*****




$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var userFirstName = $("input[name=first-name]").val();
    var userLastName = $("input[name=last-name]").val();
    var userAge = parseInt($("input[name=age]").val());
    var userColor = $("select[name=color]:checked").val();
    var userLive = $("input[type=radio][name=live]:selected").val();
    var newUser = new User(userFirstName, userLastName, userAge, userColor, userLive);
  });
});
