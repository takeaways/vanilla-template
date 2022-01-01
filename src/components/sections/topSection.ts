import BaseComponent from "../base";

class TopSection extends BaseComponent{}
const topSection = new TopSection(`
<div id="home" class="section-1">
<nav class="navbar">
  <a href="#home" class="navbar-link">Design</a>
  <a href="#customer" class="navbar-link">Customers</a>
  <a href="#team" class="navbar-link">Team</a>
  <a href="#form" class="navbar-link">Contact</a>
</nav>
<div class="floating-bg"></div>
<h1 class="section-1-heading">Create Design</h1>
<div class="logo">
  <i class="fas fa-bezier-curve"></i>
</div>
</div>
`)

export default topSection