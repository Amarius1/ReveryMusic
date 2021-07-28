var section1 = new Vue({
    el: '#section1',
    data: {
      playlist1: [
        {
            title: "Title1",
            color: "red",
            description: "description",
            genre: "rock",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
          {
            title: "Title2",
            color: "blue",
            description: "description",
            genre: "rock",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
       
      ],
      playlist2: [
        {
            title: "Title2",
            color: "blue",
            description: "description",
            genre: "indie pop",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
       
      ],
    }
  });




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
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        $("[tame]").on("mousedown", function() {
            player.loadPlaylist({list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq", index: 0, startSeconds: 0,suggestedQuality: "small"});
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
    
    



