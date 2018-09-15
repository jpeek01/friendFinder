var friends = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        var friendScores = req.body.scores;
        // var scores = [];
        var match = 0;
        var currentDifference = 0;
        var previousDifference = 0;

        for(let i = 0; i < friends.length; i++){
          for(let j=0; j < friendScores.length; j++){
            currentDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScores[j])));
          }
          
          if (currentDifference < previousDifference || previousDifference === 0) {
            previousDifference = currentDifference;
            currentDifference = 0;
            match = i;
          }
        }
    
        res.json(friends[match]);
    
        friends.push(req.body);
    });
}
