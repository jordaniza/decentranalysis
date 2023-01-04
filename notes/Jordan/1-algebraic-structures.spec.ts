import * as funcs from "./algebraic-structures-funcs";
/* ALGEBRAIC DATA STRUCTURES */

//  Imagine we have the following data structure and we want to convert to a templating system:
const notificationData = [
  {
    username: "sherlock",
    message: "Watson. Come at once if convenient.",
    date: -1461735479,
    displayName: "Sherlock Holmes",
    id: 221,
    read: false,
    sourceId: "note-to-watson-1895",
    sourceType: "note",
  },
  {
    username: "sherlock",
    message: "If not convenient, come all the same.",
    date: -1461735359,
    displayName: "Sherlock Holmes",
    id: 221,
    read: false,
    sourceId: "note-to-watson-1895",
    sourceType: "note",
  },
];

/*
  We need to
  1. Generate a readable date;
  2. Sanitise the message to prevent cross-site scripting (Xꜱꜱ) attacks;
  3. Build a link to the sender’s profile page;
  4. Build a link to the source of the notification; and
  5. Tell the template what icon to display, based on the source type.
*/

describe("Test the first exampple", () => {
  it("breaks down templating into small steps", () => {
    const withDates = notificationData.map(funcs.generateReadableDate);
    const sanitized = withDates.map(funcs.sanitizeMessage);
    const withSenders = sanitized.map(funcs.buildLinkToSender);
    const withSources = withSenders.map(funcs.buildLinkToSource);
    const dataForTemplate = withSources.map(funcs.addIcon);

    console.log(dataForTemplate);

    // this could also be done through method chaining
    const data2 = notificationData
      .map(funcs.generateReadableDate)
      .map(funcs.sanitizeMessage)
      .map(funcs.buildLinkToSender)
      .map(funcs.buildLinkToSource)
      .map(funcs.addIcon);

    expect(JSON.stringify(data2)).toEqual(JSON.stringify(dataForTemplate));
  });
});
