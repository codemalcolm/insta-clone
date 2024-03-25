import {
	Flex,
	AvatarGroup,
	Avatar,
	VStack,
	Text,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";

const ProfileHeader = () => {
	const { userProfile } = useUserProfileStore();

	const authUser = useAuthStore((state) => state.user);
	const visitingOwnProfileAndAuth =
		authUser && authUser.username === userProfile.username;
	const visitingAnotherProfileAndAuth =
		authUser && authUser.username !== userProfile.username;

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
		>
			<AvatarGroup
				size={{ base: "xl", md: "2xl" }}
				justifySelf={"center"}
				alignSelf={"flex-start"}
				mx={"auto"}
			>
				<Avatar
					name="As a programmer"
					src={userProfile.profilePicURL}
					alt="As a programmer logo"
				/>
			</AvatarGroup>
			<VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
				<Flex
					gap={4}
					direction={{ base: "column", sm: "row" }}
					justifyContent={{ base: "center", sm: "flex-start" }}
					alignItems={"center"}
					w={"full"}
				>
					<Text fontSize={{ base: "sm", md: "lg" }}>
						{userProfile.username}
					</Text>
					{visitingOwnProfileAndAuth && (
						<Flex gap={4} alignContent={"center"} justifyContent={"center"}>
							<Button
								bg={"gray.400"}
								color={"black"}
								h={8}
								size={{ base: "xs", md: "sm" }}
								onClick={onOpen}
							>
								Edit Profile
							</Button>
						</Flex>
					)}
					{visitingAnotherProfileAndAuth && (
						<Flex gap={4} alignContent={"center"} justifyContent={"center"}>
							<Button
								bg={"blue.400"}
								_hover={{ bg: "blue.200" }}
								color={"white"}
								h={8}
								size={{ base: "xs", md: "sm" }}
							>
								Follow
							</Button>
						</Flex>
					)}
				</Flex>
				<Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as="span" fontWeight={"bold"} mr={1}>
							{userProfile.posts.length === 0 ? "0" : userProfile.posts}
						</Text>
						Posts
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as="span" fontWeight={"bold"} mr={1}>
							{userProfile.followers.length === 0 ? "0" : userProfile.followers}
						</Text>
						Followers
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as="span" fontWeight={"bold"} mr={1}>
							{userProfile.following.length === 0 ? "0" : userProfile.following}
						</Text>
						Following
					</Text>
				</Flex>
				<Flex alignItems={"center"} gap={4}>
					<Text fontSize={"small"} fontWeight={"bold"}>
						{userProfile.fullName}
					</Text>
				</Flex>
				<Text fontSize={"small"}>{userProfile.bio}</Text>
			</VStack>
		</Flex>
	);
};

export default ProfileHeader;
