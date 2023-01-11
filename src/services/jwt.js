

/**************************************************************************
 * Envía nombre de usuario al servidor y obtiene el jwt para acceder a las API's
 * @param {string} userName nombre del jugador
 * @return {token , username , uuid}
 */
export async function getJWT(userName) {
    console.log({userName});
    const response = await fetch((process.env.HOST||'http://localhost:3000') + '/login', {
        method: 'POST', 
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({'username':userName})
    });
    return response.json() 
  }

