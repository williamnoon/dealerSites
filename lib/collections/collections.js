myconn = DDP.connect("http://localhost:3000");
Applications = new Meteor.Collection('applications', myconn);
Trades = new Meteor.Collection('trades', myconn);
myconn.subscribe("Trades");