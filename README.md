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

## ngClass
- https://scotch.io/tutorials/the-many-ways-to-use-ngclass

## 
```
@property {boolean} $untouched True if control has not lost focus yet.
@property {boolean} $touched True if control has lost focus.
@property {boolean} $pristine True if user has not interacted with the control yet.
@property {boolean} $dirty True if user has already interacted with the control.
```

==

## Navbar logo - absolute positioning
**advantages**
- Can control the position precisely.

**disadvantages**
- When it may go overlapping on other elements when displayed on the smaller screen.

```html
<nav
  class="navbar navbar-light bg-faded top-navbar" >

  <a
    href="https://github.com/mnishiguchi"
    class="navbar-brand">
  </a>

  <ul class="nav navbar-nav">
    <li class="nav-item">
      <a
        class="logo"
        href="#">
        Masatoshi Nishiguchi
      </a>
    </li>
  </ul>
```

```css
.navbar {
  padding: 18px 10px 10px 10px;
  position: relative;
}

.logo {
  position: absolute;
  bottom: 5px;
  ...
```
