// renderer.js

// Render teachers with additional details
const renderTeachers = (data) => {
  const teacherList = document.getElementById('teacherList');
  if (!teacherList) return;

  // Show loader
  teacherList.innerHTML = '<div class="loader"></div>';

  setTimeout(() => {
    if (data.length > 0) {
      teacherList.innerHTML = data
        .map(
          (teacher) => `
            <div class="teacher-item">
              <img src="${teacher.photo || 'https://via.placeholder.com/80'}" alt="${teacher.name}" class="teacher-photo" />
              <div class="teacher-details">
                <strong>${teacher.name}</strong>
                <span class="email">${teacher.email}</span>
                <span class="department">${teacher.department}</span>
                <span class="office">Block: ${teacher.officeLocation}</span>
                <span class="phone">Floor: ${teacher.phoneNumber}</span>
              </div>
            </div>
          `
        )
        .join('');
    } else {
      teacherList.innerHTML = '<div class="teacher-item">No teachers found.</div>';
    }
  }, 1000); // Simulate loading delay
};

// Render shops with additional details
const renderShops = (data) => {
  const shopList = document.getElementById('shopList');
  if (!shopList) return;

  // Show loader
  shopList.innerHTML = '<div class="loader"></div>';

  setTimeout(() => {
    if (data.length > 0) {
      shopList.innerHTML = data
        .map(
          (shop) => `
            <div class="shop-item">
              <img src="${shop.photo || 'https://via.placeholder.com/100'}" alt="${shop.name}" class="shop-photo" />
              <div class="shop-details">
                <strong>${shop.name}</strong>
                <span>${shop.distance} away</span>
                <span class="category">${shop.category}</span>
                <span class="opening-hours">Hours: ${shop.openingHours}</span>
                <span class="contact-info">Contact: ${shop.contactInfo}</span>
              </div>
            </div>
          `
        )
        .join('');
    } else {
      shopList.innerHTML = '<div class="shop-item">No shops found.</div>';
    }
  }, 1000); // Simulate loading delay
};

// Render classrooms with additional details
const renderClassrooms = (data) => {
  const classroomTable = document.getElementById('classroomTable');
  const classroomTableBody = classroomTable.getElementsByTagName('tbody')[0];
  const classroomLoader = document.getElementById('classroomLoader');

  // Show loader and hide table
  classroomLoader.style.display = 'block';
  classroomTable.style.display = 'none';

  setTimeout(() => {
    if (data.length > 0) {
      classroomTableBody.innerHTML = data
        .map(
          (classroom) => `
            <tr>
              <td>${classroom.block}</td>
              <td>${classroom.floor}</td>
              <td>${classroom.roomNo}</td>
              <td>${classroom.section}</td>
              <td>${classroom.status}</td>
              <td>${classroom.equipment.join(', ')}</td>
            </tr>
          `
        )
        .join('');
    } else {
      classroomTableBody.innerHTML = '<tr><td colspan="6">No classrooms found.</td></tr>';
    }

    // Hide loader and show table
    classroomLoader.style.display = 'none';
    classroomTable.style.display = 'table';
  }, 1000); // Simulate loading delay
};

const renderLabs = (data) => {
  const labTableBody = document.getElementById('labTable').getElementsByTagName('tbody')[0];
  const labLoader = document.getElementById('labLoader');

  // Show loader and hide table
  labLoader.style.display = 'block';
  document.getElementById('labTable').style.display = 'none';

  setTimeout(() => {
    if (data.length > 0) {
      labTableBody.innerHTML = data
        .map(
          (lab) => `
            <tr>
              <td>${lab.name}</td>
              <td>${lab.equipment.join(', ')}</td>
              <td>${lab.occupiedBy || 'Available'}</td>
            </tr>
          `
        )
        .join('');
    } else {
      labTableBody.innerHTML = '<tr><td colspan="3">No labs found.</td></tr>';
    }

    // Hide loader and show table
    labLoader.style.display = 'none';
    document.getElementById('labTable').style.display = 'table';
  }, 1000); // Simulate loading delay
};

// Render clubs with additional details

const renderClubs = (data) => {
  const clubsList = document.getElementById('clubsList');
  if (!clubsList) return;

  clubsList.innerHTML = '<div class="loader"></div>';

  setTimeout(() => {
    if (data.length > 0) {
      clubsList.innerHTML = data
        .map(
          (club) => `
            <div class="club-item">
              <img src="${club.photo}" alt="${club.name}" class="club-photo" />
              <strong>${club.name}</strong>
              <span class="category">Category: ${club.category}</span>
              <span class="president">President: ${club.president}</span>
              <span class="description">${club.description}</span>
              <span class="location">Location: ${club.location}</span>
              <a href="${club.url}" target="_blank" class="club-url">Visit Club</a>
            </div>
          `
        )
        .join('');
    } else {
      clubsList.innerHTML = '<div class="club-item">No clubs found.</div>';
    }
  }, 1000);
};
