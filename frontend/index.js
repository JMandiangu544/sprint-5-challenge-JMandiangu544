async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

     // Step 1: Obtain JSON data from http://localhost:3003/api/learners.
  
        const response1 = await fetch('http://localhost:3003/api/learners');
        const data1 = await response1.json();
        return data1;

  
    // Step 2: Obtain JSON data from http://localhost:3003/api/mentors.
    
        const response2 = await fetch('http://localhost:3003/api/mentors');
        const data2 = await response2.json();
        return data2;
    

    const combineData = async () => {
      const learnersData = await response1();
      const mentorsData = await response2();
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
