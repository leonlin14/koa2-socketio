const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
app.use(serve('./client'));

const server = app.listen(3001);

const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit('data',{po:'Hello socket.io !'});
});
