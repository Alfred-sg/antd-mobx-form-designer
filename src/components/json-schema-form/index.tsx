import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { prefix } from '../../constants';
import FieldWrapper from '../field-wrapper';

class JSONSchemaForm extends React.Component<{form: object, dataSource: Array<object>}> {
  static childContextTypes = {
    form: PropTypes.object.isRequired,
  };

  getChildContext(){
    const { dataSource, ...rest } = this.props;
    return {
      form: this.props.form,
      ...rest,
    }
  };

  render(){
    const { dataSource } = this.props;
    
    return (
      <div className={`${prefix}-json-scheam-form`}>
        { dataSource.map(item => {
          return <FieldWrapper {...item} />
        }) }
      </div>
    );
  }
}

export default Form.create()(JSONSchemaForm);