const authService = require('../services/authService');

exports.login = async (req, res) => {
    const { username, password}  = req.body;

    try{

        const user = await authService.loginService(username,password);
        
        req.session.userId= user.id;
        req.session.username = user.username;
        req.session.role = user.role;

        return res.status(200).send("Login successful");

    }catch(error){
        return res.status(401).send(error.message);
    }
}

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if(err){
            return res.status(500).send("logout failed");
        }
        return res.status(200).send("logout successful");
    })
}