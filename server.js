const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
var port = process.env.PORT || 3000;
const url = 'mongodb://bes:root@ds249128.mlab.com:49128/jackdaws';
const dbName = 'jackdaws'
const collectionName1 = 'D';
const collectionName2 = 'H';
var db

MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err)
    db = client.db(dbName)
    app.listen(port, () => {
        console.log('listening on ' + port)
    })
})

app.get('/doctors', function(req, res) {
    console.log(req.query)
    getDoc(db, req.query, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/doctors/name/:name', function(req, res) {
    console.log(req.params.name)
    getDocN(db, req.params.name, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/doctors/spec/:speciality', function(req, res) {
    console.log(req.params.speciality)
    getDocS(db, req.params.speciality, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/hospitals', function(req, res) {
    console.log(req.query)
    getH(db, req.query, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})

app.get('/hospitals/name/:name', function(req, res) {
    console.log(req.params.name)
    getHN(db, req.params.name, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})



function getDoc(db, searchTerm, callback) {
    db.collection(collectionName1).find(searchTerm).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getDocN(db, searchTerm, callback) {
    db.collection(collectionName1).find({ name: new RegExp(searchTerm) }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getDocS(db, searchTerm, callback) {
    db.collection(collectionName1).find({ speciality: new RegExp(searchTerm) }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getH(db, searchTerm, callback) {
    db.collection(collectionName2).find(searchTerm).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}

function getHN(db, searchTerm, callback) {
    db.collection(collectionName2).find({ name: new RegExp(searchTerm) }).toArray(function(err, docs) {
        if (err) { callback(err, null) }
        callback(null, docs);
    })
}