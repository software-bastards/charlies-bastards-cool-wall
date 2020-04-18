import moxios from "moxios";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Returns a promise ", async () => {
    const combined_votes = [
      {
        cool_votes: "2",
        uncool_votes: "1",
        subzero_votes: "4",
        tech_list: {
          name: "Express",
        },
      },
      {
        cool_votes: "2",
        uncool_votes: "3",
        subzero_votes: "5",
        tech_list: {
          name: "JQuery",
        },
      },
      {
        cool_votes: "2",
        uncool_votes: "3",
        subzero_votes: "6",
        tech_list: {
          name: "React",
        },
      },
    ];
    const resolvePromise = () => Promise.resolve(combined_votes);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: combined_votes,
      });
    });

    await handleFetchCombinedVotes(resolvePromise);
  });
});
