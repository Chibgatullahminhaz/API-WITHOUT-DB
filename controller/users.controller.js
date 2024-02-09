const user = require('../model/users.model')
const {v4:uuidv4} = require('uuid')
// geting usersr
const getAllUsers = (req,res)=>{
try {
    // const users = await user.find();
    res.status(202).json(user);
} catch (error) {
    res.status(200).send(error.message)
}
}

const createUser = (req,res)=>{
try {
    const newUser ={
        id:uuidv4(),
        username: req.body.username,
        email:req.body.email
    }
    user.push(newUser);
    res.status(202).json(newUser)
} catch (error) {
    res.status(200).send("not sucess")
}
}

const updatedUser = (req,res)=>{
  try {
    const userid = req.params.id;
    const {username,email}= req.body;
    user.filter((user)=>user.id ===userid).map((selecteuser)=>{
     selecteuser.email = email;
     selecteuser.username = username;
    });
    res.status(200).send('update sucessfull')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteUser = (req,res)=>{
   try {
    const userid = req.params.id;
   users = user.filter((user)=>user.id !== userid);
   res.status(201).json(users)
   } catch (error) {
    res.status(500).send(error.message)
   }
}


module.exports = { 
    getAllUsers,
    deleteUser,
    updatedUser,
    createUser
}