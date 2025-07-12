
async function getData() {
    
    const rankInput = document.getElementById('input').value;
    const rank = parseInt(rankInput,10);

    const response =await  fetch('movie.json');
    if(!response.ok){
        throw new Error("Could not found resources");
    }
    const movies = await response.json();
    const movie = movies.find(m => m.rank === rank);
    if(movie){
        document.getElementById('output').innerHTML ="The Movie imbd Rank is " 
        + movie.rank+ "<br>Name:" + movie.title + "<br>year:" + movie.year;
    }else{
        console.log(`movie with ${rank} not found`);
    
    }
}