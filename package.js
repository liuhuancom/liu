Package.describe({
  summary: "simple spinner_liu package for Meteor"
});

Package.on_use(function (api, where){
  api.use(['templating'], 'client');
  
  api.add_files(['spiner.js', 'spiner.html'], 'client');


});
