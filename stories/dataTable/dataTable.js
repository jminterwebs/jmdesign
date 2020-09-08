import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object } from '@storybook/addon-knobs';

// Story Book Globals
import DataTable from 'components/dataTable/DataTable';

const dataTable = storiesOf('DataTable', module);

dataTable
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
  .add('DataTable', () => {
    const title = text('Title', 'Data Table');
    const currencyColumns = array('Currency Columns', ['Net Sales', 'Price']);
    const totalsColumns = array('Totals Columns', [
      '',
      '',
      '',
      'Net Quantity',
      'Net Sales'
    ]);
    const data = object('Data', [
      {
        Product: 'Emerald Silk Gown',
        Price: 876.0,
        'Sku Number': 124689,
        'Net Quantity': 140,
        'Net Sales': 122500.0
      },
      {
        Product: 'Mauve Cashmere Scarf',
        Price: 230.0,
        'Sku Number': 124533,
        'Net Quantity': 83,
        'Net Sales': 19090.0
      },
      {
        Product: 'Wool Blazer',
        Price: 445.0,
        'Sku Number': 124518,
        'Net Quantity': 32,
        'Net Sales': 14240.0
      }
    ]);

    return (
      <DataTable
        title={title}
        currencyColumns={currencyColumns}
        totalsColumns={totalsColumns}
        data={data}
      />
    );
  });
