function salve(input){
    let movieList = [];

    input.forEach(element => {
        const currentMovie = {};
        //instead of search you can use includes("word")
        if(element.search("addMovie") > -1){
            const[_, name] = element.split("addMovie ")
            movieList.push({name});
        }
        else if(element.search("directedBy") > -1){
            const[name,director] = element.split(" directedBy ");
            const movie = movieList.find((m) => m.name === name);

            if(movie){
                movie.director = director;
            }
        }
        else if(element.search("onDate") > -1){
            const [name,date] = element.split(" onDate ");
            const movie = movieList.find((m)=> m.name === name);
            if(movie){
                movie.date = date;
            }
        }
    });

    movieList
        .filter((m)=> m.name && m.director && m.date)
        .forEach((m)=> console.log(JSON.stringify(m)));
}

salve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);