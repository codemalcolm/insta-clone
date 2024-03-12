import { Flex , Box, Text} from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/react"
const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>

        <Flex alignItems={"center"} gap={2}>
            <Avatar src="/img1.png" alt="user profile pic" size={"sm"}/>
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                asaprogrammer
                <Box color={"gray.500"}>
                • 1 week
                </Box>
            </Flex>

        </Flex>
        <Box cursor={"pointer"}>
            <Text color={"blue.500"} fontSize={12} fontWeight={"bold"}
            _hover={{color:"whiteAlpha.800"}} transition={"0.2s ease-in-out"}>Unfollow</Text>
        </Box>
    </Flex>
  )
}

export default PostHeader