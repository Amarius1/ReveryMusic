

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      function changePlayIcon(playerStatus) {
        if (playerStatus == -1) {
            document.querySelector('[play]').textContent = 'check_circle';
        }
        else if (playerStatus == 1) {
            document.querySelector('[play]').textContent = 'pause';
           
        } 
        else if (playerStatus == 2) {
            document.querySelector('[play]').textContent = 'play_arrow';
   
           
        } 
        else if (playerStatus == 3) {
            document.querySelector('[play]').textContent = 'hourglass_empty';
        }
    }
    function onPlayerStateChange(event) {
        changePlayIcon(event.data);
    }
    function play() {
        player.playVideo() 
        $(this).one("click", pause); 
        
    }
    function pause() {
        player.pauseVideo() 
        $(this).one("click", play);
        
    }
    $("[play]").one("mousedown", play);

   
     $("[play_mini]").one("mousedown", play);
   
    $("[skip-next]").on("mousedown", function() {
        player.nextVideo();
    });
    $("[skip-prev]").on("mousedown", function() {
        player.previousVideo();
    });
