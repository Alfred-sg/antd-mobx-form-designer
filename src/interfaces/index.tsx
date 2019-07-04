export interface Form {
  values: {[key: string]: any},
  fields: Array<Field>,
  setError: Function,
}

export interface Field {
  /** 字段code */
  code: string,
  /** 字段label */
  label: string,
  /** 校验规则 */
  rules: Array<object>,
  /** 初始值 */
  initialValue: any,
  /** 所属表单 */
  form: Form,
}