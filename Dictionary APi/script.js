async function API() {
      const word = document.getElementById('word').value;
      const head = document.getElementById('heading').innerHTML = word.toUpperCase();
        try{
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            const partofspeech = data[0].meanings[0].partOfSpeech;
            const definition = data[0].meanings[0].definitions[1].definition;
            const audio = data[0].phonetics[0].audio;
            const synonyms = data[0].meanings[0].synonyms;
            const topFive = synonyms.slice(0,5);
            console.log(synonyms);
            const audio1 = document.getElementById('phonectic');
            audio1.src = audio;
            document.querySelector('audio').load();
            const pos = document.getElementById('partofspeech').innerHTML = partofspeech;
            const def = document.getElementById('definition').innerHTML = definition;
            const synonym = document.getElementById('synonyms');
            synonym.innerHTML = "";
            topFive.forEach(syn => {
                const li = document.createElement('li');
                li.textContent= syn;
                synonym.appendChild(li);
            })

        }catch (error){
            console.error("Api fetch failed",error);
        }
      
    
   

    if(word === ""){
        alert("Enter Something")
    }
        
}
