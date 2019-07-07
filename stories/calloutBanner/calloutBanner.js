import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Story Book Globals
import CalloutBanner from 'components/calloutBanner/CalloutBanner';

const calloutBanner = storiesOf('CalloutBanner', module);

calloutBanner
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
  .add('CalloutBanner', () => {
    const title = text('Title', 'title');
    const bodyText = text('Bosy Text', 'This is the body text');
    const type = select(
      'Type:',
      [
        'secondary',
        'success',
        'primary',
        'info',
        'warning',
        'danger',
        'dark',
        'light'
      ],
      'info'
    );
    return <CalloutBanner title={title} bodyText={bodyText} type={type} />;
  });
