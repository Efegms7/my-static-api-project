document.getElementById('fetchImage').addEventListener('click', fetchImage);

async function fetchImage() {
    const url = 'https://picsum.photos/600/400?random';  // Lorem Picsum API URL
    
    try {
        const response = await fetch(url);
        const imageUrl = response.url;  // API tarafından sağlanan rastgele görselin URL'si
        
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.getElementById('imageContainer').innerHTML = ''; // Eski görseli temizle
        document.getElementById('imageContainer').appendChild(imgElement);
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

