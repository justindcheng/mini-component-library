import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return <Wrapper>
      <span>{displayedValue}</span>
      <Icon id='chevron-down' size='12px' style={{position: 'relative', display: 'inline-block', 'margin-left': '24px'}}/>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  ;
};

const Wrapper = styled.div`
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  width: fit-content;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    border: 2px solid;
  }
`

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;

  color: transparent;
  background: transparent;

  & > option {
    color: black;
    background: ${COLORS.transparentGray15};
  }
`

export default Select;
