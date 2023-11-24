import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Theme } from 'app/providers';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
