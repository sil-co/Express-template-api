### Command list
- `tsc --watch` : For continuous compilation in development
- `nodemon` : To automatically restart your server when files changes
- `npm run dev` : Start the server
- `npm run test` : Run jest code
- `docker build -t any-tag-name .`: builds an image tagged `any-tag-name` from current directory
- `docker run -p 3000:3000 any-tag-name`: Run the Docker container
- `npm run build`: Building or transpiling the TypeScript files

### Curl Command
- Create an item to send a POST request with JSON payload to the `/api/items` endpoint:
```bash
curl -X POST http://localhost:3000/api/items \
    -H "Content-Type: application/json" \
    -d '{"name": "Example name"}'
```

- Update an item:
```bash
curl -X PUT http://localhost:3000/api/items/17432848479 \
    -H "Content-Type: application/json" \
    -d '{"name": "Updated Item Name"}'
```

### Project Structure
```
ex-api/
├── src/
│   ├── config/
│   │   └── config.ts        // Load and type environment variables
│   ├── controllers/
│   │   └── itemController.ts  // CRUD logic for "items"
│   ├── middlewares/
│   │   └── errorHandler.ts    // Global typed error handling middleware
│   ├── models/
│   │   └── item.ts          // Define item type and in-memory storage
│   ├── routes/
│   │   └── itemRoutes.ts    // Express routes for items
│   ├── app.ts               // Express app configuration (middlewares, routes)
│   └── server.ts            // Start the server
├── tests/
│   └── itemController.test.ts
├── .dockerignore            // ignore when building the container image, reducing build context size
├── .env                     // Environment variables
├── .gitignore               // ignored files
├── Dockerfile               // defines your container's environment and instructions to build your app
├── package.json             // Project scripts, dependencies, etc.
├── tsconfig.json            // TypeScript configuration
├── .eslintrc.js             // ESLint configuration
└── .prettierrc              // Prettier configuration
```
