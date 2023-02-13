import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { FC, RefObject } from 'react';

interface IMobileDrawer {
  btnRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
}
const MobileDrawer: FC<IMobileDrawer> = ({ btnRef, isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
