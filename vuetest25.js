const http = require('http')
const urlModule = require('url')


const server = http.createServer()


server.on('request', function (req, res) {
    //TODO
    const {pathname: url, query} = urlModule.parse(req.url, true)

    if (url === '/api') {
        const data = {
            name:'小米',
            age:8
        }
        const dataStr = JSON.stringify(data)
        const resJsonpBody = `${query.provider}.${query.call}(${dataStr})`
        res.end(resJsonpBody)
    }
})

server.listen(3000, function () {
    console.log('server listen at http://127.0.0.1:3000')
})
