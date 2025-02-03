const setupClubEventListeners = () => {
  const clubFilter = document.getElementById('clubFilter');
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');

  clubFilter.addEventListener('change', () => {
    const selectedOption = clubFilter.options[clubFilter.selectedIndex].value;
    const filteredClubs = filterClubsByType(clubs, selectedOption);
    renderClubs(filteredClubs);
  });

  searchInput.addEventListener('input', () => {
    const filteredClubs = filterClubsByName(clubs, searchInput.value);
    renderClubs(filteredClubs);
  });

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    renderClubs(clubs);
  });
};

const filterClubsByType = (clubs, type) => {
  if (type === 'all') {
    return clubs;
  } else {
    return clubs.filter((club) => club.type === type);
  }
};

const filterClubsByName = (clubs, name) => {
  return clubs.filter((club) => club.name.toLowerCase().includes(name.toLowerCase()));
};

const renderClubs = (clubs) => {
  const clubList = document.getElementById('clubList');
  clubList.innerHTML = '';
  clubs.forEach((club) => {
    const clubItem = document.createElement('div');
    clubItem.classList.add('club-item');
    clubItem.innerHTML = `
      <h3>${club.name}</h3>
      <p>Type: ${club.type}</p>
      <p>Location: ${club.location}</p>
    `;
    clubList.appendChild(clubItem);
  });
};
