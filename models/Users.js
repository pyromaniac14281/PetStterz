var localStrategy = require('passport-local').Strategy;

var mysql = require('mysql');
var bycrpt = require('bcryptjs');
var db = require('../config/connection');