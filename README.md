# Summary

eCommerce site built with the MEAN stack - https://bhcmart.herokuapp.com/

## Description

This is a starter project if you intend building an eCommerce platform on MEAN(Mongo, Express, Angular, Node).  [Socket](https://socket.io) was used to achieve a realtime updates in prices and quantities of products.

Admin User: admin@bhcmart.com
Password: 123456

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` or `grunt` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## Production
Running `grunt serve:dist` previews the application in production mode
