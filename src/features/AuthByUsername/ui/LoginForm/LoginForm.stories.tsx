import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'admin' },
})];
export const withError: Story = {
    args: {},
};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'admin', error: 'error' },
})];
export const Loading: Story = {
    args: {},
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
