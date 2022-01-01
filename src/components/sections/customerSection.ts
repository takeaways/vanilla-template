import BaseComponent from "../base";

class CustomerSection extends BaseComponent{}
const customerSection = new CustomerSection(`
<section id="customer" class="section-2">
<h1 class="section-heading">Customers</h1>
<div class="customers-wrapper">
  <div class="customer">
    <i class="fas fa-quote-left"></i>
    <p class="customer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi non magni incidunt corrupti perferendis! Culpa, inventore eveniet laudantium non cupiditate maxime optio, error officiis exercitationem atque aliquid ad esse.</p>
    <div class="customer-rating">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <img src="images/customer-img-1.jpg" class="customer-img">
    <h4 class="customer-name">Jane Lee</h4>
  </div>
  <div class="customer">
    <i class="fas fa-quote-left"></i>
    <p class="customer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi non magni incidunt corrupti perferendis! Culpa, inventore eveniet laudantium non cupiditate maxime optio, error officiis exercitationem atque aliquid ad esse.</p>
    <div class="customer-rating">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <img src="images/customer-img-2.jpg" class="customer-img">
    <h4 class="customer-name">Bob Lee</h4>
  </div>
  <div class="customer">
    <i class="fas fa-quote-left"></i>
    <p class="customer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi non magni incidunt corrupti perferendis! Culpa, inventore eveniet laudantium non cupiditate maxime optio, error officiis exercitationem atque aliquid ad esse.</p>
    <div class="customer-rating">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <img src="images/customer-img-3.jpg" class="customer-img">
    <h4 class="customer-name">Lane no</h4>
  </div>
</div>
</section>
`)

export default customerSection