import reducer from "../reducers/authReducer";

describe("authreducer", () => {
  test("Initial state", () => {
    expect(reducer(undefined, {})).toEqual({ token: false, email: "" });
  });
  test("Create Session", () => {
    const action = { type: "CREATE_SESSION", token: true, email: "abc" };

    expect(reducer(undefined, action)).toEqual({ token: true, email: "abc" });
  });

  test("End Session", () => {
    const action = { type: "END_SESSION", token: false, email: "" };

    expect(reducer(undefined, action)).toEqual({ token: false, email: "" });
  });
});
