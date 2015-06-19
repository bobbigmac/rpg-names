Darmok = Npm.require('darmok');

var defaultType = 'wizard';
var defaultLookback = 2;
var defaultMaxLength = 12;

var activeType = false;
var source = [];
var generator = false;

RPGNames = function(options) {
	options = (typeof options === 'object' && options) || {};
	options.type = options.type || activeType || defaultType;

	if(activeType !== options.type || !generator) {
		if(options.type === 'dragon') {
			source = JSON.parse(Assets.getText('lists/dragon-names.json'));
		}
		else if(options.type === 'wizard') {
			source = JSON.parse(Assets.getText('lists/wizard-names.json'));
		}
		else if(options.type === 'all') {
			source = JSON.parse(Assets.getText('lists/dragon-names.json'));
			source.concat(JSON.parse(Assets.getText('lists/wizard-names.json')));
		}
		else if(options.type === 'custom' && options.source instanceof Array) {
			source = options.source;
		}

		if(source && source.length && source.every(function(entry) {
			return (typeof entry === 'string');
		})) {
			generator = Darmok.markov(source, options.lookback||defaultLookback);
			activeType = options.type;
		}
	}
	return generator && generator.generate(options.maxLength||defaultMaxLength);
};