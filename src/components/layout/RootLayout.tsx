import { Toaster } from "@/components/ui/toaster";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import Navbar from "./NavBar"; 

export const RootLayout = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Apply dark class to html element based on theme state
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};
