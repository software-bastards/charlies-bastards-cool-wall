import reducer from "../reducers/authReducer";

describe("authreducer", () => {
  test("Initial state", () => {
    expect(reducer(undefined, {})).toEqual({ token: false });
  });
  test("Create Session", () => {
    const action = { type: "CREATE_SESSION", token: true };

    expect(reducer(undefined, action)).toEqual({ token: true });
  });

  test("End Session", () => {
    const action = { type: "END_SESSION", token: false };

    expect(reducer(undefined, action)).toEqual({ token: false });
  });
});
