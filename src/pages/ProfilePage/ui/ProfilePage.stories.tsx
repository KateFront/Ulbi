import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    args: {
        className: 'Text',
    },
};
Normal.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {
        className: 'Text',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
