import React from 'react';
import { Form, Radio, Input } from 'antd';
import { RadioProps } from './types';

export default function radio(props: RadioProps){
  const { style, order, special, value, dataSource, onChange, ...rest } = props;
  let specialItemSelected = false;
  let radioValue = value;
  let specialValue;

  // 其他选项
  if ( special ){
    const specialSelectedItem = dataSource.find(item => !!value && item.value === value && !!item.isSpecial);
    specialItemSelected = !!specialSelectedItem;
    if ( specialSelectedItem ) radioValue = specialSelectedItem.value;
    if ( specialSelectedItem && specialSelectedItem.value !== value ) specialValue = value;
  }

  return (
    <div style={style} className='antd-mobx-form-designer-radio-wrap'>
      <Form.Item>
        <Radio.Group {...rest} dataSource={dataSource} value={radioValue} onChange={onChange} />
      </Form.Item>

      { specialItemSelected && (
        <Form.Item>
          <Input placeholder='请输入' onChange={onChange} value={specialValue} />
        </Form.Item>
      )}
    </div>
  );
}