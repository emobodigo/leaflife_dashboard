import useUIStore from '@/lib/stores/useUiStore';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { FC } from 'react';
import AppBar from '../AppBar/AppBar';
import Sidebar from '../sidebar/Sidebar';

export interface IMainLayout {}

const MainLayout: FC<IMainLayout> = () => {
  const isMaximizedSidebar = useUIStore((state) => state.isMaximizedSidebar);
  return (
    <>
      <Head>
        <title>Archelon Engine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex maxH="100vh" minH="100vh" overflow="hidden">
          <Sidebar />
          <Flex flex={isMaximizedSidebar ? 0.87 : 0.95}>
            <AppBar />
          </Flex>
        </Flex>
      </main>
    </>
  );
};

export default MainLayout;
