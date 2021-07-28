
var section1 = new Vue({
    el: '#section1',
    data: {
      playlist1: [
        {
            title: "Metal Essentials",
            color: "red",
            description: "description",
            genre: "metal",
            list: "PLRJWQz0eR2QVQigxE6xzfdoLmJzR7ZVrS",
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
    $(".playlist a.playing").on("mouseup", function() {
        player.pauseVideo();
    });
    $("[play]").one("click", play);
    $(".playlist a").one("click", play);
   
    $("[skip-next]").on("mousedown", function() {
        player.nextVideo();
    });
    $("[skip-prev]").on("mousedown", function() {
        player.previousVideo();
    });
 
    function toggleItem(elem) {
        for (var i = 0; i < elem.length; i++) {
          elem[i].addEventListener("click", function(e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
              if (current != elem[i]) {
                elem[i].classList.remove('playing');
                elem[i].textContent = 'play_arrow';
              } else if (current.classList.contains('playing') === true) {
                current.classList.remove('playing');
                current.textContent = 'play_arrow';
                
              } else {
                current.classList.add('playing');
                current.textContent = 'pause';
                
                
                
              }
            }
            e.preventDefault();
          });
        };
      }
      toggleItem(document.querySelectorAll('.playlist a'));

      