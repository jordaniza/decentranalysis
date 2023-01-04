/* HIGHER ORDER FUNCTIONS */

// recall that we can define functions and store them in variables, then pass them as params

const bitmask = (size: number): number => (1 << size) - 1;

function uintMap(ints: number[], transformer: (n: number) => number): number[] {
  console.log(ints);
  return ints.map(transformer);
}

const uintBitmasks = uintMap([2, 8, 16, 20], bitmask);

describe("HOFs", () => {
  it("Prints a bitmask", () => {
    console.log(uintBitmasks);
  });
});
