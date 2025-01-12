// filter.js

let currentSearchFilter = "all"; // Track the current search filter

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

// Search functionality for teachers, shops, and classrooms
const filterData = (data, searchTerm, filterType) => {
  if (!searchTerm) return data; // Return all data if search term is empty

  switch (filterType) {
    case "teachers":
      return data.filter(
        (teacher) =>
          teacher.name?.toLowerCase().includes(searchTerm) ||
          teacher.email?.toLowerCase().includes(searchTerm) ||
          teacher.department?.toLowerCase().includes(searchTerm) ||
          teacher.officeLocation?.toLowerCase().includes(searchTerm) ||
          teacher.phoneNumber?.toLowerCase().includes(searchTerm)
      );

    case "shops":
      return data.filter(
        (shop) =>
          shop.name?.toLowerCase().includes(searchTerm) ||
          shop.category?.toLowerCase().includes(searchTerm) ||
          shop.openingHours?.toLowerCase().includes(searchTerm) ||
          shop.contactInfo?.toLowerCase().includes(searchTerm)
      );

    case "classrooms":
      return data.filter(
        (classroom) =>
          classroom.block?.toLowerCase().includes(searchTerm) ||
          classroom.roomNo?.toLowerCase().includes(searchTerm) ||
          classroom.status?.toLowerCase().includes(searchTerm) ||
          classroom.equipment?.join(' ')?.toLowerCase().includes(searchTerm)
      );

    case "all": // Search across all categories
      return data.filter(
        (item) =>
          item.name?.toLowerCase().includes(searchTerm) || // Common property
          item.email?.toLowerCase().includes(searchTerm) || // Teachers
          item.department?.toLowerCase().includes(searchTerm) || // Teachers
          item.officeLocation?.toLowerCase().includes(searchTerm) || // Teachers
          item.phoneNumber?.toLowerCase().includes(searchTerm) || // Teachers
          item.category?.toLowerCase().includes(searchTerm) || // Shops
          item.openingHours?.toLowerCase().includes(searchTerm) || // Shops
          item.contactInfo?.toLowerCase().includes(searchTerm) || // Shops
          item.block?.toLowerCase().includes(searchTerm) || // Classrooms
          item.roomNo?.toLowerCase().includes(searchTerm) || // Classrooms
          item.status?.toLowerCase().includes(searchTerm) || // Classrooms
          item.equipment?.join(' ')?.toLowerCase().includes(searchTerm) // Classrooms
      );

    default:
      return data;
  }
};

// Show/hide containers based on the selected filter
const updateContainerVisibility = (filter) => {
  const teachersContainer = document.getElementById('teachersContainer');
  const shopsContainer = document.getElementById('shopsContainer');
  const classroomsContainer = document.getElementById('classroomsContainer');

  if (filter === "all") {
    teachersContainer.classList.remove('hidden');
    shopsContainer.classList.remove('hidden');
    classroomsContainer.classList.remove('hidden');
  } else if (filter === "teachers") {
    teachersContainer.classList.remove('hidden');
    shopsContainer.classList.add('hidden');
    classroomsContainer.classList.add('hidden');
  } else if (filter === "shops") {
    teachersContainer.classList.add('hidden');
    shopsContainer.classList.remove('hidden');
    classroomsContainer.classList.add('hidden');
  } else if (filter === "classrooms") {
    teachersContainer.classList.add('hidden');
    shopsContainer.classList.add('hidden');
    classroomsContainer.classList.remove('hidden');
  }
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

  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      // Search across all categories if no filter is selected
      if (currentSearchFilter === "all") {
        const allData = [...teachers, ...shops, ...classrooms];
        const filteredData = filterData(allData, searchTerm, "all");

        // Render all filtered data
        renderTeachers(filteredData.filter((item) => item.department)); // Teachers
        renderShops(filteredData.filter((item) => item.category)); // Shops
        renderClassrooms(filteredData.filter((item) => item.block)); // Classrooms
      } else {
        // Search within the selected filter
        const filteredData = filterData(
          currentSearchFilter === "teachers" ? teachers :
          currentSearchFilter === "shops" ? shops :
          classrooms,
          searchTerm,
          currentSearchFilter
        );

        if (currentSearchFilter === "teachers") {
          renderTeachers(filteredData);
        } else if (currentSearchFilter === "shops") {
          renderShops(filteredData);
        } else if (currentSearchFilter === "classrooms") {
          renderClassrooms(filteredData);
        }
      }
    });
  }

// Clear search input
const clearSearch = document.getElementById('clearSearch');
if (clearSearch) {
  clearSearch.addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');
    const searchFilter = document.getElementById('searchFilter');
    const teacherFilter = document.getElementById('teacherFilter');
    const shopFilter = document.getElementById('shopFilter');
    const classroomFilter = document.getElementById('classroomFilter');

    // Clear the search input
    if (searchInput) {
      searchInput.value = '';
    }

    // Reset the search filter to "all"
    if (searchFilter) {
      searchFilter.value = "all";
      currentSearchFilter = "all"; // Update the current filter state
    }

    // Reset other filters to their default values
    if (teacherFilter) {
      teacherFilter.value = "all";
    }
    if (shopFilter) {
      shopFilter.value = "all";
    }
    if (classroomFilter) {
      classroomFilter.value = "all";
    }

    // Show all containers
    updateContainerVisibility("all");

    // Re-render all data
    renderTeachers(teachers);
    renderShops(shops);
    renderClassrooms(classrooms);
  });
}

  // Search filter (teachers, shops, classrooms)
  const searchFilter = document.getElementById('searchFilter');
  if (searchFilter) {
    searchFilter.addEventListener('change', (e) => {
      currentSearchFilter = e.target.value;
      searchInput.value = ''; // Clear search input when filter changes
      updateContainerVisibility(currentSearchFilter); // Show/hide containers
      renderTeachers(teachers);
      renderShops(shops);
      renderClassrooms(classrooms);
    });
  }
};

// Initialize event listeners
setupEventListeners();