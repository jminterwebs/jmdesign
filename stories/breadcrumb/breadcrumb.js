import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

// Story Book Globals
import Breadcrumb from 'components/breadcrumb/Breadcrumb';

const breadcrumb = storiesOf('Breadcrumb', module);

breadcrumb
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
  .add('Breadcrumb', () => {
    const homeName = text('Home name', 'Home');
    const homeLink = text('Home link', '/');

    const previousName = text('Previous name', 'name');
    const previousLink = text('Previous link', '/previous');

    const current = text('Current name', 'name');

    return (
      <Breadcrumb>
        <Breadcrumb.Home name={homeName} link={homeLink} />
        <Breadcrumb.History name={previousName} link={previousLink} />
        <Breadcrumb.Current name={current} />
      </Breadcrumb>
    );
  });
