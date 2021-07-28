var section1 = new Vue({
    el: '#section1',
    data: {
      playlist1: [
        {
            title: "Title1",
            color: "red",
            description: "description",
            genre: "rock",
            link: "http://timesports.cc/ch15.php",
          },
          {
            title: "Title2",
            color: "blue",
            description: "description",
            genre: "rock",
            link: "http://timesports.cc/ch15.php",
          },
       
      ],
      playlist2: [
        {
            title: "Title2",
            color: "blue",
            description: "description",
            genre: "indie pop",
            link: "http://timesports.cc/ch15.php",
          },
       
      ],
      playlist3: [
        {
            title: "Title3",
            color: "green",
            description: "description",
            genre: "rap",
            link: "http://timesports.cc/ch15.php",
          },
       
      ],
    }
  });













var info = document.getElementById('info');
function onYouTubePlayerAPIReady() {
  var player = new YT.Player('player', {
      videoId: 'b80Jw8MuZxo', // this is the id of the video at youtube (the stuff after "?v=")
      loop: true,
      playerVars: { 'autoplay': 0, 'controls': 1, 'playlist':['aF5nhMIyeqI', 'y7kvGqiJC4g'], },
      events: {
          onReady: function (e) {
                info.innerHTML = 'video is loaded';
                
          },
          
          onStateChange: function (event) {
              if (event.data === 1) {
                  info.innerHTML = 'video started playing';
                  document.querySelector('[play]').textContent = 'pause';
                  $("[play]").addClass("activated");
                  $("[thumb]").removeClass("bwpaused");
                  $(".playreactbkg").removeClass("bwpaused");
                  
              }
              else 
              {
                info.innerHTML = 'video paused';
                document.querySelector('[play]').textContent = 'play_arrow';
                $("[play]").removeClass("activated");
                $("[thumb]").addClass("bwpaused");
                $(".playreactbkg").addClass("bwpaused");
              }
              if (event.data == YT.PlayerState.PLAYING) {
                var url = event.target.getVideoUrl();
                // "http://www.youtube.com/watch?v=gzDS-Kfd5XQ&feature=..."
                var match = url.match(/[?&]v=([^&]+)/);
                // ["?v=gzDS-Kfd5XQ", "gzDS-Kfd5XQ"]
                videoId = match[1];

                var thumby = "https://i1.ytimg.com/vi/" + videoId + "/sddefault.jpg";
             
                document.querySelector('[thumb]').setAttribute("src", thumby);

                $.getJSON('https://noembed.com/embed',
                    {format: 'json', url: url}, function (data) {
                    document.querySelector('.title').textContent = data.title;
                    document.querySelector('.titleside').textContent = data.title;
                });

                    window.setInterval(function(){
                        var s = Math.trunc(player.getDuration() - player.getCurrentTime());
                        var minutes = Math.floor(s / 60);
                        var seconds = s - minutes * 60;
                        document.querySelector('[time]').textContent = minutes + ':' + seconds;
                      }, 1000);
                    
             

                
            }
             
          }
      }
  });



  function play() {
        player.playVideo() 
        $(this).one("click", pause);
     
    }
    function pause() {
        player.pauseVideo() 
        $(this).one("click", play);

    }
    $("[play]").one("click", play);

    $("[skip-next]").on("mousedown", function() {
        player.nextVideo();
    });
    $("[skip-prev]").on("mousedown", function() {
        player.previousVideo();
    });


   
    $("[blues1]").on("mousedown", function() {
        player.loadVideoById({'videoId': '1eNSWZ4x2ZU'});
    });
    $("[tame]").on("mousedown", function() {
        player.loadPlaylist({list: "PLHwvDXmNUa92NlFPooY1P5tfDo4T85ORz", index: 0, startSeconds: 0,suggestedQuality: "small"});
    });
};





