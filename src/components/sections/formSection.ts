import BaseComponent from "../base";

class FormSection extends BaseComponent{}

const formSection = new FormSection(`
<div id="form" class="section-4">
  <h1 class="section-heading">Contant</h1>
  <div class="form-container">
    <img src="/images/form-img.png" class="form-img">
    <form class="contact-form">
      <input type="text" placeholder="Your Name">
      <input type="email" placeholder="Your Email">
      <textarea placeholder="Your Message"></textarea>
      <input type="submit" value="Send">
    </form>
  </div>
  <p class="copyright">
    Copyright &copy; CodeAndCreate All Rights Reserved
  </p>
</div>
`)

export default formSection;