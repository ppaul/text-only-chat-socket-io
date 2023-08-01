import { createServer } from 'http';
import { Server } from 'socket.io';

const server = createServer();
server.listen(3000);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(`${io.engine.clientsCount} connections`);

  socket.on('message', (message) => {
    console.log(`[${socket.id}]: ${message}`);
    io.sockets.emit('message', message, socket.id);
  });

  socket.on('disconnect', () => {
    console.log('disconnect', socket.id);
  });

  console.log('socket server');
});

console.log('doing something... delete me');
