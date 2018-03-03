const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const jdb = require('./serverHandler')

const url = 'mongodb://bes:root@ds249128.mlab.com:49128/jackdaws';
const dbName = 'jackdaws'

var db

MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err)
    db = client.db(dbName)
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

app.get('/doctors', function(req, res) {
    console.log(req.query)
    jdb.getDoc(db, req.query, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})
app.get('/hospitals', function(req, res) {
    console.log(req.query)
    jdb.getH(db, req.query, function(err, results) {
        if (err) {
            res.status(500).send({ error: 'Oops something failed!' })
        }
        res.send(results)
    })
})