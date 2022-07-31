export const contractAddress = "0x7937B3119CFb40F8cef57a991897576f5579B3Dc"

export const abi = [
   {
      inputs: [
         {
            internalType: "uint256",
            name: "_age",
            type: "uint256",
         },
         {
            internalType: "string",
            name: "_name",
            type: "string",
         },
      ],
      name: "addMan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      inputs: [
         {
            internalType: "string",
            name: "_date",
            type: "string",
         },
         {
            internalType: "string",
            name: "_info",
            type: "string",
         },
      ],
      name: "addStraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      inputs: [
         {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
         },
      ],
      name: "findMan",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256",
         },
         {
            internalType: "string",
            name: "",
            type: "string",
         },
      ],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [
         {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
         },
      ],
      name: "findStraw",
      outputs: [
         {
            internalType: "address",
            name: "",
            type: "address",
         },
         {
            internalType: "string",
            name: "",
            type: "string",
         },
         {
            internalType: "string",
            name: "",
            type: "string",
         },
      ],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [],
      name: "retrieveUnit",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256",
         },
      ],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [
         {
            internalType: "uint256",
            name: "_favoriteNumber",
            type: "uint256",
         },
      ],
      name: "store",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
   },
]
