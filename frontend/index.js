async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

     // Step 1: Obtain JSON data from http://localhost:3003/api/learners.
     const fetchLearnersData = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/learners');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching learners data:', error);
        return null;
      }
    }
    
  
    // Step 2: Obtain JSON data from http://localhost:3003/api/mentors.
    const fetchMentorsData = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/mentors');
        console.log(response)
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching mentors data:', error);
        return null;
      }
    };
    
  
    // Step 3: Combine data obtained from Zoetis and Amazon into a single data structure.
    const combineData = async () => {
      const learnersData = await fetchLearnersData();
      const mentorsData = await fetchMentorsData();
      const combinedData = { learners: learnersData, mentors: mentorsData };
      return combinedData;
    };
    
  
    // Step 4: Render repeatable components to the DOM using the combined data.
    const renderComponents = async () => {
      const combinedData = await combineData();
      // Render components to the DOM using combinedData
      // Example: renderLearners(combinedData.learners);
      // Example: renderMentors(combinedData.mentors);
    };

    // Call the renderComponents function to start the process
    renderComponents();
    
    const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear - 1}`
  }

  sprintChallenge5();

  

  

  // 👆 WORK WORK ABOVE THIS LINE 👆

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
