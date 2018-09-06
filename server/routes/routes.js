var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Exercise = require('../../models/Exercise');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/addExercise')
.post(function(req,res) {
 var exercise = new Exercise();
  exercise.exerciseTask = req.body.exerciseTask;
  exercise.exerciseText = req.body.exerciseText;
exercise.save(function(err) {
      if (err)
        res.send(err);
      res.send('Exercise successfully added to database!');
  });
});

router.route('/updateExercise')
.post(function(req, res) {
 const doc = {
  exerciseTask : req.body.exerciseTask,
  exerciseText : req.body.exerciseText,
 };
 console.log(doc);
  Exercise.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('Exercise successfully updated!');
  });
});

router.get('/deleteExercise', function(req, res){
  var id = req.query.id;
  Exercise.find({_id: id}).remove().exec(function(err, exercise) {
   if(err)
    res.send(err)
   res.send('Exercise successfully deleted!');
  })
 });

// Add so that a user only fetches their own exercises!
router.get('/getExercisesOnDay',function(req, res) {
  var dateRec = req.query.date;
  Exercise.find({date: dateRec}, function(err, exercises) {
    if (err)
      res.send(err);
    res.json(exercises);
  });
});

module.exports = router;