import React from 'react';
import { Form, Select } from 'antd';
import { BaseProps } from './types';
import { prefix } from '../../constants';

export default function textarea(props: BaseProps){
  const { style, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-textarea-wrap`} style={style}>
      <Select className={`${prefix}-textarea`} {...rest} />
    </Form.Item>    
  )
}