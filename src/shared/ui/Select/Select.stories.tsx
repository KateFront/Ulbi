import { Meta, StoryObj } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '1234', content: 'Второй пункт' },
        ],
    },
};
