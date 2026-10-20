import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "next-themes";
import { NavigationBar } from "./components/ui/NavigationBar";
import { RevealBackground } from "./components/ui/RevealBackground";
import React, { Suspense, useEffect } from 'react';

// ─── Lazy Page Imports ─────────────────────────────────────────
const Landing = React.lazy(() => import("./pages/Landing"));
const Directory = React.lazy(() => import("./pages/Directory").then(module => ({ default: module.Directory })));
const Blueprints = React.lazy(() => import("./pages/Blueprints").then(module => ({ default: module.Blueprints })));
const BuildIntent = React.lazy(() => import("./pages/BuildIntent").then(module => ({ default: module.BuildIntent })));
const ToolDetail = React.lazy(() => import("./pages/ToolDetail").then(module => ({ default: module.ToolDetail })));
const MyStack = React.lazy(() => import("./pages/MyStack").then(module => ({ default: module.MyStack })));

// ─── Redirect helpers for backward-compatible V1 URLs ──────────
function RedirectToDirectory() {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate("/directory" + window.location.search, { replace: true });
  }, [navigate]);
  return null;
}

function RedirectToBlueprints() {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate("/blueprints", { replace: true });
  }, [navigate]);
  return null;
}

function RedirectBuildIntent({ params }: { params: { intent: string } }) {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate(`/blueprints/${params.intent}`, { replace: true });
  }, [navigate, params.intent]);
  return null;
}

// ─── Router ────────────────────────────────────────────────────
function Router() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-foreground/50">Loading...</div>}>
        <Switch>
          {/* V2 Routes */}
          <Route path="/" component={Landing} />
          <Route path="/directory" component={Directory} />
          <Route path="/blueprints" component={Blueprints} />
          <Route path="/blueprints/:intent" component={BuildIntent} />
          <Route path="/tool/:id" component={ToolDetail} />
          <Route path="/stack" component={MyStack} />

          {/* V1 Backward-compatible aliases & redirects */}
          <Route path="/skills" component={RedirectToDirectory} />
          <Route path="/radars" component={RedirectToDirectory} />
          <Route path="/library" component={Directory} />
          <Route path="/discover" component={RedirectToDirectory} />
          <Route path="/guide" component={RedirectToBlueprints} />
          <Route path="/build/:intent" component={RedirectBuildIntent} />

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

// ─── App ───────────────────────────────────────────────────────
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>
          <Toaster />
          <RevealBackground>
            <Router />
          </RevealBackground>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
