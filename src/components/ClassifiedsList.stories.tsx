import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { classifiedsList } from '../fixtures';
import ClassifiedsList, { ClassifiedsListProps } from './ClassifiedsList';

export default {
    component: ClassifiedsList,
} as Meta;

const Template: StoryFn<ClassifiedsListProps> = (args) => (
    <ClassifiedsList {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
    rows: classifiedsList.map((classified) => ({
        ...classified,
        duration: classified.online ? 0 : null,
    })),
};
