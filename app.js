/**
 * Created by Winsky on 15/8/7.
 */
'use strict'
let fs = require('fs');
let path = require('path');
let app = require('./lib/index');
let method = require('./example/app/methods');
let Route = require('./midware/flyer-route');
let Logger = require('./midware/flyer-logger');
let Parse  = require('./midware/flyer-parse');
let Error = require('./midware/flyer-handle');
let Source = require('./midware/flyer-static');

app.configure(new Error())
    .configure(new Logger())
    .configure(new Parse())
    .configure(new Source(path.join(__dirname,'/example/static')))
    .launch(new Route('/do:id','get',method.get))
    .listen(3000,'localhost')


