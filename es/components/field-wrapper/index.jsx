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
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { fieldComps } from '../../utils/register';
import { prefix } from '../../constants/index';
function Composite(props) {
    const { fields, form: { getFieldDecorator } } = props;
    return (<div className={`${prefix}-composite`}>
      {fields.map((field) => {
        const Comp = fieldComps[field.type];
        return getFieldDecorator(field.code, {
            initialValue: field.initialValue,
            rules: field.rules,
        })(<Comp {...field}/>);
    })}
    </div>);
}
class FieldWrapper extends React.Component {
    render() {
        console.log(this.context);
        const { form: { getFieldDecorator } } = this.context;
        let _a = this.props, { label, labelCol, wrapperCol, required, type } = _a, rest = __rest(_a, ["label", "labelCol", "wrapperCol", "required", "type"]);
        labelCol = labelCol || this.context.labelCol || {};
        wrapperCol = wrapperCol || this.context.wrapperCol || {};
        const Comp = fieldComps[type];
        return (<Row className={`${prefix}-form-item`}>
        <Col {...labelCol} className={'${prefix}-label'}>
          {label && <label required={required}>{label}：</label>}
        </Col>
        <Col {...wrapperCol}>
          {type === 'composite' ? <Composite {...rest}/> : (getFieldDecorator(rest.code, {
            initialValue: rest.initialValue,
            rules: rest.rules,
        })(<Comp {...rest}/>))}
        </Col>
      </Row>);
    }
}
FieldWrapper.contextTypes = {
    form: PropTypes.object.isRequired,
};
export default FieldWrapper;
