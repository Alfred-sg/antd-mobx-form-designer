import React from 'react';
import { Form, Checkbox, Input } from 'antd';
import { CheckboxProps } from './types';
import { prefix } from '../../constants';

export default class checkbox extends React.Component<CheckboxProps> {
  onCheckboxChange = (checkboxValues: Array<number | string>) => {
    const { onChange } = this.props;
    onChange && onChange(new Set(checkboxValues));
  }

  onInputChange = (inputValue: string | number) => {
    const { value, onChange, dataSource } = this.props;
    const checkboxValues = (value || []).filter(it => dataSource.some(item => !item.isSpecial && item.value === it));
    checkboxValues.push(inputValue);
    onChange && onChange(checkboxValues);
  }

  render(){
    const { style, order, special, value, dataSource, onChange, ...rest } = this.props;
    let specialItemSelected = false;
    let checkboxValue = value;
    let specialValue;

    // 其他选项
    if ( special ){
      const specialSelectedItem = dataSource.find(item => 
        !!value && (value || []).indexOf(item.value) !== -1 && !!item.isSpecial);
      specialItemSelected = !!specialSelectedItem;
      checkboxValue = (value || []).filter(it => dataSource.some(item => item.value === it));
      if ( !!specialSelectedItem && checkboxValue.indexOf(specialSelectedItem.value) === -1 ) 
        checkboxValue = [...checkboxValue, specialSelectedItem.value];
      if ( specialItemSelected ) 
        specialValue = (value || []).find(val => !dataSource.some(({value}) => val === value));
    }

    return (
      <div style={style} className={`${prefix}-checkbox-wrap`}>
        <Form.Item>
          <Checkbox.Group {...rest} dataSource={dataSource} value={checkboxValue} 
            onChange={this.onCheckboxChange} />
        </Form.Item>
  
        { specialItemSelected && (
          <Form.Item>
            <Input placeholder='请输入' onChange={this.onInputChange} value={specialValue} />
          </Form.Item>
        )}
      </div>
    );
  }
}