import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// Story Book Globals
import Card from 'components/card/Card';

const card = storiesOf('Card', module);

card
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
  .add(
    'Card',
    () => {
      const title = text('Title', 'title');
      const customClass = text('Custom Class', '');
      const outsideTitle = boolean('Outside Title', false);

      return (
        <Card
          title={title}
          customClass={customClass}
          outsideTitle={outsideTitle}
          footer={<p>This is a test footer</p>}>
          <p> Place children componets here</p>
        </Card>
      );
    },
    {
      knobs: {
        escapeHTML: false
      }
    }
  );
