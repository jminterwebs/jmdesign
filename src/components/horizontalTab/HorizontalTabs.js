import React, { useState } from 'react';

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
            <li
              key={tab.name}
              style={styles}
              className={`tab-name tab-${index} ${
                activeTab === index ? 'active-tab' : 'nonactive-tab'
              }`}>
              <div
                tabIndex={index}
                role="button"
                onClick={e => handleClick(e)}
                onKeyPress={e => handleClick(e)}>
                {tab.name}
              </div>
            </li>
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
