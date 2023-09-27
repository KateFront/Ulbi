import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from 'widgets/Loader/Loader';

const meta = {
    title: 'widget/Loader',
    component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

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
