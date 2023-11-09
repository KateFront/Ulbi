import {
    Meta, StoryObj,
} from '@storybook/react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
// @ts-ignore
import AvatarImg from './storybook.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof Avatar>;
export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
