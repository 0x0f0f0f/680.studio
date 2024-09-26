import type { LucideProps } from "lucide-react"

export interface NavBarItem {
    label: string,
    href: string,
    className?: string,
    icon?: React.ForwardRefExoticComponent<LucideProps>
}

export interface NavBarItemsProps {
    items: NavBarItem[]
}
