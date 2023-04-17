const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    try {
        //Recoger los datos del header del token
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.send("token invalido")
        }
        //Verificar token
        //Desustructurar para separar Bearer(strategy) del token(jwt)
        const [strategy, token] = authorization.split(" ");
        //verifico el token con el secreto
        const decoded = jwt.verify(token, 'secreto');
        //Añado al objeto request que USER eres y que ROL eres para que permanezca en la "sesion"
        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        console.log(decoded);
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = verifyToken;