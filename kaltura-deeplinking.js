//jquery must be included before this script on the hosting page
function getUrlVars(myUrl)
{
	myUrl = (myUrl != null && myUrl != '') ? myUrl : window.location.href;
    var vars = [], hash;
    var hashes = myUrl.slice(myUrl.indexOf('#') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function() {
	var timeLinks = $('a.video-time');
	timeLinks.each(function( index ) {
		$( this ).click(function(event) {
			var ahref = $(this).attr('href');
			urlParams = getUrlVars(ahref);
			var playerId = urlParams['playerId'];
		    var jumpToSec = urlParams['startTime'];
		    if (playerId != null && playerId != '' && jumpToSec != null && jumpToSec >= 0) {
		    	var player = $('#'+playerId);
		    	if (player) player.get(0).sendNotification('doSeek', jumpToSec);
		    }
		});
	});
});