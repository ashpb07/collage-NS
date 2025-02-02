// dataFetcher.js

// Global data storage
let teachers = [];
let shops = [];
let classrooms = [];

// Fetch data from assets.json
const fetchData = async () => {
  try {
    const response = await fetch('/assets.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (!data) {
      throw new Error('Data is null or undefined');
    }
    
    teachers = Array.isArray(data.teachers) ? data.teachers : [];
    shops = Array.isArray(data.shops) ? data.shops : [];
    classrooms = Array.isArray(data.classrooms) ? data.classrooms : [];

    const teacherListElement = document.getElementById('teacherList');
    const shopListElement = document.getElementById('shopList');
    const classroomTableElement = document.getElementById('classroomTableContainer');
    
    if (teacherListElement) renderTeachers(teachers);
    if (shopListElement) renderShops(shops);
    if (classroomTableElement) renderClassrooms(classrooms);
  } catch (err) {
    console.error('Error fetching data:', err);
    showError('teacherList', 'Failed to load teachers.');
    showError('shopList', 'Failed to load shops.');
    showError('classroomTableContainer', 'Failed to load classrooms.');
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