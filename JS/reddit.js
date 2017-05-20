var redditList;
var $threadList = $('.thread-list');

$.getJSON('https://www.reddit.com/r/PUBATTLEGROUNDS.json?jsonp=?',    function (data) { 
	redditList = data.data.children; 
  
  console.log(redditList);

	$.each(redditList, function( index, value ) {
    var title = value.data.title;
    var link = 'https://reddit.com' + value.data.permalink;
    
    $threadList.append('<li><a href="' + link + '" target="_blank">' + title + '</a></li>');
    
  });
  
});