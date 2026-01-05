import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingUI } from "@/components/FloatingUI";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import Shipping from "@/pages/Shipping";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/envios" component={Shipping} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="bg-background text-foreground min-h-screen flex flex-col relative font-body selection:bg-primary selection:text-black">
        <Navigation />
        <FloatingUI />
        
        <main className="flex-grow">
          <Router />
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
