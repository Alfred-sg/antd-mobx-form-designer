import React from 'react';
import { Form } from 'antd';
import { LinkProps } from './types';
import { prefix } from '../../constants';

export default function link(props: LinkProps){
  const { style, text, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-link-wrap`} style={style}>
      <a className={`${prefix}-link`} {...rest}>{text}</a>
    </Form.Item>    
  )
}