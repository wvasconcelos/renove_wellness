import './App.css';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//START: PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesConsultation from './pages/ServicesConsultation';
import ServicesExerciseCounseling from './pages/ServicesExerciseCounseling';
import ServicesFunctionalNutritionAndSupplements from './pages/ServicesFunctionalNutrition';
import ServicesIntegrativeWellnessAndLifestyleMedicine from './pages/ServicesIntegrativeWellnessAndLifestyleMedicine';
import ServicesNonInvasiveSkinAndBodyTreatments from './pages/ServicesNonInvasiveSkinAndBodyTreatment';
import SpecialtyBeautyAndHealthyAging from './pages/SpecialtyBeautyAndHealthyAging';
import SpecialtyChildrenAndTeensHealth from './pages/SpecialtyChildrenAndTeensHealth';
import SpecialtyChronicConditions from './pages/SpecialtyChronicConditions';
import SpecialtyHealthAndWellness from './pages/SpecialtyHealthAndWellness';
import SpecialtyWeightManagement from './pages/SpecialtyWeightManagement';
import SpecialtyWomansHealth from './pages/SpecialtyWomansHealth';

//END: PAGES
function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NavHeader />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about.html" element={<About />} />
          <Route exact path="/services.html" element={<Services />} />
          <Route exact path="/services-consultation.html" element={<ServicesConsultation/>} />
          <Route exact path="/services-exercise-counseling.html" element={<ServicesExerciseCounseling />} />
          <Route exact path="/services-functional-nutrition-and-supplements.html" element={<ServicesFunctionalNutritionAndSupplements />} />
          <Route exact path="/services-integrative-wellness-and-lifestyle-medicine.html" element={<ServicesIntegrativeWellnessAndLifestyleMedicine />} />
          <Route exact path="/services-non-invasive-skin-and-body-treatments.html" element={<ServicesNonInvasiveSkinAndBodyTreatments />} />
          <Route exact path="/specialty-health-and-wellness.html" element={<SpecialtyHealthAndWellness />} />
          <Route exact path="/specialty-womens-health.html" element={<SpecialtyWomansHealth />} />
          <Route exact path="/specialty-chronic-conditions.html" element={<SpecialtyChronicConditions />} />
          <Route exact path="/specialty-weight-management.html" element={<SpecialtyWeightManagement />} />
          <Route exact path="/specialty-beauty-and-healthy-aging.html" element={<SpecialtyBeautyAndHealthyAging />} />
          <Route exact path="/specialty-children-and-teens-health.html" element={<SpecialtyChildrenAndTeensHealth />} />
        </Route>
      </Routes>
      </BrowserRouter>
      <NavFooter />
    </>
  );
}

export default App;
