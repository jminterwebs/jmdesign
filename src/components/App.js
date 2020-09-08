import React from 'react';

import Wrapper from 'components/wrapper/Wrapper';
import Heading from 'components/typography/Heading';
import Label from 'components/typography/Label';
import Title from 'components/typography/Title';
import SubLabel from 'components/typography/SubLabel';

import Button from 'components/button/Button';
import Input from 'components/form/Input';
import Checkbox from 'components/form/Checkbox';
import FormError from 'components/form/FormError';
import Tag from 'components/tag/Tag';
import DataTable from 'components/dataTable/DataTable';
import SkeletonFill from 'components/skeleton/SkeletonFill';
import SkeletonLine from 'components/skeleton/SkeletonLine';
import ProgressBar from 'components/progressBar/ProgressBar';
import SegmentedBar from 'components/progressBar/SegmentedBar';
import Dropdown from 'components/form/Dropdown';
import RadioGroup from 'components/form/RadioGroup';
import Avatar from 'components/avatar/Avatar';
import Card from 'components/card/Card';
import Badge from 'components/badge/Badge';
import List from 'components/list/List';
import CalloutBanner from './calloutBanner/CalloutBanner';
import Breadcrumb from './breadcrumb/Breadcrumb';

import HorizontalTabs from './horizontalTab/HorizontalTabs';
import DefinitionTable from './definitionTable/DefinitionTable';
import Toggle from './toggle/Toggle';
import VerticalTabs from './verticalTabs/VerticalTabs';

import '../styles/scss/global.scss';
import '../styles/scss/localStyles.scss';

export default function App() {
  const styles = {
    marginLeft: '25px'
  };

  return (
    <div className="App" style={styles}>
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
      <Button size="small" label="badge" type="primary" text="Hello" />
      <Button
        size="medium"
        label="badge"
        type="button"
        buttonType="submit"
        text="Hello"
      />
      <Button size="large" label="badge" type="primary" text="Hello" />
      <Input size="small" placeholder="Testing" type="info" />
      <Input size="medium" placeholder="Testing" type="primary" />
      <Input size="large" placeholder="Testing" type="secondary" />
      <Input size="large" placeholder="Testing" type="warning" />
      <Input size="large" placeholder="Testing" type="danger" />
      <Input size="large" placeholder="Testing" type="success" />
      <br />
      <br />
      <Checkbox
        name="test"
        value="testing"
        formId="tester"
        label="test"
        type="info"
        size="medium"
      />

      <Checkbox
        name="test"
        value="testing"
        formId="tester"
        label="test"
        type="primary"
        size="large"
      />

      <Checkbox
        name="test"
        value="testing"
        formId="tester"
        label="test"
        type="secondary"
        size="small"
      />

      <Checkbox
        name="test"
        value="testing"
        formId="tester"
        label="test"
        type="warning"
        size="small"
      />

      <Checkbox
        name="test"
        value="testing"
        formId="tester"
        label="test"
        type="danger"
        size="small"
      />

      <Checkbox
        name="test"
        value="testing"
        formId="tester"
        label="test"
        type="success"
        size="small"
      />

      <br />
      <br />
      <DataTable
        title="Detail List"
        currencyColumns={['Net Sales', 'Price']}
        totalsColumns={['', '', '', 'Net Quantity', 'Net Sales']}
        data={[
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
        ]}
      />
      <br />
      <br />

      <Tag id="one" size="small" type="danger" label="testing" removable />
      <Tag id="one" size="medium" type="danger" label="testing" removable />
      <Tag id="one" size="large" type="danger" label="testing" removable />
      <br />
      <br />

      <RadioGroup
        name="test-group"
        values={[
          { value: 'one', text: 'testing', subText: 'tester', type: 'info' },
          { value: 'two', text: 'hello', subText: 'tester', type: 'info' },
          { value: 'three', text: 'bye', subText: 'tester' }
        ]}
      />
      <br />
      <br />

      <Dropdown
        options={[
          { value: 'one', label: 'testing' },
          { value: 'two', label: 'hello' },
          { value: 'three', label: 'bye' }
        ]}
      />
      <br />
      <br />
      <FormError errorText="Danger Will Robinson" />

      <br />
      <br />
      <div className="test">
        <SkeletonLine lines={4} />
      </div>
      <div className="test">
        <SkeletonLine lines={5} />
      </div>
      <br />
      <br />
      <ProgressBar barWidth="250px" type="danger" steps={5} currentStep={3} />
      <br />
      <br />
      <SegmentedBar
        segments={[
          {
            name: 'start',
            type: 'info',
            active: 'active'
          },
          {
            name: 'step 2',
            type: 'info',
            active: 'inactive'
          },
          {
            name: 'step 3',
            type: 'info',
            active: 'inactive'
          },
          {
            name: 'finish',
            type: 'info',
            active: 'inactive'
          }
        ]}
      />
      <br />
      <br />
      <SkeletonFill width="500px" height="500px" />
      <br />
      <br />
      <Heading text="Typography" size="x-large" />
      <br />
      <Heading text="Headings" size="medium" />
      <Heading text="Heading 1" size="x-large" color="primary" />
      <Heading text="Heading 1" size="large" />
      <Heading text="Heading 1" size="medium" />
      <Heading text="Heading 1" size="small" />
      <br />

      <Label label="Label" weight="400" />
      <SubLabel subLabel="Hello" labelColor="danger" />
      <br />
      <Label label="Label" weight="bold" />
      <br />
      <Heading text="Title" size="medium" />
      <br />
      <Title text="Title Text" color="danger" />
      <Avatar
        imageSrc="https://picsum.photos/300"
        label="JMInterwebs"
        subLabel="Web Developer"
        initials="JM"
      />
      <br />
      <br />
      <Avatar label="JMInterwebs" subLabel="Web Developer" initials="JM" />
      <br />
      <Card title="Card title" outsideTitle footer={<p> This is a footer</p>} />
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
      <HorizontalTabs
        tabsData={[
          { name: 'Tab 1', body: 'Testing Tab data text', active: true },
          {
            name: 'Tab 2',
            body: <Label label="Label Text" />,
            active: false
          },
          { name: 'Tab 3', body: 'Testing Tab data', active: false }
        ]}
        defaultTabIndex={0}
      />
      <br />
      <VerticalTabs
        tabsData={[
          { name: 'Tab 1', body: 'Testing Tab data text', active: true },
          {
            name: 'Tab 2',
            body: <Label label="Label Text" />,
            active: false
          },
          { name: 'Tab 3', body: 'Testing Tab data', active: false }
        ]}
        defaultTabIndex={0}
      />
      <br />
      <Wrapper>
        <List list={['one', 'two', 'Three', 'Bills', 'Bulls']}>
          <List.LineItem> Testing</List.LineItem>
        </List>
      </Wrapper>
    </div>
  );
}
