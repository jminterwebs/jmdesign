import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';

// Story Book Globals
import DefinitionTable from 'components/definitionTable/DefinitionTable';

const definitionTable = storiesOf('Definition Table', module);

definitionTable
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
  .add('Definition Table', () => {
    const definitions = [
      {
        term: 'Logistics',
        definition:
          'The management of products or other resources as they travel between a point of origin and a destination.'
      },
      {
        term: 'Sole proprietorship',
        definition:
          'A business structure where a single individual both owns and runs the company.'
      },
      {
        term: 'Discount code',
        definition:
          'A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.'
      }
    ];

    const title = text('Title', 'Table Title');
    const data = object('Definitions', definitions);
    const outsideTitle = boolean('Outside Title', false);

    return (
      <DefinitionTable title={title} data={data} outsideTitle={outsideTitle} />
    );
  });
