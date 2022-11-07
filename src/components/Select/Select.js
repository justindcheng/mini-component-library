import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return <Wrapper style={{'--borderRadius': '8px'}}>
      <span>{displayedValue}</span>
      <IconWrapper>
        <Icon id='chevron-down' size='24px' strokeWidth='2'/>
      </IconWrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  ;
};

const Wrapper = styled.div`
  position: relative;
  padding: 12px 52px 12px 16px;
  border-radius: var(--borderRadius);
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

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  height: fit-content;
`

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--borderRadius);
  color: transparent;
  background-color: transparent;

  & > option {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }
`

export default Select;
