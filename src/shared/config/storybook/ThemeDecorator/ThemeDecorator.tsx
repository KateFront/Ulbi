import { Theme } from 'app/providers';
import { Decorator } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (Story: Decorator) => (
    <div className={`app ${theme}`}>
        { // @ts-ignore
            <Story />
        }
    </div>
);
