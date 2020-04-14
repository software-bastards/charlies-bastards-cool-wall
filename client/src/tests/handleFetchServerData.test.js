import moxios from "moxios";
import handleFetchServerData from "../helper/handleFetchServerData";

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
<<<<<<< HEAD
        name: "Laveral"
      },
      {
        id: 2,
        name: "React"
      },
      {
        id: 3,
        name: "Angular"
      }
=======
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
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
    ];
    const resolvePromise = () => Promise.resolve(tech_list);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
<<<<<<< HEAD
        response: tech_list
=======
        response: tech_list,
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
      });
    });

    await handleFetchServerData(resolvePromise);
  });
});
