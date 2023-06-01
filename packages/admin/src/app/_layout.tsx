'use client';

import { Grid, GridItem } from '@chakra-ui/layout';
import { PropsWithChildren } from 'react';

import Aside from './aside';

function Layout({ children }: PropsWithChildren) {
  return (
    <Grid templateColumns="auto 1fr" templateRows="100vh">
      <GridItem colSpan={1} rowStart={1} as="aside">
        <Aside />
      </GridItem>
      <GridItem
        overflowY="scroll"
        as="main"
        colSpan={2}
        rowStart={1}
        bgColor="blackAlpha.500"
        borderTopLeftRadius="3xl"
      >
        {children}
      </GridItem>
    </Grid>
  );
}

export default Layout;
