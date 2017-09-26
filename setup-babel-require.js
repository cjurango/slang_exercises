require('babel-register')({
  ignore:/node_modules\/(?!capitalize\-word)/i
});

function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.less'] = noop;