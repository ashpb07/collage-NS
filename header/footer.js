// Get the footer container element
const footerContainer = document.querySelector('footer');

// Create the footer HTML
const footerHTML = `
  <div class="footer-container">
    <!-- Contact Information -->
    <div class="footer-contact">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:support@collegeroomlocator.com">support@collegeroomlocator.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      <p>Address: 123 College Street, Campus Town, USA</p>
    </div>

    <!-- Social Media Links -->
    <div class="footer-social">
      <div class="social-links">
      </div>
    </div>

    <!-- Newsletter Subscription -->
    <div class="footer-newsletter">
      <h3>Thank you for visiting our website <br> NU navigator</h3>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
      <p class="thank-you-message" style="display:none; color: green; margin-top: 10px;">Thank you for subscribing!</p>
    </div>
  </div>

  <!-- Footer Bottom -->
  <div class="footer-bottom">
    <p>&copy; 2023 College Room Locator. All rights reserved. | 
      <a href="#">Privacy Policy</a> | 
      <a href="#">Terms of Service</a>
    </p>
  </div>
`;

// Append the footer HTML to the footer container
footerContainer.innerHTML = footerHTML;

// Add event listener for newsletter form submission
const newsletterForm = footerContainer.querySelector('.newsletter-form');
const thankYouMessage = footerContainer.querySelector('.thank-you-message');

newsletterForm.addEventListener('submit', function(event) {
  event.preventDefault();
  newsletterForm.style.display = 'none';
  thankYouMessage.style.display = 'block';
});
