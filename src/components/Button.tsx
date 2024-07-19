import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<'button'>{
  children: ReactNode
}

export function Button({children, ...rest}: ButtonProps){
  return (
    <button {...rest} className="min-w-32 bg-yellow-400 rounded-full px-3 py-2 text-zinc-900 font-medium">
      {children}
    </button>
  )
}