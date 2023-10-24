import { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Normal: Story = {
    args: {},
};
Normal.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
export const AuthNavbar: Story = {
    args: {},
};
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
