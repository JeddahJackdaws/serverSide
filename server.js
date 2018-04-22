const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 3000;
const url = 'mongodb://bes:root@ds249128.mlab.com:49128/jackdaws';
const dbName = 'jackdaws'
const collectionName1 = 'D';
const collectionName2 = 'H';
const collectionName3 = 'C';
var db;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err)
    db = client.db(dbName)
    app.listen(port, () => {
        console.log('listening on ' + port)
    })
})
app.use(cors())

app.get('/', (req, res) => res.send('Wellcome to BetterDoctor API'))

app.get('/doctors', function(req, res) {
    getDoc(db, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/doctors/name/:name', function(req, res) {
    getDocN(db, req.params.name, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/comments/mid/:mid', function(req, res) {
    commentSearch(db, req.params.mid, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/doctors/id/:id', function(req, res) {
    getDocID(db, req.params.id, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/doctors/spec/:speciality', function(req, res) {
    getDocS(db, req.params.speciality, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/hospitals', function(req, res) {
    getH(db, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/hospitals/id/:id', function(req, res) {
    getHId(db, req.params.id, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/hospitals/city/:city', function(req, res) {
    getHCity(db, req.params.city, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/search/:name/:city', function(req, res) {
    search(db, req.params.name, req.params.city, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.post('/comments/new', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400)
    var review = {
        reviewerId: req.body.reviewerId,
        medicalId: req.body.medicalId,
        reviewerName: req.body.reviewerName,
        reviewDate: new Date().getTime(),
        reviewText: req.body.reviewText
    };
    db.collection(collectionName3).insertOne(review, function(err, result) {
        console.log("inserted");
    });
    res.send('thanks for the review, ' + req.body.reviewerName)
})

function getDoc(db, callback) {
    db.collection(collectionName1).find().toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getDocN(db, searchTerm, callback) {
    db.collection(collectionName1).find({ name: new RegExp(searchTerm, 'i') }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getDocID(db, searchTerm, callback) {
    db.collection(collectionName1).find({ id: searchTerm }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getDocS(db, searchTerm, callback) {
    db.collection(collectionName1).find({ speciality: new RegExp(searchTerm, 'i') }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getH(db, callback) {
    db.collection(collectionName2).find().toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getHId(db, searchTerm, callback) {
    db.collection(collectionName2).find({ Id: searchTerm }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getHCity(db, searchTerm, callback) {
    db.collection(collectionName2).find({ city: new RegExp(searchTerm, 'i') }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function search(db, searchTerm, cityVar, callback) {
    var txt1 = '$search: \'' + searchTerm + '\'';
    var txt2 = 'city: \'' + cityVar + '\'';
    var full = '{ $text: { ' + txt1 + ' }, ' + txt2 + ' }';
    db.collection(collectionName1).find(full).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function commentSearch(db, searchTerm, callback) {
    db.collection(collectionName3).find({ medicalId: searchTerm }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}
module.exports = app