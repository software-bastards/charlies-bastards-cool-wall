import { gettingTechIcon } from "../helper/gettingTechIcon";

test("function returns the svg icon in string removing the escape characters", () => {
  const mocktech_list = [
    {
      borderForSelectedVote: "none",
      id: 1,
      name: "Laveral",
      svg: '<svg height="200" width="500"></svg>',
    },
    {
      borderForSelectedVote: "none",
      id: 2,
      name: "React",
      svg: '<svg height=\\"200" width="500"></svg>',
    },
    {
      borderForSelectedVote: "none",
      id: 3,
      name: "Angular",
      svg: '<svg height="200" width="500"></svg>',
    },
  ];
  const mocktech_name = "React";
  expect(gettingTechIcon(mocktech_list, mocktech_name)).toEqual(
    '<svg height="200" width="500"></svg>'
  );
});
