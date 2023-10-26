import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
    },
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];
export const withError: Story = {
    args: {},
};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];
export const Loading: Story = {
    args: {},
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
