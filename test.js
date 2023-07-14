const { Config, mock } = require('./dist')

const Run = () => {
    Config.STORAGE_URL = `https://helloworld.com`
    mock({
        url: `https://api.crm.analyticsmart.com/login`,
        handler: response => {
            return { ...response, data: { hello: 'world' } };
        }
    })
    mock({
        url: `https://api.crm.analyticsmart.com/register`,
        handler: response => {
            return { ...response, data: { hello: 'world' } };
        }
    })
}

Run();