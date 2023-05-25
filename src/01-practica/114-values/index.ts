console.log("************** PRACTICE 114 *********************");

interface ValueGetter {
  <T>(obj: Record<string, T>): T[];
}

const values: ValueGetter = (obj) => Object.values(obj);

console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
);
