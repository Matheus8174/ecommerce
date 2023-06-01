'use client';

import React from 'react';

import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/table';

import { TrashSimple } from '@phosphor-icons/react';

import AlertDialog from './AlertDialog';
import useAddToast from '../../hooks/useAddToast';
import { AdminContext } from '../../contexts/AdminContext';

type Admin = {
  email: string;
  password: string;
};

async function getAllAdmins() {
  const response = await fetch('http://localhost:8080/api/v1/admin', {
    method: 'GET'
  });

  return response.json();
}

type AdminListProp = {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
};

function AdminList({ onOpen, onClose, isOpen }: AdminListProp) {
  const { addToast } = useAddToast();

  async function handleAdminDelete(email: string) {
    const response = await fetch(
      `http://localhost:8080/api/v1/admin/${email}`,
      {
        method: 'DELETE'
      }
    );

    if (response.ok) {
      addToast({
        title: 'Admin deleted',
        description: `Admin ${email} was deleted`,
        status: 'success'
      });
    } else if (!response.ok) {
      const responseData = await response.json();

      addToast({
        title: "Admin can't be deleted",
        description: responseData?.message,
        status: 'error'
      });
    }

    onClose();
  }

  const [adminDeleted, setAdminDeleted] = React.useState<string>();

  function handleDelete(adminEmail: string) {
    setAdminDeleted(adminEmail);

    onOpen();
  }

  // const promise = React.useMemo(() => getAllAdmins(), []);

  // const admins = React.use<Admin[]>(promise);

  const { setAdmins, admins } = React.useContext(AdminContext);

  // const admins = ;

  React.useEffect(() => {
    setAdmins(() => React.use<Admin[]>(getAllAdmins()));
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" maxW="3xl">
        <Tbody>
          {admins &&
            admins.map((admin) => {
              return (
                <Tr key={admin.email}>
                  <Td>{admin.email}</Td>
                  <Td>2023-04-06 15:55:51</Td>
                  <Td>
                    <Button
                      onClick={() => handleDelete(admin.email)}
                      float="right"
                      bgColor="red.600"
                      leftIcon={<Icon as={TrashSimple} />}
                      _hover={{
                        bgColor: 'red.500'
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>

      {adminDeleted && (
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}
          adminEmail={adminDeleted}
          // eslint-disable-next-line react/jsx-no-bind
          handleAdminDelete={handleAdminDelete}
        />
      )}
    </TableContainer>
  );
}

export default AdminList;
