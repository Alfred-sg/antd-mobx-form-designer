import React from 'react';
import { Form, Input } from 'antd';
import { InputProps } from './types';
import { prefix } from '../../constants';

export default function input(props: InputProps){
  const { style, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-input-wrap`} style={style}>
      <Input className={`${prefix}-input`} {...rest} />
    </Form.Item>    
  )
}