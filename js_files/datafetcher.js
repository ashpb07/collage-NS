// Global data storage
let teachers = [];
let shops = [];
let classrooms = [];
let clubs = [];
let labs = []; // Added variable to store labs data


// Fetch data from assets.json
const fetchData = async () => {
  try {
    const response = await fetch('/assets.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data) throw new Error('Data is null or undefined');

    // Validate and store data
    teachers = Array.isArray(data.teachers) ? data.teachers : [];
    shops = Array.isArray(data.shops) ? data.shops : [];
    classrooms = Array.isArray(data.classrooms) ? data.classrooms : [];
    clubs = Array.isArray(data.clubs) ? data.clubs : [];
    const labs = Array.isArray(data.labs) ? data.labs : []; // Fetch labs data

    // Render Data in UI
    updateUI('teacherList', teachers, renderTeachers);
    updateUI('shopList', shops, renderShops);
    updateUI('classroomTableContainer', classrooms, renderClassrooms);
    updateUI('clubsList', clubs, renderClubs);
    updateUI('labTableContainer', labs, renderLabs); // Render labs data

    
  } catch (err) {
    console.error('Error fetching data:', err);
    showError('teacherList', 'Failed to load teachers.');
    showError('shopList', 'Failed to load shops.');
    showError('classroomTableContainer', 'Failed to load classrooms.');
    showError('clubsList', 'Failed to load clubs.');
    showError('lablist', 'Failed to load labs.');
  }
};

// Update UI based on available data
const updateUI = (elementId, data, renderFunction) => {
  const element = document.getElementById(elementId);
  if (element) {
    if (data.length > 0) {
      renderFunction(data);
    } else {
      showError(elementId, `No data available.`);
    }
  }
};

// Show error message
const showError = (elementId, message) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = `<div class="error">${message}</div>`;
  }
};

// Load data when the page loads
window.onload = fetchData;
