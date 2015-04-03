
var _ = require('lodash');
var jss = require('jss');
var jssCamelCase = require('jss-camel-case');
var colors = require('colors.css');
var Color = require('color');

var version = require('./package.json').version;

var commonStructure = require('./lib/common-structure');
var input = require('./lib/input');
var select = require('./lib/select');
var textarea = require('./lib/textarea');
var fieldset = require('./lib/fieldset');
var commonColor = require('./lib/common-color');

var lightBlue = Color(colors.aqua).alpha(.25).hexString();

module.exports = function(options) {

  var options = options || {};
  var styles = {};
  var css;

  options = _.defaults(options, {
    fontFamily: 'inherit',
    fontSize: '16px',
    labelFontSize: '14px',
    labelFontWeight: 'bold',
    legendFontSize: '18px',
    legendFontWeight: 'bold',
    height: '40px',
    marginTop: 0,
    marginBottom: '16px',
    paddingY: '8px',
    paddingX: '8px',
    verticalAlign: 'middle',
    stacked: true,
    borderColor: colors.silver,
    borderRadius: '3px',
    highlightColor: colors.blue,
    errorColor: colors.red,
    errorColor: colors.red,
    backgroundColor: 'white',
    modifiers: true,
  });

  jss.use(jssCamelCase);

  styles = _.assign(styles, commonStructure(options));
  styles = _.assign(styles, input(options));
  styles = _.assign(styles, select(options));
  styles = _.assign(styles, textarea(options));
  styles = _.assign(styles, fieldset(options));
  styles = _.assign(styles, commonColor(options));

  if (options.modifiers) {
    //styles = _.assign(styles, modifiers(options));
  }

  css = [
    '/*',
    '',
    '  Autoform',
    '  v' + version,
    '',
    '*/',
    '',
    '',
  ].join('\n');

  css += jss.createStyleSheet(styles, { named: false }).toString();

  return css;

};

