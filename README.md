# My personal website

- This is a single page website of my personal profile, powered by AngularJS.
- Demo: http://project-nishiguchi.bitballoon.com/

## Features
- Client-side only (no server code)
- Simple tab interface for site navigation (no routes)
- Gravatar
- Fetches data from public APIs

## Dependencies
- AngularJS v1.4.8
- Bootstrap v4
    + http://v4-alpha.getbootstrap.com/
    + http://v4-alpha.getbootstrap.com/components/buttons/

- Gravater
```js
function gravatarUrl(email, size) {
  return 'https://secure.gravatar.com/avatar/' + md5(email) + "?s=" + size;
}
```

- md5.js

==

## Setting up a simple development server using ExpressJS
- reference: http://shawnsimondeveloper.com/nodeproxyangular/

**1. install NodeJS**

**2. make a project directory**
```
npm init
```

**3. Organize the directory structure**
```
/ProjectName
    /app (angular project)
    index.js (node server)
```

**4. Install ExpressJS**
```
npm install express --save
```

**5. Write server code in index.js**
```js
var express = require("express");

// I am a node server.
var server = express();
server.set("port", 3000);
server.use(express.static(__dirname + "/app"));
server.listen(server.get('port'), function() {
  console.log('Express server listening on port ' + server.get('port'));
});
```

**6. Run the server**
```
node index.js
```
(NOTE: control + C to stop the server)

**7. View the app on a browser**
```
http://localhost:3000/
```

==

## __dirname vs .
- [What is the difference between __dirname and ./ in node.js?](http://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js)
 + __dirname is always the directory in which the currently executing script resides
 + . gives you the directory from which you ran the node command in your terminal window (i.e. your working directory)

==

## sitemaps

http://www.sitemaps.org/protocol.html

==

## Adding anchor hash linking

- [How to handle anchor hash linking in AngularJS](http://stackoverflow.com/questions/14712223/how-to-handle-anchor-hash-linking-in-angularjs)
- [How to set the id attribute of a HTML element dynamically with angular js?](http://stackoverflow.com/questions/23655009/how-to-set-the-id-attribute-of-a-html-element-dynamically-with-angular-js)

```js
// DEPENDENCIES
// "$location", "$anchorScroll"

// I scroll to the element with the specified id.
function scrollTo(id) {

  var old = $location.hash();
  $location.hash(id);
  $anchorScroll();
  // Reset to old to keep any additional routing logic from kicking in
  $location.hash(old);
}

```

```html
<div
  ng-attr-id="{{ vm.topId }}">
</div>

...

<div class="clearfix"></div>

<a ng-click="vm.scrollTo(vm.topId)">Top</a>
```

==

## Tooltip
- Simply add title attribute to the element.
- http://www.w3schools.com/tags/att_global_title.asp
- For AngularJS, use `ng-attr-title`
```js
ng-attr-title="{{ vm.css.backgroundColor }}
```
