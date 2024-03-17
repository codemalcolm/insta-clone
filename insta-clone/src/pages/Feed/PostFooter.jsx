import {
	Box,
	Flex,
	Text,
	InputGroup,
	InputRightElement,
	Input,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from "../../assets/constants";
const PostFooter = ({username, isProfilePage}) => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(1000);
	const handleLike = () => {
		if (liked) {
			setLiked(false);
			setLikes(likes - 1);
		} else {
			setLiked(true);
			setLikes(likes - 1);
		}
	};
	return (
		<>
			<Flex alignItems={"center"} gap={4} pt={0} mb={2} mt={4}>
				<Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
					{!liked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Box>
				<Box>
					<CommentLogo />
				</Box>
			</Flex>
			<Text fontWeight={600} fontSize={"sm"}>
				{likes} likes
			</Text>
			{!isProfilePage &&(
				<>
					<Text fontWeight={700} fontSize={"sm"}>
						{username}{" "}
						<Text as="span" fontWeight={600} fontSize={"sm"}>
							Feeling good
						</Text>
					</Text>
					<Text color={"gray"} fontSize={"sm"}>
						View all {likes} comments
					</Text>
				</>
			)}
			<Flex
				alignItems={"center"}
				gap={2}
				justifyContent={"space-between"}
				w={"full"}
			>
				<InputGroup mt={2} mb={10}>
					<Input variant={"flushed"} placeholder="Add a comment" />
					<InputRightElement>
						<Button
							fontSize={14}
							color={"blue.500"}
							fontWeight={"600"}
							height={6}
							cursor={"pointer"}
							_hover={{ color: "blue.300" }}
							bg={"transparent"}
              transition={"0.2s ease-in-out"}
						>
							Post
						</Button>
					</InputRightElement>
				</InputGroup>
			</Flex>
		</>
	);
};

export default PostFooter;
