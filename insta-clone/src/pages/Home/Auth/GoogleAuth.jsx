import { Image, Text, Flex } from "@chakra-ui/react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import useShowToast from "../../../hooks/useShowToast";

const GoogleAuth = ({ isLogin }) => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const showToast = useShowToast();
	const loginUser = useAuthStore((state) => state.login);
	return (
		<Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
			<Image src="/google.png" w={5} alt="Google logo" />
			<Text mx="2" color={"blue.500"}>
				{isLogin ? "Log in with Google" : "Sign up with Google"}
			</Text>
		</Flex>
	);
};

export default GoogleAuth;
