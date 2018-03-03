const collectionName1 = 'D';
const collectionName2 = 'H';

exports.getDoc = function(db, searchTerm, callback) {
    db.collection(collectionName1).find(searchTerm).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

exports.getH = function(db, searchTerm, callback) {
    db.collection(collectionName2).find(searchTerm).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}