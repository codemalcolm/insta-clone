import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	Input,
	InputGroup,
	InputRightElement,
	Button,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "../../../hooks/useSignUpWithEmailAndPassword";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const { loading, error, signup } = useSignUpWithEmailAndPassword();
	return (
		<>
			<Input
				placeholder="Full Name"
				fontSize={14}
				type="text"
				value={inputs.fullName}
				size={"sm"}
				rounded={6}
				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
			/>
			<Input
				placeholder="Username"
				fontSize={14}
				type="text"
				value={inputs.username}
				size={"sm"}
				rounded={6}
				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
			/>
			<Input
				placeholder="Email"
				fontSize={14}
				type="email"
				value={inputs.email}
				size={"sm"}
				rounded={6}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			<InputGroup>
				<Input
					placeholder='Password'
					fontSize={14}
					type={showPassword ? "text" : "password"}
					value={inputs.password}
					size={"sm"}
					rounded={6}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<InputRightElement h='full'>
					<Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>
			{/* <InputGroup>
				<Input
					placeholder="Repeat Password"
					fontSize={14}
					type={showPassword ? "text" : "password"}
					value={inputs.password}
					size={"sm"}
					rounded={6}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<InputRightElement h={"full"}>
					<Button
						variant={"ghost"}
						size={"sm"}
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup> */}

			{error && (
				<Alert status="error" fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{!error.message ? "This user is already registered" : error.message}
				</Alert>
			)}

			<Button
				w={"full"}
				colorScheme="blue"
				size={"sm"}
				rounded={6}
				fontSize={14}
				isLoading={loading}
				onClick={() => signup(inputs)}
			>
				Sign Up
			</Button>
		</>
	);
};

export default SignUp;
