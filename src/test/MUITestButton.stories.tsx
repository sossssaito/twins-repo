import { MUITestButton } from '@/test/MUITestButton'

export default {
  title: 'Design System/Button',
  component: MUITestButton,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'error', 'info'],
      control: { type: 'radio' },
    },
  },
}

export const Default = {
  args: {
    label: 'button',
    variant: 'contained',
    color: 'primary',
  },
}
