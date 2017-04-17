var request = require("request")
var subreddit = "" //"r/politics"
var url = "https://www.reddit.com/"+subreddit+".json"

request({
    url: url,
    json: true
}, function (error, response, body) {
	var matchCNT = 0;
    if (!error && response.statusCode === 200) {
        //console.log(body.data.children) // Print the json response
		for (words in body.data.children){
			txt = body.data.children[words].data['title'].toLowerCase();
			matchCNT += (txt.match(/trump/g) || []).length;
			txt = body.data.children[words].data['selftext'].toLowerCase();
			matchCNT += (txt.match(/trump/g) || []).length;
			txt = body.data.children[words].data['author'].toLowerCase();
			matchCNT += (txt.match(/trump/g) || []).length;
			//console.log(matchCNT); 
			console.log("Post # "+(parseInt(words)+1)+": "+body.data.children[words].data['title']+" by: "+body.data.children[words].data['author']);
			console.log(body.data.children[words].data['url']);		
		}
		console.log("found mention of trump"+matchCNT+" times");
    }
})
