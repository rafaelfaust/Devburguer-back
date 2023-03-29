import Jwt from "jsonwebtoken";
import authconfig from "../../config/auth";


export default (request, response, next) => {
    const authToken = request.headers.authorization

    if (!authToken){
        return response.status(401).json({ error: 'Token not provide' })
    }

    const token = authToken.split(' ')[1]

    try{
        Jwt.verify(token, authconfig.secret, function(err, decoded){
            if(err){
                throw new Error()
            }

            request.userId = decoded.id
        })

    } catch(err){
        
    }

    return next()
}