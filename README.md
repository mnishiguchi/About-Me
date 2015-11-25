# my_one_page_website

## About
- Demo: http://project-nishiguchi.bitballoon.com/
- Tab interface for site navigation
- Gravatar form

## Dependencies
- AngularJS
- Bootstrap4
    + http://v4-alpha.getbootstrap.com/
    + http://v4-alpha.getbootstrap.com/components/buttons/

- Gravater
```js
function gravatarUrl(email, size) {
  return 'https://secure.gravatar.com/avatar/' + md5(email) + "?s=" + size;
}
```

- md5.js

## Responsive design
- https://scotch.io/bar-talk/whats-new-in-bootstrap-4

```scss
// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width

// Large devices (desktops, less than 75em)
@media (max-width: 74.9em) { ... }

// Medium devices (tablets, less than 62em)
@media (max-width: 61.9em) { ... }

// Small devices (landscape phones, less than 48em)
@media (max-width: 47.9em) { ... }

// Extra small devices (portrait phones, less than 34em)
@media (max-width: 33.9em) { ... }
```




