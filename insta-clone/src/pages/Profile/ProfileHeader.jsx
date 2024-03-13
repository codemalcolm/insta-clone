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
                        <Button bg={"gray.400"} color={"black"} h={8}>Edit Profile</Button>
                    </Flex>
                </Flex>
            </VStack>
		</Flex>
	);
};

export default ProfileHeader;
