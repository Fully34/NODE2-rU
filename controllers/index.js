//============================== FOR NODE2 PART II ==============================//


var indexController = {
    index: function(req, res) {

        var fs = require('fs');

        fs.readFile('data.txt', function(err, data) {

            res.header('Content-Type', 'text/html')
    		res.send(data);

            
        })    

	}
};

module.exports = indexController;