import {Flex,Box,Text} from "@chakra-ui/react"
import { BsGrid3X3 } from "react-icons/bs";
import { MdBookmarkBorder } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
const ProfileTabs = () => {
	return (
		<Flex
		w={"full"}
		justifyContent={"center"}
		gap={{base:1, sm:1}}
		textTransform={"uppercase"}
		fontWeight={"bold"}
		>
			<Flex borderTop={"1px solid white"} alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<BsGrid3X3 />
				</Box>
				<Text fontSize={12} display={{base:"none", sm:"block"}}>Posts</Text>
			</Flex>
			<Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<MdBookmarkBorder />
				</Box>
				<Text fontSize={12} display={{base:"none", sm:"block"}}>Saved</Text>
			</Flex>
			<Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<FaRegHeart />
				</Box>
				<Text fontSize={12} display={{base:"none", sm:"block"}}>Likes</Text>
			</Flex>
		</Flex>
	)
};

export default ProfileTabs;
