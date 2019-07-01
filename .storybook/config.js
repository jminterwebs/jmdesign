import { configure } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
