import React from 'react';
import { Form, Checkbox } from 'antd';
import { AgreementProps } from './types';
import { prefix } from '../../constants';

export default function agreement(props: AgreementProps){
  const { style, text, url, ...rest } = props;

  return (
    <Form.Item className={`${prefix}-agreement-wrap`} style={style}>
      <Checkbox className={`${prefix}-agreement-checkbox`} onChange={this.onChange} />&nbsp;&nbsp;
      <span>
        您是否同意《
        <a className={`${prefix}-agreement-link`} {...rest} href={url} style={{ lineHeight: '36px' }}>
         {text}
        </a>
        》
      </span>
    </Form.Item>    
  )
}