import { Theme, ThemeProvider } from 'app/providers';
import { Decorator } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (Story: Decorator) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            { // @ts-ignore
                <Story />
            }
        </div>
    </ThemeProvider>

);
