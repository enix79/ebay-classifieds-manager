import CreateClassified, { CreateClassifiedProps } from './CreateClassified';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

export default {
    component: CreateClassified,
} as Meta;

const Template: StoryFn<CreateClassifiedProps> = (args) => (
    <CreateClassified {...args} />
);

export const Playground = Template.bind({});
