import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof MainPage>;

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
