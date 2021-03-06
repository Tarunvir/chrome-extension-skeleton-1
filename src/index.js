// Import this if you want to polyfill things like Promise, Object.values(),
// etc. Includes Facebook Regenerator if you're using generators or async
// functions.
import 'babel-polyfill'

// import from a local file.
import bar from './foo/bar'

// export the things you want from your package. These become the top-level
// properties of the object assigned onto `window` in your global build.
export let something = bar + '!'

console.log(something)
