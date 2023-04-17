const yaml = require('yaml');
const StyleDictionary = require('style-dictionary');

// Custom transform for box-shadows
StyleDictionary.registerTransform({
  name: 'shadow/spreadShadow',
  type: 'value',
  matcher(token) {
    return token.type === 'boxShadow';
  },
  transformer: (token) => {
    const shadows = Object.values(token.value);
    const result = shadows.map(
      (shadow) =>
        `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`,
    );
    return result.join(',');
  },
});

// Custom transform for borderRadius
StyleDictionary.registerTransform({
  name: 'border/radius',
  type: 'value',
  matcher(token) {
    return token.type === 'borderRadius';
  },
  transformer: (token) => {
    return `${token.value}rem`;
  },
});

module.exports = {
  parsers: [
    {
      // A custom parser will only run against filenames that match the pattern
      // This pattern will match any file with the .yaml extension.
      // This allows you to mix different types of files in your token source
      pattern: /\.yml$/,
      // the parse function takes a single argument, which is an object with
      // 2 attributes: contents which is a string of the file contents, and
      // filePath which is the path of the file.
      // The function is expected to return a plain object.
      parse: ({ contents }) => yaml.parse(contents),
    },
  ],
  source: [
    'components/_tokens/!(design-tokens-transformed)/**/*.{json,yml}',
    'components/_tokens/*.{json,yml}',
  ],
  platforms: {
    scss: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/hsl',
        'shadow/spreadShadow',
        'border/radius',
      ],
      buildPath: 'components/_tokens/',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/map-deep',
        },
      ],
      options: {
        outputReferences: true,
      },
    },
    css: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/hsl',
        'shadow/spreadShadow',
        'border/radius',
      ],
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
      options: {
        outputReferences: true,
      },
    },
    json: {
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/hsl',
        'shadow/spreadShadow',
        'border/radius',
      ],
      buildPath: 'components/_tokens/',
      files: [
        {
          destination: 'design-tokens-transformed.json',
          format: 'json/nested',
        },
      ],
    },
  },
};
