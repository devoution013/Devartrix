$( document ).ready(function() {

	$(".meerBerichten").click(function() {
		$('.meerBerichten').before("<div class='BerichtenItem'><div class='titelbalkBerichten'>Even voorstellen</div><table><tr><td><img class='img-responsive BerichtFoto' src='img/FotoManager.png'></td><td><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra eu dolor quis sollicitudin. Duis ullamcorper auctor mi sed rutrum. Aenean sed neque a ex venenatis finibus eu euismod arcu. Ut sed rhoncus augue. Nulla aliquet sed velit vel dapibus. Etiam eget tempus tellus. Nam vel metus vel nisi dictum hendrerit non et nunc. Morbi nec pulvinar tortor. Aenean viverra ut enim at suscipit. Suspendisse potenti. Vivamus ante mi, ullamcorper vitae est at, ullamcorper molestie ante.</p><a href='#'>Lees verder..</a></td></tr></table></div>")
		$('#test .BerichtenItem:last').hide().slideDown();
	});

	$("#TweetSubmit").click(function() {
		var Bericht;
		var naam;
		var Tweet;


		// create readeble date
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var output = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + d.getFullYear();

		Bericht = $("#Tweettext").val();
		naam = "Pieter";
		Tweet = "<span class=''>" + output + "</span><br/><span class='AgendaTitel'>" + naam + ": </span><span>" + Bericht +"</span><br/>";
		$('.TweetTweetItems div').append(Tweet);
		
		// Scroll to bottom
		var tweetitems = $('.TweetTweetItems');
		var height = tweetitems[0].scrollHeight;
		tweetitems.scrollTop(height);
		
	});
});

