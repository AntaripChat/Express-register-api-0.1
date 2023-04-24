const router = require('express').Router();
const bcrypt = require('bcrypt');
let users = [
    {
        "email":"abc@gmail.com",
        "password":1245
    },
    {
        "email":"abcd@gmail.com",
        "password":1235
    }
];

router.get('/',(reeq,res)=>{
    res.send('Hello everyone')
});
router.post('/api/add',(req,res)=>{
    const user = users.find(user => user.email === req.body.email);
    if(user == null){
        const Hashpassword = bcrypt.hashSync(req.body.password,10);
        users.push({
            email:req.body.email,
            password:Hashpassword
        })
        res.send('Data send');
    }else{
        res.send('This email address is already in use.');
    }
    

});
router.get('/api/user',(req,res)=>{
    res.status(200).send(users);
})

module.exports = router;

