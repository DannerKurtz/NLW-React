import { ComponentProps } from 'react';
import { Mail } from 'lucide-react';
// interface IInputProps extends ComponentProps<'input'> {
//   error?: boolean;
// }

// export function Input({ error = false, ...props }: IInputProps) {
//   return (
//     <>
//       <div
//         data-error={error}
//         className='group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger'
//       >
//         <span className='group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 text-gray-400 group-data-[error=true]:text-danger'>
//           <Mail />
//         </span>
//         <input
//           className='flex-1 outline-0 placeholder-gray-400'
//           {...props}
//         />
//       </div>
//     </>
//   );
// }

interface IInputRootProps extends ComponentProps<'div'> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: IInputRootProps) {
  return (
    <>
      <div
        data-error={error}
        className='group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger'
        {...props}
      />
    </>
  );
}

interface IInputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: IInputIconProps) {
  return (
    <>
      <span
        className='group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 text-gray-400 group-data-[error=true]:text-danger'
        {...props}
      />
    </>
  );
}

interface IInputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: IInputFieldProps) {
  return (
    <>
      <input
        className='flex-1 outline-0 placeholder-gray-400'
        {...props}
      />
    </>
  );
}
