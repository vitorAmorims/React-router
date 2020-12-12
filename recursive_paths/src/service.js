import data from "./data";

function find(id) {
  return data.find((p) => p.id === id);
}

export default find;