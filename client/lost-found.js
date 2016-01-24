Router.route('/', function () {
    this.render('home');
});

Router.route('/lost');
Router.route('/found');

Router.configure({
  layoutTemplate: 'layout'
});

Found = new Mongo.Collection("found");

if (Meteor.isClient) {
  Template.navItems.helpers({
    isActive: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });
  
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
  Template.found.events({
    "submit .info": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      //var text = event.target.text.value;

      console.log(event.description);
      // Insert a task into the collection
      /*Tasks.insert({
        text: text,
        createdAt: new Date(), // current time
        owner: Meteor.userId(), // _id of logged in user
        username: Meteor.user().username
      });
 
      // Clear form
      event.target.text.value = "";*/
    },
  });
}


