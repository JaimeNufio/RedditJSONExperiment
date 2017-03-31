var request = require("request")
var subreddit = "r/theDonald"
var url = "https://www.reddit.com/"+subreddit+".json"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        //console.log(body.data.children) // Print the json response
		for (words in body.data.children){
			console.log("Post # "+(parseInt(words)+1)+": "+body.data.children[words].data['title']);
		}
    }
})
