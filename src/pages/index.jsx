import { Box, Button, Flex, Icon } from '@chakra-ui/react'
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, firebase, auth } from "firebase/auth";


export default function Home() {
  async function signinInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signinInWithPopup(provider)
    return result;
  }
  return (
      <Flex
      w="100%"
      h="100vh"
      bg="gray.900"
      align="center"
      justify="center"
      >
        <Box
        as="form"
        w="500px"
        h="300px"
        bg="gray.600"
        borderRadius={40}
        display="flex"
        >
          <Icon as={FcGoogle} fontSize="30" ml="4" m="4" />
          <Button
          mt="140px"
          onClick={signinInWithGoogle}
          bg="purple.500"
          >
            Google
          </Button>
        </Box>

      </Flex>
  )
}
