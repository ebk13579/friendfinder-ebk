var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends/", function(req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res) {
        var data = (req.body);
        console.log(req.body);
        
        for (var i =0; i < friendsData.length; i++) {
            var difference = 0;
            var bestDifference = 100;
            var match = 0;
            for (var x =0; x < data.scores.length; x++) {
                difference = difference + Math.abs((friendsData[i].scores[x]) - data.scores[x]);
            }
            console.log("Difference: " + difference);
            if (difference < bestDifference) {
                bestDifference = difference;
                match = i;
                console.log("Best difference: " + bestDifference);
            }
        }

        friendsData.push(data);
        res.json(friendsData[match]);
        
    });

    app.post("/api/clear", function(req, res) {
        friendsData.length = [];
        res.json({ ok: true });
      });
};