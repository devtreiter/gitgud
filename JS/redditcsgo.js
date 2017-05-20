var redditListcsgo;
var $threadListcsgo = $('.thread-listscsgo');

$.getJSON('https://www.reddit.com/r/csgo/.json?jsonp=?',    function (data) { 
	redditListcsgo = data.data.children; 
  
  console.log(redditListcsgo);

	$.each(redditListcsgo, function( index, value ) {
    var title = value.data.title;
    var link = 'https://reddit.com' + value.data.permalink;
    
    $threadListcsgo.append('<li><a href="' + link + '" target="_blank">' + title + '</a></li>');
    
  });
  
});