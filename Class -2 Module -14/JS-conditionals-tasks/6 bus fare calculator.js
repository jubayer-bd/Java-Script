/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticketPrice = 800;
var age = 20;

if (age < 60) {
  if (age < 10) {
    console.log(" You are a Children. Your Ticket is Free");
  } else if (age >= 10 && age <= 20) {
    console.log("You are Student. Your Ticket Price is" + (800 * 50) / 100);
  }
} else {
  console.log("Your Ticket is Free as your are  a Senior Citizen");
}
