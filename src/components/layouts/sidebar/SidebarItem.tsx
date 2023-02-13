import useUIStore from '@/lib/stores/useUiStore';
import { Box, Flex, Icon, Link as ChakraLink, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

export interface ISidebarItem {
  name: string;
  icon: IconType;
  link: string;
}

const SidebarItem = ({ name, icon, link }: ISidebarItem) => {
  const router = useRouter();
  const { pathname } = router;
  const isMaximizedSidebar = useUIStore((state) => state.isMaximizedSidebar);
  return (
    <Flex
      pos="relative"
      mb={5}
      w="full"
      justifyContent={isMaximizedSidebar ? 'unset' : 'center'}
    >
      <Box
        pos="absolute"
        left={0}
        top={0}
        height={pathname === link ? '90%' : '0'}
        w={1}
        borderTopRightRadius="2xl"
        borderBottomRightRadius="2xl"
        bg="purple.400"
      ></Box>
      <ChakraLink as={Link} href={link} ml={isMaximizedSidebar ? 6 : 0}>
        <Tooltip label={name} fontSize="md" hasArrow={true} placement="auto">
          <span>
            <Icon
              fontSize={30}
              as={icon}
              color={pathname === link ? 'purple.500' : 'gray.600'}
            />
          </span>
        </Tooltip>
      </ChakraLink>
      <ChakraLink
        as={Link}
        href={link}
        position="absolute"
        left={isMaximizedSidebar ? 16 : 0}
        opacity={isMaximizedSidebar ? 1 : 0}
      >
        {name}
      </ChakraLink>
    </Flex>
  );
};

export default SidebarItem;
