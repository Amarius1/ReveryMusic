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















window.videoApiLoaded = [];
window.videoApiLoaded.youtube = false;

function loadYoutubeVideo(videoId) {

    window.onYouTubeIframeAPIReady = function() { document.dispatchEvent(new CustomEvent('onYouTubeIframeAPIReady', {})) };

    if(window.videoApiLoaded.youtube == false) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.videoApiLoaded.youtube = true;
    }

    var player;

    document.addEventListener('onYouTubeIframeAPIReady', function (e) {
        player = new YT.Player('player', {
          height: '400',
          width: '600',
          videoId: videoId,
          events: {
            'onStateChange': onYtStateChange
          }
        });

    }, false);

}

$("[tame]").on("mousedown", function() {
    player.loadPlaylist({list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq", index: 0, startSeconds: 0,suggestedQuality: "small"});
});