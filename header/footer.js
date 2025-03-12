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
      <h3>Follow Us</h3>
      <div class="social-links">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>

    <!-- Newsletter Subscription -->
    <div class="footer-newsletter">
      <h3>Thank you for visiting our website <br> NU navigator</h3>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
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