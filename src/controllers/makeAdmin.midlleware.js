import response from '../utils/response.util.js'
import signup from '../models/signup.models.js'
class makeadmin{
static async makeAdmin(req, res){
    try {
    const { email } = req.body

     const findemail = await signup.findOneAndUpdate( {email},{admin: true},{new:true} )
     
        return response.success(res, 404, `${findemail.username} You are now an admin.`,findemail)
        
    } catch (error) {
        return response.error(res, 500, "Internal server error");
    }
}}
export default makeadmin