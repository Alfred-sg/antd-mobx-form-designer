import React from 'react';
import * as buildinFields from '../components/fields';
export const fieldComps = {};
export const registerField = (type, comp) => {
    if (comp)
        fieldComps[type] = comp;
};
// 加载内置的字段渲染组件
Object.keys(buildinFields).map(type => {
    registerField(type, buildinFields[type]);
});
// 添加组合字段组件
registerField('composite', (props) => {
    const { fields } = props;
    return (<div className='antd-mobx-form-designer-composite'>
      {fields.map((field) => {
        const Comp = fieldComps[field.type];
        return <Comp {...field}/>;
    })}
    </div>);
});
