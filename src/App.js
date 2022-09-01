import './App.css'    
import { Home } from "./pages/index"
import { Routes, Route } from "react-router-dom";
import { About, WebSolution, MobileSolution, CustomSolution, BusinessIntelligence, ProductSolution, SimanisApp, OranyeApp, LemonApp, EasybiApp, ManageService, ProfessionalService, ItBootcamp, Career, Contact, NewsPage } from "./pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/websolution" element={<WebSolution />} />
        <Route path="/mobilesolution" element={<MobileSolution />} />
        <Route path="/customsolution" element={<CustomSolution />} />
        <Route path="/bisolution" element={<BusinessIntelligence />} />
        <Route path="/productsolution" element={<ProductSolution />} />
        <Route path="/simanisapp" element={<SimanisApp />} />
        <Route path="/oranyeapp" element={<OranyeApp />} />
        <Route path="/lemonapp" element={<LemonApp />} />
        <Route path="/easybiapp" element={<EasybiApp />} />
        <Route path="/manageservice" element={<ManageService />} />
        <Route path="/proservices" element={<ProfessionalService />} />
        <Route path="/itbootcamp" element={<ItBootcamp />} />
        <Route path="/career" element={<Career />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>      
    </>
  );
}

export default App;
