var _ = require('lodash'),
  gutil = require('gulp-util'),
  env = gutil.env.env || 'development';

var paths = {
  src: {
    js: 'app.js',
    constants: 'constants.js',
    html: 'index.html',
    css: 'style.css'
  },
  dest: {
    js: 'dist/',
    constants: 'dist/',
    html: 'dist/',
    css: 'dist/'
  }
};

var constants = {
  default: {
    apiHost: ''
  },
  development: {
    apiHost: 'http://localhost:9050'
  },
  staging: {
    apiHost: 'http://staging.example.com/api/'
  },
  production: {
    apiHost: 'http://example.com/api/'
  }
};

var run = {
  default: {
    js: {
      uglify: false
    },
    css: {
      cssnano: false
    }
  },
  development: {
    js: {
      uglify: false
    },
    css: {
      cssnano: false
    }
  },
  staging: {
    js: {
      uglify: true
    },
    css: {
      cssnano: true
    }
  },
  production: {
    js: {
      uglify: true
    },
    css: {
      cssnano: true
    }
  }
};

var plugin = {
  default: {
    js: {
      uglify: {
        mangle: true
      }
    }
  },
  development: {
    js: {
      uglify: {
        mangle: false
      }
    }
  },
  staging: {
    js: {
      uglify: {
        mangle: true
      }
    }
  },
  production: {
    js: {
      uglify: {
        mangle: true
      }
    }
  }
};

var runOpts = _.merge( {}, run.default, run[ env ] );
var pluginOpts = _.merge( {}, plugin.default, plugin[ env ] );
var constantsOpts = _.merge( {}, constants.default, constants[ env ] );

module.exports.paths = paths;
module.exports.constants = constantsOpts;
module.exports.run = runOpts;
module.exports.plugin = pluginOpts;