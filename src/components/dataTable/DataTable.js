import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

import Card from '../card/Card';
import Label from '../typography/Label';

import './dataTable.scss';

export default function DataTable(props) {
  const { title, data, currencyColumns, totalsColumns } = props;

  const [sorted, setSorted] = useState(data);
  const [sortDirection, setSortDirection] = useState('DOWN');

  const handleSort = event => {
    if (sortDirection === 'DOWN') {
      setSortDirection('UP');
      setSorted(
        sorted.sort((a, b) => {
          if (typeof a[event.target.innerText] === 'string') {
            const stringA = [event.target.innerText].toUpperCase();
            const stringB = [event.target.innerText].toUpperCase();

            if (stringA < stringB) {
              return -1;
            }

            if (stringA > stringB) {
              return 1;
            }
          }
          return a[event.target.innerText] - b[event.target.innerText];
        })
      );
      setSortDirection('DOWN');
      setSorted(
        sorted.sort((a, b) => {
          if (typeof a[event.target.innerText] === 'string') {
            const stringA = [event.target.innerText].toUpperCase();
            const stringB = [event.target.innerText].toUpperCase();

            if (stringA > stringB) {
              return -1;
            }

            if (stringA < stringB) {
              return 1;
            }
          }
          return b[event.target.innerText] - a[event.target.innerText];
        })
      );
    }
  };

  const tableData = sorted
    ? sorted.map(getData => {
        return (
          <div className="data-row">
            {Object.keys(getData).map(key => {
              return (
                <span
                  className={`data-cell ${
                    typeof getData[key] === 'number'
                      ? 'text-right'
                      : 'text-left'
                  } `}>
                  {currencyColumns.indexOf(key) > -1 ? (
                    <Label
                      weight="400"
                      label={
                        <Currency quantity={getData[key]} currency="USD" />
                      }
                    />
                  ) : (
                    <Label weight="400" label={getData[key]} />
                  )}
                </span>
              );
            })}
          </div>
        );
      })
    : null;

  const tableHeading = sorted ? (
    <div className="data-heading">
      {Object.keys(sorted[0]).map((heading, index) => {
        return (
          <span
            role="button"
            tabIndex={index}
            onKeyDown={e => handleSort(e)}
            onClick={e => handleSort(e)}
            className={`data-cell ${
              typeof data[0][heading] === 'number' ? 'text-right' : 'text-left'
            } `}>
            <Label label={heading} weight="500" />
          </span>
        );
      })}
    </div>
  ) : null;

  const totalValue = totalsColumns ? (
    <div className="data-total">
      {totalsColumns.map((totals, index) => {
        const total = data
          .map(a => {
            return a[totals];
          })
          .reduce((a, b) => {
            return a + b;
          });

        if (total) {
          return (
            <span
              className={`data-cell ${
                typeof total === 'number' ? 'text-right' : 'text-left'
              }`}>
              {currencyColumns.indexOf(totals) > -1 ? (
                <Label label={<Currency quantity={total} currency="USD" />} />
              ) : (
                <Label label={total} />
              )}
            </span>
          );
        }
        if (index === 0) {
          return (
            <span className="data-cell data-cell-totals">
              <Label label="Totals" />
            </span>
          );
        }
        return (
          <span className="data-cell data-cell-totals text-right">--</span>
        );
      })}
    </div>
  ) : null;

  return (
    <Card title={title} customClass="dataTable-style">
      <div className="dataTable-details-style">
        {tableHeading}
        {totalValue}
        {tableData}
      </div>
    </Card>
  );
}

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  currencyColumns: PropTypes.arrayOf(PropTypes.string),
  totalsColumns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

DataTable.defaultProps = {
  currencyColumns: [''],
  totalsColumns: ['']
};
