/**
 * @typedef {Object} LocalizationMap
 * @property {String} [usage]
 * @property {String} [arguments]
 * @property {String} [Arguments]
 * @property {String} [commands]
 * @property {String} [default]
 * @property {String} [choices]
 * @property {String} [env]
 * @property {String} [preset]
 * @property {String} [helpDescription]
 * @property {String} [options]
 * @property {String} [Options]
 * @property {String} [command]
 */

/**
 * @typedef {'zh_CN' | 'en' } SupportedLanguage
 */

/** @type {LocalizationMap} */
const langZhCN = {
  usage: '用法',
  arguments: '参数',
  commands: '命令列表',
  default: '默认值',
  choices: '可从之后的值选择',
  env: '环境变量',
  preset: '预设值',
  helpDescription: '显示命令帮助',
  options: '选项',
  Arguments: '参数',
  Options: '选项',
  command: '命令'
};

/** @type {LocalizationMap} */
const langEn = {
  usage: 'Usage',
  arguments: 'Arguments',
  commands: 'Commands',
  command: 'command',
  default: 'default',
  choices: 'choices',
  env: 'env',
  preset: 'preset',
  helpDescription: 'display help for command',
  options: 'options',
  Arguments: 'Arguments',
  Options: 'Options'
};

/**
 * Change the output template's language which commander is supported.
 *
 * If you want to custom commander's output language template, using customLocalization() instead.
 *
 * @param { SupportedLanguage } lang - Supported language flag
 * @return { LocalizationMap | undefined } `LocalizationMap` A object contain all information about output templates
 */
function LocalizationFactory(lang) {
  if (lang === 'zh_CN') {
    return langZhCN;
  } if (lang === 'en') {
    return langEn;
  }
  return undefined;
}

exports.LocalizationFactory = LocalizationFactory;
