$(function(){
    
    $.get('https://www.reddit.com/r/aww/.json', function(goodness){
        var redditArray = goodness.data.children;
        for(i = 0; i < redditArray.length; i++){
            var thumbnail = redditArray[i].data.thumbnail;
            var title = redditArray[i].data.title;
            // console.log(thumbnail);
            // console.log(title);
            $('section').append(
                '<div class="post"><h2>' + title + '</h2><img src="' + thumbnail + '"/></div>'
            );
        }
    });
    
});