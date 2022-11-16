module.exports = function(api) {
  api.cache(true);
  return {
    "presets": ["module:metro-react-native-babel-preset"],    
    plugins: [      
      [
        'module-resolver',
        {          
          alias: {
            '@src': './src',
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './src/assets',            
          },          
        },
      ],
    ],
  };

  
};


