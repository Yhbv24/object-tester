//*****FRONT-END*****

function User(first, last, age, color, live) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.color= color;
  this.live = live;
};

User.prototype.getFirstLast = function() {
  return this.firstName + " " + this.lastName;
};

//*****FRONT-END*****

$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var userFirstName = $("input[name=first-name]").val();
    var userLastName = $("input[name=last-name]").val();
    var userAge = parseInt($("input[name=age]").val());
    var userColor = $("#color").val();
    var userLive = $("input[name=live]:checked").val();
    var newUser = new User(userFirstName, userLastName, userAge, userColor, userLive);

    $("#output").append("<p>" + newUser.getFirstLast() + "</p><br>");

    $("#output p").last().click(function() {
      alert("This user's name is " + newUser.getFirstLast() + ", his/her age is " + newUser.age + ", his/her favorite color is " + newUser.color + ", and does he/she live in Portland? " + newUser.live + ".");
    });
  });
});
