
document.getElementById('btn-eminem').addEventListener('click', function () {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
        .then((response) => response.json())
        .then((data) => {
            const outputDiv = document.getElementById('eminem');
            outputDiv.classList.remove('d-none');
            outputDiv.classList.add('visibile');
            const ul = document.createElement('ul');
            const sectionDiv = document.getElementById('eminemSection');

            sectionDiv.appendChild(ul);


            for (let i = 0; i < data.data.length; i++) {
                const li = document.createElement('li');
                li.textContent = data.data[i].title;
                ul.appendChild(li);
            }

        })
        .catch((error) => console.error(error));
});

document.getElementById('btn-queen').addEventListener('click', function () {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
        .then((response) => response.json())
        .then((data) => {
            const outputDiv = document.getElementById('queen');
            outputDiv.classList.remove('d-none');
            outputDiv.classList.add('visibile');
            const ul = document.createElement('ul');
            const sectionDiv = document.getElementById('queenSection');

            sectionDiv.appendChild(ul);


            for (let i = 0; i < data.data.length; i++) {
                const li = document.createElement('li');
                li.textContent = data.data[i].title;
                ul.appendChild(li);
            }

        })
        .catch((error) => console.error(error));
});

document.getElementById('btn-metallica').addEventListener('click', function () {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica')
        .then((response) => response.json())
        .then((data) => {
            const outputDiv = document.getElementById('metallica');
            outputDiv.classList.remove('d-none');
            outputDiv.classList.add('visibile');
            const ul = document.createElement('ul');
            
            const sectionDiv = document.getElementById('metallicaSection');

            sectionDiv.appendChild(ul);


            for (let i = 0; i < data.data.length; i++) {
                const li = document.createElement('li');
                li.textContent = data.data[i].title;
                ul.appendChild(li);
            }

        })
        .catch((error) => console.error(error));
});

