import { Button, Flex, Text } from '@chakra-ui/react';
import { RangeEnum, type Range } from '@context/MoviesContext';

interface HeaderProps {
  filterByRange: (range: Range) => void;
  range: Range;
}

export default function Header({ range, filterByRange }: HeaderProps) {
  function handleChangeRange() {
    if (range === 'day') {
      filterByRange('week');
    }

    if (range === 'week') {
      filterByRange('day');
    }
  }

  return (
    <>
      <Flex w="full" p="2" bgColor="red.500" position="fixed" zIndex={10}>
        <Flex
          maxW="1000px"
          w="full"
          m="auto"
          justify="space-between"
          align="center"
        >
          <Text fontWeight="bold" color="white">
            Logo Ipsum
          </Text>
          <Button
            size="sm"
            onClick={() => {
              return handleChangeRange();
            }}
          >
            Filtrando por {RangeEnum[range]}
          </Button>
        </Flex>
      </Flex>
      <Flex h="60px" />
    </>
  );
}
