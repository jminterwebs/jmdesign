// Core React
import React, { useState } from 'react';

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
