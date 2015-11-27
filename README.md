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
$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 34em,
  // Medium screen / tablet
  md: 48em,
  // Large screen / desktop
  lg: 62em,
  // Extra large screen / wide desktop
  xl: 75em
) !default;
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

## Divider

```css
.divider{
  margin: 0 8px 0 8px;
}

.divider:before {
  content: "|";
}
```

## Horizontal description
- http://v4-alpha.getbootstrap.com/content/typography/#horizontal-description

```html
  <div class="container">
    <dl class="dl-horizontal ">
      <dt class="col-sm-3">
        <span class="label label-primary">Directors</span>
      </dt>
      <dd class="col-sm-9">
        {{ vm.movieInfo.Director }}
      </dd>

      <dt class="col-sm-3">
        <span class="label label-primary">Actors</span>
      </dt>
      <dd class="col-sm-9">
        {{ vm.movieInfo.Actors }}
      </dd>

      <dt class="col-sm-3">
        <span class="label label-primary">Genre</span>
      </dt>
      <dd class="col-sm-9">
        {{ vm.movieInfo.Genre }}
      </dd>
    </dl>
  </div>
```

## updateOnBlur
- Can specify the timing of updating the form variables.

```html
<!-- Search bar -->
<form class="form-inline">
  <div class="form-group">
    <div class="input-group">
      <input type="text"
        ng-model="vm.search"
        ng-model-options="{ updateOn: 'blur' }"
        ng-change="vm.fetchInfo()"
        class="form-control"
        placeholder="Enter movie name">
      <div class="input-group-addon">
        <a href=""><i class="fa fa-search"></i></a>
      </div>
    </div>
  </div>
</form>
```
