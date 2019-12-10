import mongoose from 'mongoose';
import dbConfig from './database/db';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import path from 'path';
import resumeRoute from './routes/resume.route';

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected');
  },
  error => {
    console.log('Database could not connected: ' + error);
  }
);

// Setting up port with express js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/api', resumeRoute);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(res.status(404));
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) {
    err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  }
  // All HTTP requests must have a response, so let's send back an error with its status code and message
  res.status(err.statusCode).send(err.message);
});
