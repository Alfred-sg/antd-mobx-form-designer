import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { JSONSchemaForm } from 'antd-mobx-form-designer';

console.log(JSONSchemaForm);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <JSONSchemaForm dataSource={[{ type: 'input', label: '名字', code: 'name'}]} />
  ));