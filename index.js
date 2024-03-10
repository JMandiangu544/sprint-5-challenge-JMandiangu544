async function sprintChallenge5() {
  // Obtain JSON data from a web service
  const [data1, data2] = await Promise.all([
    fetch('URL_TO_SERVICE_1').then(response => response.json()),
    fetch('URL_TO_SERVICE_2').then(response => response.json())
    // This makes fetch and axios work in the tests
  ])
const axios = require('axios')
const nodeFetch = require('node-fetch')

globalThis.axios = axios
globalThis.fetch = nodeFetch
globalThis.Request = nodeFetch.Request
globalThis.Response = nodeFetch.Response
  

  // Combine data obtained from different sources into a single data structure
  const combinedData = { ...data1, ...data2 }; // Example combination, modify as needed

  // Render repeatable components to the DOM using the combined data
  const container = document.querySelector('.container'); // Adjust selector as needed

  // Example: Render data as text content
  for (const key in combinedData) {
    const element = document.createElement('div');
    element.textContent = `${key}: ${combinedData[key]}`;
    container.appendChild(element);
  }

  // Set footer content
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;
}

// Call the sprintChallenge5 function
sprintChallenge5();


  // 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
