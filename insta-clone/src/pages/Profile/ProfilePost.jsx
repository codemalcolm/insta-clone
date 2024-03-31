import {
	GridItem,
	Flex,
	Text,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	Avatar,
	Divider,
	VStack,
	Button,
} from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import Comment from "../Feed/Comment";
import PostFooter from "../Feed/PostFooter";
import useAuthStore from "../../store/authStore";
import useUserProfileStore from "../../store/userProfileStore";
import useShowToast from "../../hooks/useShowToast";
import { useState } from "react";
import { firestore, storage } from "../../firebase/firebase";
import { deleteObject, ref } from "firebase/storage";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";

const ProfilePost = ({ post }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const userProfile = useUserProfileStore((state) => state.userProfile);
	const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();
    const [isDeleting , setIsDeleting] = useState(false)
    const deletePost = usePostStore((state) => state.deletePost)
    const deletePostFromProfile = useUserProfileStore((state) => state.deletePost)

    const handleDeletePost = async () => {
        if(!window.confirm("Are you sure you want to delete this post")) return;
        if(isDeleting) return

        try {
            const imageRef = ref(storage, `posts/${post.id}`)
            await deleteObject(imageRef)
            const userRef = doc(firestore,"users",authUser.uid)
            await deleteDoc(doc(firestore, "posts", post.id))

            await updateDoc(userRef, {
                posts: arrayRemove(post.id)
            })

            deletePost(post.id)
            deletePostFromProfile(post.id)
            showToast("Success", "Post deleted successfully", "success")
        } catch (error) {
            showToast("Error", error.message, "error")
        }finally{
            setIsDeleting(false)
        }
    }

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
							<Text fontWeight={"bold"}>{post.likes.length}</Text>
						</Flex>
						<Flex justifyContent={"center"} alignItems={"center"} gap={2}>
							<FaRegComment size={20} />
							<Text fontWeight={"bold"}>{post.comments.length}</Text>
						</Flex>
					</Flex>
				</Flex>
				<Image
					src={post.imageURL}
					alt="Profile post"
					w={"100%"}
					h={"100%"}
					objectFit={"cover"}
				/>
			</GridItem>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered={"true"}
				size={{ base: "2xl", md: "4xl" }}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton _hover={{ color: "white", bg: "red" }} />
					<ModalBody bg={"black"} pb={5}>
						<Flex
							gap={4}
							w={{ base: "90%", sm: "70%", md: "full" }}
							mx={"auto"}
							maxH={"90vh"}
							minH={"50vh"}
						>
							<Flex
								borderRadius={4}
								overflow={"hidden"}
								border={"1px solid"}
								borderColor={"whiteAlpha.300"}
								flex={1.5}
								justifyContent={"center"}
								alignItems={"center"}
							>
								<Image src={post.imageURL} alt="Profile Post" />
							</Flex>
							<Flex
								flex={1}
								flexDirection={"column"}
								px={10}
								display={{ base: "none", md: "flex" }}
							>
								<Flex alignItems={"center"} justifyContent={"space-between"}>
									<Flex
										alignItems={"center"}
										justifyContent={"start"}
										gap={2}
										alignContent={"center"}
									>
										<Avatar
											src={userProfile.profilePicURL}
											size={"sm"}
											name="As a Programmer"
										/>
										<Text>{userProfile.username}</Text>
									</Flex>

									{authUser?.uid === userProfile.uid && (
										<Button
											size={"sm"}
											bg={"transparent"}
											justifyContent={"center"}
											_hover={{ color: "white", bg: "red" }}
											borderRadius={4}
											p={1}
                                            onClick={handleDeletePost}
										>
											<MdDelete size={20} cursor="pointer" isLoading={isDeleting}/>
										</Button>
									)}
								</Flex>
								<Divider h={"1.25px"} my={4} bg={"gray.500"} />
								<VStack
									w={"full"}
									alignItems={"start"}
									maxH={"350px"}
									overflowY={"auto"}
								>
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
									<Divider my={4} bg={"gray.800"} />
									<PostFooter isProfilePage={true} />
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
