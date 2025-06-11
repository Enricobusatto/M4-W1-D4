console.log ('siamo qui')

 fetch ('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
    .then ((response) => response.json())
    .then ((data) => {
        const eleList = document.querySelector(button))
    .catch ((error) => console.error ( error));