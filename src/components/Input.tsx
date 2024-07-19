import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export default function Input({label, ...props}: InputProps) {
  return (
      <>
      
      <label className="text-amber-500 font-bold">{label}</label>

      <input 
          {...props} 
          className="
              rounded-lg 
              border-2 
              border-slate-600 
              bg-slate-800 p-2 mb-4 
              focus:border-amber-400 
              focus:outline-none
          "
      />
      </>
  );
}

