import DarkModeToggleButton from '@/components/buttons/DarkModeToggleButton';
import SearchInput from '@/components/inputs/SearchInput';
import { ChevronDownIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import MobileDrawer from '../sidebar/MobileDrawer';

const AppBar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Flex
        alignItems="center"
        h={{ base: 20, lg: 16 }}
        w="full"
        justifyContent="space-between"
        px={{ base: '10px', md: '20px' }}
        py="8px"
        boxShadow="sm"
        gap="10px"
      >
        <IconButton
          aria-label="Setting"
          icon={<HamburgerIcon fontSize="xl" color="gray.400" />}
          mr={1}
          variant="ghost"
          display={{ base: 'inline-flex', lg: 'none' }}
          ref={drawerBtnRef}
          onClick={onOpen}
        />
        <Flex flex="0.8">
          <SearchInput useLabel={false} />
        </Flex>
        <Flex flex="0.2" alignItems="center" justifyContent="flex-end">
          <DarkModeToggleButton
            mr={3}
            display={{ base: 'none', md: 'inline-flex' }}
          />
          <IconButton
            aria-label="Setting"
            icon={<SettingsIcon fontSize="xl" color="gray.400" />}
            mr={6}
            variant="ghost"
            onClick={() => router.push('app/settings')}
            display={{ base: 'none', md: 'inline-flex' }}
          />
          <HStack spacing="0.5">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Menu isLazy>
              <MenuButton>
                <IconButton
                  aria-label="popover-app-bar"
                  icon={<ChevronDownIcon fontSize="xl" />}
                  variant="ghost"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ChakraLink as={Link} href="#">
                    UAC Management
                  </ChakraLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Flex>
      <MobileDrawer onClose={onClose} isOpen={isOpen} btnRef={drawerBtnRef} />
    </>
  );
};

export default AppBar;
