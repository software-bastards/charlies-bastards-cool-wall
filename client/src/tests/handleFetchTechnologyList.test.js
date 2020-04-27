import moxios from "moxios";
import handleFetchTechnologyList from "../helper/handleFetchTechnologyList";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Returns a promise ", async () => {
    const tech_list = [
      {
        id: 1,
        name: "Laveral",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "Angular",
      },
    ];
    const resolvePromise = () => Promise.resolve(tech_list);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: tech_list,
      });
    });

    await handleFetchTechnologyList(resolvePromise);
  });
});
