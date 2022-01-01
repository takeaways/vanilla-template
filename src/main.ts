import './style.css'

import App from "./app/app";
import TopSection from './components/sections/topSection';
import CustomerSection from "./components/sections/customerSection"
import TeamSection from "./components/sections/teamSection";
import FormSection from "./components/sections/formSection"


App.render(document.body);
App.attach(TopSection, CustomerSection, TeamSection,FormSection);