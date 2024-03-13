import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const FeedPost = ({img,username, avatar}) => {
  return (
    <Box backgroundColor={"#111114"}>
      <PostHeader username={username} avatar={avatar}/>
      <Box borderRadius={8} overflow={"hidden"}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter  username={username}/>
    </Box>
  )
}

export default FeedPost