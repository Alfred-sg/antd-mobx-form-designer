import React from 'react';
import { Form, Input } from 'antd';
import { BaseProps } from './types';
import { prefix } from '../../constants';

export default class BuildInTextarea extends React.Component<BaseProps>{
  render(){
    const { style = {}, ...rest } = this.props;
    const { height } = style;
    const textareaStyle = { height };
  
    return (
      <Form.Item className={`${prefix}-textarea-wrap`} style={style}>
        <Input.TextArea className={`${prefix}-textarea`} {...rest} style={textareaStyle} />
      </Form.Item>    
    )
  }
}