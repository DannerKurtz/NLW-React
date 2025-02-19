import { ComponentProps, ReactNode } from 'react';

interface IButtonProps extends ComponentProps<'button'> {}

export function Button(props: IButtonProps) {
  return (
    <button
      className='px-5 h-12 flex justify-between items-center bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900'
      {...props}
    />
  );
}
