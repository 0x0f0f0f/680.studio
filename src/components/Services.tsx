import {
  BellIcon,
  CalendarIcon,
  GlobeIcon,
  InputIcon,
} from '@radix-ui/react-icons'

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { FileAudio, Glasses, Mic } from 'lucide-react'

const features = [
  {
    Icon: FileAudio,
    name: 'Mixing & Mastering',
    description:
      'Expert audio mixing & mastering services that enhance clarity, balance, and volume to deliver industry-standard sound ready for any platform. 680 Hz is often referred to as the "Frequency of the soul": we strive to emphasize a human aspect in our services in order to match your taste and requirements.',
    href: '/',
    cta: 'Send a Request',
    background: <img src="/mixing.jpg" className="h-64 w-full opacity-80" />,
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: Mic,
    name: 'Recording, Editing and Production',
    description:
      "Professional recording, editing, and production services in our state-of-the-art studios, delivering high-quality audio tailored to your creative vision. Our studios are equipped with top-tier gear and acoustically treated rooms, ensuring pristine sound quality for any project—whether it's your band's album, DJ set, or indie film.",
    href: '#contact',
    cta: 'Book a session with us',
    background: (
      <img
        src="/recording.jpg"
        className="h-64 w-full object-cover opacity-80"
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4',
  },
  {
    Icon: CalendarIcon,
    name: 'Book a Session',
    description: 'Contact us to book a session in our studios.',
    href: '#contact',
    cta: 'Book a session',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: Glasses,
    name: 'Masterclasses',
    description:
      'Are you looking to learn how to produce music? How to record instruments, or how to mix and master your tracks? No worries, we provide in-person, in-depth, expert-led masterclass sessions',
    href: '#contact',
    cta: 'Learn more',
    background: (
      <img
        src="/masterclass.jpg"
        className="h-32 w-full object-cover opacity-80"
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
]

export default function Services() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}
