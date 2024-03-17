import { GridItem, Flex, Text, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Box, Avatar, Divider, VStack } from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react"
import { MdDelete } from "react-icons/md";
import Comment from "../Feed/Comment";
import PostFooter from "../Feed/PostFooter"


const ProfilePost = ({img}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
	return (
        <>
            <GridItem
                cursor={"pointer"}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                position={"relative"}
                aspectRatio={1 / 1}
                onClick={onOpen}
            >
                <Flex
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    position={"absolute"}
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    bg={"blackAlpha.700"}
                    transition={"all 0.3s ease"}
                    zIndex={1}
                    justifyContent={"center"}
                >
                    <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                        <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
                            <FaRegHeart size={20} />
                            <Text fontWeight={"bold"}>7</Text>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
                            <FaRegComment size={20} />
                            <Text fontWeight={"bold"}>12</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Image src={img} alt="Profile post" w={"100%"} h={"100%"} objectFit={"cover"}/>
                
            </GridItem>
            
            <Modal isOpen={isOpen} onClose={onClose} isCentered={"true"}
            size={{base:"2xl", md:"4xl"}}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton _hover={{color:"white",bg:"red"}}/>
                    <ModalBody bg={"black"} pb={5}>
                        <Flex gap={4} w={{base:"90%",sm:"70%", md:"full"}} mx={"auto"}>
                            <Box borderRadius={4}
                            overflow={"hidden"}
                            border={"1px solid"}
                            borderColor={"whiteAlpha.300"}
                            flex={1.5}
                            >
                                <Image src={img} alt="Profile Post"/>
                            </Box>
                            <Flex flex={1} flexDirection={"column"} px={10} display={{base:"none", md:"flex"}}
                            >
                                <Flex alignItems={"center"} justifyContent={"space-between"}>
                                <Flex alignItems={"center"} justifyContent={"start"} gap={2} alignContent={"center"}
                                >
                                        <Avatar src="/profilepic.png" size={"sm"} name="As a Programmer"/>
                                        <Text>
                                            asaprogrammer_
                                        </Text>
                                    </Flex>
                                    <Box justifyContent={"center"}_hover={{color:"white",bg:"red"}} borderRadius={4} p={1}>
                                            <MdDelete size={20} cursor="pointer"/>
                                    </Box>
                                </Flex>
                                <Divider h={"1.25px"} my={4} bg={"gray.500"}/>
                                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                <Comment 
                                    createdAt="One day ago"
                                    username="asaprogrammer"
                                    profilePic="/profilepic.png"
                                    text={"Dummy images form unsplash"}
                                />
                                </VStack>
                                <Flex mt={"auto"} flexDirection={"column"}>
                                    <Divider my={4} bg={"gray.800"}/>
                                    <PostFooter isProfilePage={true}/>
                                </Flex>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
	);
};

export default ProfilePost;
