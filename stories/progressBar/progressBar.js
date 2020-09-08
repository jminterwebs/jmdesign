import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object, number } from '@storybook/addon-knobs';

// Story Book Globals
import ProgressBar from 'components/progressBar/ProgressBar';
import SegmentedBar from 'components/progressBar/SegmentedBar';

const progressBar = storiesOf('Progress', module);

progressBar
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
  .add('Progress Bar', () => {
    const barwidth = text('Bar Width', '250px');
    const type = text('Type', 'danger');
    const steps = number('Steps', 5);
    const currentStep = number('Current Step', 1);

    return (
      <ProgressBar
        barwidth={barwidth}
        type={type}
        steps={steps}
        currentStep={currentStep}
      />
    );
  })
  .add('Segmented Bar', () => {
    const segments = object('Segments', [
      {
        name: 'start',
        type: 'info',
        active: 'active'
      },
      {
        name: 'step 2',
        type: 'info',
        active: 'inactive'
      },
      {
        name: 'step 3',
        type: 'info',
        active: 'inactive'
      },
      {
        name: 'finish',
        type: 'info',
        active: 'inactive'
      }
    ]);

    return <SegmentedBar segments={segments} />;
  });
