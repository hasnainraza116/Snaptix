import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { CustomCursor } from "./components/animations/CustomCursor";
import { PageLoader } from "./components/animations/PageLoader";
import { ScrollToTop } from "./components/animations/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <CustomCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
