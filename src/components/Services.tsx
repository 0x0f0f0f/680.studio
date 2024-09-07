import { Separator } from '@radix-ui/react-separator'
import {
  ArrowRight,
  FileAudio,
  Github,
  Glasses,
  Globe,
  Mic,
} from 'lucide-react'
import BlurFade from './magicui/blur-fade'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card'
import { ResponsiveButton } from './ui/responsive-button'

const data = [
  {
    Icon: FileAudio,
    name: 'Mixing & Mastering',
    description:
      'Expert audio mixing & mastering services that enhance clarity, balance, and volume to deliver industry-standard sound ready for any platform. 680 Hz is often referred to as the "Frequency of the soul": we strive to emphasize a human aspect in our services in order to match your taste and requirements.',
    href: '/',
    cta: 'Send a Request',
    background: '/mixing.jpg',
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: Mic,
    name: 'Recording, Editing and Production',
    description:
      "Professional recording, editing, and production services in our state-of-the-art studios, delivering high-quality audio tailored to your creative vision. Our studios are equipped with top-tier gear and acoustically treated rooms, ensuring pristine sound quality for any project—whether it's your band's album, DJ set, or indie film.",
    href: '#contact',
    cta: 'Book a session with us',
    background: '/recording.jpg',
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4',
  },
  {
    Icon: Glasses,
    name: 'Masterclasses',
    description:
      'Are you looking to learn how to produce music? How to record instruments, or how to mix and master your tracks? No worries, we provide in-person, in-depth, expert-led masterclass sessions',
    href: '#contact',
    cta: 'Learn more',
    background: '/masterclass.jpg',
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4',
  },
]

export default function Services() {
  return (
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      {data.map((s, idx) => (
        <BlurFade delay={0.25 + idx * 0.05} inView>
          <Card className="h-full">
            <CardHeader className="gap-y-2">
              <img
                src={s.background}
                alt={s.name}
                className="w-full rounded-t-md object-cover"
                style={{ aspectRatio: '300/200', objectFit: 'cover' }}
              />
              <Separator className="my-4" />
              <CardTitle className="md:text-xl lg:text-2xl">{s.name}</CardTitle>
              <CardDescription className="lg:text-xl">
                {s.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="justify-left flex w-full flex-wrap items-end gap-4">
              <a href={s.href}>
                <ResponsiveButton
                  className="w-full"
                  label={s.cta}
                  icon={ArrowRight}
                  alwaysShowLabel
                />
              </a>
            </CardContent>
          </Card>
        </BlurFade>
      ))}
    </div>
  )
}
