import express from "express";
const server = express();
const port = 5000;
import loginPage from "./routes/login.js";
express.static.mime.define({
    'application/javascript': ['js', 'jsx'],
    'application/typescript': ['ts', 'tsx']
});
server.use(express.static('dist', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));
server.use('/', loginPage);
server.listen(port, () => {
    console.log(`Example server listening on port ${port}`);
});
