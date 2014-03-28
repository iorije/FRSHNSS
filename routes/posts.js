var BSON = require('mongodb').BSONPure;

exports.findAll = function(db){
    return function(req, res){
        console.log('Getting all posts');
        db.collection('postCollection', function(err, collection){
            collection.find().sort({createDate: -1}).toArray(function(err, items){
                res.send(items);
            });
        });
    }
};

exports.findById = function(db){
    return function(req, res){
        var id = req.params.id;
        console.log('Retrieving post: ' + id);
        db.collection('postCollection', function(err, collection){
            collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, item){
                res.send(item);
            });
        });
    }
};

exports.add = function(db){
    return function(req, res){
        var item = req.body;
        console.log('Adding post: ' + JSON.stringify(item));
        db.collection('postCollection', function(err, collection){
            collection.insert(item, {safe: true}, function(err, result){
                if (err){
                    res.send('error: an error has occurred');
                }else{
                    console.log('Succes: ' + JSON.stringify(result[0]));
                    res.send(result[0]);
                }
            });
        });
    }
};

exports.update = function(db){
    return function(req, res){
        var id = req.params.id;
        var item = req.body;
        delete item._id;
        console.log('Updating post: ' + id);
        console.log(JSON.stringify(item));
        db.collection('postCollection', function(err, collection){
            collection.update({'_id':new BSON.ObjectID(id)}, item, {safe: true}, function(err, result){
                if (err){
                    console.log('Error updating post: ' + err);
                    res.send('error: An error has occurred');
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(item);
                }
            });
        });
    }
};

exports.delete = function(db){
    return function(req, res){
        var id = req.params.id;
        console.log('Deleting post: ' + id);
        db.collection('postCollection', function(err, collection){
            collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result){
                if (err) {
                    res.send('error: An error has occurred - ' + err);
                } else {
                    console.log('' + result + ' document(s) deleted');
                    res.send(req.body);
                }
            });
        })
    }
};


/*query object
params = {
    skip: int,
    limit: int,
    sort: {},
    query: {},
    projection: {}
};
*/
exports.query = function(db){
    return function(req, res){
        var skipAmount = req.params.skip;
        console.log('skip: ' + skipAmount);
        db.collection('postCollection', function(err, collection){
            collection.find().sort({createDate: -1}).skip(parseInt(skipAmount)).limit(1).toArray(function(err, items){
                console.log(items);
                res.send(items);
            });
        });
    }
};