// Fetch team members data and render dynamically
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('team-members-container');

  fetch('/data/teamMembers.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');

        memberDiv.innerHTML = `
          <img src="${member.image}" alt="Team Member ${member.name}">
          <h2>${member.name}</h2>
          <p>${member.role}</p>
          <div class="social-links">
            <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="${member.social.whatsapp}" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        `;

        container.appendChild(memberDiv);
      });
    })
    .catch(error => {
      console.error('Error loading team members:', error);
      container.innerHTML = '<p>Failed to load team members.</p>';
    });
});
