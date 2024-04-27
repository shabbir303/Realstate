import bcrypt from "bcrypt";

export const register = async(req,res)=>{
  //db changes
  const {userName, email, password} = req.body;
  // console.log(req.body);
  // Hash the password
  const hashedPassword =await bcrypt.hash(password, 10);
  console.log(hashedPassword);
}
export const login = (req,res)=>{
  //db changes
}
export const logout = (req,res)=>{
  //db changes
}