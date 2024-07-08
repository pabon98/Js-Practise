const mainData = [
    {
      name: { firstName: "Parent1", lastName: "One", value: "Orangetoolz" },
      age: { value: 25 },
      address: { value: "Uttara" },
      childs: [
        {
          name: { firstName: "Child1", lastName: "One" },
          age: { value: 25 },
          address: { value: "Uttara" },
        },
        {
          name: { firstName: "Child2", lastName: "Two" },
          age: { value: 25 },
          address: { value: "Uttara" },
        },
      ],
      locationId: "testID1",
    },
    {
      name: { firstName: "Parent2", lastName: "Two", value: "Orangetoolz" },
      age: { value: 25 },
      address: { value: "Uttara" },
      childs: [
        {
          name: { firstName: "Child3", lastName: "One" },
          age: { value: 25 },
          address: { value: "Uttara" },
        },
        {
          name: { firstName: "Child4", lastName: "Two" },
          age: { value: 25 },
          address: { value: "Uttara" },
        },
      ],
  
      locationId: "testID2",
    },
  ];
  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Age",
      accessor: "age",
    },
    {
      header: "Address",
      accessor: "address",
    },
    {
      header: "Subrows",
      accessor: "Subrows"
    },
    {
      header: "locationId",
      accessor: "locationId"
    }
  ];
  
  const modifiedData =(mainData, columns)=>{
      return mainData.map((data) => {
          const modifiedParent = {};
          columns.forEach((column) => {
            // console.log(column)
            const { header, accessor } = column;
            // console.log(header, accessor)
            // console.log(modifiedParent[header])
            if(accessor === "name"){
                modifiedParent[header] = `${data.name}`
                // console.log(modifiedParent)
            }
            else if(accessor === "age"){
                modifiedParent[header] = `${data.age.value}`
                // console.log(modifiedParent)
            }
            else if(accessor === "address"){
                modifiedParent[header] = `${data.address.value}`
            }
            else if(accessor === "Subrows"){
              modifiedParent[header] = data.childs.map(child => ({
                  name: child.name,
                  address: child.address.value,
                  age: child.age.value,
              }));
                // console.log(modifiedParent[header])
                // console.log(modifiedParent[header]) 
            }
            else if(accessor === "locationId"){
                modifiedParent[header] = `${data.locationId}`
            }
            else{
                modifiedParent[header]= data[accessor].value
              //   console.log(data[accessor].value);
            }
            // console.log(modifiedParent);
           
          });
          // console.log(modifiedParent)
          return modifiedParent
          
        });
  } 
  // console.log(modifiedData);
  let modifiedOutput = modifiedData(mainData, columns)
  console.log(modifiedOutput)



// const output = [
//   {
//     name: { firstName: "Parent", lastName: "One", value: "Orangetoolz" },
//     age: 25,
//     address: "Uttara",
//     subrows: [
//       {
//         name: { firstName: "Child", lastName: "One" },
//         age: 25,
//         address: "Uttara",
//       },
//       {
//         name: { firstName: "Child", lastName: "Two" },
//         age: 25,
//         address: "Uttara",
//       },
//     ],
//     locationId: "testID1",
//   },
//   {
//     name: { firstName: "Parent", lastName: "Two", value: "Orangetoolz" },
//     age: 25,
//     address: "Uttara",
//     subrows: [
//       {
//         name: { firstName: "Child", lastName: "One" },
//         age: 25,
//         address: "Uttara",
//       },
//       {
//         name: { firstName: "Child", lastName: "Two" },
//         age: 25,
//         address: "Uttara",
//       },
//     ],
//     locationId: "testID2",
//   },
// ];

