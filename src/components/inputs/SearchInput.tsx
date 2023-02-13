import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';

interface ISearchInput {
  useLabel?: boolean;
  label?: string;
}
const SearchInput: FC<ISearchInput> = ({
  useLabel = true,
  label = 'Search',
}) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!value) return;

    // Fetch Data from api using props
    const suggestions = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    setSuggestions(suggestions);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onOpen();
  };

  const handleInputFocus = () => {
    onOpen();
  };

  const handleInputBlur = () => {
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(Math.min(selectedIndex + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(Math.max(selectedIndex - 1, -1));
    } else if (e.key === 'Enter') {
      if (selectedIndex > -1) {
        setValue(suggestions[selectedIndex]);
        onClose();
      }
    }
  };

  return (
    <FormControl>
      {useLabel && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          w="full"
          placeholder="Search..."
        />
      </InputGroup>

      {isOpen && (
        <Box bg="white" mt={2} position="absolute" zIndex={1} width="100%">
          {suggestions.map((suggestion, index) => (
            <Box
              key={suggestion}
              p={2}
              cursor="pointer"
              backgroundColor={
                index === selectedIndex ? 'gray.200' : 'transparent'
              }
              onClick={() => {
                setValue(suggestion);
                onClose();
              }}
            >
              {suggestion}
            </Box>
          ))}
        </Box>
      )}
    </FormControl>
  );
};

export default SearchInput;
