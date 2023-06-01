'use client';

import { GridItem, Heading, List } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';

import {
  Coins,
  GearSix,
  House,
  ListDashes,
  ShoppingBag,
  SignOut,
  UsersThree
} from '@phosphor-icons/react';

import ListItem from './ListItem';

function Aside() {
  return (
    <>
      <HStack as="header" py="6" pl="6">
        <Heading fontSize="lg">EcommerceAdmin</Heading>
      </HStack>
      <List spacing={6} as={GridItem} px="3" pt="6">
        <ListItem Icon={House} href="/dashboard">
          Dashboard
        </ListItem>
        <ListItem Icon={ShoppingBag} href="/products">
          Products
        </ListItem>
        <ListItem Icon={ListDashes} href="/categories">
          Categories
        </ListItem>
        <ListItem Icon={Coins} href="/orders">
          Orders
        </ListItem>
        <ListItem Icon={UsersThree} href="/admins">
          Admins
        </ListItem>
        <ListItem Icon={GearSix} href="/settings">
          Settings
        </ListItem>
        <ListItem Icon={SignOut}>Logout</ListItem>
      </List>
    </>
  );
}

export default Aside;
