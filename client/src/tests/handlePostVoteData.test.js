import moxios from "moxios";
import handlePostVoteData from "../helper/handlePostVoteData";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Returns a promise ", async () => {
    const vote_list = [
      {
        tech_id: 1,
        vote_type: "cool"
      },
      {
        tech_id: 2,
        vote_type: "uncool"
      },
      {
        tech_id: 3,
        vote_type: "subzero"
      }
    ];
    const response = "Successful";
    const resolvePromise = () => Promise.resolve(successful);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: response
      });
    });

    await handlePostVoteData(resolvePromise);
  });
});
