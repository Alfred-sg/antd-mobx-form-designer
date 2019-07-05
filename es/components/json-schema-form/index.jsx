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
import { Form } from 'antd';
import { prefix } from '../../constants';
import FieldWrapper from '../field-wrapper';
class JSONSchemaForm extends React.Component {
    getChildContext() {
        const _a = this.props, { dataSource } = _a, rest = __rest(_a, ["dataSource"]);
        return Object.assign({ form: this.props.form }, rest);
    }
    ;
    render() {
        const { dataSource } = this.props;
        return (<div className={`${prefix}-json-scheam-form`}>
        {dataSource.map(item => {
            return <FieldWrapper {...item}/>;
        })}
      </div>);
    }
}
JSONSchemaForm.childContextTypes = {
    form: PropTypes.object.isRequired,
};
export default Form.create()(JSONSchemaForm);
