import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';

import './horizontalTabs.scss';

export default function HorizontalTabs(props) {
  const { tabsData, defaultTabIndex } = props;

  const [activeTab, setActiveTab] = useState(defaultTabIndex);

  const handleClick = event => {
    setActiveTab(event.target.tabIndex);
  };

  const tabWidth = 100 / tabsData.length;

  const styles = {
    width: `${tabWidth}%`
  };

  return (
    <Card customClass="horizontal-tab-width">
      <div className="tabs">
        {tabsData.map((tab, index) => {
          return (
            <div
              key={tab.name}
              style={styles}
              tabIndex={index}
              role="button"
              onClick={e => handleClick(e)}
              onKeyPress={e => handleClick(e)}
              className={`tab-name tab-${index} ${
                activeTab === index ? 'active-tab' : 'nonactive-tab'
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
            className={`tab-body tab-${index} ${
              activeTab === index ? 'active-tab-body' : 'nonactive-tab-body'
            }`}>
            {tab.body}
          </li>
        );
      })}

      <div />
    </Card>
  );
}

HorizontalTabs.propTypes = {
  defaultTabIndex: PropTypes.number,
  tabsData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.node,
    active: PropTypes.bool.isRequired
  })
};

HorizontalTabs.defaultProps = {
  defaultTabIndex: 1,
  tabsData: {
    name: '',
    body: '',
    active: false
  }
};
