import React from 'react';
import { Form, Switch } from 'antd';
import { SwitchProps } from './types';
import { prefix } from '../../constants';

export default function customswitch(props: SwitchProps){
  const { style, dataSource, value, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-switch-wrap`} style={style}>
      <Switch className={`${prefix}-switch`} {...rest} checked={!!value} 
        checkedChildren={dataSource[0] || 'on'} 
        unCheckedChildren={dataSource[1] || 'off'}  />
    </Form.Item>    
  )
}