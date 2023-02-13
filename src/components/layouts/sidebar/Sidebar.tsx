import useUIStore from '@/lib/stores/useUiStore';
import {
  Box,
  Flex,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { RiShutDownLine } from 'react-icons/ri';
import { SiOverleaf } from 'react-icons/si';
import { sidebarList } from './sidebarData';
import SidebarItem from './SidebarItem';

export interface ISidebar {}

const Sidebar: FC<ISidebar> = () => {
  const sidebarBackgroundColor = useColorModeValue('purple.50', 'gray.700');
  const isMaximizedSidebar = useUIStore((state) => state.isMaximizedSidebar);
  const toggleMaximizedSidebar = useUIStore(
    (state) => state.toggleMaximizedSidebar
  );
  return (
    <Flex
      flex={isMaximizedSidebar ? 0.13 : 0.05}
      bg={sidebarBackgroundColor}
      h="100vh"
      display={{ base: 'none', lg: 'flex' }}
      pos="relative"
      boxShadow="base"
      flexDirection="column"
      transition="ease-in-out 0.5s"
    >
      <Flex
        w="full"
        alignItems="center"
        h={70}
        justifyContent="center"
        pos="relative"
      >
        <SiOverleaf fontSize={40} color="#2F855A" />
        <Box
          height={5}
          w={5}
          borderRadius="full"
          right={-2.5}
          top="50%"
          transform="translateY(-50%)"
          pos="absolute"
          bg="purple.100"
          boxShadow="base"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={toggleMaximizedSidebar}
        >
          {isMaximizedSidebar ? (
            <BsChevronDoubleLeft fontSize={12} />
          ) : (
            <BsChevronDoubleRight fontSize={12} />
          )}
        </Box>
      </Flex>
      <Flex flexDirection="column" flex={0.9} mt={6}>
        {sidebarList.map((value) => (
          <SidebarItem
            key={value.name}
            name={value.name}
            icon={value.icon}
            link={value.link}
          />
        ))}
      </Flex>
      <Flex flex={0.1} justifyContent="center" alignItems="center">
        <ChakraLink as={Link} href="/">
          <Icon
            as={RiShutDownLine}
            fontSize={25}
            bgColor="purple.100"
            borderRadius="full"
            color="purple.600"
          />
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
