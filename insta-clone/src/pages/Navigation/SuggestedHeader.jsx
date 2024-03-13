import { Avatar, Box, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={1}>
				<Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />
				<Box fontSize={12} fontWeight={"bold"}>
					asaprogrammer_
				</Box>
			</Flex>
			<Link to={`/auth`}>
				<Button
					size={"xs"}
					background={"transparent"}
					_hover={{ background: "transparent" }}
					fontSize={14}
					fontWeight={"medium"}
					color={"blue.400"}
					cursor={"pointer"}
				>
					Log out
				</Button>
			</Link>
		</Flex>
	);
};

export default SuggestedHeader;
