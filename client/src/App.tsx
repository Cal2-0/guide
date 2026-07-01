import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "next-themes";
import { NavigationBar } from "./components/ui/NavigationBar";
import Landing from "./pages/Landing";
import { Discover } from "./pages/Discover";
import { BuildIntent } from "./pages/BuildIntent";
import { Library } from "./pages/Library";
import { ToolDetail } from "./pages/ToolDetail";
import { MyStack } from "./pages/MyStack";
import { RevealBackground } from "./components/ui/RevealBackground";
import { StartGuide } from "./pages/StartGuide";

function Router() {
  return (
    <>
      <NavigationBar />
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
