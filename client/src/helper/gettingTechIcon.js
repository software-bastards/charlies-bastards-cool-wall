/**
 * @method gettingTechIcon - gives back the svg for the technology in string form
 * @param {Array<{id: Number, name: String}>}  tech_list
 * @param {Number} tech_id
 * @returns {string} - returns a string
 */

export const gettingTechIcon = (tech_list, tech_name) => {
  let technology = tech_list.filter((item) => item.name === tech_name);
  let newImage = technology[0].imagepath.replace(/\\/g, "/");
  return newImage;
};
