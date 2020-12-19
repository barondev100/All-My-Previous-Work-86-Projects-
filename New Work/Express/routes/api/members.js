const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid')
// Routes
router.get('/', (req,res)=>{
    res.json(members);
});

// Get Single Member
router.get('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({
            msg: 'Member Not Found!'
        });
    }
    
});

//  Create Member
router.post('/', (req,res)=>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
        return  res.status(400).json({msg: "Please include a name and email"});
    }

    members.push(newMember);
    res.redirect('/');
});


// Update Member
router.put('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
    const updMember = req.body;
    members.forEach(member =>{
        if(member.id === parseInt(req.params.id)){
            member.name = updMember.name ? updMember.name : member.name;
            member.email = updMember.email ? updMember.email : member.email;

            res.json({msg: "member updated", member:member});
        }
    });
    }else{
        res.status(400).json({
            msg: 'Member Not Found!'
        });
    }
    
});


//  Delete Member
router.delete('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json({ msg : "member deleted", members:  members.filter(member => member.id !== parseInt(req.params.id))});
    }else{
        res.status(400).json({
            msg: 'Member Not Found!'
        });
    }
    
});

module.exports = router;