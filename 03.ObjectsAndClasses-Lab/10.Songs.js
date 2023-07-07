function salve(arr){
    class Song{
        constructor(typeList,name,time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = arr.shift();
    let type = arr.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList,name,time] = arr[i].split(`_`);
        let song = new Song(typeList,name,time);
        songs.push(song);        
    }

    songs.forEach((song) => {
        if (song.typeList === type || type === `all`){
            console.log(song.name);
        }
        
    })
}

salve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);