import { Image,Text } from "@chakra-ui/react"

const GoogleAuth = () => {
  
  return (
    <>
      <Image src="/google.png" w={5} alt="Google logo" />
      <Text mx="2" color={"blue.500"}>
        Log in with Google
      </Text>
    </>
  )
}

export default GoogleAuth