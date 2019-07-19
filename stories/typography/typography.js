import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Story Book Globals
import BodyText from 'components/typography/BodyText';
import Heading from 'components/typography/Heading';
import Label from 'components/typography/Label';
import SubLabel from 'components/typography/SubLabel';
import Title from 'components/typography/Title';

const typography = storiesOf('Typography', module);

typography
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
  .add('Body Text', () => {
    const children = text('Text', 'lorum ipsum');
    const align = select(
      'Aligment',
      ['left', 'center', 'right', 'justify', 'initial', 'inherit'],
      'left'
    );

    return <BodyText align={align}>{children}</BodyText>;
  })
  .add('Heading', () => {
    const headingText = text('Heading Text', 'Heading');
    const size = select(
      'Size',
      ['small', 'medium', 'large', 'x-large'],
      'medium'
    );
    const heading = select('Heading type', ['h1', 'h2', 'h3'], 'h3');
    const color = select(
      'Color',
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

    return (
      <Heading text={headingText} size={size} heading={heading} color={color} />
    );
  })
  .add('Label', () => {
    const labelText = text('Label Text', 'Label');
    const weight = text('Font Weight', 'Bolder');
    const displayStyle = text('Display Style', 'inline-block');
    const labelColor = select(
      'Label Color',
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

    return (
      <Label
        label={labelText}
        weight={weight}
        displayStyle={displayStyle}
        labelColor={labelColor}
      />
    );
  })
  .add('Sub Label', () => {
    const subLabel = text('Sub-Label', 'Sub Label');

    return <SubLabel subLabel={subLabel} />;
  })
  .add('Title', () => {
    const titleText = text('Title Text', 'Title');
    const color = select(
      'Label Color',
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

    return <Title text={titleText} color={color} />;
  });
