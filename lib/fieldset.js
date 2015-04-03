
module.exports = function(opts) {

  var rules = {
    fieldset: {
      padding: 0,
      marginTop: opts.marginTop,
      marginBottom: opts.marginBottom,
      border: 0,
    },
    legend: {
      fontSize: opts.legendFontSize,
      fontWeight: opts.legendFontWeight,
    }
  };

  return rules;

};

