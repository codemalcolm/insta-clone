import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Home/Auth/AuthPage";
import PageLayout from "./Layouts/PageLayout";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
	return (
		<>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
		</>
	);
}

export default App;
