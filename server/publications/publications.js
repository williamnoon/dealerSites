Meteor.publish("applications", function () {
  return Applications.find();
});
Meteor.publish("trades", function () {
  return Trades.find();
});