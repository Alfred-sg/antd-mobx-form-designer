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
import { Form, Checkbox } from 'antd';
import { prefix } from '../../constants';
export default function agreement(props) {
    const { style, text, url } = props, rest = __rest(props, ["style", "text", "url"]);
    return (<Form.Item className={`${prefix}-agreement-wrap`} style={style}>
      <Checkbox className={`${prefix}-agreement-checkbox`} onChange={this.onChange}/>&nbsp;&nbsp;
      <span>
        您是否同意《
        <a className={`${prefix}-agreement-link`} {...rest} href={url} style={{ lineHeight: '36px' }}>
         {text}
        </a>
        》
      </span>
    </Form.Item>);
}
