const express=require('express');
const userLoginRouter=express.Router();
const jwt=require('jsonwebtoken')
const uuid=require('uuid')

/*********************************************************************
 * Para entrar al juego el cliente hace un POST con el nombre del jugador 
 * El servidor devuelve un JWT que contiene el nombre y un UUID para ese jugador
 * */
userLoginRouter.route('/')
.all((req,res,next)=>{
    res.status=200;//OK
    res.setHeader('Content-Type','text/plain')
    console.log(req.body)
    next();
})
.post((req,res,next)=>{
    const name=req.body.username
    const token=getToken(name);
    console.log({token})
    const {username,uuid}=jwt.verify(token,process.env.JWT_SECRET || 'JWT_SECRET')
    res.send({
        token:token,
        username:username,
        uuid:uuid
    })
})

/**************************************************************************************
 * Genera un JWT para el usuario
 * @param {string} name 
 * @returns token generado
 */
function getToken(name=''){

    var u = {
        username: name,
        uuid: uuid.v4()
       }
       const token = jwt.sign(u, process.env.JWT_SECRET || 'JWT_SECRET', {
          expiresIn: 60 * 60 * 24 // expires in 24 hours
       })

    return token;
}


module.exports=userLoginRouter;