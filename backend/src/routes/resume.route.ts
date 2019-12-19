import express from 'express';
import Resume from '../model/Resume';

const resumeRoute = express.Router();

// Add Resume
resumeRoute.route('/create').post((req, res, next) => {
  Resume.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get All resumes
resumeRoute.route('/').get((req, res, next) => {
  Resume.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get All resume _id's
resumeRoute.route('/ids').get((req, res, next) => {
  Resume.find().distinct('_id', (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single resume
resumeRoute.route('/read/:id').get((req, res, next) => {
  Resume.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});


// Update resume
resumeRoute.route('/update/:id').put((req, res, next) => {
  Resume.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.error(error);
      return next(error);
    } else {
      res.json(data);
      console.log('Data updated successfully');
    }
  });
});

// Delete employee
resumeRoute.route('/delete/:id').delete((req, res, next) => {
  Resume.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

export default resumeRoute;
