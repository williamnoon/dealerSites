Router.configure({
    
	loadingTemplate: 'loading',
	layoutTemplate: "wcDeals",
  notFoundTemplate: 'notFound'});

Router.route('/', function () {
  // use the template named ApplicationLayout for our layout

  // render the Post template into the "main" region
  // {{> yield}}
  this.render('slideshow');

  // render the PostAside template into the yield region named "aside" 
  // {{> yield "aside"}}
  this.render('quickLinks', {to: 'links'});

  
});
Router.route('/inventory', {
    name: 'inventory',
	
    template: 'inventory'
});
    
Router.route('/ourstory', {
    name: 'ourstory',
    template: 'ourStory'
});
    
Router.route('/applause', {
    name: 'applause',
    template: 'applause'
});



Router.route('/approval/:step?', {
  name: 'approval',
  template: 'approval',
  onBeforeAction: function() {
    if (!this.params.step) {
      this.redirect('approval', {
        step: 'personalInfo'
      });
    } else {
      this.next();
    }
  }
});

Router.route('/approvals/:_id', {
  name: 'appDecision',
  template: 'appDecision',
  data: function() {
    return Applications.findOne(this.params._id);
  }
});

Router.route('/trades/:step?', {
  name: 'trades',
  template: 'trades',
  layoutTemplate: "wcDeals",
  onBeforeAction: function() {
    if (!this.params.step) {
      this.redirect('trades', {
        step: 'vehicleInfo'
      });
    } else {
      this.next();
    }
  }
});

Router.route('/offer/:_id', {
  name: 'offer',
  template: 'offer',
  data: function() {
    return Trades.findOne(this.params._id);
  }
});


/*
* Routes: Public
* Routes that are visible to all (public) users.
*/


Router.route('login', {
  path: '/login',
  template: 'login',
  onBeforeAction: function(){
    Session.set('currentRoute', 'login');
    this.next();
  }
});

Router.route('recover-password', {
  path: '/recover-password',
  template: 'recoverPassword',
  onBeforeAction: function(){
    Session.set('currentRoute', 'recover-password');
    this.next();
  }
});