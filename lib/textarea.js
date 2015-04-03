
module.exports = function(opts) {

  var rules = {
    textarea: {
      boxSizing: 'border-box',
      padding: opts.paddingY + ' ' + opts.paddingX,
      lineHeight: 1.75, // Check this at different sizes
    }
  };

  return rules;

};

