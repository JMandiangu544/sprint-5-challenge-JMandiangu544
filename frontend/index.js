async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

    // Step 1: Obtain JSON data from http://localhost:3003/api/learners
    async function fetchLearnersData() {
      try {
        const response = await fetch('http://localhost:3003/api/learners');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching learners data:', error);
        return null;
      }
    }    
    
  
    // Step 2: Obtain JSON data from http://localhost:3003/api/mentors
    async function fetchMentorsData() {
      try {
        const response = await fetch('http://localhost:3003/api/mentors');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching mentors data:', error);
        return null;
      }
    }
    
  
    // Step 3: Combine data obtained from Zoetis and Amazon into a single data structure.
    async function combineData() {
      const learnersData = await fetchLearnersData();
      const mentorsData = await fetchMentorsData();
      return { learners: learnersData, mentors: mentorsData };
    }
    
  
    // Step 4: Render repeatable components to the DOM using the combined data.
    async function renderComponents() {
      const combinedData = await combineData();
      // Render repeatable components to the DOM using combinedData
    }

    // Call the renderComponents function to start the process
    renderComponents()

    const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  }

  // Call the renderComponents function to initiate the rendering process:
  sprintChallenge5(); // Call the function to start the process

  

  

  // 👆 WORK WORK ABOVE THIS LINE 👆

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
