// List the properties of a JavaScript object

const Company = {
  name: "Orangetoolz",
  age: 8,
  business: "Software Company",
};

function listProperties(obj) {
  if (obj == undefined || obj == null) {
    return "Not a valid Object";
  }
  let keys = Object.keys(obj);
  return keys;
}

console.log(listProperties(Company));

// Write a function get the length of object

const Project = {
  title: "Agency Framework",
  framework: "react",
  database: "PostgreSQL",
};

function getObjectLength(project) {
  let objectLength = Object.entries(project);
  // console.log(objectLength)
  return objectLength;
}

console.log(getObjectLength(Project));

