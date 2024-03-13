import { Container } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  },[])
  const users = [
    {
      img: "/img1.png",
      username: "burakorkmezz",
      avatar: "/img1.png"
    },
    {
      img: "/img2.png",
      username: "randomuser1",
      avatar: "/img2.png"
    },
    {
      img: "/img3.png",
      username: "randomuser2",
      avatar: "/img3.png"
    },
    {
      img: "/img4.png",
      username: "randomuser3",
      avatar: "/img4.png"
    }
  ];
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
    {users.map((user, index) => {
      return (
        <FeedPost 
          key={index}
          img={user.img}
          username={user.username}
          avatar={user.avatar}
        />
      );
    })}
    </Container>
  )
}

export default FeedPosts