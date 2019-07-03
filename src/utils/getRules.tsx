import { Field } from '../interfaces';

type Opertor = '>=' | '>' | '=' | '<' | '<=';

interface Rule {
  required?: boolean,
  type?: string,
  operator?: Opertor,
  target?: Array<string> | string,
  [key: string]: any,
}

const Types: {[key: string]: object} = {
  'code': {
    'pattern': /^([a-zA-Z_\d]+)/,
    'message': '请输入下划线、字母或数字',
  }, 
  'natural-number': {
    'pattern': /^0$|^[1-9][\d]$/,
    'message': '请输入自然数',
  },
  'email': {
    'pattern': /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    'message': '请输入邮箱',
  },
  'cellphone': {
    'pattern': /^1\d{10}$/,
    'message': '请输入手机号',
  },
  'idcard': {
    'pattern': /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
    'message': '请输入身份证号',
  },
  'number': {
    'validator': (rule: Rule, val: any, cb: Function) => {
      if (val && parseFloat(val) !== val){
        return cb('请输入数值');
      } else {
        return cb();
      };
    },
  },
  'charactor': {
    'pattern': /^[A-Za-z]/,
    'message': '请输入字符',
  },
  'chinese': {
    'pattern': /^[\u4e00-\u9fa5]*$/,
    'message': '请输入汉字',
  },
}

const CompareMessageMap = {
  '>=': '不能小于',
  '>': '不能小于等于',
  '=': '不能小于或大于',
  '<': '不能大于等于',
  '<=': '不能大于',
}

export default function getRealRules(rules: Array<object>, field: Field){
  return rules.map((rule: Rule) => {
    if (rule.required){
      return { required: true, whitespace: true, message: `${field.label}不能为空` };
    }

    if ( rule.type && Types[rule.type] ){
      return Types[rule.type];
    }

    // 数值联动校验，逻辑不够完善
    if ( rule.operator ){
      const { form: { values, fields, setError } } = field;
      let msg: string;

      return {
        validator: (_rule: Rule, val: any, cb: Function) => {
          let { operator, target } = rule;
          if ( !target ) return cb();

          target = Array.isArray(target) ? target : [target];

          switch(operator){
            case '>=':
              target.some((item: string): boolean => {
                if ( values[item] && +val < +values[item] ){
                  const targetField = fields.find((f: Field) => f.code === item);
                  if ( !targetField ) return false;
                  msg = `${field.label}${CompareMessageMap[operator]}${targetField.label}`;
                  return true;
                };
                return false;
              });
              break;
            case '>':
              target.some((item: string): boolean => {
                if ( values[item] && +val <= +values[item] ){
                  const targetField = fields.find((f: Field) => f.code === item);
                  if ( !targetField ) return false;
                  msg = `${field.label}${CompareMessageMap[operator]}${targetField.label}`;
                  return true;
                };
                return false;
              });
              break;
            case '=':
              target.some((item: string): boolean => {
                if ( values[item] && +val != +values[item] ){
                  const targetField = fields.find((f: Field) => f.code === item);
                  if ( !targetField ) return false;
                  msg = `${field.label}${CompareMessageMap[operator]}${targetField.label}`;
                  return true;
                };
                return false;
              });
              break;
            case '<':
              target.some((item: string): boolean => {
                if ( values[item] && +val >= +values[item] ){
                  const targetField = fields.find((f: Field) => f.code === item);
                  if ( !targetField ) return false;
                  msg = `${field.label}${CompareMessageMap[operator]}${targetField.label}`;
                  return true;
                };
                return false;
              });
              break;
            case '<=':
              target.some((item: string): boolean => {
                if ( values[item] && +val > +values[item] ){
                  const targetField = fields.find((f: Field) => f.code === item);
                  if ( !targetField ) return false;
                  msg = `${field.label}${CompareMessageMap[operator]}${targetField.label}`;
                  return true;
                };
                return false;
              });
              break;
            default:
              break;
          };

          if ( msg ){
            return cb(msg);
          } else {
            target.forEach(item => {
              setError(item, '');
            });

            return cb();
          }
        }
      }
    }
  })
}