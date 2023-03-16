

//   const apiKey = 'E0V1QuC2Ue8D0NECOPr4Syzhm8O960oaASyO2SLLM1ZOjb0WTAsOkrpp';
//   const apiUrl = 'https://api.pexels.com/v1/search?query=landscape';
  
//   const loadImagesButton = document.getElementById('loadImagesButton');
//   const svgContainer = document.querySelectorAll(".bd-placeholder-img");
//   loadImagesButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     fetchImages();
//   });
  
//   async function fetchImages() {
//     try {
//       const response = await fetch(apiUrl, {
//         headers: {
//           'Authorization': apiKey
//         }
//       });
      
//       if (response.ok) {
//           const data = await response.json();
//           console.log(data)
//           displayImages(data.photos);
//         } else {
//             console.error('Errore nella richiesta:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Errore nel fetch:', error);
//     }
// }


// function displayImages(photos) {
//   svgContainer.innerHTML = '';

//   photos.forEach(photo => {
//     const img = document.createElement('img');
//     img.innerHTML = `
//       <img src="${photo.src.landscape}" >
// `
//     svgContainer.append(img);
//   });
// }


//   

  // Sostituisci 'your-api-key' con la tua chiave API di Pexels
  const apiKey = "E0V1QuC2Ue8D0NECOPr4Syzhm8O960oaASyO2SLLM1ZOjb0WTAsOkrpp";
  const apiUrl = "https://api.pexels.com/v1/search?query=landscape";
  
  const loadImagesButton = document.getElementById('loadImagesButton');
  const svgElement = document.getElementById('mySvg');
  
  loadImagesButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetchImages();
  });
  
  async function fetchImages() {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': apiKey
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        displayImages(data.photos);
      } else {
        console.error('Errore nella richiesta:', response.statusText);
      }
    } catch (error) {
      console.error('Errore nel fetch:', error);
    }
  }
  
  function displayImages(photos) {
    if (svgElement) {
      svgElement.remove();
    }

    photos.forEach(photo => {
      const img = document.createElement('img');
      img.innerHTML = `
        <img src="${photo.src.landscape}" class="img-fluid">
      `

      if (svgElement.parentElement) {
        svgElement.parentElement.appendChild(img);
      } else {
        document.body.appendChild(img);
      }
    });
  }

    
  


