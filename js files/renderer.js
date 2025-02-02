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
                  <span class="office">Office: ${teacher.officeLocation}</span>
                  <span class="phone">Phone: ${teacher.phoneNumber}</span>
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
                <td>${classroom.capacity}</td>
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