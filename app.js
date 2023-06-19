const joke_text = document.getElementById('joke');
const ask = document.getElementById('Ask');

ask.addEventListener('click',getjoke)

async function getjoke() {
  const dadjoke = await fetch("https://icanhazdadjoke.com/",{
    headers : {
      'Accept':'application/json'
    }
  }
  );

  const joke =  await dadjoke.json()
  joke_text.innerHTML = joke.joke;
}


