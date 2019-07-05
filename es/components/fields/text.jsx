import React from 'react';
import { Form } from 'antd';
import { prefix } from '../../constants';
export default function text(props) {
    const { style, value, dataSource } = props;
    let text = Array.isArray(value) ? value : [value];
    if (dataSource) {
        dataSource.forEach(({ label, value: val }) => {
            if (text.indexOf(val) !== -1)
                text.push(label);
        });
    }
    ;
    return (<Form.Item className={`${prefix}-text-wrap`} style={style}>
      {text.map(it => <div className={`${prefix}-text`}>{it}</div>)}
    </Form.Item>);
}
