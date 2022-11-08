import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = {
    '--width': width + 'px',
    ...SIZES[size]
  }
  return <Wrapper style={styles}>
      <VisuallyHidden><label>{label}</label></VisuallyHidden>
      <IconWrapper><Icon id={icon} strokeWidth={styles['iconStrokeWidth']} size={styles['--fontSize']} /></IconWrapper>
      <Underline />
      <OffsetInput type='text' placeholder={placeholder} />
    </Wrapper>
  ;
};

const SIZES = {
  small: {
    '--fontSize': '14px',
    iconStrokeWidth: 1,
    '--underlineHeight': '1px',
    '--leftOffset': '28px'
  },
  large: {
    '--fontSize': '18px',
    iconStrokeWidth: 2,
    '--underlineHeight': '2px',
    '--leftOffset': '36px'
  }
}

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const Underline = styled.div`
  position: absolute;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: black;
  height: var(--underlineHeight);
  pointer-events: none;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4px;
  margin: auto;
  height: min-content;
  pointer-events: none;
`

const OffsetInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 7px 7px 7px var(--leftOffset);
  border: none;
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    color:${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

export default IconInput;
