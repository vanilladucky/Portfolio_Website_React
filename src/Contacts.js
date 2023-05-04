export default function Contacts() {
    return (
        <section id="contact" class="contact-section">
        <div class="contact-section-header">
          <h2>Let's work together!</h2>
          <p>I like my coffee black, no sugar, no milk</p>
        </div>
        <div class="contact-links">
          <a
            id="profile-link"
            href="https://github.com/vanilladucky"
            target="_blank"
            class="btn contact-details"
            ><i class="fab fa-github"></i> GitHub</a
          >
          <a
            href="https://www.kaggle.com/kimmik123"
            target="_blank"
            class="btn contact-details"
            >Kaggle</a
          >
          <a href="mailto:kimhyunbin106@gmail.com" class="btn contact-details">
            <i class="fas fa-at"></i> Mail</a
          >
        </div>
      </section>
    )
}