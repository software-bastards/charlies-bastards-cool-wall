import reducer from "../reducers/techlistReducer";

describe("techlistreducer", () => {
  test("Initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  test("fetch techlist", () => {
    const action = { type: "FETCH_TECHLIST", list: [] };

    expect(reducer(undefined, action)).toEqual({ list: [] });
  });
});
