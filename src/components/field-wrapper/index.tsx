import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { fieldComps } from '../../utils/register';
import { prefix } from '../../constants';
import { Field } from '../../interfaces';

interface CompositeProps {
  fields: Array<Field>, 
  [key: string]: any,
}

interface FieldWrapperProps {
  label: string,
  type: string,
  labelCol?: object,
  wrapperCol?: object,
  required?: boolean,
  [key: string]: any,
}

function Composite(props: CompositeProps){
  const { fields, form: { getFieldDecorator } } = props;
  return (
    <div className={`${prefix}-composite`}>
      { fields.map((field: Field) => {
        const Comp: React.Component = fieldComps[field.type];
        return getFieldDecorator(field.code, {
          initialValue: field.initialValue,
          rules: field.rules,
        })(<Comp {...field} />)
      }) }
    </div>
  );
}

class FieldWrapper extends React.Component<FieldWrapperProps> {
  static contextTypes = {
    form: PropTypes.object.isRequired,
  }

  render(){
    const { form: { getFieldDecorator } } = this.context;
    let { label, labelCol, wrapperCol, required, type, ...rest } = this.props;
    labelCol = labelCol || this.context.labelCol || {};
    wrapperCol = wrapperCol || this.context.wrapperCol || {};
    const Comp: React.ComponentType = fieldComps[type];

    return (
      <Row className={`${prefix}-form-item`}>
        <Col {...labelCol} className={'${prefix}-label'}>
          { label && <label required={required}>{label}：</label> }
        </Col>
        <Col {...wrapperCol}>
          { type === 'composite' ? <Composite {...rest} /> : (
            getFieldDecorator(rest.code, {
              initialValue: rest.initialValue,
              rules: rest.rules,
            })(<Comp {...rest} />)
          ) }
        </Col>
      </Row>
    )
  }
}

export default FieldWrapper;