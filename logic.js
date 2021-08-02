const searchByTitleOrGenre = (item, search) =>
  search
  .toLowerCase()
  .split(' ')
  .every(v => item.title.toLowerCase().includes(v) || item.genre.toLowerCase().includes(v));

const searchPlaylists = (playlists, search) => {
  const searchResults = [];

  if (search) {
    for (const [playlistName, playlistItems] of Object.entries(playlists)) {
      // Search for the item that matches the search by the single playlist title
      const matchingPlaylistItems = playlistItems.filter(item => searchByTitleOrGenre(item, search));
      // Set the first matching playlist as the search result
      if (matchingPlaylistItems.length !== 0) {
        searchResults.push(matchingPlaylistItems);
      }
    }
  }
  return searchResults;
};

var app = new Vue({
    el: '#app',
    data: {
      searchQuery: null,
      playlists: {
        curated: [
          {
            title: "Metal Essentials",
            color: "red",
            description: "description",
            genre: "metal",
            list: "PLGFMsDB0B5xxoM4NvsnpcCVgyOytis74P",
          },
          {
            title: "Title2",
            color: "blue",
            description: "description",
            genre: "rock",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
        ],
        recommended: [
          {
            title: "Title 3",
            color: "blue",
            description: "description",
            genre: "indie",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
        ],
      },
    },
    computed: {
      resultQuery() {
         return searchPlaylists(this.playlists, this.searchQuery);
        }
    },
    methods: {
      playlistPlay: function (event) {
        player.loadPlaylist({list:+'\''+this.list+'\''});
      }
    }
  });


$('a[action="#dialog"]').click(function() {
  $('#dialog').addClass('open')
  $('body').addClass('remove-scrollbar')
})
$('a[action="#closedialog"]').click(function() {
  $('#dialog').removeClass('open')
  $('body').removeClass('remove-scrollbar')

})


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
            document.querySelector('[play_mini]').textContent = 'pause';
            $( ".line-1" ).addClass( "hidden" );
            $( ".now_playing" ).removeClass( "hidden" );
            
            var url = player.getVideoUrl();
                var match = url.match(/[?&]v=([^&]+)/);
                videoId = match[1];

                $.getJSON('https://noembed.com/embed',
                    {format: 'json', url: url}, function (data) {
                    document.querySelector('.song_title').textContent = data.title.replace(/\(OFFICIAL|MUSIC|VIDEO\)/g,'');
                });
                var thumby = "https://i1.ytimg.com/vi/" + videoId + "/mqdefault.jpg";
             
                document.querySelector('.current_thumbnail').setAttribute("src", thumby);
                function sleep(ms) {
                  return new Promise(resolve => setTimeout(resolve, ms));
                };
                function seekBar() {
                var rangeslider = document.getElementById("sliderRange");
                var current = document.getElementById("current_time");
                var songLength = document.getElementById("current_length");
                rangeslider.max = player.getDuration();
               
                rangeslider.value = player.getCurrentTime();

               
                var s = Math.trunc(player.getCurrentTime());
                var minutes = Math.floor(s / 60);
                var seconds = s - minutes * 60;

                var s_len = Math.trunc(player.getDuration());
                var minutes_len = Math.floor(s_len / 60);
                var seconds_len = s_len - minutes_len * 60;
                
               
                sleep(0).then(() => {
                  rangeslider.oninput = function() {
                    player.seekTo(this.value);
                  };
                  current.innerHTML = minutes + ':' + seconds;
                  songLength.innerHTML = minutes_len + ':' + seconds_len;
                });
                
                };
                setInterval(seekBar, 1000);
        } 
        else if (playerStatus == 2) {
            document.querySelector('[play]').textContent = 'play_arrow';
            document.querySelector('[play_mini]').textContent = 'play_arrow';
           
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
 
