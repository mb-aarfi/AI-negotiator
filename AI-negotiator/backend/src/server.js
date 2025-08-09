import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend' });
});

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: '*'}
});

io.on('connection', (socket) => {
  socket.emit('welcome', { message: 'Connected to negotiation socket' });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

