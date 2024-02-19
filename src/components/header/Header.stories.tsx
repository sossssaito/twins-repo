import { Header } from '@/components/header/Header'

export default {
  title: 'Design System/Header',
  component: Header,
  argTypes: {
    label: {
      options: ['COSME', 'KOMUGI'],
      control: { type: 'radio' },
    },
  },
}

export const Default = {
  args: {
    label: 'COSME',
  },
}
