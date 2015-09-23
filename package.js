Package.describe({
  name: 'bobbigmac:rpg-names',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'Generates random names for RPG characters. Starting with wizards.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bobbigmac/rpg-names',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "darmok": "0.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.addAssets('lists/wizard-names.json', ['server']);
  api.addAssets('lists/dragon-names.json', ['server']);

  api.addFiles('rpg-names.js', ['server']);
  api.export("RPGNames", ['server']);
  api.export("Darmok", ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bobbigmac:rpg-names');
  api.addFiles('rpg-names-tests.js', 'server');
  //api.export("RPGNames", ['client', 'server']);
});
