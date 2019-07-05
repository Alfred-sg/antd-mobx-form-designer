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
import { Form, Radio, Input } from 'antd';
export default function radio(props) {
    const { style, order, special, value, dataSource, onChange } = props, rest = __rest(props, ["style", "order", "special", "value", "dataSource", "onChange"]);
    let specialItemSelected = false;
    let radioValue = value;
    let specialValue;
    // 其他选项
    if (special) {
        const specialSelectedItem = dataSource.find(item => !!value && item.value === value && !!item.isSpecial);
        specialItemSelected = !!specialSelectedItem;
        if (specialSelectedItem)
            radioValue = specialSelectedItem.value;
        if (specialSelectedItem && specialSelectedItem.value !== value)
            specialValue = value;
    }
    return (<div style={style} className='antd-mobx-form-designer-radio-wrap'>
      <Form.Item>
        <Radio.Group {...rest} dataSource={dataSource} value={radioValue} onChange={onChange}/>
      </Form.Item>

      {specialItemSelected && (<Form.Item>
          <Input placeholder='请输入' onChange={onChange} value={specialValue}/>
        </Form.Item>)}
    </div>);
}
