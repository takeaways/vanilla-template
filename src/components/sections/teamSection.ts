import BaseComponent from "../base";

class TeamSection extends BaseComponent{}
const teamSection = new TeamSection(`
<section id="team" class="section-3">
  <h1 class="section-heading">Team</h1>
  <div class="team-wrapper">
    <div class="team-member">
      <img src="images/team-member-1.jpg">
      <h2 class="team-member-name">Nick Smith <span>(Designer)</span></h2>
      <ul class="team-member-skills">
        <li>Ps</li>
        <li>Figma</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Ai</li>
      </ul>
      <a href="#" class="projects-btn">Projects</a>
      <div class="story-btn" title="my story">
        <div class="story-btn-line"></div>
      </div>
      <div class="story">
        <h4 class="story-heading">About Me</h4>
        <p class="story-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam id officiis. Aperiam adipisci impedit aliquam, recusandae optio libero ut pariatur cupiditate, odit beatae deserunt vero! Debitis, repellendus veniam! Illum.</p>
      </div>
    </div>
    <div class="team-member">
      <img src="images/team-member-2.jpg">
      <h2 class="team-member-name">Bob Line <span>(Designer)</span></h2>
      <ul class="team-member-skills">
        <li>Ae</li>
        <li>Pr</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Inkscape</li>
      </ul>
      <a href="#" class="projects-btn">Projects</a>
      <div class="story-btn" title="my story">
        <div class="story-btn-line"></div>
      </div>
      <div class="story">
        <h4 class="story-heading">About Me</h4>
        <p class="story-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam id officiis. Aperiam adipisci impedit aliquam, recusandae optio libero ut pariatur cupiditate, odit beatae deserunt vero! Debitis, repellendus veniam! Illum.</p>
      </div>
    </div>
    <div class="team-member">
      <img src="images/team-member-3.jpg">
      <h2 class="team-member-name">John M <span>(Developer)</span></h2>
      <ul class="team-member-skills">
        <li>Javascript</li>
        <li>ReactJs</li>
        <li>NodeJs</li>
        <li>MongoDB</li>
        <li>Python</li>
      </ul>
      <a href="#" class="projects-btn">Projects</a>
      <div class="story-btn" title="my story">
        <div class="story-btn-line"></div>
      </div>
      <div class="story">
        <h4 class="story-heading">About Me</h4>
        <p class="story-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam id officiis. Aperiam adipisci impedit aliquam, recusandae optio libero ut pariatur cupiditate, odit beatae deserunt vero! Debitis, repellendus veniam! Illum.</p>
      </div>
    </div>
  </div>
</section>
`);

teamSection.setEventHandlers(".story-btn", "click", (e)=>{
  const button = (e.currentTarget as HTMLButtonElement)!
  button.classList.toggle("change");
  button.nextElementSibling?.classList.toggle("change")
})

export default teamSection