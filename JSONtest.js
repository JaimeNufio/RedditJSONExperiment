var request = require("request")

var url = "https://www.reddit.com/r/funny.json"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        //console.log(body.data.children) // Print the json response
		for (words in body.data.children){
			console.log(body.data.children[words].data['title']);
		}
    }
})
