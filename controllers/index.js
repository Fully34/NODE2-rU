//============================== FOR NODE2 PART II ==============================//

var fs = require('fs');

var indexController = {

    index: function(req, res) {

        res.render('index');
      //   fs.readFile('data.txt', function(err, data) {

      //       res.header('Content-Type', 'text/html');
    		// res.send(data);
 
      //   });  
	},
    
    // static file server bonus 
    staticServer : function(req, res) {

        // this just looks at the url and checks the pram
        var name = req.params.filename;
        // console.log(name)

        //need to specify route
            // since the function is getting called in app.js, we don't need to go down a level in the directory tree (ie: it is getting called from the mother directory)
            // the second argument is an optional encoding argument
                // makes it readable in the console
        fs.readFile('public/' + name, 'utf-8', function(err, data) {

            // throw an error if we encounter one
            if (err) {

                throw err;

            } else {

                // console.log(data);
                res.header('Content-Type', 'text/html');
                res.send(data);
            }
        });
    }
};

module.exports = indexController;