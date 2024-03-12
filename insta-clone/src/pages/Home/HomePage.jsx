import { Container,Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../Feed/FeedPosts";
const HomePage = () => {
	return (
		<Container maxWidth={"container.lg"}>
			<Flex gap={20}>
				<Box flex={2} py={10}>
					<FeedPosts />
				</Box>
				<Box flex={3} mr={20}
				display={{base:"none", lg:"block"}}
				maxWidth={"300px"} border={"1px solid"}>
					Suggested Users
				</Box>
			</Flex>
		</Container>
	);
};

export default HomePage;
