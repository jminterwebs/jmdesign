import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object, number } from '@storybook/addon-knobs';

// Story Book Globals
import VerticalTabs from 'components/verticalTabs/VerticalTabs';

const verticalTabs = storiesOf('Vertical Tabs', module);

verticalTabs
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: true,
      inline: true,
      text: '',
      styles: {
        header: {
          h1: {
            color: 'black' // and the headers of the sections are red.
          }
        }
      }
    })
  )
  .add('Vertical Tabs', () => {
    const tabs = [
      { name: 'Tab 1', body: 'Testing Tab data text', active: true },
      {
        name: 'Tab 2',
        body: 'This is tab 2',
        active: false
      },
      { name: 'Tab 3', body: 'Testing Tab data', active: false }
    ];

    const defaultTabIndex = number('Default Tab Idex', 0);
    const tabsData = object('Tab Data', tabs, '');

    return (
      <VerticalTabs tabsData={tabsData} defaultTabIndex={defaultTabIndex} />
    );
  });
