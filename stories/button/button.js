import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// Story Book Globals
import Button from 'components/button/Button';

const button = storiesOf('Button', module);

button
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: true,
      inline: true,
      text: '',
      styles: {
        header: {
          h1: {
            color: 'black'
          }
        }
      }
    })
  )
  .add('Button', () => {
    const size = text('Size', 'medium');
    const type = text('Type', 'info');
    const outlined = boolean('Outlined ?', false);
    const buttonType = text('Button type', 'button');
    const texts = text('Text', 'Button');

    return (
      <Button
        size={size}
        type={type}
        outlined={outlined}
        text={texts}
        buttonType={buttonType}
      />
    );
  });
