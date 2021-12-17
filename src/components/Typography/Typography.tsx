import { memo, ReactNode } from 'react';

import './Typography.scss';

interface ITypographyProps {
  children: ReactNode;
  color?: 'white' | 'black' | 'red';
  weight?: 'weight_400' | 'weight_500';
  size?: 'size_12' | 'size_14' | 'size_16';
}

function TypographyComponent({ children, color = 'black', weight = 'weight_400', size = 'size_14' }: ITypographyProps) {
  return (<span className={`text ${color} ${weight} ${size}`}>{children}</span>);
}

export const Typography = memo(TypographyComponent);
