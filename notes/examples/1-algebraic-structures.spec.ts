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

describe("Test the first exampple", () => {
  it("works", () => {
    expect(notificationData).toBeTruthy;
  });
});
