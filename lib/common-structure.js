
module.exports = function(opts) {

  var rules = {
    'input:not([type=checkbox]):not([type=radio]), select, textarea, fieldset': {
      fontSize: opts.fontSize,
      fontFamily: opts.fontFamily,
      display: opts.stacked ? 'block' : 'inline',
      width: opts.stacked ? '100%' : 'auto',
      marginTop: opts.marginTop,
      marginBottom: opts.marginBottom,
    },
    label: {
      fontSize: opts.labelFontSize,
      fontWeight: opts.labelFontWeight,
      display: opts.stacked ? 'block' : 'inline',
    }
  };

  return rules;

};

