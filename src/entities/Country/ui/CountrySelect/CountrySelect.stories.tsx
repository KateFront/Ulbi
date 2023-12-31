import { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from 'entities/Country';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
} satisfies Meta<typeof CountrySelect>;
export default meta;

type Story = StoryObj<typeof CountrySelect>
export const Primary: Story = {
    args: {
    },
};
