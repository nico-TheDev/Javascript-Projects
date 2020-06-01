async function getJoke() {
    try {
        const data = await fetch("https://joke3.p.rapidapi.com/v1/joke", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "joke3.p.rapidapi.com",
                "x-rapidapi-key":
                    "aee1d19251msh524a39a9301099fp1adceejsn360db756416e",
            },
        });
        const joke = await data.json();

        const actualJoke = joke.content;

        document.querySelector('.app__joke').textContent = actualJoke;

        console.log(actualJoke);
    } catch (err) {
        console.log(err);
    }
}

document.querySelector('.app__btn').addEventListener('click',getJoke);