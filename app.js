/**
 * Created by Winsky on 15/8/7.
 */
'use strict'
let app = require('./lib/index');
let Flyer = require('./lib/flyer');

let f = new Flyer();

app.controller(f);

app.listen(3000,'localhost');


