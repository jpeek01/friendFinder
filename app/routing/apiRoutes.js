var friends = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        var friendScores = req.body.scores;
        var scores = [];
        var match = 0;
        var scoresDiff = 0;
    
        for(let i = 0; i < friends.length; i++){
          for(let j=0; j < friendScores.length; j++){
            scoresDiff += (Math.round(parseInt(friends[i].scores[j]) - parseInt(friendScores[j])));
          }

          scores.push(scoresDiff);
        }
    
        for(var i=0; i<scores.length; i++){
          if(scores[i] <= scores[match]){
            match = i;
          }
        }
    
        var bff = friends[match];
        res.json(bff);
    
        friends.push(req.body);
    });
}
