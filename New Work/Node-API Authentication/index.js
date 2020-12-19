const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api',(req,res)=>{
    res.json({
        message: "Welcome To The Api!"
    })
})

app.post('/api/post', verifyToken, (req,res)=>{
    jwt.verify(req.token, 'secretkey', (err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            res.json({
                message: "Post created....."
                authData
            })
        }
    })
    
})

app.post('/api/login',(req,res)=>{
    // Mock User
    const user ={
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com'
    }

    jwt.sign({user: user}, 'secretkey', { expiresIn: '30s'},(err,token)=>{
        res.json({
            token: token
        })
    });
})

// Authorization Bearer



// Verify Token
function verifyToken(req,res,next){
    // Get Auth Header Value
    const bearerHeader = req.header['authorization']
    // Check If bearer if undefined
    if(typeof bearerHeader !== 'undefined'){
        // Split At The space
        const bearer = bearerHeader.split(' ');

        // Get Token From array

        const bearerToken = bearer[1];

        // Set the token
        req.token = bearerToken;

        next()
    }else{
        // Forbidden
        res.sendStatus(403)
    }
}

app.listen(5000, ()=> console.log('Server Started on 5000'));