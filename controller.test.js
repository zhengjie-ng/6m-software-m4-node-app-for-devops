/* eslint-disable */
const { print } = require("./controller");

describe("the print function", () => {
  // standard best practice
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with 'Hello world!'", () => {
    const mockReq = {};
    const mockRes = {
      send: jest.fn(),
    };

    print(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledWith("Hello world! It's a great day!"); // If you change this value, the test will fail.
  });
});
