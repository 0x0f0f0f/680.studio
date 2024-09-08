// MobileNav.tsx
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu as MenuIcon } from 'lucide-react'
import type { NavBarItemsProps } from './lib/navbar'

export default function MobileNav({ items }: NavBarItemsProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col items-start">
          {items.map((item, index) => (
            <a href={item.href}>
              <Button
                key={index}
                variant="link"
                onClick={() => {
                  setOpen(false)
                }}
                className="text-lg"
              >
                {item.label}
              </Button>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
