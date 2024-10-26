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
        <Route path="/" element={<NavHeader />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services-consultation" element={<ServicesConsultation/>} />
          <Route path="services-exercise-counseling" element={<ServicesExerciseCounseling />} />
          <Route path="services-functional-nutrition-and-supplements" element={<ServicesFunctionalNutritionAndSupplements />} />
          <Route path="services-integrative-wellness-and-lifestyle-medicine" element={<ServicesIntegrativeWellnessAndLifestyleMedicine />} />
          <Route path="services-non-invasive-skin-and-body-treatments" element={<ServicesNonInvasiveSkinAndBodyTreatments />} />
          <Route path="specialty-health-and-wellness" element={<SpecialtyHealthAndWellness />} />
          <Route path="specialty-womens-health" element={<SpecialtyWomansHealth />} />
          <Route path="specialty-chronic-conditions" element={<SpecialtyChronicConditions />} />
          <Route path="specialty-weight-management" element={<SpecialtyWeightManagement />} />
          <Route path="specialty-beauty-and-healthy-aging" element={<SpecialtyBeautyAndHealthyAging />} />
          <Route path="specialty-children-and-teens-health" element={<SpecialtyChildrenAndTeensHealth />} />
        </Route>
      </Routes>
      </BrowserRouter>
      <NavFooter />
    </>
  );
}

export default App;
