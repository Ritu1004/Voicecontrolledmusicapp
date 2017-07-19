
				
				function fancyTimeFormat(time)
			{   
				// Hours, minutes and seconds
				var hrs = ~~(time / 3600);
				var mins = ~~((time % 3600) / 60);
				var secs = time % 60;

				// Output like "1:01" or "4:03:59" or "123:03:59"
				var ret = "";

				if (hrs > 0) {
					ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
				}

				ret += "" + mins + ":" + (secs < 10 ? "0" : "");
				ret += "" + secs;
				return ret;
			}
						
			function toggleSong() {
		var song = document.querySelector('audio');
		if(song.paused == true) {
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
		else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
		}
		
					function updateCurrentTime() {
					var song = document.querySelector('audio');
					var currentTime = Math.floor(song.currentTime);
					currentTime = fancyTimeFormat(currentTime);
					var duration = Math.floor(song.duration);
					duration = fancyTimeFormat(duration)
					$('.time-elapsed').text(currentTime);
					$('.song-duration').text(duration);
				}
				
									function addSongNameClickEvent(songObj,position) {
									var id = '#song' + position;
					var songName=songObj.fileName;			
					$(id).click(function() {
					var audio = document.querySelector('audio');
					var currentSong = audio.src;
					if(currentSong.search(songName) != -1)
					{
					toggleSong();
					}
					else {
					audio.src = songName;
					toggleSong();
					changecurrentNameDetails(songObj);
					}
					});
					}
				    
				
								
				window.onload = function() {
				
				setInterval(function() {
				updateCurrentTime();
				},1000);
				}
				// var songName1 = 'Chantaje';
				//var songName2 = 'Let me love you+Tum hi ho';
				//var songName3 = 'Tera Nasha';
				//var songName4 = 'Starving';
				 //var songList = ['Chantaje ','Let me love you+Tum hi ho', 'Tera Nasha', 'Starving'];
				// var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
				 //var artistList = ['Shakira ft. Maluma','Vidya Vox','The Bilz & Kashif','Hailee Steinfeld'];
				// var albumList = ['No album','Vidya Vox Mashup cover','Breaking Barriers','Haiz'];
				//var durationList = ['3:16','3:10','4:08','3:01'];
				 
				 
						var songs = [{
					'name': 'Chantaje',
					'artist': 'Shakira ft. Maluma',
					'album': 'No album',
					'duration': '3:16',
				   'fileName': 'song1.mp3'
				},
				{
					'name': 'Let me love you+Tum hi ho',
					'artist': 'Vidya Vox',
					'album': 'Vidya Vox Mashup cover',
					'duration': '3:10',
					'fileName': 'song2.mp3'
				},
				{
					'name': 'Tera Nasha',
					'artist': 'The Bilz & Kashif',
					'album': 'Breaking Barriers',
					'duration': '4:08',
					'fileName': 'song3.mp3'
				},
				{
					'name': 'Starving',
					'artist': 'Hailee Steinfeld',
					'album': 'Haiz',
					'duration': '3:01',
					'fileName': 'song4.mp3'
				}]
							
				
				
				
						 for(var i =0; i < songs.length;i++) {
								 var obj = songs[i];
						var name = '#song' + (i+1);
						var song = $(name);
						song.find('.song-name').text(obj.name);
						song.find('.song-artist').text(obj.artist);
						song.find('.song-album').text(obj.album);
						song.find('.song-length').text(obj.duration);
						addSongNameClickEvent(obj,i+1);
						}
										
				
						//addSongNameClickEvent(fileNames[0],1);
						
						//addSongNameClickEvent(fileNames[1],2);
						
						//addSongNameClickEvent(fileNames[2],3);
						
						//addSongNameClickEvent(fileNames[3],4);
						
						//for (var i = 0; i < fileNames.length ; i++) {
						//addSongNameClickEvent(fileNames[i],i+1)
						//}
					    
								
				
								
							
	
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    $('.play-icon').on('click', function() {
        toggleSong()
    });
    $('body').on('keypress', function(event) {
                if (event.keyCode == 32) {
                   toggleSong()
                }
            });