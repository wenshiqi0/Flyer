/**
 * Created by Winsky on 15/8/7.
 */
'use strict'
let fs = require('fs');
let app = require('./lib/index');
let Flyer = require('./lib/Flyer');
let Route = require('./midware/flyer-route');
let Logger = require('./midware/flyer-logger');
let Parse  = require('./midware/flyer-parse');
let Error = require('./midware/flyer-error');
let method = require('./example/app/method');

app.configure(new Error())
    .configure(new Parse())
    .configure(new Logger())
    .launch(new Route('/index',method));

app.listen(3000,'localhost');


