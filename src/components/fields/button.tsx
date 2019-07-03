import React from 'react';
import { Form, Button } from 'antd';
import { LinkProps } from './types';
import { prefix } from '../../constants';

export default function button(props: LinkProps){
  const { style, text, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-button-wrap`} style={style}>
      <Button className={`${prefix}-button`} {...rest}>{text}</Button>
    </Form.Item>    
  )
}