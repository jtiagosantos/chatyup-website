'use client';

import { useRouter } from 'next/navigation';
import { 
  ChakraProvider, 
  Text, 
  Flex, 
  FormControl, 
  Button, 
  Input, 
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { theme } from '../../../styles/theme';

import type { NextPage } from 'next';
import type { SubmitHandler } from 'react-hook-form';

const recoveryPasswordSchema = z.object({
  password: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(6, { message: 'Mínimo de 6 caracteres' }),
  confirmPassword: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(6, { message: 'Mínimo de 6 caracteres' })
});

type RecoveryPasswordFormData = z.infer<typeof recoveryPasswordSchema>;

interface RecoveryPasswordProps {
  params: {
    id: string;
  };
}

const RecoveryPasswordPage: NextPage<RecoveryPasswordProps> = ({ params }) => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<
    RecoveryPasswordFormData
  >({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(recoveryPasswordSchema),
  });
  const router = useRouter();

  const handleUpdatePassword: SubmitHandler<RecoveryPasswordFormData> = async ({ 
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: 'As senhas não coincidem' });
      return;
    }

    router.push('/recovery-password/success');
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex maxW="350px" flexDir="column" align="flex-start" justify="center" mx="auto" p="24px">
        <Text fontWeight="medium" fontSize="1.1rem">
          Alteração de Senha
        </Text>

        <FormControl 
          as="form" 
          onSubmit={handleSubmit(handleUpdatePassword)} 
          isInvalid={!!(errors.password || errors.confirmPassword)} 
          mt="16px"
        >
          <FormLabel htmlFor="password" fontWeight="normal" mb="2px" color="#D4D4D8">
            Senha
          </FormLabel>
          <Input 
            {...register('password')}
            type="password"
            id="password"
            placeholder="Digite sua senha" 
            bgColor="#27272A"
            border="none"
            _placeholder={{
              color: '#71717A'
            }}
            _focus={{
              outlineColor: '#5B21B6',
              boxShadow: 'none',
              border: 'none',
            }}
            isInvalid={!!errors.password}
          />
          {errors.password?.message && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}

          <FormLabel htmlFor="confirmPassword" fontWeight="normal" mb="2px" color="#D4D4D8" mt="16px">
            Confirmar senha
          </FormLabel>
          <Input 
            {...register('confirmPassword')}
            type="password"
            id="confirmPassword" 
            placeholder="Confirme sua senha" 
            bgColor="#27272A"
            border="none"
            _placeholder={{
              color: '#71717A'
            }}
            _focus={{
              outlineColor: '#5B21B6',
              boxShadow: 'none',
              border: 'none',
            }}
            isInvalid={!!errors.confirmPassword}
          />
          {errors.confirmPassword?.message && (
            <FormErrorMessage>{errors.confirmPassword.message}</FormErrorMessage>
          )}

          <Button 
            type="submit"
            w="full" 
            bgColor="#5B21B6" 
            mt="24px" 
            fontWeight="normal"
            _hover={{
              opacity: 0.8,
            }}
            _active={{
              bgColor: '#5B21B6',
            }}
          >
            Salvar senha
          </Button>
        </FormControl>
      </Flex>
    </ChakraProvider>
  );
}

export default RecoveryPasswordPage;