import { Separator } from '@radix-ui/react-separator'
import { ArrowRight, FileAudio, Glasses, Mic } from 'lucide-react'
import BlurFade from './magicui/blur-fade'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card'
import { ResponsiveButton } from './ui/responsive-button'
import ShimmerButton from './magicui/shimmer-button'

const data = [
  {
    Icon: FileAudio,
    name: 'Mixing & Mastering',
    description:
      'Expert audio mixing & mastering services that enhance clarity, balance, and volume to deliver industry-standard sound ready for any platform. 680 Hz is often referred to as the "Frequency of the soul": we strive to emphasize a human aspect, in order to preserve the soul of your music.',
    href: '#contact',
    cta: 'Send a Request',
    background: '/mixing.jpg',
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: Mic,
    name: 'Recording & Production',
    description:
      'Professional recording, editing, and production services, delivering high-quality audio tailored to your creative vision. Our studios are equipped with top-tier gear and acoustically treated rooms, ensuring quality for your new album, podcast or indie film voiceover.',
    href: '#contact',
    cta: 'Book a Session',
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
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {data.map((s, idx) => (
        <BlurFade delay={0.25 + idx * 0.2} inView>
          <div className="h-full">
            <Card className="h-full border-none shadow-none">
              <CardHeader className="justify-even flex h-full gap-y-2">
                <img
                  src={s.background}
                  alt={s.name}
                  className="w-full rounded-t-md object-cover"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <Separator className="my-4" />
                <CardTitle className="flex items-center gap-4 md:text-xl lg:text-2xl">
                  <s.Icon />
                  {s.name}
                </CardTitle>
                <CardDescription className="lg:text-xl">
                  {s.description}
                </CardDescription>
              </CardHeader>
            </Card>
            <a
              href={s.href}
              className="flex w-full items-center justify-center"
            >
              {/* <ResponsiveButton
                className="w-full"
                variant="outline"
                label={s.cta}
                icon={ArrowRight}
                alwaysShowLabel
              /> */}
              <ShimmerButton className="shadow-2xl">
                <span className="flex items-center gap-x-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  {s.cta}
                  <ArrowRight />
                </span>
              </ShimmerButton>
            </a>
          </div>
        </BlurFade>
      ))}
    </div>
  )
}
