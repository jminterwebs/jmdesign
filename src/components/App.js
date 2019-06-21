import React from 'react';

import Heading from 'components/typography/Heading';
import Label from 'components/typography/Label';
import Title from 'components/typography/Title';

import Avatar from 'components/avatar/Avatar';
import Card from 'components/card/Card';
import Badge from 'components/badge/Badge';

import CalloutBanner from './calloutBanner/CalloutBanner';
import Breadcrumb from './breadcrumb/Breadcrumb';

import '../styles/scss/global.scss';
import '../styles/scss/localStyles.scss';
import DefinitionTable from './definitionTable/DefinitionTable';
import Toggle from './toggle/Toggle';

export default function App() {
  return (
    <div className="App">
      <Heading text="Color Boxes" size="x-large" />
      <div className="color-boxes">
        <div className="color-box primary">
          <Label text="primary" labelColor="white" />
        </div>

        <div className="color-box success">
          <Label text="success" labelColor="white" />
        </div>
        <div className="color-box info">
          <Label label="info" labelColor="white" />
        </div>
        <div className="color-box warning">
          <Label text="warning" labelColor="white" />
        </div>
        <div className="color-box danger">
          <Label text="danger" labelColor="white" />
        </div>
        <div className="color-box default">
          <Label text="default" labelColor="white" />
        </div>
      </div>
      <br />
      <Heading text="Typography" size="x-large" />
      <br />
      <Heading text="Headings" size="medium" />
      <Heading text="Heading 1" size="x-large" color="primary" />
      <Heading text="Heading 1" size="large" />
      <Heading text="Heading 1" size="medium" />
      <Heading text="Heading 1" size="small" />
      <br />
      <Heading text="Label" size="medium" />

      <Label text="Label" weight="400" />
      <Label text="Label" weight="bold" />

      <br />
      <Heading text="Title" size="medium" />
      <br />
      <Title text="Title Text" color="danger" />

      <Avatar
        imageSrc="https://picsum.photos/300"
        label="John Verdone"
        subLabel="Web Developer"
        initials="JV"
      />

      <br />

      <Card title={<Title text="hello there" />} outsideTitle></Card>

      <br />

      <Badge size="small" label="badge" type="primary" />

      <Badge size="medium" label="badge" type="primary" />

      <Badge size="large" label="badge" type="primary" />

      <br />

      <CalloutBanner
        title="Call Out Banner"
        bodyText="This is the call out text"
        type="info"
      />

      <br />

      <DefinitionTable
        title="Definition Table"
        data={[
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
        ]}
      />

      <br />

      <Breadcrumb>
        <Breadcrumb.Home name="Home" link="/" />
        <Breadcrumb.History name="Products" link="/products" />
        <Breadcrumb.Current name="Product" />
      </Breadcrumb>

      <br />

      <Toggle type="info" label="toggle" id={1} />

      <br />

      <br />
    </div>
  );
}
