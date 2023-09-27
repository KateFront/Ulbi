import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeSwitcher } from 'shared/ui/ThemeSwithcer';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    args: {
        className: 'Text',
    },
};
export const Dark: Story = {
    args: {
        className: 'Text',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
