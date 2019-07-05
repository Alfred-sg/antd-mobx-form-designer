var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Form, Checkbox, Input } from 'antd';
import { prefix } from '../../constants';
export default class checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.onCheckboxChange = (checkboxValues) => {
            const { onChange } = this.props;
            onChange && onChange(new Set(checkboxValues));
        };
        this.onInputChange = (inputValue) => {
            const { value, onChange, dataSource } = this.props;
            const checkboxValues = (value || []).filter(it => dataSource.some(item => !item.isSpecial && item.value === it));
            checkboxValues.push(inputValue);
            onChange && onChange(checkboxValues);
        };
    }
    render() {
        const _a = this.props, { style, order, special, value, dataSource, onChange } = _a, rest = __rest(_a, ["style", "order", "special", "value", "dataSource", "onChange"]);
        let specialItemSelected = false;
        let checkboxValue = value;
        let specialValue;
        // 其他选项
        if (special) {
            const specialSelectedItem = dataSource.find(item => !!value && (value || []).indexOf(item.value) !== -1 && !!item.isSpecial);
            specialItemSelected = !!specialSelectedItem;
            checkboxValue = (value || []).filter(it => dataSource.some(item => item.value === it));
            if (!!specialSelectedItem && checkboxValue.indexOf(specialSelectedItem.value) === -1)
                checkboxValue = [...checkboxValue, specialSelectedItem.value];
            if (specialItemSelected)
                specialValue = (value || []).find(val => !dataSource.some(({ value }) => val === value));
        }
        return (<div style={style} className={`${prefix}-checkbox-wrap`}>
        <Form.Item>
          <Checkbox.Group {...rest} dataSource={dataSource} value={checkboxValue} onChange={this.onCheckboxChange}/>
        </Form.Item>
  
        {specialItemSelected && (<Form.Item>
            <Input placeholder='请输入' onChange={this.onInputChange} value={specialValue}/>
          </Form.Item>)}
      </div>);
    }
}
