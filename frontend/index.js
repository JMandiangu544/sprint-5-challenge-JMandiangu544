async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

    // Step 1: Obtain JSON data from https://www.zoetisus.com/.
    const fetchZoetisData = async () => {
      try {
        const zoetisResponse = await fetch('https://www.zoetisus.com/');
        const zoetisData = await zoetisResponse.json();
        return zoetisData;
      } catch (error) {
        console.error('Error fetching Zoetis data:', error);
        return null;
      }
    };
  
    // Step 2: Obtain JSON data from https://www.amazon.com/gp/css/homepage.html.
    const fetchAmazonData = async () => {
      try {
        const amazonResponse = await fetch('https://www.amazon.com/gp/css/homepage.html');
        const amazonData = await amazonResponse.json();
        return amazonData;
      } catch (error) {
        console.error('Error fetching Amazon data:', error);
        return null;
      }
    };
  
    // Step 3: Combine data obtained from Zoetis and Amazon into a single data structure.
    const combineData = async () => {
      const zoetisData = await fetchZoetisData();
      const amazonData = await fetchAmazonData();
  
      // Combine the data as needed
      const combinedData = {
        zoetis: zoetisData,
        amazon: amazonData,
      };
  
      return combinedData;
    };
  
    // Step 4: Render repeatable components to the DOM using the combined data.
    const renderComponents = async () => {
      const combinedData = await combineData();
  
      // Render components to the DOM using the combined data
      const footer = document.querySelector('footer');
      const currentYear = new Date().getFullYear();
      footer.textContent = `© JOBERTHY ${currentYear}`;
  
      // You can continue rendering components based on the combined data
      // Example: renderZoetisComponents(combinedData.zoetis);
      // Example: renderAmazonComponents(combinedData.amazon);
    };
  
    // Call the renderComponents function to start the process
    renderComponents();
  }
  
  // Call the sprintChallenge5 function
  sprintChallenge5();
  

  // 👆 WORK WORK ABOVE THIS LINE 👆

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
