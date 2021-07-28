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












var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe-example', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }
    $("[tame]").on("mousedown", function() {
        player.loadPlaylist({list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq", index: 0, startSeconds: 0,suggestedQuality: "small"});
    });
    
    



