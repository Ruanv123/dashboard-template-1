import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router";
import { PrivateLayout } from "./components/private-layout";
import { ThemeProvider } from "./components/theme-provider";
import { ContactsPage } from "./pages/Contacts";
import { HomePage } from "./pages/Home";
import { IntegrationsPage } from "./pages/Integrations";
import { LoginPage } from "./pages/login";
import { MessagesPage } from "./pages/Messages";
import { SenderPage } from "./pages/Sender";
import { SettingsPage } from "./pages/Settings";
import { AuthProvider } from "./components/auth-context";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
            <BrowserRouter>
              <AuthProvider>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route element={<PrivateLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sender" element={<SenderPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route
                      path="/integrations"
                      element={<IntegrationsPage />}
                    />
                    <Route path="/messages" element={<MessagesPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Route>
                </Routes>
              </AuthProvider>
            </BrowserRouter>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
