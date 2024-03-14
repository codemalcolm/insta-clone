import { Flex, AvatarGroup, Avatar, VStack, Text, Button } from "@chakra-ui/react";

const ProfileHeader = () => {
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
				<Avatar name="As a programmer" src="/profilepic.png" alt="As a programmer logo" />
			</AvatarGroup>
            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex gap={4} direction={{base:"column", sm:"row"}}
                justifyContent={{base:"center", sm:"flex-start"}}
                alignItems={"center"} w={"full"}
                >
                    <Text fontSize={{base:"sm", md:"lg"}}>
                        asaprogrammer_
                    </Text>
                    <Flex gap={4} alignContent={"center"} justifyContent={"center"}> 
                        <Button bg={"gray.400"} color={"black"} h={8} size={{base:"xs", md:"sm"}}>Edit Profile</Button>
                    </Flex>
                </Flex>
				<Flex alignItems={"center"} gap={{base:2, sm:4}} >
					<Text fontSize={{base:"xs", md:"sm"}}>
						<Text as="span" fontWeight={"bold"} mr={1}>
						4
						</Text>
						Posts
					</Text>
					<Text fontSize={{base:"xs", md:"sm"}}>
						<Text as="span" fontWeight={"bold"} mr={1}>
						120
						</Text>
						Followers
					</Text>
					<Text fontSize={{base:"xs", md:"sm"}}>
						<Text as="span" fontWeight={"bold"} mr={1}>
						175
						</Text>
						Following
					</Text>
				</Flex>
				<Flex alignItems={"center"} gap={4}>
					<Text fontSize={"small"} fontWeight={"bold"}>asaprogrammer</Text>
				</Flex>
				<Text fontSize={"small"}>Tutorials meant to level up your skills as a programmer</Text>
            </VStack>
		</Flex>
	);
};

export default ProfileHeader;
