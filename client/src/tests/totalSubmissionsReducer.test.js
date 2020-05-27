import reducer from "../reducers/totalsubmissionsReducer";

describe("totalsubmissionsreducer", () => {
  test("Initial state", () => {
    expect(reducer(undefined, {})).toEqual({ submissions: 0 });
  });
  test("fetch submission", () => {
    const action = { type: "FETCH_TOTALSUBMISSIONS", submissions: 10 };

    expect(reducer(undefined, action)).toEqual({ submissions: 10 });
  });
});
