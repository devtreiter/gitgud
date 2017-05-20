var redditListrl;
var $threadListrl = $('.thread-listrl');

$.getJSON('https://www.reddit.com/r/RocketLeague/.json?jsonp=?',    function (data) { 
	redditListrl = data.data.children; 
  
  console.log(redditListrl);

	$.each(redditListrl, function( index, value ) {
    var title = value.data.title;
    var link = 'https://reddit.com' + value.data.permalink;
    
    $threadListrl.append('<li><a href="' + link + '" target="_blank">' + title + '</a></li>');
    
  });
  
});