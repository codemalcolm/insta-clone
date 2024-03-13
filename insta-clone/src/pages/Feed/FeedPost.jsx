import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const FeedPost = () => {
  return (
    <Box backgroundColor={"#111114"}>
      <PostHeader/>
      <Box borderRadius={8} overflow={"hidden"}>
        <Image src="/img1.png" alt="user profile pic" />
      </Box>
      <PostFooter />
    </Box>
  )
}

export default FeedPost