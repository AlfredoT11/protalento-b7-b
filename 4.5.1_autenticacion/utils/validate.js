const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_super_cool';


const validateJWT = (request, response, next) => {
   const authHeader =  request.get('authorization');
   const accessToken = authHeader.split(' ')[1];

   jwt.verify(accessToken, SECRET_KEY, (error, decode) => {
    if (error) {
        response.status(401).send('Denegado')
    } else {
        next()
    }
   } )
};

module.exports = validateJWT; 