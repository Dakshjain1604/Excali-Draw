# 🖌️ DrawSync – Real-Time Collaborative Whiteboard

DrawSync is a full-stack, collaborative whiteboard application inspired by [Excalidraw](https://excalidraw.com/), built using modern web technologies. It allows multiple users to draw simultaneously on a shared canvas with real-time synchronization via WebSockets.

## 🚀 Features

- 🧑‍🤝‍🧑 **Real-time collaboration** using websockets
- ✍️ **Freehand drawing and shape creation**
- 💾 **Persistent canvas state** per session
- 🔐 **User authentication** using JWT
- 📄 **Export canvas** as PNG or SVG
- 📱 **Responsive UI** built with TailwindCSS
- ⚙️ Built with **Next.js**, **Express.js**, and **MongoDB**

---

## 🛠️ Tech Stack

| Layer        | Tech |
|-------------|------|
| Frontend    | Next.js, React, TailwindCSS, Canvas API |
| Backend     | Node.js, Express.js, Socket.IO |
| Auth        | JWT-based authentication |
| Database    | PostgreSql |
| Deployment  | Vercel / Render (in progress) |

---

## 🧩 Architecture

- **Client** draws on an HTML5 canvas and emits drawing data (coordinates, color, tool) via WebSockets.
- **Server** relays updates to all connected users in the same room.
- Users receive updates and re-render the canvas in real-time.
- Authenticated users can create and join drawing rooms.

---

## 🔐 Authentication

- JWT-based login and session management
- Auth flow handled on both client and server using secure tokens
- Protected API routes for room access

---

## 📸 Demo

> 🚧 Live demo coming soon  


---

## 🧪 Future Improvements

- Collaborative text elements
- Undo/redo support
- Room persistence via postgreSQL
- User presence indicators (avatars, cursors)
- Canvas zoom and pan
- Voice/video chat integration

---

## 💡 Inspiration

This project is inspired by:
- [Excalidraw](https://github.com/excalidraw/excalidraw)
- Figma-style real-time collaboration
- Educational use-cases like live tutoring, whiteboard interviews

---

## 👨‍💻 Author

**Daksh Jain**  
[Portfolio](https://portfolio-dakshjain.vercel.app) • [GitHub](https://github.com/Dakshjain1604) • [LinkedIn](https://linkedin.com/in/daksh-jain16)

---

## 📝 License

MIT License
