import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, FlexProps, Switch, useColorMode } from '@chakra-ui/react';
import { FC, useState } from 'react';

const DarkModeToggleButton: FC<FlexProps> = ({ ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    toggleColorMode();
    setIsDark(!isDark);
  };

  return (
    <Flex alignItems="center" gap="6px" {...rest}>
      <SunIcon fontSize="xl" color="yellow.400" />
      <Switch isChecked={isDark} colorScheme="purple" onChange={handleToggle} />
      <MoonIcon fontSize="xl" />
    </Flex>
  );
};

export default DarkModeToggleButton;
