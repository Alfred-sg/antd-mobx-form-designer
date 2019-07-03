import React from 'react';
import { Form, DatePicker } from 'antd';
import { BaseProps } from './types';
import { prefix } from '../../constants';

export default function datepicker(props: BaseProps){
  const { style, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-datepicker-wrap`} style={style}>
      <DatePicker className={`${prefix}-datepicker`} {...rest} />
    </Form.Item>    
  )
}