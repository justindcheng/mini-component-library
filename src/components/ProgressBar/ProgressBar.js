/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <Wrapper role="progressbar" aria-valuenow={value} style={styles}>
      <BarWrapper>
        <Bar style={{ '--width': value + '%' }}/>
      </BarWrapper>
    </Wrapper>;
};

const SIZES = {
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--borderRadius': '8px'
  },
  medium: {
    '--height': '12px',
    '--padding': '0px',
    '--borderRadius': '4px'
  },
  small: {
    '--height': '8px',
    '--padding': '0px',
    '--borderRadius': '4px'
  }
}

const Wrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: 100%;
  background: ${COLORS.primary};
`

export default ProgressBar;
