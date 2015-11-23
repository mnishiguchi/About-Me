# my_one_page_website

## About
- Demo: http://project-nishiguchi.bitballoon.com/
- Tab interface for site navigation

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
    + `var signature = md5('app_key' + form_params + 'secret');`


## Gravater

```ruby
# return the Gravatar image tag for the given user
def gravatar_for(user, options = { size: 80 })
  # standardize on all lower-case addresses
  gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
  size = options[:size]
  gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{siz"
  image_tag(gravatar_url, alt: user.name, class: "gravatar")
end
```
