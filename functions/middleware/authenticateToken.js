function authenticateToken(req, res, next)
{
    let token = parseInt(req.headers["authorization"]);
    let timeNow = Date.now();
    if(!token)
    {
        return res.status(401).json({ status: "error", msg: "Unauthorized" })
    }
    console.log(token,timeNow, " diff : ", (token - timeNow));
    if(token > timeNow)
    {
        next();
    }
    else 
    {
        return res.status(401).json({ status: "error", msg: "Unauthorized" })
    }
}

module.exports = authenticateToken;