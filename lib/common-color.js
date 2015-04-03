
module.exports = function(opts) {

  var borderStyle = '1px solid ' + opts.borderColor;

  var rules = {
    'input, select, textarea': {
      border: borderStyle, 
      borderRadius: opts.borderRadius, 
      backgroundColor: opts.backgroundColor,
      transition: 'box-shadow .2s ease',
    },
    'input:focus, select:focus, textarea:focus': {
      outline: 'none',
      borderColor: opts.highlightColor,
      //boxShadow: ''
    },
    'input:disabled, select:disabled, textarea:disabled': {
      opacity: 0.625
    },
    'input:read-only, select:read-only, textarea:read-only': {
    },
    'input:invalid, select:invalid, textarea:invalid': {
    },
  };

  return rules;

};

