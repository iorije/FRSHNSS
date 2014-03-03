var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    BSON = require('mongodb').BSONPure;

var mongoClient = new MongoClient(new Server('localhost', 27017));
var db = mongoClient.db("FRSH");

exports.connect = function(){
    mongoClient.open(function(err){
        if(!err){
            db.collection('userCollection', {strict: true}, function(err, collection){
                if(err){
                    console.log('Connected to default instance of MongoDB');
                    console.log("\t1. Run \"ps -e\"\n\t2. Find mongod\n\t3. execute \"sudo kill pid\"\n\t4. start a new instance of MongoDB with \"mongod --dbpath development/frshnss/data\"");
                }else{
                    console.log("Server connected to MongoDB\n");
                }
            });
        }else{
            console.log('Server failed to connect MongoDB');
        }
    });
	return db;
};
