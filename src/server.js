import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url == '/users') {
        return res.end(JSON.stringify(users))
    }

    if (method === 'POSTO' && url == '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
        });

        return res.end('Criação de usuario')
    }

    return res.writeHead(404).end('Criado');
})

server.listen(3333);