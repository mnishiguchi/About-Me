# Masatoshi Nishiguchi's personal website

- This is a single page website of my personal profile, powered by AngularJS.
- Demo: http://mnishiguchi.bitballoon.com/

==

## Features
- Client-side only, powered by AngularJS
- Simple tab interface for site navigation (no routes)
- Gravatar
- Fetches data from public APIs

==

## Dependencies
- [AngularJS v1.4.8](https://angularjs.org/)
- [Bootstrap v4](http://v4-alpha.getbootstrap.com/)
- md5.js

==

## Background image
- Taken from: http://i.imgur.com/kVJs7Pb.jpg

==

## Sitemaps
- I follow the protocol that is defined here.
    + http://www.sitemaps.org/protocol.html
- Google introduced Google Sitemaps so web developers can publish lists of links from across their sites. The basic premise is that some sites have a large number of dynamic pages that are only available through the use of forms and user entries. The Sitemap files contains URLs to these pages so that web crawlers can find them. Bing, Google, Yahoo and Ask now jointly support the Sitemaps protocol.
Since Bing, Yahoo, Ask, and Google use the same protocol, having a Sitemap lets the four biggest search engines have the updated page information. Sitemaps do not guarantee all links will be crawled, and being crawled does not guarantee indexing. However, a Sitemap is still the best insurance for getting a search engine to learn about your entire site. Google Webmaster Tools allow a website owner to upload a sitemap that Google will crawl, or they can accomplish the same thing with the robots.txt file. ([Wikipedia](https://en.wikipedia.org/wiki/Site_map))

==

## How to run this app

### A. Use this URL
- http://mnishiguchi.bitballoon.com/

### B. Running a local server (optional)

#### 1. Install [NodeJS](https://nodejs.org/en/)
- NodeJS comes with [NPM](https://www.npmjs.com/)

#### 2. Install a package
- Run the [npm install](https://docs.npmjs.com/cli/install) command in the project's directory.
- The dependencies are described in the [package.json file](https://docs.npmjs.com/files/package.json)

```
npm install
```

#### 3. Start the server
- Run the following node command in the project's directory.
```
node index.js
```

#### 4. Visit localhost:3000 to view the app on a browser
```
http://localhost:3000/
```

#### 5. Stop the server
- control + C

==

## Known issues
- [Google chrome cast sender error if chrome cast extension is not installed or using incognito](http://stackoverflow.com/questions/24490323/google-chrome-cast-sender-error-if-chrome-cast-extension-is-not-installed-or-usi)
- [AngularJS app not passing official W3C HTML5 validation](http://stackoverflow.com/questions/18607437/should-i-care-about-w3c-validation)

