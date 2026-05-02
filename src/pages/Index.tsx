import { lazy, Suspense } from "react";
import { Loader } from "@/components/moa/Loader";
import { Navbar } from "@/components/moa/Navbar";
import { Hero } from "@/components/moa/Hero";

const ByTheNumbers = lazy(() => import("@/components/moa/ByTheNumbers").then((m) => ({ default: m.ByTheNumbers })));
const Retail = lazy(() => import("@/components/moa/Retail").then((m) => ({ default: m.Retail })));
const Luxury = lazy(() => import("@/components/moa/Luxury").then((m) => ({ default: m.Luxury })));
const Dining = lazy(() => import("@/components/moa/Dining").then((m) => ({ default: m.Dining })));
const Attractions = lazy(() => import("@/components/moa/Attractions").then((m) => ({ default: m.Attractions })));
const Events = lazy(() => import("@/components/moa/Events").then((m) => ({ default: m.Events })));
const VenueModule = lazy(() => import("@/components/moa/VenueModule").then((m) => ({ default: m.VenueModule })));
const Sponsorship = lazy(() => import("@/components/moa/Sponsorship").then((m) => ({ default: m.Sponsorship })));
const LeasingPaths = lazy(() => import("@/components/moa/LeasingPaths").then((m) => ({ default: m.LeasingPaths })));
const Closing = lazy(() => import("@/components/moa/Closing").then((m) => ({ default: m.Closing })));
const Footer = lazy(() => import("@/components/moa/Footer").then((m) => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <ByTheNumbers />
          <Retail />
          <Luxury />
          <Dining />
          <Attractions />
          <Events />
          <VenueModule />
          <Sponsorship />
          <LeasingPaths />
          <Closing />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
