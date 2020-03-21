const ConfigManager = require('./config-manager')
const configManager = new ConfigManager({
    namespace: 'EmonsProjects'
})

module.exports = configManager.getConfigs()