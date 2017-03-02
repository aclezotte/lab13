$(function(){
    
    var sub = 'aww';
    
    $('#subForm').hide();
    
    getSubreddit(sub);
    
    $('#goto').on('click', function(){
        $('#goto').hide();
        $('#subForm').show();
    });
    
    $('#submit').on('click', function(){
        sub = $('#subBox').val();
        $('#goto').show();
        $('#subForm').hide();
        $('section').html('');
        getSubreddit(sub);
    });
    
    function getSubreddit(sub){
        $.get('https://www.reddit.com/r/' + sub + '/.json', function(goodness){
            $('#title').html('/r/' + sub);
            var redditArray = goodness.data.children;
            for(i = 0; i < redditArray.length; i++){
                var thumbnail = redditArray[i].data.thumbnail;
                var title = redditArray[i].data.title;
                var author = redditArray[i].data.author;
                var score = redditArray[i].data.score;
                var permalink = 'https://www.reddit.com' + redditArray[i].data.permalink;
                $('section').append(
                    '<a href="' + permalink + '"><div class="post"><ul><li><strong>Title:</strong> ' + title + '</li><li><strong>Author:</strong> /u/' + author + '</li><li><strong>Score:</strong> ' + score + '</li></ul><img src="' + thumbnail + '"/></div></a>'
                );
            }
        });
    }
    
});