module.exports={
    readUser: (req, res) => {
        if(!req.session.user){
            res.json(null)
            return;
        }
        req.app.get('db').select_user(req.session.user.username).then(users=>{
            res.status(200).json(users[0])
        }).catch(error=>console.log('-----error', error));
            res.json({message: "server controller readUser error"})
    }
}