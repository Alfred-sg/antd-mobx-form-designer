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
import { Form, Switch } from 'antd';
import { prefix } from '../../constants';
export default function customswitch(props) {
    const { style, dataSource, value } = props, rest = __rest(props, ["style", "dataSource", "value"]);
    return (<Form.Item className={`${prefix}-switch-wrap`} style={style}>
      <Switch className={`${prefix}-switch`} {...rest} checked={!!value} checkedChildren={dataSource[0] || 'on'} unCheckedChildren={dataSource[1] || 'off'}/>
    </Form.Item>);
}
