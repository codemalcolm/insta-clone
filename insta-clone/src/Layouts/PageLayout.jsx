import { Box, Flex, Spinner } from "@chakra-ui/react";
import SideBar from "../pages/Navigation/Sidebar/SideBar";
import { useLocation } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../pages/Navigation/Navbar";


// instead of adding the SideBar component to every page, we can add it only tonce to the PageLayout component and wrap the children with it.
//This way, we can have a sidebar on every page except the AuthPage.

const PageLayout = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const { pathname } = useLocation();
	const canRenderSideBar = pathname !== "/auth" && user;
	const canRenderNavbar = !user && !loading && pathname !== "/auth";
	const checkingUserIsAuth = !user && loading
	if(checkingUserIsAuth) return <PageLayoutSpinner />
	return (
		<>
			<Flex flexDirection={canRenderNavbar ? "column" : "row"}>
				{/* sidebar on the left */}
				{canRenderSideBar ? (
					<Box w={{ base: "70px", md: "240px" }}>
						<SideBar />
					</Box>
				) : null}
				{/* Navbar */}
				{ canRenderNavbar ? <Navbar /> : null}
				{/* content on the right */}
				<Box
					flex={1}
					w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
					mx={"auto"}
				>
					{children}
				</Box>
			</Flex>
		</>
	);
};

export default PageLayout;

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
}