Router.route('/', function () {
    this.render('home');
});

Router.route('/lost');
Router.route('/found');

if (Meteor.isClient) {
}
