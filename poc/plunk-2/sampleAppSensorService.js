angular.module('sampleCaliperApp')
  .factory('sampleAppSensorService', ['sampleAppContextService', function(sampleAppContextService) {

    // Initialize Caliper sensor with options
    var sensor = Caliper.Sensor;

    // Note that you will have to create a new request bin
    // by navigating to http://requestb.in/
    // and replace the "path" setting below with the path 
    // to your request bin
    sensor.initialize('http://example.com/sensor/1',{
      host: 'https://sleepy-reef-96384.herokuapp.com',
      path: '/10tnn8h1', // REPLACE WITH YOUR REQUEST BIN PATH
      withCredentials: false
    });

    // Wrapper around Caliper Sensor's send()
    var send = function(event) {

      // Perform any pre-processing, etc.

      // Send Events using Caliper Sensor
      sensor.send(event);
    };

    // Wrapper around Caliper Sensor's describe()
    var describe = function(entity) {

      // Perform any pre-processing, etc.

      // Describe Entities using Caliper Sensor
      sensor.describe(entity);
    };
    
    // Export the functions that will be used by controller
    var exports = {
      describe: describe,
      send: send,
      currentUser: sampleAppContextService.getUser(),
      reading: sampleAppContextService.getReading(),
      readingFrame: sampleAppContextService.getReadingFrame(),
      edApp: sampleAppContextService.getEdApp(),
      course: sampleAppContextService.getCourse(),
      courseHomePage: sampleAppContextService.getCourseHomePage(),
      quiz: sampleAppContextService.getQuiz()
    };

    return exports;
  }]);