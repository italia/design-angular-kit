var copyfiles = require('copyfiles');

var callback = function(e)  {
    if(e) {
        console.error(e)
    }
};

// COPY collection.json

//copyfiles -f projects/design-angular-kit/schematics/collection.json dist/design-angular-kit/schematics/
var collectionSourcePath = 'projects/design-angular-kit/schematics/collection.json';
var collectionDestionationPath = 'dist/design-angular-kit/schematics/';
var collectionConfig =  {verbose: true, flat: true, up: 3};
copyfiles([collectionSourcePath, collectionDestionationPath],collectionConfig, callback);

// COPY schematics/*/schema.json

//copyfiles -f projects/design-angular-kit/schematics/*/schema.json dist/design-angular-kit/"
var schemajsonSourcePath = 'projects/design-angular-kit/schematics/*/schema.json';
var schemajsonDestionationPath = 'dist/design-angular-kit/';
var schemajsonConfig =  {verbose: true, flat: false, up: 2};
copyfiles([schemajsonSourcePath, schemajsonDestionationPath], schemajsonConfig, callback);