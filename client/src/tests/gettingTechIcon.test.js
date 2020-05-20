import { gettingTechIcon } from "../helper/gettingTechIcon";

test("function returns the svg icon in string removing the escape characters", () => {
  const mocktech_list = [
    {
      borderForSelectedVote: "none",
      id: 1,
      name: "Laveral",
      imagepath: "uploads\\sample.png",
    },
    {
      borderForSelectedVote: "none",
      id: 2,
      name: "React",
      imagepath: "uploads\\sample.png",
    },
    {
      borderForSelectedVote: "none",
      id: 3,
      name: "Angular",
      imagepath: "uploads\\sample.png",
    },
  ];
  const mocktech_name = "React";
  expect(gettingTechIcon(mocktech_list, mocktech_name)).toEqual(
    "uploads/sample.png"
  );
});
