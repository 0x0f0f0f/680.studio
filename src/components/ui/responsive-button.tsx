import { type ButtonProps, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { IconProps } from '@radix-ui/react-icons/dist/types'
import { Slot } from '@radix-ui/react-slot'
import { type LucideProps } from 'lucide-react'
import React from 'react'

export interface ResponsiveButtonProps extends ButtonProps {
  label: string
  icon: React.ComponentType<IconProps> | React.ComponentType<LucideProps>
  iconProps?: IconProps
  alwaysShowLabel?: boolean
}

const icon_sizes = {
  default: 'h-5 w-5',
  sm: 'h-3.5 w-3.5',
  lg: 'h-6 w-6',
  icon: 'h-9 w-9',
}

export const ResponsiveButton = React.forwardRef<
  HTMLButtonElement,
  ResponsiveButtonProps
>(
  (
    {
      icon: IconComponent,
      iconProps,
      label,
      children,
      className,
      alwaysShowLabel,
      size,
      asChild,
      variant,
      ...props
    },
    ref,
  ) => {
    const icon_size = size ? icon_sizes[size] : icon_sizes['default']

    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn('gap-2', buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <IconComponent className={icon_size} {...iconProps} />
        <span
          className={cn(
            alwaysShowLabel ? '' : 'sr-only sm:not-sr-only',
            'sm:whitespace-nowrap',
          )}
        >
          {label}
        </span>
        {children}
      </Comp>
    )
  },
)

ResponsiveButton.displayName = 'ResponsiveButton'
