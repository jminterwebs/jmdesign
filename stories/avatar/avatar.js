import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

// Story Book Globals
import Avatar from 'components/avatar/Avatar';

const avatar = storiesOf('Avatar', module);

avatar
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: true,
      inline: true,
      text:
        "An Avatar components display a small image. Avatar's should be used to display user information and in product lists. Additional information can also be added by passing strings with the name and byline props. Ideally an Avatar component should be used with the card component",
      styles: {
        header: {
          h1: {
            color: 'black' // and the headers of the sections are red.
          }
        }
      }
    })
  )
  .add('Avatar', () => {
    const imageSrc = text(
      'imageSrc',
      'https://media.istockphoto.com/photos/lego-batman-picture-id517124944?k=6&m=517124944&s=612x612&w=0&h=eICOAC0cHWaqL6vKM4y8BvOcAvn3OpZ5_-sst48C1Gw='
    );
    const size = text('size', 'medium');
    const label = text('label', 'Batman');
    const subLabel = text('subLabel', 'Caped Crusader');
    const initials = text('initials', 'BW');

    return (
      <Avatar
        size={size}
        label={label}
        subLabel={subLabel}
        initials={initials}
        imageSrc={imageSrc}
      />
    );
  });
