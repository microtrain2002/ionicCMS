# ionicCMS
Ionic CMS 5.4.16

Using ionic-users, ng-cms, and the vanilla JavaScript CMS manager as a guide; build a CMS in Ionic.

## Authentication
We will start by providing an authentication mechanism. This will provide a service that gives us access to the login, logout, and register endpoints in the auth API. This will require the following assets.

An authentication service
* a login page
* a logout page
* a registration page
* a user model (or schema/object)

## User Management
An users service
* an users page
* an user page
* an user-create page
* an user-edit page
* an user-delete page

## Article Management
An article model (or schema/object)
An article service
* an articles page
* an article page
* an article-create page
* an article-edit page
* an article-delete page

or

## Clone IonicUser repo
Clone or Fork ionicUsers and change/find instances of user(s) in User pages and change to article(s) 
Article pages, user:users, become article:articles
/user become /article

> *Update instances within the cloned folder*
> In VSC change and find while ignoring the following files
> .gitignore, package-lock.json,user.service.ts, auth.service.ts, login, logut, register

*Change directory names in Terminal*

 ```find . -type d -name "*user*" | while read f; do mv $f $(echo $f | sed 's/user/article/'); done```


*Change file names in Terminal*

```find . -type f -name "*user*" | while read f; do mv $f $(echo $f | sed 's/user/article/'); done```

Ensure the following are wired, created and/or changed accordingly.

## Article Management
An article model (or schema/object)
An article service
* an articles page
* an article page
* an article-create page
* an article-edit page
* an article-delete page

Style and edit functionality of the app as needed.
https://ionicframework.com/docs/api/menu
https://ionicframework.com/docs/theming/themes
https://ionicons.com/
