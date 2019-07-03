import React from 'react';
import { Form } from 'antd';
import { TextProps } from './types';
import { prefix } from '../../constants';

export default function text(props: TextProps){
  const { style, value, dataSource } = props;
  let text: Array<string> = Array.isArray(value) ? value : [value];

  if ( dataSource ){
    dataSource.forEach(({label, value: val}) => {
      if ( text.indexOf(val) !== -1 )
        text.push(label);
    });
  };

  return (
    <Form.Item className={`${prefix}-text-wrap`} style={style}>
      {text.map(it => <div className={`${prefix}-text`}>{it}</div>)}
    </Form.Item>    
  )
}