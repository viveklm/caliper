import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myFunc() {
    var sensor = Caliper.Sensor;
    sensor.initialize("http://example.org/sensors/1");

    // Override default HTTP options
    var options = Caliper.Clients.HttpOptions;
    options.uri = "https://example.edu/caliper/target/endpoint";
    options.headers["Authorization"] = "40dI6P62Q_qrWxpTk95z8w";

    // Initialize and register client
    var client = Caliper.Clients.HttpClient;
    client.initialize("http://example.org/sensors/1/clients/2", options);
    sensor.registerClient(client);

    // Set Event property values
    // Note: only actor, action, and object property assignments shown
    var actor = Caliper.entityFactory().create(Person, { id: "https://example.edu/users/554433" });
    var action = actions.started.term;
    var obj = Caliper.entityFactory().create(Assessment, {
      id: "https://example.edu/terms/201801/courses/7/sections/1/assess/1",
      dateToStartOn: moment.utc("2018-08-16T05:00:00.000Z"),
      dateToSubmit: moment.utc("2018-09-28T11:59:59.000Z"),
      maxAttempts: 1,
      maxScore: 25.0
      // ... add additional optional property assignments
    });

    // ... Use the entityFactory() to mint additional entity values.

    // Create Event
    var event = Caliper.EventFactory().create(AssessmentEvent, {
      id: id,
      actor: actor,
      action: action,
      object: obj,
      eventTime: new Date().toISOString(),
      edApp: edApp,
      group: group,
      membership: membership,
      session: session
    });

    // ... Create additional events and/or entity describes.

    // Create data payload
    var payload = [];
    payload.push(event);

    // Envelope options
    var opts = {
      sensor: sensor.id,
      sendTime: new Date().toISOString(),
      dataVersion: "http://purl.imsglobal.org/ctx/caliper/v1p1",
      data: payload
    };

    // Create envelope with data payload
    var envelope = sensor.createEnvelope(opts);

    // Delegate transmission responsibilities to client
    sensor.sendToClient(client, envelope);
  }
}
