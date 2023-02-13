import DarkModeToggleButton from '@/components/buttons/DarkModeToggleButton';
import SearchInput from '@/components/inputs/SearchInput';
import { ChevronDownIcon, SettingsIcon } from '@chakra-ui/icons';
import { Avatar, Flex, HStack, IconButton } from '@chakra-ui/react';

const AppBar = () => {
  return (
    <Flex
      alignItems="center"
      h="16"
      w="full"
      justifyContent="space-between"
      px="20px"
      py="8px"
      boxShadow="sm"
    >
      <Flex flex="0.8">
        <SearchInput useLabel={false} />
      </Flex>
      <Flex flex="0.2" alignItems="center" justifyContent="flex-end">
        <DarkModeToggleButton mr={3} />
        <IconButton
          aria-label="Setting"
          icon={<SettingsIcon fontSize="xl" color="gray.400" />}
          mr={6}
          variant="ghost"
        />

        <HStack spacing="1">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <ChevronDownIcon fontSize="xl" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default AppBar;
