# setup
## Install library
```
cd my-lib
npm install
ng build
cd ./dist/my-lib
npm link

ng build --watch
```

## Install Sample and run
```
cd my-lib-sample
npm link my-lib
npm install
ng serve --port 4201
```
- Then any change in library can be picked up at run time in the sample app

# Add dependency library
- [https://indepth.dev/posts/1193/create-your-standalone-angular-library-in-10-minutes](https://indepth.dev/posts/1193/create-your-standalone-angular-library-in-10-minutes)

# Create a new component
```
cd my-lib/src
ng g c lib/au-fa-input
my-lib.module.ts will also updated

Add export in my-lib.module.ts
Update public-api.ts to export the new component
export * from './lib/au-fa-input/au-fa-input.component';

```
# Font awesome
- Add those 2 css files in index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">


# Trouble shooting
## buidingStartIndex error for link library
- projects.projectName.architect.build.options.preserveSymlinks with true in angular.json
- [https://github.com/angular/angular/issues/35586](https://github.com/angular/angular/issues/35586)

### lint target
[https://angularquestions.com/2021/03/23/data-path-should-have-required-property-lintfilepatterns/](https://angularquestions.com/2021/03/23/data-path-should-have-required-property-lintfilepatterns/)
-eslint --init 
### pack without publish
```
//under the root folder with angular.json
ng build zlib
cd dist/zlib
npm pack
//back to the root folder
npm install npm install ./dist/zlib/zlib-0.0.1.tgz
```

- Or use link
```
$ cd ./dist/my-lib
$ npm link

$ cd my-app
$ npm link my-lib
```
-new dependency added in package.json
"zlib": "file:dist/zlib/zlib-0.0.1.tgz",

# Reference
- [https://indepth.dev/posts/1193/create-your-standalone-angular-library-in-10-minutes](https://indepth.dev/posts/1193/create-your-standalone-angular-library-in-10-minutes)
- [https://paloaltonetworks.udemy.com/course/angular-advanced-masterclass](https://paloaltonetworks.udemy.com/course/angular-advanced-masterclass)