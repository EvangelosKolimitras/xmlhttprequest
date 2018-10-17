const btn = document.querySelector('#btn');
const img = document.querySelector('#image');

btn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) { 
            let data = JSON.parse(xhr.responseText);
            img.src = data.message;
        }
    }

    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.send();
});