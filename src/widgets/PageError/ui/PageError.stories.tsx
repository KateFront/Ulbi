import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof PageError>;

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
