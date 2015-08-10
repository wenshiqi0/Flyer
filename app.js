/**
 * Created by Winsky on 15/8/7.
 */
'use strict'
let fs = require('fs');
let app = require('./lib/index');
let Flyer = require('./lib/Flyer');
let Promise = require('bluebird');
let Route =require('./midware/flyer-route');

app.launch(new Route('/',function*(){
    let html = yield Promise.fromNode(function(cb){
        fs.readFile('index.html',cb)
    });
    this.res.writeHeader(200,{'Content-Type':'text/html'});
    this.res.end(html);
}));

app.launch(new Route('/new',function*(){
    let html = yield Promise.fromNode(function(cb){
        fs.readFile('new.html',cb)
    });
    this.res.writeHeader(200,{'Content-Type':'text/html'});
    this.res.end(html);
}));

app.listen(3000,'localhost');


