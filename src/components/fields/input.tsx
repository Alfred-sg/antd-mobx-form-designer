import React from 'react';
import { Form, Input } from 'antd';
import { InputProps } from './types';
import { prefix } from '../../constants';

export default class input extends React.Component<InputProps>{
  render(){
    const { style, ...rest } = this.props;
  
    return (
      <Form.Item className={`${prefix}-input-wrap`} style={style}>
        <Input className={`${prefix}-input`} {...rest} />
      </Form.Item>    
    )
  }
}