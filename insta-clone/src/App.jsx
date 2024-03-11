import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Home/Auth/AuthPage";
import PageLayout from "./Layouts/PageLayout";

function App() {
	return (
		<>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </PageLayout>
		</>
	);
}

export default App;
