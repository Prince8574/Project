// auth.controller.js
import User from '../models/user.model.js';
import bcryptjs  from 'bcryptjs';
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  
    // Basic validation
    if (!username || !email || !password || username === '' || email === '' || password === '') {
      return res.status(400).json({ message: 'All fields are required' });
    
    }
    const hashPassword = bcryptjs.hashPassword(password , 10);
    const newUser = new User({
        username,
        email,
        password,
      });

      try{

          await newUser.save();
          res.json('New user created!');
      }
      catch (error){
        res.status(500).json({message:error.message});
}
};
