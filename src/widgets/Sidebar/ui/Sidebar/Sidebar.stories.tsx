import { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof Sidebar>;

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
