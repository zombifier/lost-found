Router.route('/', function () {
    this.render('home');
});

Router.route('/lost');
Router.route('/found');

Router.configure({
  layoutTemplate: 'layout'
});

if (Meteor.isClient) {
  Template.navItems.helpers({
    isActive: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });

}

if (Meteor.isServer) {
}
