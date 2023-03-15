import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { StoryContext, StoryFn } from '@storybook/react';
import React from 'react';

const withBaseLine = (Story: StoryFn) => {
    return (
        <>
            <CssBaseline />
            <Story />
        </>
    );
};

const withOutterBorder = (Story: StoryFn, context: StoryContext) => (
    <div
        id="with-outter-border-decorator"
        style={{
            borderStyle: 'dotted',
            borderWidth: '1px',
            borderColor:
                context.globals.border === true ? 'blue' : 'transparent',
        }}
    >
        <Story />
    </div>
);

const customViewPorts = {
    xs: {
        name: 'xs: Samsung Galaxy S8+ (360x740)',
        styles: {
            width: '360px',
            height: '740px',
        },
        type: 'mobile',
    },
    sm: {
        name: 'sm: iPad Air (820x1180)',
        styles: {
            width: '820px',
            height: '1180px',
        },
        type: 'tablet',
    },
    md: {
        name: 'md: iPad Pro (1024x1366)',
        styles: {
            width: '1024px',
            height: '1366px',
        },
        type: 'tablet',
    },
    lg: {
        name: 'lg: Desktop 1280x720',
        styles: {
            width: '1280px',
            height: '720px',
        },
        type: 'desktop',
    },
    xl: {
        name: 'xl: Desktop 1920x1080',
        styles: {
            width: '1920px',
            height: '1080px',
        },
        type: 'desktop',
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    tags: ['autodocs'],
    viewport: { viewports: customViewPorts },
};

export const globalTypes = {
    border: {
        name: 'Border',
        title: 'Border',
        description:
            'Outter border to better see the where the rendered component starts & ends',
        defaultValue: false,
        toolbar: {
            icon: 'paintbrush',
            showName: 'Border',
            items: [
                { value: true, title: 'On' },
                { value: false, title: 'Off' },
            ],
        },
    },
};

export const decorators = [withBaseLine, withOutterBorder];
