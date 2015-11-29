# AngularJS simple personal website

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
