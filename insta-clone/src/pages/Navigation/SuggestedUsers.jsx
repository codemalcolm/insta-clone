import {Box, Flex, Text, VStack, Link} from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
const SuggestedUsers = () => {
  return (
    <VStack py={8} px={8} gap={4}>
        <SuggestedHeader/>

        <Flex alignItems={"center"} justifyContent={"space-between"}
        w={"full"}
        >
          <Text fontSize={12} fontWeight={"bold"} color={"gray.400"} >
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
            See all
          </Text>
        </Flex>
        <SuggestedUser name="Dick Smalls" followers={1392} avatar="https://bit.ly/dan-abramov"/>
        <SuggestedUser name="Dick Big" followers={102} avatar="https://bit.ly/ryan-florence"/>
        <SuggestedUser name="Richard Smalls" followers={372} avatar="https://bit.ly/code-beast"/>
        <SuggestedUser name="Antonie Low" followers={92} avatar="https://bit.ly/dan-abramov"/>
        <Box alignSelf={"start"} color={"gray.500"} mt={5}>
          © 2024 Built by <Link href="https://github.com/codemalcolm" _hover={{color:"gray.100"}} target="_blank">codemalcolm</Link>

        </Box>
    </VStack>
  )
}

export default SuggestedUsers