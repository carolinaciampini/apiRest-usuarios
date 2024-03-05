import { createServer } from "http"
import expressApp from "#Config/express.js"

// separamos en este archivo el server con express
const httpServer = createServer(expressApp);

export default httpServer;