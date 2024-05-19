import { Container, Text, VStack, Box, HStack, Icon, Button, SimpleGrid } from "@chakra-ui/react";
import { FaDesktop, FaChartPie, FaFileAlt, FaMobileAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        {/* Title and Description */}
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold" color="white">
            Process Flow
          </Text>
          <Text mt={2} color="gray.300">
            Placeholder text describing the process flow diagram.
          </Text>
        </Box>

        {/* Flowchart */}
        <HStack spacing={8} justify="center">
          <VStack>
            <Icon as={FaDesktop} boxSize={10} color="white" />
            <Text color="white" fontWeight="bold">
              Peter Draabas Sarintee
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaChartPie} boxSize={10} color="white" />
            <Text color="white" fontWeight="bold">
              Daadbrmnx Reere Re Bse Vts
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaFileAlt} boxSize={10} color="white" />
            <Text color="white" fontWeight="bold">
              Ntotou Nqger
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaMobileAlt} boxSize={10} color="white" />
            <Text color="white" fontWeight="bold">
              Aluersn Trdoa Pllow Cyhn
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaUsers} boxSize={10} color="white" />
            <Text color="white" fontWeight="bold">
              Rumpecoful et Ridamear WR SVAD
            </Text>
          </VStack>
        </HStack>

        {/* Columns of Text */}
        <SimpleGrid columns={[1, null, 4]} spacing={8}>
          <VStack spacing={4} align="stretch">
            <Text fontSize="xl" fontWeight="bold" color="white">
              Cinicus
            </Text>
            <Text color="gray.300">Placeholder text for Cinicus.</Text>
            <Button colorScheme="blue" borderRadius="full">
              Bout Flmes
            </Button>
          </VStack>
          <VStack spacing={4} align="stretch">
            <Text fontSize="xl" fontWeight="bold" color="white">
              Ploore Proes
            </Text>
            <Text color="gray.300">Placeholder text for Ploore Proes.</Text>
            <Button colorScheme="green" borderRadius="full">
              Meat Riow
            </Button>
          </VStack>
          <VStack spacing={4} align="stretch">
            <Text fontSize="xl" fontWeight="bold" color="white">
              Crocle Pocw
            </Text>
            <Text color="gray.300">Placeholder text for Crocle Pocw.</Text>
            <Button colorScheme="red" borderRadius="full">
              FPenigol
            </Button>
          </VStack>
          <VStack spacing={4} align="stretch">
            <Text fontSize="xl" fontWeight="bold" color="white">
              Socing
            </Text>
            <Text color="gray.300">Placeholder text for Socing.</Text>
            <Button colorScheme="purple" borderRadius="full">
              Drale Der
            </Button>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
