
module.exports = function(opts) {

  var rules = {
    'input:not([type=checkbox]):not([type=radio])': {
      boxSizing: 'border-box',
      height: opts.height,
      padding: opts.paddingY + ' ' + opts.paddingX,
      verticalAlign: opts.verticalAlign,
      '-webkit-appearance': 'none'
    }
  };

  return rules;

};

