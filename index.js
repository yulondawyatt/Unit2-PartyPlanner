
const state = {
  eventsList: []
}

// Get list of Events from API
const getAllEvents = async () => {

  try {
    const response = await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/events');
    const eventsObject = await response.json();
    const eventsData = eventsObject.data;
    state.eventsList = eventsData;
    renderEvents();
  } catch(err) {
    console.log(err);
  }}

// Render list of Events from API
const renderEvents = () => {
  // Loop through each event
  state.eventsList.forEach((oneEvent) => {
    const li = document.createElement('li');
    li.innerText = oneEvent.name;

    const ol = document.querySelector('ol');
    ol.appendChild(li);
    
  });
}
  getAllEvents();


  // Get data from individual Event
  // const getOneEvent = async () => {
  //   const response = await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/events/{id}');
  //   console.log(response);
  // }
  //   getOneEvent();



// Grab the #app DIV
const appContainer = document.querySelector('#app');

appContainer.innerHTML = `<h1>FullStack Party Planner</h1>

<!-- LIST OF UPCOMING PARTIES -->
<section>
  <h2>Upcoming Parties</h2>

  <ol></ol>
</section>

<!-- DETAILS OF SINGLE PARTY -->
<section>
  <h2>Party Details</h2>

  <div></div>

</section>


`;

console.log(appContainer);