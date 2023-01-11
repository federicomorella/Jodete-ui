import  { React, useCallback, useState , useEffect} from 'react'
import { getJWT } from 'services/jwt'

export function useUser(){
    const [jwt, setJwt] = useState()
    const [username, setUsername] = useState('')
    const [uuid, setUuid] = useState()
    const [isLogged,setIsLogged]=useState(false)

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    useEffect(() => {
        const localJwt=localStorage.getItem('jwt') //si existe recupera el jwt del local storage
        if(localJwt){
            try{
                const jwtValues=parseJwt(localJwt);
                setIsLogged(true)
                setUsername(jwtValues.username)
                setUuid(jwtValues.uuid)
                setJwt(localJwt)
            }
            catch(err){

            }
        }

    }, [])
    
    const login=async (name)=>{
        const res= await getJWT(name);
        setJwt(res.token)
        setUsername(res.username)
        setUuid(res.uuid)
        localStorage.setItem('jwt',res.token)
        if(res.token)setIsLogged(true)
        else setIsLogged(false)
        console.log(  
            res.token,
            res.username       
        )
    }

    const logout=()=>{
        console.log('logout')
        localStorage.removeItem('jwt')
        setJwt(null)
        setIsLogged(false)
    }
  

    return (
        {
            login,
            logout,
            username,
            uuid,
            jwt,
            isLogged        
        }
    )
}
