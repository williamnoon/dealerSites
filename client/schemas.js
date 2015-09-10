




Schema = {};
Schema.vehicleInfo = new SimpleSchema({
  vehicle:{
    type: Object,
  },
  'vehicle.make':{
    type: String,
    label: 'Make'
  },
  'vehicle.model': {
    type: String,
    label: 'Model'
  },
  'vehicle.year': {
    type: Number,
    label: 'Year'
  },
  'vehicle.miles': {
    type: Number,
    label: 'Miles'
  },
   'vehicle.tradeSell': {
    type: [String],
    label: 'I would like to:',
    autoform: {
      type:"select-checkbox-inline",
     options: function () {
        return [
          {label: "Sell", value: "Sell"},
          {label: "Trade", value: "Trade"}
        ]}
    }
}});
Schema.contactInfo = new SimpleSchema({
  contact:{
    type:Object,
},
  'contact.firstName':{
    type: String,
    label: 'First Name'
  },
  'contact.lastName': {
    type: String,
    label: 'Last Name'
  },
  'contact.email': {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email
    
  },
  'contact.cell': {
    type: String,
     label: 'Cell',
     regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

   
  },
	
	'contact.createdat': {
   type: Date,
   optional: false,
   autoform: {
     value: new Date(),
     type: "hidden"
   }
								 }
}); 
  SimpleSchema.messages({
     "regEx contact.email": [
     {exp:SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"}
    
    ],
    "regEx contact.cell": [{exp: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 
    msg: "[label] must be a valid US Phone Number"}],
    
     "regEx personal.Phone.cell": [{exp: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 
    msg: "[label] must be a valid US Phone Number"}],
      
     "regEx personal.Phone.home": [{exp: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 
    msg: "[label] must be a valid US Phone Number"}],
    
     "regEx employment.Phone": [{exp: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 
    msg: "[label] must be a valid US Phone Number"}],
      
       "regEx personal.DOB": [{exp:/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 
    msg: "[label] must be valid and in format mm/dd/yyy"}],
      
      "regEx personal.Social": [{exp:/^\d{3}-?\d{2}-?\d{4}$|^XXX-XX-XXXX$/, 
    msg: "[label] must be valid and in format XXX-XX-XXXX"}],
      
      "regEx Residence.zip": [{exp:SimpleSchema.RegEx.ZipCode, 
    msg: "[label] must be valid"}],
      
      "regEx employment.address.zip": [{exp:SimpleSchema.RegEx.ZipCode, 
    msg: "[label] must be valid"}]








});

Schema.personalInfo = new SimpleSchema({
  personal:{
    type: Object,
  },
  'personal.firstName':{
    type: String,
    label: 'First Name'
  },
  'personal.lastName':{
    type: String,
    label: 'Last Name'
  },
  'personal.email':{
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Email'
  },
    'personal.Phone':{
    type: Object,
  },
   'personal.Phone.home':{
    type: String,
    regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    label: 'Home'
  },
  'personal.Phone.cell':{
    type: String,
    regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    label: 'Cell',
    optional: true
  },
  'personal.DOB':{
    type: Date,
    regEx: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    label: 'DOB (mm/dd/yyyy)'
  },
  'personal.Social':{
    type: String,
    regEx:/^\d{3}-?\d{2}-?\d{4}$|^XXX-XX-XXXX$/,
    label: 'S.S.N (XXX-XX-XXXX)'
  }
});

Schema.residenceInfo = new SimpleSchema({
  Residence:{
    type: Object,
  },
  'Residence.street':{
    type: String,
    label: ' Current Address'
  },
  'Residence.city':{
    type: String,
    label: 'City'
  },
    'Residence.zip':{
    type: String,
    label: 'ZipCode',
    regEx: SimpleSchema.RegEx.ZipCode
  },
'Residence.duration':{
    type: Number,
    label: 'Years at this address?'
  },
   'Residence.rent':{
    type: Number,
    label: 'Monthly rent or mortgage amt'
  },
  'Residence.residenceType': {
    type: [String],
    label: 'Rent or Own ',
    autoform: {
      type:"select-checkbox-inline",
     options: function () {
        return [
          {label: "Rent", value: "rent"},
          {label: "Own", value: "own"}
        ]}
    }},
    });
Schema.employmentInfo = new SimpleSchema({
  employment:{
    type: Object,
  },
  'employment.Employer':{
    type: String,
    label: 'Curent Employer'
  },
  'employment.Title':{
    type: String,
    label: 'Curent Job Title'
  },
   'employment.Phone':{
    type: String,
    regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
  },
  'employment.address':{
    type: Object,
  },
  'employment.address.street':{
    type: String,
    label: 'Employer Address'
  },
  'employment.address.city':{
    type: String,
    label: 'City'
  },
    'employment.address.zip':{
    type: String,
    label: 'ZipCode',
    regEx: SimpleSchema.RegEx.ZipCode
  },
 'employment.duration':{
    type: Number,
    label: 'Years at this Job?'
  },
 'employment.permission': {
    type: [String],
    label: 'Can We Contact Your Employer ',
    autoform: {
      type:"select-checkbox-inline",
     options: function () {
        return [
          {label: "Yes", value: "yes"},
          {label: "No", value: "no"}
        ]}
    }}
});

Schema.credit = new SimpleSchema({
  credit:{
    type: Object,
  },
  'credit.Income':{
    type: Number,
    label: 'Monthly Income'
  },
  
  'credit.trade':{
   type: [String],
    label: 'Do you have a trade-in ',
    autoform: {
      type:"select-checkbox-inline",
     options: function () {
        return [
           {label: "Yes", value: "yes"},
          {label: "No", value: "no"}
        ]}
    }},
  'credit.moneyDown':{
    type: Number,
    label: 'Down Payment Amt'
  },
    'credit.permission':{
     type: [String],
    label: 'Permission to pull credit ',
    autoform: {
      type:"select-checkbox-inline",
     options: function () {
        return [
           {label: "Yes u may pull my credit", value: true}
        ]}
    }},
 'credit.referral':{
    type: [String],
    label: 'How did you hear about us',
    autoform: {
     type: "select-multiple",
      options: function () {
        return [
          {label: "Facebook", value: "facebook"},
          {label: "Autotrader.com", value: "autotrader"},
          {label: "Google search", value: "google"},
          {label: "Friend or Family", value: "friend"},
          {label: "Im a previous customer", value: "customer"}
        ];
      }}},
  'credit.createdat': {
   type: Date,
   optional: false,
   autoform: {
     value: new Date(),
     type: "hidden"
   }
								 }
});

Trades.attachSchema([
  Schema.vehicleInfo,
  Schema.contactInfo
]);

Applications.attachSchema([
  Schema.personalInfo,
  Schema.residenceInfo,
  Schema.employmentInfo,
  Schema.credit
]);

Template.trades.helpers({
  steps: function() {
    return [{
      id: 'vehicleInfo',
      title: 'Vehicle Information',
      schema: Schema.vehicleInfo
    },{
      id: 'contactInfo',
      title: 'Contact Information',
      schema: Schema.contactInfo,
      onSubmit: function(data, wizard) {
        var self = this;
         dataFromSteps = _.extend(wizard.mergedData(), data);
        myconn.apply('tradeInsertMethod', [dataFromSteps], true, function (error, result){
          if (error) {
              console.log('something went wrong');
            self.done();
          } else {
			  var returnData = result;
              console.log('trade processed');
			   console.log(returnData);
			  Session.set('offer', '');
               Router.go('offer',{_id: returnData}
            );
              
          }
        }
				   );
        
    }
  }
            ]
            }});


Wizard.useRouter('iron:router');

Template.approval.helpers({
  steps: function() {
    return [{
      id: 'personalInfo',
      title: 'Personal Information',
      schema: Schema.personalInfo
    },{
       id: 'residenceInfo',
      title: 'Residence',
      schema: Schema.residenceInfo
    },{
       id: 'employmentInfo',
      title: 'Employment History',
      schema: Schema.employmentInfo
    },{
      id: 'credit',
      title: 'Credit Worthiness',
      schema: Schema.credit,
      onSubmit: function(data, wizard) {
        var self = this;
	    dataFromSteps = _.extend(wizard.mergedData(), data);
        myconn.apply('applicationInsertMethod', [dataFromSteps], true, function(error, result) {
          if (error) {
              console.log('something went wrong');
            self.done();
          } else {
              console.log('application processed');
			   var returnData = result;
			   console.log(returnData);
			  Session.set('decision', '');
               Router.go('appDecision', {
              _id: returnData
            });
              
          }
        });
        
    }
  }
            ]
            }});

Template.slideshow.rendered = function()
{
    $('.bxslider').bxSlider({
  mode: 'fade',
  auto: true,
  captions: true
});
};
Template.inventory.helpers({
     checkIframeLoaded: function() {
         document.getElementsByTagName('iframe').load(function() {
    console.log('ready');
})
     } });

Template.appDecision.rendered = function(){
   
setTimeout(function(){ Session.set('decision', 'approved');},8000);
    console.log('session set');
};
    
 Template.appDecision.helpers({
      processingDone: function(){
        return Session.get('decision');
      }
      });
    
    
Template.offer.rendered = function(){
   
setTimeout(function(){ Session.set('offer', 'approved');},8000);
    
};
    
 Template.offer.helpers({
      calculationDone: function(){
        return Session.get('offer');
      }
      });
    
    
    
    
    
    
    
    