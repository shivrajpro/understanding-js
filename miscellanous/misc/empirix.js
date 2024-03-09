let inp = [{
    "id": "all",
    "description": "All",
    "registeredAddresses": ["string"],
    "postalAddress": "string",
    "street": "string",
    "$$hashKey": "object:1913"
}, {
    "id": "name",
    "description": "Name",
    "registeredAddresses": ["name.empirix.com"],
    "street": "{\"primary_color\":\"black\",\"text_color\":\"white\",\"secondary_color\":\"#6eaa24\"}",
    "$$hashKey": "object:1914"
}, {
    "id": "org1",
    "description": "Org1_desc",
    "registeredAddresses": ["org1.empirix.com"],
    "street": "{\"primary_color\":\"black\",\"text_color\":\"white\",\"secondary_color\":\"#6eaa24\"}",
    "$$hashKey": "object:1915"
}, {
    "id": "org2",
    "description": "Org2_desc",
    "registeredAddresses": ["org2.empirix.com"],
    "street": "{\"primary_color\":\"black\",\"text_color\":\"white\",\"secondary_color\":\"#6eaa24\"}",
    "$$hashKey": "object:1916"
}];

let reqOp = [
    {
        id: "all",
        description: "All"
    },
    {
        id: "org1",
        description: "Org1_desc"
    },
    {
        id: "org2",
        description: "Org2_desc"
    }
];

let result = [];

for (let i = 0; i < inp.length; i++) {
    const element = inp[i];
    const obj = {id:element.id, description:element.description};
    result.push(obj);
}
console.log('>> result',result);
// console.log('>> inp', inp);
// console.log('>> reqOp', reqOp);

