import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import GlobalSourcing from "./pages/services/GlobalSourcing";
import ExportManagement from "./pages/services/ExportManagement";
import ImportCompliance from "./pages/services/ImportCompliance";
import LogisticsFreight from "./pages/services/LogisticsFreight";
import CustomsDocumentation from "./pages/services/CustomsDocumentation";
import QualityInspection from "./pages/services/QualityInspection";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const queryClient = new QueryClient();

// Wrapper component to apply scroll animations
const AppContent = () => {
  useScrollAnimation();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/global-sourcing" element={<GlobalSourcing />} />
      <Route path="/services/export-management" element={<ExportManagement />} />
      <Route path="/services/import-compliance" element={<ImportCompliance />} />
      <Route path="/services/logistics-freight" element={<LogisticsFreight />} />
      <Route path="/services/customs-documentation" element={<CustomsDocumentation />} />
      <Route path="/services/quality-inspection" element={<QualityInspection />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
