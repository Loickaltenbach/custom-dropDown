/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../src/components/dropdown';

describe('Dropdown component', () => {
  const title = 'Dropdown Title';
  const defaultLabel = 'Select an item';
  const items = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
  ];
  const selectedItem = items[0];
  const setSelectedItem = jest.fn();
  const onSelect = jest.fn();

  it('should call setSelectedItem and onSelect when an item is clicked', () => {
    const { getByText } = render(
      <Dropdown
        title={title}
        items={items}
        defaultLabel={defaultLabel}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        onSelect={onSelect}
      />,
    );

    fireEvent.click(getByText(selectedItem.label));

    fireEvent.click(getByText(items[1].label));

    expect(setSelectedItem).toHaveBeenCalledWith(items[1]);
    expect(onSelect).toHaveBeenCalledWith(items[1]);
  });
});
