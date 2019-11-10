// Verify Token
const checkForToken = function verifyToken(req, res, next) {
	// Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = checkForToken;


// testing stuff

	// const bearerHeader = req.headers['authorization'];
	// // Check if bearer is undefined
	// if(typeof bearerHeader !== 'undefined') {
	// 	f1(bearerHeader);
	// } else {
	// 	// Forbidden
	// 	res.sendStatus(403);
	// }
	
	// function extractToken(bearerHeader) {
	// 	return new Promise(resolve => {
	// 		console.log("promise start");
	// 		// Split at the space
	// 		const bearer = bearerHeader.split(' ');
	// 		// Get token from array
	// 		const bearerToken = bearer[1];
	// 		// Set the token
	// 		req.token = bearerToken;
	// 		resolve(req.token, (res) => {
	// 			req.token = res
	// 			next();
	// 		}); 
	// 		console.log("promise end");
	// 	})
	// }

	// async function f1(bearerHeader) {
	// 	var done = await extractToken(bearerHeader);
	// 	console.log("token verification");
	// 	console.log(done);
	// 	return done;
	// }