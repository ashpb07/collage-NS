// filter.js

// Filter teachers by subject
const filterTeachersBySubject = (teachers, subject) => {
  if (subject === "all") {
    return teachers;
  } else {
    return teachers.filter((teacher) => teacher.department === subject);
  }
};

// Filter shops by category
const filterShopsByCategory = (shops, category) => {
  if (category === "all") {
    return shops;
  } else {
    return shops.filter((shop) => shop.category === category);
  }
};

// Filter classrooms by block
const filterClassroomsByBlock = (classrooms, block) => {
  if (block === "all") {
    return classrooms;
  } else {
    return classrooms.filter((classroom) => classroom.block === block);
  }
};

const filterLabsByNameOrEquipment = (labs, searchTerm) => {
  if (searchTerm === "") {
    return labs;
  } else {
    return labs.filter((lab) =>
      lab.name.toLowerCase().includes(searchTerm) ||
      lab.equipment.join(' ').toLowerCase().includes(searchTerm)
    );
  }
};

// Filter clubs by category
const filterClubsByCategory = (clubs, category) => {
  if (category === "all") {
    return clubs;
  } else {
    return clubs.filter((club) => club.category === category);
  }
};

// Search functionality for teachers, shops, classrooms, and clubs
const filterData = (data, searchTerm) => {
  if (!searchTerm) return data; // Return all data if search term is empty

  return data.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm) || // Common property
      item.email?.toLowerCase().includes(searchTerm) || // Teachers
      item.department?.toLowerCase().includes(searchTerm) || // Teachers
      item.officeLocation?.toLowerCase().includes(searchTerm) || // Teachers
      item.phoneNumber?.toLowerCase().includes(searchTerm) || // Teachers
      item.category?.toLowerCase().includes(searchTerm) || // Shops and Clubs
      item.openingHours?.toLowerCase().includes(searchTerm) || // Shops
      item.contactInfo?.toLowerCase().includes(searchTerm) || // Shops
      item.block?.toLowerCase().includes(searchTerm) || // Classrooms
      item.roomNo?.toLowerCase().includes(searchTerm) || // Classrooms
      item.status?.toLowerCase().includes(searchTerm) || // Classrooms
      item.equipment?.join(' ')?.toLowerCase().includes(searchTerm) || // Classrooms
      item.president?.toLowerCase().includes(searchTerm) || // Clubs
      item.description?.toLowerCase().includes(searchTerm) || // Clubs
      item.location?.toLowerCase().includes(searchTerm) // Clubs
  );
};

// Clear search and reset filters
const clearSearchAndFilters = () => {
  const searchInput = document.getElementById('searchInput');
  const teacherFilter = document.getElementById('teacherFilter');
  const shopFilter = document.getElementById('shopFilter');
  const classroomFilter = document.getElementById('classroomFilter');
  const clubFilter = document.getElementById('clubFilter');

  // Clear search input
  if (searchInput) {
    searchInput.value = '';
  }

  // Reset filter dropdowns to default values
  if (teacherFilter) {
    teacherFilter.value = "all";
  }
  if (shopFilter) {
    shopFilter.value = "all";
  }
  if (classroomFilter) {
    classroomFilter.value = "all";
  }
  if (clubFilter) {
    clubFilter.value = "all";
  }

  // Re-render all data
  renderTeachers(teachers);
  renderShops(shops);
  renderClassrooms(classrooms);
  renderClubs(clubs);
};

// Add event listeners for filters and search
const setupEventListeners = () => {
  // Teacher filter
  const teacherFilter = document.getElementById('teacherFilter');
  if (teacherFilter) {
    teacherFilter.addEventListener('change', (e) => {
      const filteredTeachers = filterTeachersBySubject(teachers, e.target.value);
      renderTeachers(filteredTeachers);
    });
  }

  // Shop filter
  const shopFilter = document.getElementById('shopFilter');
  if (shopFilter) {
    shopFilter.addEventListener('change', (e) => {
      const filteredShops = filterShopsByCategory(shops, e.target.value);
      renderShops(filteredShops);
    });
  }

  // Classroom filter
  const classroomFilter = document.getElementById('classroomFilter');
  if (classroomFilter) {
    classroomFilter.addEventListener('change', (e) => {
      const filteredClassrooms = filterClassroomsByBlock(classrooms, e.target.value);
      renderClassrooms(filteredClassrooms);
    });
  }

  // Lab filter
  const labFilter = document.getElementById('labFilter');
  if (labFilter) {
    labFilter.addEventListener('change', (e) => {
      const filteredLabs = filterLabsByNameOrEquipment(labs, e.target.value);
      renderLabs(filteredLabs);
    });
  }


  const clubFilter = document.getElementById('clubFilter');
  if (clubFilter) {
    clubFilter.addEventListener('change', (e) => {
      const filteredClubs = filterClubsByCategory(clubs, e.target.value);
      renderClubs(filteredClubs);
    });
  }

  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      // Search across all categories including labs
      const filteredLabs = filterLabsByNameOrEquipment(labs, searchTerm);
      const allData = [...teachers, ...shops, ...classrooms, ...clubs, ...filteredLabs];

      const filteredData = filterData(allData, searchTerm);

      // Render all filtered data
      renderTeachers(filteredData.filter((item) => item.department)); // Teachers
      renderShops(filteredData.filter((item) => item.category && !item.president)); // Shops
      renderClassrooms(filteredData.filter((item) => item.block)); // Classrooms
      renderClubs(filteredData.filter((item) => item.category && item.president)); // Clubs
    });
  }

  // Clear search button
  const clearSearch = document.getElementById('clearSearch');
  if (clearSearch) {
    clearSearch.addEventListener('click', clearSearchAndFilters);
  }
};

// Initialize event listeners
setupEventListeners();
