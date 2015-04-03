
module.exports = function(opts) {

  var rules = {
    fieldset: {
      padding: 0,
      marginTop: opts.marginTop,
      marginBottom: opts.marginBottom,
      marginLeft: 0,
      marginRight: 0,
      border: 0,
    },
    legend: {
      fontSize: opts.legendFontSize,
      fontWeight: opts.legendFontWeight,
    }
  };

  return rules;

};

