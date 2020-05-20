import moxios from "moxios";
import handlePostAdminPwdChange from "../helper/handlePostAdminPwdChange";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Returns a promise ", async () => {
    const successful = "Successful";
    const resolvePromise = () => Promise.resolve(successful);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("put");
      request.respondWith({
        status: 200,
        response: successful,
      });
    });

    await handlePostAdminPwdChange(resolvePromise);
  });
});
