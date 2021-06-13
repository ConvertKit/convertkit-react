module.exports =  function(api){
  const test = api.env('test')
  api.cache(true)
  const presetEnvOptions = test ? {
    targets: { node: 'current' }
  } : {
    modules: false
  }
  return {
    presets: [
      ['@babel/preset-env', presetEnvOptions],
      ['@babel/preset-react']
    ]
  }
}
