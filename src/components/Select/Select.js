import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return <Wrapper style={{'--borderRadius': '8px'}}>
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

const StyledSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--borderRadius);
  opacity: 0%;

  & > option {
    opacity: 100%;
  }
`

export default Select;
