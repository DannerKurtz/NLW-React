'use client';
import { Button } from '@/components/button';
import { InputRoot, InputIcon, InputField } from '@/components/input';
import { User, Mail, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const subscriptionsSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um email válido'),
});

type SubscriptionSchema = z.infer<typeof subscriptionsSchema>;

export default function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
  }>({
    resolver: zodResolver(subscriptionsSchema),
  });

  const onSubscribe = (data: SubscriptionSchema) => {
    console.log(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubscribe)}
        className='bg-gray-700 border border-gray-600 rounded-2xl p-8 spacey-6 w-full md:max-w-[440px]'
      >
        <h2 className='font-heading font-semibold text-gray-200 text-xl'>
          Inscrição
        </h2>
        <div className='space-y-3'>
          <div className='space-y-2'>
            <InputRoot>
              <InputIcon>
                <User />
              </InputIcon>
              <InputField
                type='text'
                placeholder='Nome Completo'
                {...register('name')}
              />
            </InputRoot>
            {errors.name && (
              <p className='text-danger text-xs font-semibold'>
                {errors.name.message}
              </p>
            )}
          </div>

          <div className='space-y-2'>
            <InputRoot>
              <InputIcon>
                <Mail />
              </InputIcon>
              <InputField
                type='email'
                placeholder='E-Mail'
                {...register('email')}
              />
            </InputRoot>
            {errors.email && (
              <p className='text-danger text-xs font-semibold'>
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <Button type='submit'>
          Confirmar <ArrowRight />
        </Button>
      </form>
    </>
  );
}
