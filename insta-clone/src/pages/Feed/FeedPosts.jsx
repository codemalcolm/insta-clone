import { Container,Skeleton,VStack,Flex,SkeletonCircle,Box } from "@chakra-ui/react"
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
      {isLoading && [0,1,2,3].map((_,idx) =>(
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2} justifyContent={"space-between"}>
              <SkeletonCircle size={"35px"} />
              <VStack gap={2} alignItems={"flex-start"} justifyContent={"center"}>
                <Skeleton w={"200px"} height="10px"/>
                <Skeleton w={"450px"} height="10px"/>
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box height={"750px"}>contents</Box>
            </Skeleton>
            <Skeleton w={"100px"} height="35px"/>
            <Skeleton w={"250px"} height="10px"/>
            <Skeleton w={"150px"} height="10px"/>
            <Skeleton w={"full"} height="10px"/>
        </VStack>
      ))}
      {!isLoading && (
        <>
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
        </>

      )}
    
    </Container>
  )
}

export default FeedPosts