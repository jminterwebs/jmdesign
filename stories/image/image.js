import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

// Story Book Globals
import Image from 'components/image/Image';
import Thumbnail from 'components/image/Thumbnail';

const image = storiesOf('Image', module);

image
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
  .add('Image ', () => {
    const imageSrc = text('Image Source', 'https://picsum.photos/300/300');
    const width = text('Width', '300');
    const height = text('Height', '300');
    const alt = text('Alt Text', 'alt text');
    const title = text('Title Text', 'Title text');

    return (
      <Image
        width={width}
        height={height}
        alt={alt}
        title={title}
        imageSrc={imageSrc}
      />
    );
  })
  .add('Thumbnail ', () => {
    const imageSrc = text('Image Source', 'https://picsum.photos/300/300');
    const size = select('Size:', ['small', 'medium', 'large'], 'medium');
    const rounded = boolean('Rounded', true);

    return <Thumbnail imageSrc={imageSrc} size={size} rounded={rounded} />;
  });
