/**********************************************************
 * join existing game using game code
 * @param code game code
 * @param player player name
 * @returns -{
    code: gameCode,
    players: [
            {
                id:
                name:
                admin:
            },
            {
                id:
                name:
                admin:
            },
        ]
    }
 */
export async function joinGame(code,player){
      
    console.log('joining game code:'+ code)
    return fetch((process.env.HOST||'http://localhost:3001') + '/games?code=' + code, {
        method: 'PATCH', 
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({'player':player})
    })
    .then(res=>{
        if(!(res.status===200))throw new Error('status code != 200')
        return res.json()
    })
    .then(res=>{
        return ({
            code:res.code,
            players:res.players
        });
    })
    .catch(err=>{
        console.log('error al unirse al juego:',err)
    return null
    })

    
}

/*********************************************************************+
 * Creates new game
 * @param code game code
 * @param player player name
 * @returns -{
    code: gameCode,
    players: [
            {
                id: playerId
                name: player
                admin: true
            },
        ]
    }   

 */
export function createGame(player){
     
    return fetch((process.env.HOST||'http://localhost:3001') + '/games', {
        method: 'POST', 
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({'player':player})
    })
    .then(res=>{
        if(!(res.status===200))throw new Error('status code != 200')
        return res.json()
    })
    .then(res=>{
        return({
            code:res.code,
            players:res.players
        })
    })   
    .catch(err=>{
        console.log('error al crear juego:',err)
        return null
    })
}