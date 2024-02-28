import axios from "axios"
const url='http://localhost:3000'
export const authenticateSignup=async (UserData)=>{
    try{
  let d =  await axios.post(`${url}/signup`,UserData)
  console.log({d})
  return
    }
    catch(err)
    {
        console.log('signup err',err)
    }

}

export const authenticateLogin=async (UserLogin)=>{
  try{
let d =  await axios.post(`${url}/login`,UserLogin)
console.log({d})
return
  }
  catch(err)
  {
      console.log('Login err',err)
  }
}
