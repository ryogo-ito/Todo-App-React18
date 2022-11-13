import React from 'react';
import { Input, InputProps } from 'antd';

interface Props extends InputProps {}

export const TextField = ({ onChange, value }: Props) => {
  return (
    <>
      <Input onChange={onChange} value={value} />
    </>
  );
};
