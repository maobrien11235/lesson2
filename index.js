//	Visit localhost:3000 to view readout from the server

/*
*	Require the http module from node.js
*	Listen on port 3000
*/
const http = require('http')
const port = 3000

/*
*
* Copied from Lesson 1
*
*/

const https = require('https');

var d = [];
https.get('https://api.stlouisfed.org/fred/series?series_id=GNPCA&api_key=a317e3bc1c064490ef1f196c1d4b8dab&file_type=json', (res) => {

  res.on('data', (e) => {
    process.stdout.write(e);
    d = e;
  });

}).on('error', (e) => {
  console.error(e);
});


/*
*	Log the request that is made to the server
*	Provide a response from the server
*/
const requestHandler = (request, response) => {
	console.log(request.url)
	response.end(d)
}
const server = http.createServer(requestHandler)


/*
*	Error handling:
*	If error, log error message
*	If no error, log the port that the server is listening to
*/
server.listen(port, (err) => {
	if (err) {
		return console.log('Error, check your stuff!', err)
	}
	console.log(`Server is listening on ${port}`)  // Log port that the server is listening to
})
