var coll = new Meteor.Collection('test');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to datatablesbug.";
  };

  Template.hello.helpers({
    item: function () {
      return coll.find();
    }
  });

  Template.hello.rendered = function () {
    $('table').dataTable();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if(coll.find().count() == 0) {
      coll.insert({
        name:'testingtesting'
      });
    }
  });
}
