import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ModalProvider } from "./modal/ModalProvider.tsx";
import { router } from "./routes/router.tsx";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ModalProvider>
          <Toaster />
          <Sonner />
          <RouterProvider router={router} />
        </ModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);
