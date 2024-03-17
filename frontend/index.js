
async function sprintChallenge5() {
  // Select the footer element to update with the current year
  const footer = document.querySelector('footer');
  
  // Get the current year
  const currentYear = new Date().getFullYear();
  
  // Update the footer text with the institute name and current year
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;
  
  // Below this line, you can start working with the data from the two endpoints
  // Make Axios requests to Endpoint A and Endpoint B
  const endpointAResponse = await axios.get('http://localhost:3003/api/learners');
  const endpointBResponse = await axios.get('http://localhost:3003/api/mentors');
  
  // Extract mentor IDs and names from the responses
  const mentorsMap = new Map();
  endpointBResponse.data.forEach(mentor => {
      mentorsMap.set(mentor.id, mentor.name);
  });
  
  // Combine mentor IDs with real names for each learner
  const learnersData = endpointAResponse.data.map(learner => {
      const mentorsNames = learner.mentors.map(mentorId => mentorsMap.get(mentorId));
      return {
          ...learner,
          mentors: mentorsNames
      };
  });
  
  // Function to create a Learner Card for a single learner
  function createLearnerCard(learner) {
      const card = document.createElement('div');
      card.classList.add('learner-card');
      
      const name = document.createElement('h2');
      name.textContent = learner.name;
      name.classList.add('learner-name');
      
      const age = document.createElement('p');
      age.textContent = `Age: ${learner.age}`;
      age.classList.add('learner-age');
      
      const mentorsList = document.createElement('ul');
      mentorsList.classList.add('mentor-list');
      
      learner.mentors.forEach(mentor => {
          const mentorItem = document.createElement('li');
          mentorItem.textContent = mentor;
          mentorsList.appendChild(mentorItem);
      });
      
      card.appendChild(name);
      card.appendChild(age);
      card.appendChild(mentorsList);
      
      return card;
  }
  
  // Loop over the learners data and render Learner Cards
  const container = document.querySelector('.learners-container');
  learnersData.forEach(learner => {
      const learnerCard = createLearnerCard(learner);
      container.appendChild(learnerCard);
  });
}

// Call the sprintChallenge5 function to start the process
sprintChallenge5();
// 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
