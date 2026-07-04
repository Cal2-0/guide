import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "next-themes";
import { NavigationBar } from "./components/ui/NavigationBar";
import { RevealBackground } from "./components/ui/RevealBackground";
import React, { Suspense } from 'react';

const Landing = React.lazy(() => import("./pages/Landing"));
const Discover = React.lazy(() => import("./pages/Discover").then(module => ({ default: module.Discover })));
const BuildIntent = React.lazy(() => import("./pages/BuildIntent").then(module => ({ default: module.BuildIntent })));
const Library = React.lazy(() => import("./pages/Library").then(module => ({ default: module.Library })));
const ToolDetail = React.lazy(() => import("./pages/ToolDetail").then(module => ({ default: module.ToolDetail })));
const MyStack = React.lazy(() => import("./pages/MyStack").then(module => ({ default: module.MyStack })));
const StartGuide = React.lazy(() => import("./pages/StartGuide").then(module => ({ default: module.StartGuide })));

function Router() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-foreground/50">Loading...</div>}>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/discover" component={Discover} />
          <Route path="/build/:intent" component={BuildIntent} />
          <Route path="/library" component={Library} />
          <Route path="/tool/:id" component={ToolDetail} />
          <Route path="/stack" component={MyStack} />
          <Route path="/guide" component={StartGuide} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

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
