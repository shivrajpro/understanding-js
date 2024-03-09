// at root level
const existingData = [
  {
    id: 7,
    name: "Pictures",
    folderItems: [
      {
        id: 3,
        name: "NDIS Images",
        folderItems: [],
      },
      {
        id: 4,
        name: "Body Chart Images",
        folderItems: [],
      },
    ],
  },
  {
    id: 2,
    name: "Files",
    folderItems: [],
  },
  {
    id: 5,
    name: "Scans",
    folderItems: [
      {
        id: 8,
        name: "Inside Scans",
        folderItems: [],
      },
    ],
  },
  {
    id: 6,
    name: "Folder 1",
    folderItems: [
      {
        id: 10,
        name: "F1",
        folderItems: [],
      },
      {
        id: 11,
        name: "F1",
        folderItems: [],
      },
    ],
  }
];

const newNode = {
    "id": 12,
    "name": "folder 1",
    "folderItems": []
};

let existingFolderNames = [];
let newFolderName = newNode.name.toLowerCase().trim();

existingData.forEach((d)=>{
  existingFolderNames.push(d.name.toLowerCase().trim());
})

// console.log(">> Exists?",existingFolderNames.indexOf(newFolderName) > -1);

// at child level
const childData = {
  currentNode: {
    id: 6,
    name: "Folder 1",
    folderItems: [
      {
        id: 10,
        name: "F1",
        folderItems: [],
      }
    ]
  },
  node: {
    id: 13,
    name: "F1",
    folderItems: [],
  },
};


existingFolderNames = [];
childData.currentNode.folderItems.forEach((f)=>{
  existingFolderNames.push(f.name.toLowerCase().trim());
})

newFolderName = childData.node.name.toLowerCase().trim();

console.log(">> Exists?",existingFolderNames.indexOf(newFolderName) > -1);
