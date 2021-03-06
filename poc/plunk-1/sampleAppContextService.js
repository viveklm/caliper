/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

/* 
 * Sample App Context Service
 *
 * This service wraps the caliper-js sensor and provides a set of sample Caliper 
 * entities
 *
 * @author: Prashant Nayak, Intellify Learning; Anthony Whyte, University of Michigan
 */
angular.module('sampleCaliperApp')
  .service('sampleAppContextService', function() {

    // Get the current user as a Caliper Actor
    var getUser = function() {
      var currentUserId = "554433";
      // The Actor for the Learning Event
      var actor = new Caliper.Entities.Person(currentUserId);
      actor.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
      actor.setDateModified((new Date("2015-08-01T06:00:00Z")).toISOString());
      return actor;
    };

    var ePub = {};
    // Get the current Reading
    var getReading = function() {
      ePub = new Caliper.Entities.EPubVolume("https://github.com/readium/readium-js-viewer/book/34843#epubcfi(/4/3)");
      // ePub.setResourceType("EPUB_VOLUME");
      ePub.setName("States of Matter - A Condensed History");
      ePub.setVersion("1.0");
      ePub.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
      ePub.setDateModified((new Date("2015-08-01T06:00:00Z")).toISOString());
      return ePub;
    };

    var getReadingFrame = function() {
      var ePubFrame = new Caliper.Entities.Frame("https://github.com/readium/readium-js-viewer/book/frame/34843#epubcfi(/4/3/1)");
      // ePubFrame.setResourceType("FRAME");
      ePubFrame.setName("Introduction to the states of matter");
      ePubFrame.setIndex(1);
      ePubFrame.setIsPartOf(ePub);
      ePubFrame.setVersion(ePub.version);
      ePubFrame.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
      ePubFrame.setDateModified(ePub.dateModified);
      return ePubFrame;
    };

    // Get the current edApp
    var getEdApp = function() {
      var edApp = new Caliper.Entities.SoftwareApplication("https://imsglobal.org/sampleCaliperApp");
      edApp.setName("Sample Caliper App");
      edApp.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
      edApp.setDateModified((new Date("2015-08-01T06:00:00Z")).toISOString());
      return edApp;
    };

    var org = {};
    // Get the current Course
    var getCourse = function() {
      org = new Caliper.Entities.CourseSection("https://example.edu/deptOfPhysics/2014/physics101");
      org.setCourseNumber("Phy-101");
      org.setName("Introductory Physics");
      org.setDescription("This is a Physics course for beginners.")
      org.setName("American Revolution 101");
      org.setCourseNumber("POL101");
      org.setAcademicSession("Fall-2015");
      org.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
      org.setDateModified((new Date("2015-08-01T06:00:00Z")).toISOString());
      return org;
    };

    // Get Web Page for current Course
    var getCourseHomePage = function() {
      var courseHomePage = new Caliper.Entities.WebPage("Physics101-Course-Homepage");
      courseHomePage.setName("Physics101-Course-Homepage");
      courseHomePage.setIsPartOf(org);
      courseHomePage.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
      courseHomePage.setDateModified((new Date("2015-08-01T06:00:00Z")).toISOString());
      return courseHomePage;
    };

    // Get Quiz (Assessment) for current Course
    var getQuiz = function() {
      var quiz = new Caliper.Entities.Assessment("https://example.edu/deptOfPhysics/2014/physics101/assessment1");
      quiz.setName("States of Matter - Assessment");
      quiz.setIsPartOf("https://some-university.edu/deptOfPhysics/2014/physics101");
      quiz.setDateModified((new Date("2015-02-02T11:30:00Z")).toISOString());
      quiz.setDateCreated((new Date("2015-01-01T06:00:00Z")).toISOString());
      quiz.setDatePublished((new Date("2015-01-15T09:30:00Z")).toISOString());
      quiz.setDateToActivate((new Date("2015-01-16T05:00:00Z")).toISOString());
      quiz.setDateToShow((new Date("2015-01-16T05:00:00Z")).toISOString());
      quiz.setDateToStartOn((new Date("2015-01-16T05:00:00Z")).toISOString());
      quiz.setDateToSubmit((new Date("2015-02-28T11:59:59Z")).toISOString());
      quiz.setMaxAttempts(2);
      quiz.setMaxSubmits(2);
      quiz.setMaxScore(3.0);

      // The Quiz has one AssessmentItem
      var assessmentItem1 = new Caliper.Entities.AssessmentItem("https://example.edu/deptOfPhysics/2014/physics101/assessment1/item1");
      assessmentItem1.setName("Assessment Item 1");
      assessmentItem1.setIsPartOf("https://example.edu/deptOfPhysics/2014/physics101/assessment1");
      assessmentItem1.setMaxAttempts(2);
      assessmentItem1.setMaxSubmits(2);
      assessmentItem1.setMaxScore(1.0);
      assessmentItem1.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
      assessmentItem1.setDateModified((new Date("2015-08-01T06:00:00Z")).toISOString());

      return quiz;
    };

    // Export the functions that will be used by other controllers and services
    var exports = {
      getUser: getUser,
      getReading: getReading,
      getReadingFrame: getReadingFrame,
      getEdApp: getEdApp,
      getCourse: getCourse,
      getCourseHomePage: getCourseHomePage,
      getQuiz: getQuiz
    };

    return exports;
  });