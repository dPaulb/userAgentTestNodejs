var express = require('express');
var router = express.Router();
var useragent = require('useragent');


router.get('/', function(req, res){
    var agent = useragent.parse(req.headers['user-agent'])
        , another = useragent.fromJSON(JSON.stringify(agent));
    var agentString = agent.toString();
    if(agentString.includes("Mac")){
        res.render('agentTest', {useragent : "Mac"})
    }
    else if(agentString.includes("Android")){
        res.render('agentTest', {useragent : "Android"})
    }
    else if(agentString.includes("iOS")){
        res.render('agentTest', {useragent : "iOS"})
    }
    else if(agentString.includes("Windows")){
        res.render('agentTest', {useragent : "Windows"})
    }
    else if(agentString.includes("Linux")){
        res.render('agentTest', {useragent : "Linux"})
    }
    console.log(agentString);

})

// Android , Mac, iOS
module.exports = router;