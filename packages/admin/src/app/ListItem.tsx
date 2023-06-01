/* eslint-disable react/require-default-props */
import React from 'react';

import { Link } from '@chakra-ui/next-js';
import { ListIcon, ListItem as ChackraListItem } from '@chakra-ui/layout';
import { As } from '@chakra-ui/system';
import { Url } from 'url';

type ListItemProps = {
  children: React.ReactNode;
  Icon: As;
  href?: Url | string;
};

function ListItem({ Icon, children, href }: ListItemProps) {
  return (
    <ChackraListItem
      px="3"
      py="2"
      rounded="md"
      display="flex"
      alignItems="center"
      fontWeight="bold"
      minW="250px"
      transition="background-color .2s"
      cursor="pointer"
      _hover={{
        bgColor: 'blackAlpha.500'
      }}
    >
      {href ? (
        <Link href={href} style={{ textDecoration: 'none' }}>
          <ListIcon as={Icon} color="white" boxSize={6} />
          {children}
        </Link>
      ) : (
        <>
          <ListIcon as={Icon} color="white" boxSize={6} />
          {children}
        </>
      )}
    </ChackraListItem>
  );
}

export default ListItem;
