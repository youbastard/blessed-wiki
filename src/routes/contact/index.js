import { h } from 'preact';

const Contact = (props) => (
  <div>
    <h1>Contact me</h1>
    <div>
      <p>
        <div>Hi!</div>
        <div>Cheers 🍻</div>
      </p>
      <form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input type="text" name="name" placeholder="Name" required />
        </p>
        <p>
          <input type="email" name="email" placeholder="E-Mail" required />
        </p>
        <p>
          <textarea name="message" placeholder="Message" />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
);

export default Contact;
