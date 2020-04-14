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
<<<<<<< HEAD
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
=======
        vote_type: "cool",
      },
      {
        tech_id: 2,
        vote_type: "uncool",
      },
      {
        tech_id: 3,
        vote_type: "subzero",
      },
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
    ];
    const response = "Successful";
    const resolvePromise = () => Promise.resolve(successful);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
<<<<<<< HEAD

      request.respondWith({
        status: 200,
        response: response
=======
      console.log(request.config.method);

      request.respondWith({
        status: 200,
        response: response,
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
      });
    });

    await handlePostVoteData(resolvePromise);
  });
});
