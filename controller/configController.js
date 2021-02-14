const request = require('request');

exports.getConfig = (req, res) =>{
    
    const { key, term, location, sort_by } = req.query;
    console.log(term)

    if(key && location && sort_by){

        try{
            const options = {
                'method': 'GET',
                'url': `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`,
                'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`,
                }    
            };
        
            request(options, function (error, response) {
                if (response.statusCode == 400){
                    console.log(error)
                     return res.status(400).json({
                        status: 'error'
                    });
            
                }else{
                    const resJSON = JSON.parse(response.body)
                     return res.status(200).send(resJSON);
                };
            })
        }catch(err){
            res.status(400).send('Bad Request')
        }
        
    }

}