import { GridItem, Flex, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box, Avatar } from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react"
import { MdDelete } from "react-icons/md";


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
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
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
                            <Flex flex={1} flexDirection={"column"} px={10} display={{base:"none", md:"flex"}}>
                                <Flex alignItems={"center"} justifyContent={"space-between"}>
                                    <Avatar src="/profilepic.png" size={"sm"} name="As a Programmer"/>
                                    <Text>
                                        asaprogrammer_
                                    </Text>
                                </Flex>
                                <Box>
                                    <MdDelete size={20} cursor="pointer"/>
                                </Box>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
	);
};

export default ProfilePost;
