import { Image, Text, Flex } from "@chakra-ui/react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import useShowToast from "../../../hooks/useShowToast";
import { auth, firestore } from "../../../firebase/firebase";
import useAuthStore from "../../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth = ({ isLogin }) => {
	const [signInWithGoogle, error] = useSignInWithGoogle(auth);
	const showToast = useShowToast();
	const loginUser = useAuthStore((state) => state.login);
	
	const handleGoogleAuth = async () =>{
		try {
			const newUser = await signInWithGoogle()
			if(!newUser && error){
				showToast("Error", error.message, "error")
				return
			}
			const userRef = doc(firestore, "users", newUser.user.uid);
			const userSnap = await getDoc(userRef);

			if(userSnap.exists()){
				// login
				const userDoc = userSnap.data()
				localStorage.setItem("user-info", JSON.stringify(userDoc))
				loginUser(userDoc)
			}else {
				// sign-up
				const userDocument = {
                    uid:newUser.user.uid,
                    email:newUser.user.email,
                    username:newUser.user.email.split("@")[0],
                    fullName:newUser.user.displayName,
                    bio:"",
                    profilePicURL:newUser.user.photoURL,
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }
				await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
                localStorage.setItem("user-info", JSON.stringify(userDocument))
                loginUser(userDocument)
			}
		} catch (error) {
			showToast("Error", error.message,"error")
		}
	}
	return (
		<Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
			<Image src="/google.png" w={5} alt="Google logo" />
			<Text mx="2" color={"blue.500"} onClick={handleGoogleAuth}>
				{isLogin ? "Log in with Google" : "Sign up with Google"}
			</Text>
		</Flex>
	);
};

export default GoogleAuth;
