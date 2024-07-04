const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//create user register user
exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //validation
    if (!username || !password || !email) {
      return res.status(400).send({
        success: false,
        message: "please fill all fields",
      });
    }
    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exists",
      });
    }

    //hashing password
    const hashPassword = await bcrypt.hash(password,10)
    
    //save new user
    const user = new userModel({ username, email, password:hashPassword });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "user created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "cant register server issues",
      success: false,
      error,
    });
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res
      .status(200)
      .send({
        userCount: users.length,
        success: true,
        message: "all users data",
        users,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in getting route",
      error,
    });
  }
};

//login
exports.loginController = async(req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(401).send({
                success:false,
                message:"please provide email or password"
            })
        }
        const user = await userModel.findOne({email})
        if (!user){
            res.status(200).send({
                success:false,
                message:"email not registered"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).send({
                success:false,
                message:"Invalid Username or Password"
            })
        }
        return res.status(200).send({
            success:true,
            message:"logged in successfully",
            user
        })
    }

     catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "server error",
            error
        })
        
    }
};
