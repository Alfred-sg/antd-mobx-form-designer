export interface BaseProps {
  /** 样式 */
  style?: object,
  [key: string]: any,
}

export interface InputProps {
  /** 样式 */
  style?: object,
  [key: string]: any,
}

export interface Option {
  /** 值 */
  value: string | number, 
  /** 显示文案 */
  label: string, 
  /** 是否其他选项 */
  isSpecial?: boolean,
}

export interface RadioProps {
  /** 样式 */
  style?: object,
  /** 是否排序 */
  order?: boolean,
  /** 是否包含其他选项 */
  special?: boolean,
  /** 选中的值 */
  value?: string | number,
  /** 选项 */
  dataSource: Array<Option>,
  /** 事件监听 */
  onChange: Function,
  [key: string]: any,
}

export interface CheckboxProps {
  /** 样式 */
  style?: object,
  /** 是否排序 */
  order?: boolean,
  /** 是否包含其他选项 */
  special?: boolean,
  /** 选中的值 */
  value?: Array<string | number>,
  /** 选项 */
  dataSource: Array<Option>,
  /** 事件监听 */
  onChange: Function,
  [key: string]: any,
}

export interface LinkProps {
  /** 样式 */
  style?: object,
  /** 文本 */
  text: string | number,
  [key: string]: any,
}

export interface AgreementProps {
  /** 样式 */
  style?: object,
  /** 文本 */
  text: string | number,
  /** 地址 */
  url: string,
  [key: string]: any,
}

export interface SwitchProps {
  /** 样式 */
  style?: object,
  /** 选中项 */
  value: string,
  /** 选项列表 */
  dataSource: Array<string>,
  [key: string]: any,
}

export interface TextProps {
  /** 样式 */
  style?: object,
  /** 选中项 */
  value: string,
  /** 选项列表 */
  dataSource: Array<Option>,
  [key: string]: any,
}