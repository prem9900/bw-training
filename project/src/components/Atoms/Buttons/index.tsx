import { Button as MuiButton, ButtonProps, styled } from '@mui/material';
import React from 'react';

interface Props extends ButtonProps {
  width?: string;
  outlineColor?: string;
}

const StyledButton = styled(MuiButton)<Props>(({ theme, width, outlineColor, variant }) => ({
  width: width,
  ...(variant === 'outlined' && {
    border: `1px solid ${outlineColor || theme.palette.text.primary}`,
    color: outlineColor || theme.palette.text.primary,
    '&:hover': {
      border: `1px solid ${outlineColor || theme.palette.text.primary}`
    }
  })
}));

const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
