import React from 'react';
import { Form, Input } from 'antd';
import { InputProps } from './types';
import { prefix } from '../../constants';

export default function hidden(props: InputProps){
  const { style, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-hidden-wrap`} style={style}>
      <Input className={`${prefix}-hidden`} {...rest} disabled />
    </Form.Item>    
  )
}