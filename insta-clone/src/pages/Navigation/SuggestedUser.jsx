import { Flex, Avatar, VStack, Box, Button } from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";
const SuggestedUser = ({ user, setUser }) => {
	const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(user.uid)
	const authUser = useAuthStore(state => state.user)
	const onFollowUser = async () =>{
		await handleFollowUser();
		setUser({
			...user,
			followers: isFollowing 
			? user.followers.filter((follower) => follower.uid !== authUser.uid) 
			: [...user.followers, authUser],
		})
	}

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex>
				<Avatar src={user.profilePicURL} size={"md"} />
				<VStack spacing={2} mx={2}>
					<Box fontSize={12} fontWeight={"bold"}>
						{user.fullName}
					</Box>
					<Box fontSize={12} color={"gray.500"}>
						{user.followers.length} followers
					</Box>
				</VStack>
			</Flex>
			{authUser.uid !== user.uid && (
				<Button
				fontSize={13}
				bg={"transparent"}
				p={0}
				height={"max-content"}
				fontWeight={"medium"}
				color={"blue.400"}
				cursor={"pointer"}
				_hover={{ color: "white" }}
				onClick={onFollowUser}
				isLoading={isUpdating}
			>
				{isFollowing ? "Unfollow" : "Follow"}
			</Button>
			)}
		</Flex>
	);
};

export default SuggestedUser;
