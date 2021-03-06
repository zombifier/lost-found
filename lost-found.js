Found = new Mongo.Collection("found");
Lost = new Mongo.Collection("lost");

Router.route('/', function () {
    this.render('home');
});

Router.route('/lost');
Router.route('/found');

Router.configure({
  layoutTemplate: 'layout'
});


if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Template.found.helpers({
      found: function () {
          return Found.find({});
      },

      lost: function() {
          return Lost.find({});
      }
  });

  Template.lost.helpers({
      found: function () {
          return Found.find({});
      },

      lost: function() {
          return Lost.find({});
      }
  });

  Template.found.events({
    "submit .foundItem": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element

      var type = event.target.types.value;
      var loc = event.target.location.value;
      var date = event.target.date.value;
      var description = event.target.description.value;

      Found.insert({
          type: type,
          location: loc,
          dateFound: date,
          description: description,
          username: Meteor.user().username
      });
      alert("Submitted!");

      event.target.location.value = "";
    //   event.target.date.value = "";
      event.target.description.value = "";
    }
  });

    Template.lost.events ({
        "submit .lostItem": function(event) {
            event.preventDefault();

            var type = event.target.types.value;
            var loc = event.target.location.value;
            var date = event.target.date.value;
            var description = event.target.description.value;

            Lost.insert({
                  type: type,
                  location: loc,
                  dateFound: date,
                  description: description,
                  username: Meteor.user().username
            });
            alert("Thank you!");

            event.target.location.value = "";
            //event.target.date.value = "";
            event.target.description.value = "";
        }
    });
}
