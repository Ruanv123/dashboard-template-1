import { BrowserRouter, Route, Routes } from "react-router";
import { PrivateLayout } from "./components/private-layout";
import { ThemeProvider } from "./components/theme-provider";
import { ContactsPage } from "./pages/Contacts";
import { HomePage } from "./pages/Home";
import { IntegrationsPage } from "./pages/Integrations";
import { LoginPage } from "./pages/login";
import { SenderPage } from "./pages/Sender";
import { SettingsPage } from "./pages/Settings";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/sender" element={<SenderPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/integrations" element={<IntegrationsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
