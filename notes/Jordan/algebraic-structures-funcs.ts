// we can break the tasks into a series of transformations steps using the following pattern:
export const getSet =
  (getKey: string, setKey: string, transformer: Function) =>
  (obj: Record<string, unknown>) => ({
    ...obj,
    [setKey]: transformer(obj[getKey]),
  });

export const generateReadableDate = getSet(
  "date",
  "readableDate",
  (t: number) => new Date(t).toDateString()
);

export const sanitizeMessage = getSet("message", "message", (msg: string) =>
  msg.replace(/</g, "&lt;")
);
export const buildLinkToSender = getSet(
  "username",
  "sender",
  (u: string) => `https://example.com/users/${u}`
);
export const buildLinkToSource = (notification: Record<string, unknown>) => ({
  ...notification,
  source: `https://example.com/${notification.sourceType}/${notification.sourceId}`,
});

export const urlPrefix = "https://example.com/assets/icons/";
export const iconSuffix = "‐small.svg";
export const addIcon = getSet(
  "sourceType",
  "icon",
  (sourceType: string) => `${urlPrefix}${sourceType}${iconSuffix}`
);
