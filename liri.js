
var myTweets = require('./keys.js');
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: myTweets.twitterKeys.consumer_key,
  consumer_secret: myTweets.twitterKeys.consumer_secret,
  access_token_key: myTweets.twitterKeys.access_token_key,
  access_token_secret: myTweets.twitterKeys.access_token_secret
});

var sn = {screen_name: 'Duncan_Maher', count: 1};

if (process.argv[2] === 'my-tweets'){
	client.get('statuses/user_timeline', sn, function(error, tweets, response) {
		if (!error) {
			console.log('Tweet Activity:');
			for(var i = 0; i < tweets.length; i++){
		console.log("tweet number "+ [i + 1] + " : " + tweets[i].text + " . Created: " + tweets[i].created_at);
	}	
	}
	});
}

if (process.argv[2] === 'tweet-something'){
	client.post('statuses/update', {status: 'test'},  function(error, tweet, response) {
		  if(error) throw error;
		  console.log(tweet.created_at);
	}); 
} 

var spotify = require('spotify');

if (process.argv[2] === 'spotify-this-song'){
 	if(process.argv[3] === undefined){
		console.log('test argument ' + true);
			spotify.search({ type: 'track', query: 'artist:radiohead+track:just', limit: '1' }, function(err, data) {
			    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;
		    }

	console.log('Song Title: '); 
	console.log(data.tracks.items[0].name);
	console.log("");
	console.log('Artist:');
	console.log(data.tracks.items[0].artists[0].name);
	console.log("");
	console.log('Album:')
	console.log(data.tracks.items[0].album.name);
	console.log("");
	console.log('Preview:')
	console.log(data.tracks.items[0].preview_url);	
		});
	 } else if (process.argv[3] !== undefined){

		var nodeArgs = process.argv;

		var mySong = "";

		for (var i=3; i < nodeArgs.length; i++){
			mySong = mySong + "+" + nodeArgs[i];
		}
		spotify.search({ type: 'track', query: mySong}, function(err, data) {
		    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;
		    }
		       
	console.log('Song Title: '); 
	console.log(data.tracks.items[0].name);
	console.log("");
	console.log('Artist:');
	console.log(data.tracks.items[0].artists[0].name);
	console.log("");
	console.log('Album:')
	console.log(data.tracks.items[0].album.name);
	console.log("");
	console.log('Preview:')
	console.log(data.tracks.items[0].preview_url);	
		});
	}
}
