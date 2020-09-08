import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

// Story Book Globals
import SkeletonLine from 'components/skeleton/SkeletonLine';
import SkeletonFill from 'components/skeleton/SkeletonFill';
import { number } from 'prop-types';

const skeleton = storiesOf('Skeleton', module);

skeleton
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
  .add('Skeleton Line', () => {
    const lines = number('Number of Lines', 5);

    return <SkeletonLine lines={lines} />;
  })
  .add('Skeleton Fill', () => {
    const fillWidth = text('Fill Width', '500px');
    const fillHeight = text('Fill Height', '500px');

    return <SkeletonFill width={fillWidth} height={fillHeight} />;
  });
