console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch and display random dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const imgContainer = document.getElementById('dog-image-container');
            data.message.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = 'Random Dog Image';
                imgContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    // Fetch and display dog breeds
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const breedsList = document.getElementById('dog-breeds');
        
        Object.keys(data.message).forEach(breed => {
            const listItem = document.createElement('li');
            listItem.textContent = breed;
            listItem.addEventListener('click', () => {
                listItem.style.color = 'lightblue';
            });
            breedsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching breeds:', error));
});
