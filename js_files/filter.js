// Common function to filter and search across different sections
const filterAndSearch = (data, searchQuery, filterValue, filterKey) => {
  if (!data || data.length === 0) return [];

  return data
    .filter((item) => filterValue === "all" || item[filterKey] === filterValue)
    .map((item) => {
      // Calculate relevance score based on search query
      let score = 0;
      const lowerQuery = searchQuery.toLowerCase();

      for (let key in item) {
        if (typeof item[key] === "string") {
          const lowerValue = item[key].toLowerCase();
          if (lowerValue.includes(lowerQuery)) {
            score += lowerValue.startsWith(lowerQuery) ? 2 : 1; // Prioritize exact matches
          }
        }
      }

      return { ...item, score };
    })
    .filter((item) => searchQuery === "" || item.score > 0) // Ensure only matching items appear
    .sort((a, b) => b.score - a.score); // Sort by relevance
};

// Generic function to handle updates for different lists
const updateFilteredList = (data, searchInput, filterDropdown, renderFunction, elementId, filterKey) => {
  const searchQuery = searchInput.value.trim();
  const filterValue = filterDropdown.value;
  const filteredData = filterAndSearch(data, searchQuery, filterValue, filterKey);

  renderFunction(filteredData);
};

// Attach event listeners for search and filter
const setupFilters = (data, searchInputId, filterDropdownId, renderFunction, elementId, filterKey) => {
  const searchInput = document.getElementById(searchInputId);
  const filterDropdown = document.getElementById(filterDropdownId);
  const clearButton = document.getElementById("clearSearch");

  if (!searchInput || !filterDropdown || !clearButton) return;

  const applyFilters = () => updateFilteredList(data, searchInput, filterDropdown, renderFunction, elementId, filterKey);

  searchInput.addEventListener("input", applyFilters);
  filterDropdown.addEventListener("change", applyFilters);
  
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterDropdown.value = "all";
    renderFunction(data);
  });

  renderFunction(data); // Show default data on load
};

// Initialize filters for different pages
window.onload = () => {
  fetchData().then(() => {
    setupFilters(teachers, "searchInput", "teacherFilter", renderTeachers, "teacherList", "department");
    setupFilters(shops, "searchInput", "shopFilter", renderShops, "shopList", "category");
    setupFilters(classrooms, "searchInput", "classroomFilter", renderClassrooms, "classroomTableContainer", "block");
    setupFilters(clubs, "searchInput", "clubFilter", renderClubs, "clubsList", "category");
    setupFilters(labs, "searchInput", "labFilter", renderLabs, "labTableContainer", "name");
  });
};
