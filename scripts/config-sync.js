(async () => {
  const {replaceInFileSync} = await import('replace-in-file')
  const js = require('../package.json')

  const jsonPath = 'projects/design-angular-kit/package.json'
  const configJSONOptions = {
    files: jsonPath,
    from: /"version": ".+",/gi,
    to: `"version": "${js.version}",`,
  }

  const replaceInFile = (config) => {
    return replaceInFileSync(config).map((el) => el.file)
  }

  try {
    let changedFiles = replaceInFile(configJSONOptions)
    console.info('Modified files:', changedFiles.join(', '))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})().catch(console.error)
