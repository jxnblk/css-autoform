
module.exports = function(opts) {

  var rules = {
    select: {
      boxSizing: 'border-box',
      padding: opts.paddingY + ' ' + opts.paddingX,
      lineHeight: 1.75, // Check this at different sizes
    },
    'select:not([multiple])': {
      height: opts.height,
      verticalAlign: opts.verticalAlign
    }
  };

  return rules;

};

