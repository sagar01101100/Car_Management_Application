'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

export default function Home() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <Container maxW="container.xl" py={8}>
      <Stack spacing={6}>
        <Box 
          bg={bgColor} 
          p={6} 
          borderRadius="lg" 
          boxShadow="base"
        >
          <Heading 
            as="h1" 
            size="xl" 
            color={textColor}
            mb={4}
          >
            Car Management System
          </Heading>
          <Text 
            color={textColor}
            fontSize="lg"
          >
            Welcome to your comprehensive car management solution
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}