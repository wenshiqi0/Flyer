/**
 * Created by Administrator on 2015/8/13.
 */
'use strict'
var request = require('request');
var should = require('should')

var url = 'http://localhost:3000';

describe('http',function(){
    describe('#static text/html',function(){
        it('should return static html docs',function(){
            request(url+'/views/index.html',function(err,res,req){
                if(err) throw err;
                res.should.status(200).html;
                res.body.should.not.empty;
                done();
            })
        })
    })
})

describe('http',function(){
    describe('#static image/jpg',function(){
        it('should return static jpg image',function(){
            request(url+'/img/1.jpg',function(err){
                if(err)throw err;
                res.should.status(200).jpg;
                res.body.should.not.empty;
                done();
            })
        })
    })
})

describe('http',function(){
    describe('#static text/javascript',function(){
        it('should return static javascript',function(){
            request(url+'js/jquery-2.1.4.js',function(err){
                if(err)throw err;
                res.should.status(200).js;
                res.body.should.not.empty;
                done();
            })
        })
    })
})


