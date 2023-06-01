'use client';

import React from 'react';

import { Text, chakra, Heading, VStack, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AdminData, AdminSchema } from '@ecommerce/zod';

import FormInput from '../FormInput';
import AdminContext from '../../contexts/AdminContext';
import AdminList from './AdminList';
import AlertDialog from './AlertDialog';
import useAddToast from '../../hooks/useAddToast';

function Admins() {
  const { addToast } = useAddToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AdminData>({
    // @ts-ignore error don't make sense
    resolver: zodResolver(AdminSchema)
  });

  async function handleFormSubmit(data: AdminData) {
    const response = await fetch('http://localhost:8080/api/v1/admin', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const responseJson = await response?.json();

      addToast({
        title: 'Error when trying to create admin 😓',
        status: 'error',
        containerStyle: {
          rounded: 'md',
          backgroundColor: 'red.500'
        },
        colorScheme: 'none',
        description: responseJson.message
      });
    }

    if (response.ok) {
      addToast({
        title: 'Admin created 🚀',
        status: 'success'
      });
    }
  }

  return (
    <AdminContext>
      <VStack ml="6" mt="6" spacing="12" alignItems="start">
        <Heading fontSize="xl">Admins</Heading>
        <chakra.form
          w="full"
          as="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          mt="6"
          fontWeight="bold"
          maxW="3xl"
        >
          <VStack spacing="6" alignItems="start">
            <Text fontSize="lg">Add new admin</Text>

            <FormInput
              inputName="email"
              errors={errors.email}
              label="Email:"
              type="email"
              placeholder="Your email"
              variant="filled"
              register={register}
              helperText="your e-mail wont be shared"
            />

            <FormInput
              inputName="password"
              errors={errors.password}
              label="Password:"
              type="password"
              placeholder="Your password"
              variant="filled"
              helperText="create a strong password"
              register={register}
            />

            <Button type="submit">Add admin</Button>
          </VStack>
        </chakra.form>

        <VStack spacing="6" alignItems="start">
          <Text fontWeight="bold" fontSize="lg">
            Existing admins
          </Text>

          <React.Suspense fallback={<Text>Loading…</Text>}>
            <AdminList onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
          </React.Suspense>
        </VStack>
      </VStack>
    </AdminContext>
  );
}

export default Admins;
