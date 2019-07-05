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
import { Form, Input } from 'antd';
import { prefix } from '../../constants';
export default class input extends React.Component {
    render() {
        const _a = this.props, { style } = _a, rest = __rest(_a, ["style"]);
        return (<Form.Item className={`${prefix}-input-wrap`} style={style}>
        <Input className={`${prefix}-input`} {...rest}/>
      </Form.Item>);
    }
}
