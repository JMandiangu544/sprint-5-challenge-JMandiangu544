async function sprintChallenge5() {
  // Fetch data from Endpoint A and Endpoint B
  const [learnersResponse, mentorsResponse] = await Promise.all([
    axios.get('http://localhost:3003/api/learners'),
    axios.get('http://localhost:3003/api/mentors')
  ]);

  // Extract data from the responses
  const learners = learnersResponse.data;
  const mentors = mentorsResponse.data;

  // Combine data from both endpoints
  const combinedData = learners.map(learner => {
    // Find mentors' names based on mentor IDs
    const mentorNames = learner.mentors.map(mentorId => {
      const mentor = mentors.find(mentor => mentor.id === mentorId);
      return mentor ? mentor.fullName : `Unknown Mentor ${mentorId}`;
    });

    // Return learner data with mentor names
    return {
      id: learner.id,
      email: learner.email,
      fullName: learner.fullName,
      mentors: mentorNames
    };
  });

  // Create a component function to generate a Learner Card
function buildLearnerCard(learner) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h3>${learner.fullName}</h3>
    <p>Email: ${learner.email}</p>
    <p>Mentors: ${learner.mentors.join(', ')}</p>
  `;

  card.addEventListener('click', () => {
    const selectedCards = document.querySelectorAll('.card.selected');
    selectedCards.forEach(selectedCard => {
      selectedCard.classList.remove('selected');
    });

    card.classList.add('selected');
    const info = document.querySelector('.info');
    if (info) {
      info.textContent = `The selected learner is ${learner.fullName}`;
    }
  });

  return card;
}


  // Render Learner Cards to the DOM
  let element = document.querySelector('.cards');
if (element) {
    element.textContent = 'No learner is selected';
}

  const learnerContainer = document.querySelector('.cards');
  combinedData.forEach(learner => {
    console.log(learner)
    const card = buildLearnerCard(learner);
    learnerContainer.appendChild(card);
  });


  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear-1}`;
  console.log(footer)
}

// Call the sprintChallenge5 function
sprintChallenge5();

  // 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
