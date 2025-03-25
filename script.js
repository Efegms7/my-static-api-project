document.getElementById('fetchImage').addEventListener('click', fetchImage);

async function fetchImage() {
    const url = 'https://picsum.photos/600/400?random';  
    
    try {
        const response = await fetch(url);
        const imageUrl = response.url;  
        
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.getElementById('imageContainer').innerHTML = ''; 
        document.getElementById('imageContainer').appendChild(imgElement);
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

