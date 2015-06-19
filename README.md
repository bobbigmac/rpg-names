## RPG Names Generator

Meteor package to generate random names for RPG characters based off [https://www.npmjs.com/package/darmok](NPM Darmok's) markov chain builder.

Comes pre-loaded with wizards and dragons lists.

Load your own source if you want some other list (PRs welcome with hunter/warrior/elvish/RPGey names).

### Usage

Server-side only.

```
RPGNames(options)
```

Options may be:

```
{
	// one of ['wizard', 'dragon', 'all', 'custom']
	type: string,
	// allows random name up to this many characters
	maxLength: integer,
	// how random? lower number = more random, 1 gives ~nonsense 
	lookback: integer, 
	// use your own array of training data, only when type is 'custom'
	source: array 
}
```

Markov chain based off source list will be cached internally (so type will be remembered), call with a different type to reset the generator and rebuild the markov chain. Lookback is only referenced when chain is built (i.e. change type if you want diff lookback).

### Dependencies

[https://www.npmjs.com/package/darmok](Darmok) is used internally by `RPGNames` and is exported as `Darmok` for your own use if desired.

### Example output

```
> RPGNames({ type: 'wizard' })
'Gwaldunda'
> RPGNames({ type: 'dragon' })
'Puff'
> RPGNames({ type: 'dragon' })
'Vise'
> RPGNames({ })
'Drair'
> RPGNames({ })
'Hoon Draco'
> RPGNames({ type: 'wizard' })
'Berina'
> RPGNames({ })
'Oigneduwcyn'
> RPGNames({ })
'Galios'
```