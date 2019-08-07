// Core React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Local Components
import Card from '../card/Card';

// Local Styles
import './verticalTabs.scss';

export default function VerticalTabs(props) {
  const { tabsData, defaultTabIndex } = props;

  const [activeTab, setActiveTab] = useState(defaultTabIndex);

  const handleClick = event => {
    setActiveTab(event.target.tabIndex);
  };

  return (
    <Card customClass="vertical-tab-width">
      <div className="vertical-tabs">
        {tabsData.map((tab, index) => {
          return (
            <div
              key={tab.name}
              tabIndex={index}
              role="button"
              onClick={e => handleClick(e)}
              onKeyPress={e => handleClick(e)}
              className={`vertical-tab-name tab-${index} ${
                activeTab === index
                  ? 'vertical-active-tab'
                  : 'vertical-nonactive-tab'
              }`}>
              <div tabIndex={index}>{tab.name}</div>
            </div>
          );
        })}
      </div>
      {tabsData.map((tab, index) => {
        return (
          <li
            key={tab.name}
            className={`vertical-tab-body tab-${index} ${
              activeTab === index
                ? 'vertical-active-tab-body'
                : 'vertical-nonactive-tab-body'
            }`}>
            {tab.body}
          </li>
        );
      })}

      <div />
    </Card>
  );
}

VerticalTabs.propTypes = {
  defaultTabIndex: PropTypes.number,
  tabsData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.node,
    active: PropTypes.bool.isRequired
  })
};

VerticalTabs.defaultProps = {
  defaultTabIndex: 1,
  tabsData: {
    name: '',
    body: '',
    active: false
  }
};
