import React from 'react';
import * as buildinFields from '../components/fields';

interface FieldComps {
  [key: string]: React.Component
}

export const fieldComps: FieldComps = {};

export const registerField = (type: string, comp: React.Component) => {
  if ( comp ) fieldComps[type] = comp;
}

// 加载内置的字段渲染组件
Object.keys(buildinFields).map(type => {
 registerField(type, buildinFields[type]);
})

// 添加组合字段组件
registerField('composite', (props: { fields: Array<object>, [key: string]: any }) => {
  const { fields } = props;
  return (
    <div className='antd-mobx-form-designer-composite'>
      { fields.map((field: {type: string}) => {
        const Comp: React.Component = fieldComps[field.type];
        return <Comp {...field} />
      }) }
    </div>
  );
})