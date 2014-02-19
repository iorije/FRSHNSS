var mongo = require('mongodb');
var BSON = mongo.BSONPure;

exports.findById = function(db){
    return function(req, res){
    	var id = req.params.id;
    	console.log('Retrieving wine: ' + id);
    	db.collection('wines', function(err, collection){
    		collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, item){
    			res.json(item);
    		});
    	});
    }
};

exports.findAll = function(db){
    return function(req, res){
    	console.log('Getting all wines');
    	db.collection('wines', function(err, collection){
    		collection.find().toArray(function(err, items){
    			res.json(items);
    		});
    	});
    }
};

exports.addWine = function(db){
    return function(req, res){
    	var wine = req.body;
    	console.log('Adding wine: ' + JSON.stringify(wine));
    	db.collection('wines', function(err, collection){
    		collection.insert(wine, {safe: true}, function(err, result){
    			if (err){
    				res.send('error: an error has occurred');
    			}else{
    				console.log('Succes: ' + JSON.stringify(result[0]));
    				res.json(result[0]);
    			}
    		});
    	});
    }
};

exports.updateWine = function(db){
    return function(req, res){
    	var id = req.params.id;
    	var wine = req.body;
        console.log('Updating wine: ' + id);
        console.log(JSON.stringify(wine));
        db.collection('wines', function(err, collection){
        	collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe: true}, function(err, result){
        		if (err){
                    console.log('Error updating wine: ' + err);
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.json(wine);
                }
        	});
        });
    }
};

exports.deleteWine = function(db){
    return function(req, res){
    	var id = req.params.id;
        console.log('Deleting wine: ' + id);
        db.collection('wines', function(err, collection){
        	collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result){
        		if (err) {
                    res.send({'error':'An error has occurred - ' + err});
                } else {
                    console.log('' + result + ' document(s) deleted');
                    res.json(req.body);
                }
        	});
        })
    }
};