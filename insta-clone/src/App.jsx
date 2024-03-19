import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Home/Auth/AuthPage";
import PageLayout from "./Layouts/PageLayout";
import ProfilePage from "./pages/Profile/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
  const [authUser] = useAuthState(auth)
	return (
		<>
      <PageLayout>
        <Routes>
          <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/auth"/>}/>
          <Route path="/auth" element={!authUser ? <AuthPage/> : <Navigate to="/"/>}/>
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
		</>
	);
}

export default App;
