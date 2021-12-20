// Assume "#" is like a backspace in string. 
// This means that string "a#bc#d" actually is "bd"
// const s = 'a#bc#d'; // bd
// const inputStr = 'abc####d##c#'; // ''
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
// let arr = s.split('');

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === '#') {
//     arr.splice(i - 1, 2);
//     i = 0;
//   }
// }

// console.log('>> answer', arr.join(''));

const arr = [1, 23, 4];
// console.log('findi', arr.findIndex((n) => n === 4));

const users = [
  {
    'id': 101,
    'username': 'shiv'
  },
  {
    'id': 102,
    'username': 'raj'
  },
  {
    'id': 103,
    'username': 'rahul'
  }
];

Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return i;
    }
  }
}

const answer = users.myFindIndex(function (el) {
  return el.id === 101;
})

// console.log('>> answer', answer);
// console.log('My findi',arr.myFindIndex((n)=> n===4));

const perspectives = [{
  "perspectiveId": 1,
  "perspectiveName": "3G, 4G & 5G-NSA",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 2,
  "perspectiveName": "3G, 4G & 5G-NSA - Network",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 3,
  "perspectiveName": "3G, 4G & 5G-NSA - Service",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 4,
  "perspectiveName": "AAA",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA", "VoLTE, VoWiFi & IMS", "Fixed Network, VoIP & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 5,
  "perspectiveName": "CS Access",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 6,
  "perspectiveName": "CS Core",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 7,
  "perspectiveName": "CS Calls",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 8,
  "perspectiveName": "PS Core",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA", "User Plane DPI Applications Monitoring[REQUIRES DPI ENABLED]"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 9,
  "perspectiveName": "PS Core UP",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 10,
  "perspectiveName": "PS Access",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 11,
  "perspectiveName": "Devices",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA", "VoLTE, VoWiFi & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 12,
  "perspectiveName": "Location",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA", "VoLTE, VoWiFi & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 13,
  "perspectiveName": "5G NSA",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G-NSA"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 14,
  "perspectiveName": "5G-NSA",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 15,
  "perspectiveName": "5G SA",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G Standalone (SA)"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 16,
  "perspectiveName": "5G Standalone (SA)",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G Standalone (SA)"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 17,
  "perspectiveName": "5G User Plane",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G Standalone (SA)"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 18,
  "perspectiveName": "5G Location",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G Standalone (SA)"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 19,
  "perspectiveName": "5G Device",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G Standalone (SA)"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 20,
  "perspectiveName": "5G Edge",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G Standalone (SA)"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 21,
  "perspectiveName": "5G Core SBI",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["5G Standalone (SA)"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 22,
  "perspectiveName": "CUPS ",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["CUPS"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 23,
  "perspectiveName": "CUPS Analysis",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["CUPS"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 24,
  "perspectiveName": "CUPS",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["CUPS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 25,
  "perspectiveName": "CUPS Devices",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["CUPS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 26,
  "perspectiveName": "CUPS Location",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["CUPS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 27,
  "perspectiveName": "Fixed Network, VoIP & IMS - Call",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 28,
  "perspectiveName": "Fixed Network, VoIP & IMS - Network",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 29,
  "perspectiveName": "Fixed Network, VoIP & IMS",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 30,
  "perspectiveName": "Business Voip (Customer)",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 31,
  "perspectiveName": "Business Voip (Network)",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 32,
  "perspectiveName": "Cable",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 33,
  "perspectiveName": "Voice",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 34,
  "perspectiveName": "Emergency Call",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS", "Emergency Call"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 35,
  "perspectiveName": "Roaming for Carriers",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming for Carriers"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 36,
  "perspectiveName": "Roaming for Carriers - Network",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming for Carriers"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 37,
  "perspectiveName": "Roaming for Carriers - Service",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming for Carriers"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 38,
  "perspectiveName": "Roaming Advanced",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming for Carriers", "Roaming for Operators"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 39,
  "perspectiveName": "Roaming Operational",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming Services for Interconnect Carriers + Roaming Services for Mobile Operators"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 40,
  "perspectiveName": "Roaming Voice",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming Services for Interconnect Carriers + Roaming Services for Mobile Operators"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 41,
  "perspectiveName": "STIR SHAKEN",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["STIR SHAKEN"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 42,
  "perspectiveName": "STIR - SHAKEN - Alarm Dashboard",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": [],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 43,
  "perspectiveName": "STIR-SHAKEN",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["STIR SHAKEN"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 44,
  "perspectiveName": "Roaming for Operators - Network",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming for Operators"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 45,
  "perspectiveName": "Roaming for Operators",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Roaming for Operators"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 46,
  "perspectiveName": "User Plane Applications",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["User Plane Applications"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 47,
  "perspectiveName": "Application DPI Home",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["User Plane Applications"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 48,
  "perspectiveName": "Application DPI Roaming",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["User Plane Applications"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 49,
  "perspectiveName": "DPI - PS Core UP",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": [],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 50,
  "perspectiveName": "DPI - PS Core",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": [],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 51,
  "perspectiveName": "Peering & ILD ",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Peering & ILD"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 52,
  "perspectiveName": "Peering & ILD",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Peering & ILD"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 53,
  "perspectiveName": "Interconnect",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Peering & ILD"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 54,
  "perspectiveName": "VoLTE, VoWiFi & IMS - Network",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS", "VoLTE, VoWiFi & IMS"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 55,
  "perspectiveName": "VoLTE, VoWiFi & IMS - Call",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["VoLTE, VoWiFi & IMS"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 56,
  "perspectiveName": "VoLTE, VoWiFi & IMS",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["VoLTE, VoWiFi & IMS"],
  "perspectiveType": "drd"
}, {
  "perspectiveId": 57,
  "perspectiveName": "IMS-VoLTE (Voice)",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["VoLTE, VoWiFi & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 58,
  "perspectiveName": "IMS",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": ["Fixed Network, VoIP & IMS", "VoLTE, VoWiFi & IMS"],
  "perspectiveType": "dor"
}, {
  "perspectiveId": 59,
  "perspectiveName": "test-analytics-alarms",
  "enableScheduler": true,
  "category": "Holistix",
  "solutionPackages": ["3G, 4G & 5G-NSA"],
  "perspectiveType": "ald"
}, {
  "perspectiveId": 60,
  "perspectiveName": "0min",
  "enableScheduler": true,
  "category": "Diagnostix",
  "solutionPackages": [],
  "perspectiveType": "dor"
}];

const perspectiveSelectedByUser = {
	"perspectiveId": 56,
	"perspectiveName": "VoLTE, VoWiFi & IMS",
	"aggregationTable": "Empty",
	"currentMode": null,
	"enableMap": false,
	"visualizationList": [],
	"datasetList": [{
		"id": 0,
		"name": "Default",
		"type": "Dataset",
		"showLED": false,
		"titleEnabled": null,
		"subtitleEnabled": null,
		"pdfGenDataObj": null,
		"chartType": null,
		"chartCode": 0,
		"dualGrouping": false,
		"groupingDimension": [{
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "protocol_error_id",
				"displayName": "Cause",
				"description": "Causes for both Voice and Mobile",
				"rootDimension": null,
				"groupBy": "aaa_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "error_flag",
				"propertyDisplayName": "Error Flag",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "error_group",
				"propertyDisplayName": "Error Group",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "error_reason",
				"propertyDisplayName": "Protocol Cause",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "failure_code",
				"propertyDisplayName": "Cause Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "protocol_name",
				"propertyDisplayName": "Protocol",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "reason",
				"propertyDisplayName": "Cause Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "reason_group",
				"propertyDisplayName": "Reason Group",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "group_ids",
				"displayName": "Group",
				"description": "Group",
				"rootDimension": null,
				"groupBy": "aaa_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "group_name",
				"propertyDisplayName": "Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "procedure_id",
				"displayName": "Procedure",
				"description": "Procedure",
				"rootDimension": null,
				"groupBy": "aaa_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Procedure Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_code",
				"propertyDisplayName": "Event Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_drilldown_name",
				"propertyDisplayName": "Event Drilldown Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_type",
				"propertyDisplayName": "Event Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "long_description",
				"propertyDisplayName": "Protocol Procedure Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "protocol_name",
				"propertyDisplayName": "Protocol",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "qos_aspects",
				"propertyDisplayName": "QOS Aspects",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "protocol_id",
				"displayName": "Protocol",
				"description": "Protocol",
				"rootDimension": null,
				"groupBy": "aaa_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Protocol Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "protocol",
				"propertyDisplayName": "Protocol",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "rat_id",
				"displayName": "Rat",
				"description": "Rat",
				"rootDimension": null,
				"groupBy": "aaa_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "code",
				"propertyDisplayName": "Radio Access Technology Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "description",
				"propertyDisplayName": "RAT",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "property",
				"propertyDisplayName": "RAT Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "rat_group",
				"propertyDisplayName": "Radio Access Technology Group",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "server_assignment_type_id",
				"displayName": "Server Assignment Type",
				"description": "Server Assignment Type",
				"rootDimension": null,
				"groupBy": "aaa_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "network_element_b_id",
				"displayName": "Target Network Element",
				"description": "Network Element representing target",
				"rootDimension": null,
				"groupBy": "aaa_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "address",
				"propertyDisplayName": "Network Element Address",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "carrier",
				"propertyDisplayName": "Carrier",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "city",
				"propertyDisplayName": "City",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "country",
				"propertyDisplayName": "Country",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer",
				"propertyDisplayName": "Customer",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer_location",
				"propertyDisplayName": "Customer Location",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "description",
				"propertyDisplayName": "Network Element Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "interfaces",
				"propertyDisplayName": "Network Element Interface",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "latitude",
				"propertyDisplayName": "Latitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "longitude",
				"propertyDisplayName": "Longitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "manufacturer_info",
				"propertyDisplayName": "Network Element Manufacturer Info",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "name",
				"propertyDisplayName": "Network Element Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_element_type",
				"propertyDisplayName": "Network Element Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "port",
				"propertyDisplayName": "Network Element Port",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "postal_code",
				"propertyDisplayName": "Postal Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "property",
				"propertyDisplayName": "Network Element Property",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region",
				"propertyDisplayName": "Region",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_id",
				"propertyDisplayName": "Network Element Region ID",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_market",
				"propertyDisplayName": "Region/Market",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "service",
				"propertyDisplayName": "Service",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "short_name",
				"propertyDisplayName": "Network Element Short Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "access_type_id",
				"displayName": "Access Type",
				"description": "Access Type",
				"rootDimension": null,
				"groupBy": "devices_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "imei_tac_id",
				"displayName": "Device",
				"description": "Device",
				"rootDimension": null,
				"groupBy": "devices_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "band",
				"propertyDisplayName": "UE Band",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "category",
				"propertyDisplayName": "UE Category",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "device_type",
				"propertyDisplayName": "Device Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "manufacturer",
				"propertyDisplayName": "UE Manufacturer",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "marketing_name",
				"propertyDisplayName": "UE Marketing Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "model_name",
				"propertyDisplayName": "UE Model Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "operating_system",
				"propertyDisplayName": "UE Operating System",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "radio_options",
				"propertyDisplayName": "UE Radio Options",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "tac",
				"propertyDisplayName": "TAC",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "group_ids",
				"displayName": "Group",
				"description": "Group",
				"rootDimension": null,
				"groupBy": "devices_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "group_name",
				"propertyDisplayName": "Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "access_type_id",
				"displayName": "Access Type",
				"description": "Access Type",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "protocol_error_id",
				"displayName": "Cause",
				"description": "Causes for both Voice and Mobile",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "error_flag",
				"propertyDisplayName": "Error Flag",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "error_group",
				"propertyDisplayName": "Error Group",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "error_reason",
				"propertyDisplayName": "Protocol Cause",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "failure_code",
				"propertyDisplayName": "Cause Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "protocol_name",
				"propertyDisplayName": "Protocol",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "reason",
				"propertyDisplayName": "Cause Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "reason_group",
				"propertyDisplayName": "Reason Group",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "direction",
				"displayName": "direction",
				"description": "call direction",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "_direction",
				"propertyDisplayName": "direction",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "from_access_type_id",
				"displayName": "From Access Type",
				"description": "From Access Type",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "group_ids",
				"displayName": "Group",
				"description": "Group",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "group_name",
				"propertyDisplayName": "Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "interface_id",
				"displayName": "Interface",
				"description": "Interface",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Interface Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "interface",
				"propertyDisplayName": "Interface Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_type",
				"propertyDisplayName": "Network Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "mcc_mnc_id",
				"displayName": "MCC MNC",
				"description": "MCC MNC",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "country_code",
				"propertyDisplayName": "Country Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "country_name",
				"propertyDisplayName": "Country Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_id",
				"propertyDisplayName": "Network Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_name",
				"propertyDisplayName": "Network Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "network_element_id",
				"displayName": "Network Element",
				"description": "A Network Element",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "address",
				"propertyDisplayName": "Network Element Address",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "carrier",
				"propertyDisplayName": "Carrier",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "city",
				"propertyDisplayName": "City",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "country",
				"propertyDisplayName": "Country",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer",
				"propertyDisplayName": "Customer",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer_location",
				"propertyDisplayName": "Customer Location",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "description",
				"propertyDisplayName": "Network Element Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "interfaces",
				"propertyDisplayName": "Network Element Interface",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "latitude",
				"propertyDisplayName": "Latitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "longitude",
				"propertyDisplayName": "Longitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "manufacturer_info",
				"propertyDisplayName": "Network Element Manufacturer Info",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "name",
				"propertyDisplayName": "Network Element Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_element_type",
				"propertyDisplayName": "Network Element Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "port",
				"propertyDisplayName": "Network Element Port",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "postal_code",
				"propertyDisplayName": "Postal Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "property",
				"propertyDisplayName": "Network Element Property",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region",
				"propertyDisplayName": "Region",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_id",
				"propertyDisplayName": "Network Element Region ID",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_market",
				"propertyDisplayName": "Region/Market",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "service",
				"propertyDisplayName": "Service",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "short_name",
				"propertyDisplayName": "Network Element Short Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "network_element_a_id",
				"displayName": "Peer Network Element",
				"description": "A Network Element representing peer side",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "address",
				"propertyDisplayName": "Network Element Address",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "carrier",
				"propertyDisplayName": "Carrier",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "city",
				"propertyDisplayName": "City",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "country",
				"propertyDisplayName": "Country",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer",
				"propertyDisplayName": "Customer",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer_location",
				"propertyDisplayName": "Customer Location",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "description",
				"propertyDisplayName": "Network Element Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "interfaces",
				"propertyDisplayName": "Network Element Interface",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "latitude",
				"propertyDisplayName": "Latitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "longitude",
				"propertyDisplayName": "Longitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "manufacturer_info",
				"propertyDisplayName": "Network Element Manufacturer Info",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "name",
				"propertyDisplayName": "Network Element Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_element_type",
				"propertyDisplayName": "Network Element Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "port",
				"propertyDisplayName": "Network Element Port",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "postal_code",
				"propertyDisplayName": "Postal Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "property",
				"propertyDisplayName": "Network Element Property",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region",
				"propertyDisplayName": "Region",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_id",
				"propertyDisplayName": "Network Element Region ID",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_market",
				"propertyDisplayName": "Region/Market",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "service",
				"propertyDisplayName": "Service",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "short_name",
				"propertyDisplayName": "Network Element Short Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "procedure_id",
				"displayName": "Procedure",
				"description": "Procedure",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Procedure Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_code",
				"propertyDisplayName": "Event Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_drilldown_name",
				"propertyDisplayName": "Event Drilldown Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_type",
				"propertyDisplayName": "Event Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "long_description",
				"propertyDisplayName": "Protocol Procedure Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "protocol_name",
				"propertyDisplayName": "Protocol",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "qos_aspects",
				"propertyDisplayName": "QOS Aspects",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "protocol_id",
				"displayName": "Protocol",
				"description": "Protocol",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Protocol Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "protocol",
				"propertyDisplayName": "Protocol",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "rat_id",
				"displayName": "Rat",
				"description": "Rat",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "code",
				"propertyDisplayName": "Radio Access Technology Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "description",
				"propertyDisplayName": "RAT",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "property",
				"propertyDisplayName": "RAT Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "rat_group",
				"propertyDisplayName": "Radio Access Technology Group",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "roaming_mcc_mnc_id",
				"displayName": "Roaming MCC MNC",
				"description": "Roaming MCC MNC",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "country_code",
				"propertyDisplayName": "Country Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "country_name",
				"propertyDisplayName": "Country Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_id",
				"propertyDisplayName": "Network Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_name",
				"propertyDisplayName": "Network Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "roaming_procedure",
				"displayName": "Roaming Procedure Code",
				"description": "Roaming Procedure Code",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Procedure Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_code",
				"propertyDisplayName": "Event Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_drilldown_name",
				"propertyDisplayName": "Event Drilldown Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "event_type",
				"propertyDisplayName": "Event Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "long_description",
				"propertyDisplayName": "Protocol Procedure Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "protocol_name",
				"propertyDisplayName": "Protocol",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "qos_aspects",
				"propertyDisplayName": "QOS Aspects",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "roaming_type_id",
				"displayName": "Roaming Type",
				"description": "Roaming Type",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Roaming Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "roaming_code",
				"propertyDisplayName": "Roaming Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "roaming_type",
				"propertyDisplayName": "Roaming Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "service_id",
				"displayName": "Service",
				"description": "Service",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Service Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "service",
				"propertyDisplayName": "Service Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "service_group",
				"propertyDisplayName": "Service Group",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "network_element_b_id",
				"displayName": "Target Network Element",
				"description": "Network Element representing target",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "address",
				"propertyDisplayName": "Network Element Address",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "carrier",
				"propertyDisplayName": "Carrier",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "city",
				"propertyDisplayName": "City",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "country",
				"propertyDisplayName": "Country",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer",
				"propertyDisplayName": "Customer",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "customer_location",
				"propertyDisplayName": "Customer Location",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "description",
				"propertyDisplayName": "Network Element Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "interfaces",
				"propertyDisplayName": "Network Element Interface",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "latitude",
				"propertyDisplayName": "Latitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "longitude",
				"propertyDisplayName": "Longitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "manufacturer_info",
				"propertyDisplayName": "Network Element Manufacturer Info",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "name",
				"propertyDisplayName": "Network Element Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "network_element_type",
				"propertyDisplayName": "Network Element Type",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "port",
				"propertyDisplayName": "Network Element Port",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "postal_code",
				"propertyDisplayName": "Postal Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "property",
				"propertyDisplayName": "Network Element Property",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region",
				"propertyDisplayName": "Region",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_id",
				"propertyDisplayName": "Network Element Region ID",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region_market",
				"propertyDisplayName": "Region/Market",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "service",
				"propertyDisplayName": "Service",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "short_name",
				"propertyDisplayName": "Network Element Short Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "to_access_type_id",
				"displayName": "To Access Type",
				"description": "To Access Type",
				"rootDimension": null,
				"groupBy": "ims_network_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "access_type_id",
				"displayName": "Access Type",
				"description": "Access Type",
				"rootDimension": null,
				"groupBy": "location_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "description",
				"propertyDisplayName": "Description",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "cell_id",
				"displayName": "Cell",
				"description": "Cell",
				"rootDimension": null,
				"groupBy": "location_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "ac",
				"propertyDisplayName": "LAC/TAC",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "ac_name",
				"propertyDisplayName": "LAC/TAC Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "cell",
				"propertyDisplayName": "Cell Hex Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "cell_name",
				"propertyDisplayName": "Cell Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "city",
				"propertyDisplayName": "City",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "country",
				"propertyDisplayName": "Country",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group1",
				"propertyDisplayName": "group1",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group10",
				"propertyDisplayName": "group10",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group2",
				"propertyDisplayName": "group2",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group3",
				"propertyDisplayName": "group3",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group4",
				"propertyDisplayName": "group4",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group5",
				"propertyDisplayName": "group5",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group6",
				"propertyDisplayName": "group6",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group7",
				"propertyDisplayName": "group7",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group8",
				"propertyDisplayName": "group8",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "group9",
				"propertyDisplayName": "group9",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "latitude",
				"propertyDisplayName": "Latitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "longitude",
				"propertyDisplayName": "Longitude",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "manufacturer_info",
				"propertyDisplayName": "Cell Manufacturer Info",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "mcc",
				"propertyDisplayName": "Mobile Country Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "mnc",
				"propertyDisplayName": "Mobile Network Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "postal_code",
				"propertyDisplayName": "Postal Code",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "ran_3g_cell",
				"propertyDisplayName": "3G Radio Access Network",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "region",
				"propertyDisplayName": "Region",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "rnc",
				"propertyDisplayName": "Radio Network Controller",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}, {
				"propertyName": "technology",
				"propertyDisplayName": "Cell Technology",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "group_ids",
				"displayName": "Group",
				"description": "Group",
				"rootDimension": null,
				"groupBy": "location_aggregator"
			},
			"dimensionPropertyList": [{
				"propertyName": "group_name",
				"propertyDisplayName": "Name",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}, {
			"dimensionInfoId": 0,
			"dimension": {
				"dimensionName": "Time",
				"displayName": "Time",
				"description": "Time",
				"rootDimension": null,
				"groupBy": "Time"
			},
			"dimensionPropertyList": [{
				"propertyName": "Time",
				"propertyDisplayName": "Time",
				"propertyValues": null,
				"enableThreshold": false,
				"userDisplayName": null
			}]
		}],
		"metricsList": [{
			"metricsName": "failed_procedure_count",
			"description": "Count of number of failed procedures",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Failed Procedure Count",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "aaa_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "procedure_count",
			"description": "Count of number of procedures",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Procedure Count",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "aaa_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "successful_procedure_rate",
			"description": "Percentage value indicating the success ratio between the number of successful procedures and the total number of procedures",
			"unit": null,
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Successful Procedure Rate",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "aaa_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_asr",
			"description": "COMMON answer-seizure ratio",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call ASR (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "devices_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failed_call_setup_volume",
			"description": "Number of calls that failed to reach the ringing state",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Failed Setup Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "devices_aggregator",
			"threshold": null
		}, {
			"metricsName": "avg_procedure_duration",
			"description": "Average duration of procedure",
			"unit": "msec",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "Avg Procedure Duration (msec)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_abr",
			"description": "COMMON answer-bid ratio",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call ABR (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_aloc",
			"description": "COMMON average length for end to end call",
			"unit": "sec",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "Call ALOC (sec)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_asr",
			"description": "COMMON answer-seizure ratio",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call ASR (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_volume",
			"description": "Total Number of Calls",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Attempts Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_average_pdd",
			"description": "Call Average PDD",
			"unit": "msec",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "Call Average PDD (msec)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_blocked_rate",
			"description": "The number of blocked calls divided by calls that contain a mobile leg",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Blocked Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_blocked_call_volume",
			"description": "A call that is blocked from being answered",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Blocked Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_dropped_rate",
			"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Dropped Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_dropped_call_volume",
			"description": "A call that has been succesfully answered is considered dropped if one of the mobile legs are dropped.",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Dropped Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failed_disconnect_volume",
			"description": "Number of calls that failed to disconnect",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Failed Disconnect Count",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failed_disconnect_rate",
			"description": "Numer of calls that failed to disconnect divided by the number of successfuly answered calls",
			"unit": null,
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Failed Disconnect Rate",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failed_call_setup_volume",
			"description": "Number of calls that failed to reach the ringing state",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Failed Setup Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failure_setup_rate",
			"description": "Numer of calls that failed to reach the ringing state divided by the total number of calls",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Failure Setup Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_abr",
			"description": "answer-bid ratio",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Leg ABR (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_call_aloc",
			"description": "average length associated end to end call",
			"unit": "sec",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "Call Leg ALOC (sec)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_successful_answered_count",
			"description": "Number of succssfully answered legs",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Leg Answered Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_asr",
			"description": "answer-seizure ratio",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Leg ASR (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_count",
			"description": "Number of legs",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Leg Attempts Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_average_pdd",
			"description": "average PDD",
			"unit": "msec",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "Call Leg Average PDD (msec)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_dropped_rate",
			"description": "Ratio of (Number of Dropped Legs/ Total Number of Legs Answered), expressed as percentage",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Leg Dropped Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_dropped_volume",
			"description": "Total number of dropped legs",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Leg Dropped Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_failed_setup_rate",
			"description": "Number of legs that succesfully reach the ringing state divided by the total number of legs",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Leg Failed Setup Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_failed_setup_volume",
			"description": "Number of Legs that failedly reach the ringing state",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Leg Failed Setup Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_ner",
			"description": "network error rate",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Leg NER (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_successful_setup_rate",
			"description": "Number of legs that succesfully reach the ringing state divided by the total number of legs",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Leg Successful Setup Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_successful_setup_volume",
			"description": "Number of Legs that successfully reach the ringing state",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Leg Successful Setup Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_failed_answered_rate",
			"description": "Number of failed answered legs divided by the number that were successfully setup",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Leg Unanswered Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "leg_failed_answered_count",
			"description": "Number of failed answered legs",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Leg Unanswered Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_ner",
			"description": "COMMON Call network effectiveness rate",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call NER (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_successful_setup_rate",
			"description": "Number of calls that succesfully reach the ringing state divided by the total number of calls",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Successful Setup Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_successful_setup_volume",
			"description": "Number of Calls that successfully reach the ringing state",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Successful Setup Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failed_answered_call_rate",
			"description": "Number of Calls that failed to answer over number that were successfully setup",
			"unit": null,
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Unanswered Rate",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failed_answered_call_volume",
			"description": "Number of Calls that failed to answer",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Unanswered Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "failed_procedure_count",
			"description": "Count of number of failed procedures",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Failed Procedure Count",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "failed_procedure_rate",
			"description": "Percentage value indicating the fail ratio between the number of failed procedures and the total number of procedures",
			"unit": null,
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Failed Procedure Rate",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "max_procedure_duration",
			"description": "Maximum duration of procedure",
			"unit": "msec",
			"aggregationType": "max",
			"metricsType": "KPI",
			"displayName": "Max Procedure Duration (msec)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "media_average_jitter",
			"description": "Average Jitter",
			"unit": "timestamp",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "MEDIA Average Jitter (timestamp)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "media_average_mos",
			"description": "Average MOS",
			"unit": "mos",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "MEDIA Average MOS (mos)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "media_average_r_factor",
			"description": "Media average R-Factor",
			"unit": "r-factor",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "MEDIA Average R Factor (r-factor)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "media_packets_lost_ratio",
			"description": "Total number of packets lost / Total number of packets expected (received + lost)",
			"unit": null,
			"aggregationType": "sum_ratio",
			"metricsType": "KPI",
			"displayName": "MEDIA Packets Lost Ratio",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "media_total_packets_lost",
			"description": "Total number of packets lost",
			"unit": "packets",
			"aggregationType": "sum",
			"metricsType": "KPI",
			"displayName": "MEDIA Total Packets Lost (packets)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "min_procedure_duration",
			"description": "Minimum duration of procedure",
			"unit": "msec",
			"aggregationType": "min",
			"metricsType": "KPI",
			"displayName": "Min Procedure Duration (msec)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "procedure_count",
			"description": "Count of number of procedures",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Procedure Count",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "sip_average_call_jitter",
			"description": "Average Jitter from associated end to end call",
			"unit": "timestamp",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "SIP Average Call Jitter (timestamp)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "sip_average_call_mos",
			"description": "Average MOS from associated end to end call",
			"unit": "mos",
			"aggregationType": "avg",
			"metricsType": "KPI",
			"displayName": "SIP Average Call MOS (mos)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "sip_one_way_audio_rate",
			"description": "Ratio of one way audio SIP legs",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "SIP One Way Audio Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "sip_one_way_audio_volume",
			"description": "Number of one way audio SIP legs",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "SIP One Way Audio Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "successful_procedure_count",
			"description": "Count of number of successful procedures",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Successful Procedure Count",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "successful_procedure_rate",
			"description": "Percentage value indicating the success ratio between the number of successful procedures and the total number of procedures",
			"unit": null,
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Successful Procedure Rate",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "ims_network_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_asr",
			"description": "COMMON answer-seizure ratio",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call ASR (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "location_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_dropped_rate",
			"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
			"unit": "%",
			"aggregationType": "ratio",
			"metricsType": "KPI",
			"displayName": "Call Dropped Rate (%)",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "location_aggregator",
			"threshold": null
		}, {
			"metricsName": "common_call_failed_call_setup_volume",
			"description": "Number of calls that failed to reach the ringing state",
			"unit": null,
			"aggregationType": "count",
			"metricsType": "KPI",
			"displayName": "Call Failed Setup Volume",
			"userDisplayName": null,
			"advancedMetric": false,
			"groupBy": "location_aggregator",
			"threshold": null
		}],
		"toolTipThreshold": 0.0,
		"isEnabled": null,
		"customViewId": 0,
		"customViewName": null,
		"enableThreshold": false,
		"includeNotEnriched": false,
		"sizeX": 0,
		"sizeY": 0,
		"row": 0,
		"col": 0,
		"leftAxis": null,
		"rightAxis": null,
		"overtime": false,
		"halfRound": false,
		"defaultTableColumnsOrder": null,
		"sortedColumns": null,
		"hiddenColumns": null,
		"columnOrder": null,
		"columnFilters": null,
		"stackedEnabled": false,
		"tabIndex": null,
		"customFilters": null,
		"customDimensionsFilters": null,
		"isLinkDisabled": null,
		"linkedId": null,
		"parentId": null,
		"hashKey": null,
		"linkedDimensions": null,
		"identifier": null,
		"linkedTabs": null,
		"labelText": null,
		"filter": null,
		"customTimeRangeEnabled": null,
		"sortBy": null,
		"top": null,
		"targetDashboard": null,
		"serviceModelNodes": [],
		"sourceType": null,
		"alarmingConfigData": null,
		"subtitle": null,
		"isSecondaryDashboard": null,
		"isTimeGrouping": null,
		"valueType": null,
		"viewBoxTrend": false,
		"hideEmptyValues": false,
		"enableLightMode": false,
		"isKIValuesTable": null
	}],
	"enableAutoRefresh": true,
	"sinceMidNight": false,
	"enableDefaultAutoRefresh": true,
	"enableDefaultRange": false,
	"defaultAutoRefreshStartTime": "-1|Days|None",
	"defaultRangeStartTime": "-1|Days|12:00 am",
	"defaultRangeStopTime": "0|Days|12:00 am",
	"aggregationPeriod": null,
	"defaultRangeGranularity": "Minutes",
	"defaultLastGranularity": "Hourly",
	"enableScheduler": true,
	"enableGranularity": false,
	"perspectiveType": "drd",
	"perspectiveTypeLabel": "Reporting Dashboard",
	"category": "Diagnostix",
	"role": "none",
	"icon": "glyphicon-signal",
	"drilldownEnabled": true,
	"tabsList": [],
	"sourceList": [{
		"id": 1,
		"sourceType": "Aggregation Table",
		"aggregationTable": "ims_network_aggregator",
		"aggregationPeriod": 5,
		"serviceModel": null
	}, {
		"id": 2,
		"sourceType": "Aggregation Table",
		"aggregationTable": "devices_aggregator",
		"aggregationPeriod": 5,
		"serviceModel": null
	}, {
		"id": 3,
		"sourceType": "Aggregation Table",
		"aggregationTable": "location_aggregator",
		"aggregationPeriod": 5,
		"serviceModel": null
	}, {
		"id": 4,
		"sourceType": "Aggregation Table",
		"aggregationTable": "aaa_network_aggregator",
		"aggregationPeriod": 5,
		"serviceModel": null
	}],
	"targetDashboardList": [{
		"perspectiveName": "5G User Plane",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "PS Core UP",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "AAA",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "CS Access",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "CS Core",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "CS Calls",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "PS Core",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "PS Access",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Devices",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "5G Core SBI",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Location",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "5G Location",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Roaming Voice",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Roaming Operational",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "STIR-SHAKEN",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "DPI - PS Core UP",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "DPI - PS Core",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Application DPI Home",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Application DPI Roaming",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Interconnect",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "IMS-VoLTE (Voice)",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "IMS",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Roaming Advanced",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "0min",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "5G Device",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "5G Edge",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Business Voip (Customer)",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Business Voip (Network)",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Cable",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Voice",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "CUPS",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "CUPS Devices",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "CUPS Location",
		"perspectiveType": "dor",
		"perspectiveTypeLabel": "Diagnostix Operational Report"
	}, {
		"perspectiveName": "Emergency Call",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "5G-NSA",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "VoLTE, VoWiFi & IMS",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "3G, 4G & 5G-NSA",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "5G Standalone (SA)",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "Fixed Network, VoIP & IMS",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "Peering & ILD ",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "Roaming for Carriers",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "Roaming for Operators",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "STIR SHAKEN",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "CUPS Analysis",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}, {
		"perspectiveName": "User Plane Applications",
		"perspectiveType": "drd",
		"perspectiveTypeLabel": "Reporting Dashboard"
	}],
	"workflowEnabled": false,
	"filtersEnabled": false,
	"timeSelectionEnabled": true,
	"autoApplyEnabled": true,
	"defaultIncludeNotEnriched": false,
	"solutionPackages": ["VoLTE, VoWiFi & IMS"],
	"roles": null,
	"promptEnabled": false,
	"defaultReports": [{
		"filterName": "VoWiFi Service Analysis",
		"userName": "admin",
		"perspectiveName": "VoLTE, VoWiFi & IMS",
		"perspectiveId": 23,
		"is_private": false,
		"icon": null,
		"isView": true,
		"isFilter": true,
		"organization": null,
		"group": null,
		"currentMode": null,
		"filterRequiredData": {
			"filter": {
				"range": {
					"enable": false,
					"fromDate": "2021-04-28T18:00:00+02:00",
					"toDate": "2021-04-29T18:00:00+02:00"
				},
				"last": {
					"enable": false,
					"time": {
						"display": "Hours",
						"value": 1
					}
				},
				"customLast": {
					"enable": true,
					"time": {
						"display": "hours",
						"value": 24
					}
				},
				"agingPeriod": null,
				"sinceMidNightChecked": false,
				"refreshActualsAutomatically": true,
				"serviceUrlParams": null,
				"selectedDimensionProperites": null,
				"timezone": "(UTC+01:00) Europe/Rome",
				"promptFilters": null
			},
			"agingPeriod": "HOURLY",
			"workflow": {},
			"columnFilters": null,
			"visualizationList": [{
				"id": 0,
				"name": "MO Volumes by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_call_volume,common_call_failed_call_setup_volume,common_call_successful_setup_volume&groupingDimensions=time&dimensionFilter=from_access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_call_volume",
					"description": "A call that has been succesfully answered is considered dropped if one of the mobile legs are dropped.",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Dropped Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_successful_setup_volume",
					"description": "Number of Calls that successfully reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Successful Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"from_access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "MT Volumes by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_call_volume,common_call_failed_call_setup_volume,common_call_successful_setup_volume&groupingDimensions=time&dimensionFilter=to_access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_call_volume",
					"description": "A call that has been succesfully answered is considered dropped if one of the mobile legs are dropped.",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Dropped Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_successful_setup_volume",
					"description": "Number of Calls that successfully reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Successful Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"to_access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day Failure  by Cause",
				"type": "Pie Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "6",
					"currentGroupDimension": "&groupingDimensions=protocol_error_id.reason",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=protocol_error_id.reason&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=protocol_error_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Pie Chart",
				"chartCode": 6,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "protocol_error_id",
						"displayName": "Cause",
						"description": "Causes for both Voice and Mobile",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "reason",
						"propertyDisplayName": "Cause Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "PDD by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_average_pdd&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_average_pdd",
					"description": "Call Average PDD",
					"unit": "msec",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "Call Average PDD (msec)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "ALOC by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_aloc&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_aloc",
					"description": "COMMON average length for end to end call",
					"unit": "sec",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "Call ALOC (sec)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "ASR/NER/ABR by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_abr,common_call_asr,common_call_ner&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_abr",
					"description": "COMMON answer-bid ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ABR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_ner",
					"description": "COMMON Call network effectiveness rate",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call NER (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Failures Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_blocked_rate,common_call_dropped_rate,common_call_failure_setup_rate&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_blocked_rate",
					"description": "The number of blocked calls divided by calls that contain a mobile leg",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Blocked Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failure_setup_rate",
					"description": "Numer of calls that failed to reach the ringing state divided by the total number of calls",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Failure Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - ASR/NER/ABR  by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_abr,common_call_asr,common_call_ner&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_abr",
					"description": "COMMON answer-bid ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ABR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_ner",
					"description": "COMMON Call network effectiveness rate",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call NER (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - Failures Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_blocked_rate,common_call_dropped_rate,common_call_failure_setup_rate&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_blocked_rate",
					"description": "The number of blocked calls divided by calls that contain a mobile leg",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Blocked Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failure_setup_rate",
					"description": "Numer of calls that failed to reach the ringing state divided by the total number of calls",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Failure Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-02-24T00:00:00+01:00",
						"toDate": "2021-03-03T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Volume by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=media_packets_lost_ratio&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_packets_lost_ratio",
					"description": "Total number of packets lost / Total number of packets expected (received + lost)",
					"unit": null,
					"aggregationType": "sum_ratio",
					"metricsType": "KPI",
					"displayName": "MEDIA Packets Lost Ratio",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "MOS by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=media_average_mos&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_mos",
					"description": "Average MOS",
					"unit": "mos",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average MOS (mos)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "R-Factor by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=media_average_r_factor&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_r_factor",
					"description": "Media average R-Factor",
					"unit": "r-factor",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average R Factor (r-factor)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - MOS by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=media_average_mos&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_mos",
					"description": "Average MOS",
					"unit": "mos",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average MOS (mos)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Jitter by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=media_average_jitter&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_jitter",
					"description": "Average Jitter",
					"unit": "timestamp",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average Jitter (timestamp)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - R-Factor by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=media_average_r_factor&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_r_factor",
					"description": "Media average R-Factor",
					"unit": "r-factor",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average R Factor (r-factor)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - Jitter by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=media_average_jitter&groupingDimensions=time&dimensionFilter=access_type_id.description=MW"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_jitter",
					"description": "Average Jitter",
					"unit": "timestamp",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average Jitter (timestamp)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoWiFi ASR by City",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.city",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_asr&groupingDimensions=network_element_b_id.city&sortBy=common_call_asr&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoWiFi ASR by Region",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.region",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_asr&groupingDimensions=network_element_b_id.region&sortBy=common_call_asr&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "region",
						"propertyDisplayName": "Region",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoWiFi Failure by Region",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.region",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=network_element_b_id.region&sortBy=-common_call_failed_call_setup_volume&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "region",
						"propertyDisplayName": "Region",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_failed_call_setup_volume",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoWiFi Failure by City",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.city",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=network_element_b_id.city&sortBy=-common_call_failed_call_setup_volume&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_failed_call_setup_volume",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoWiFi ASR by City",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.city,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_asr&groupingDimensions=network_element_b_id.city,time&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T00:00:00+02:00",
						"toDate": "2021-04-29T00:00:00+02:00"
					},
					"last": {
						"enable": false,
						"time": {
							"display": "Hours",
							"value": 1
						}
					},
					"customLast": {
						"enable": true,
						"time": {
							"display": "weeks",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoWiFi ASR by Region",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.region,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_asr&groupingDimensions=network_element_b_id.region,time&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "region",
						"propertyDisplayName": "Region",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T00:00:00+02:00",
						"toDate": "2021-04-29T00:00:00+02:00"
					},
					"last": {
						"enable": false,
						"time": {
							"display": "Hours",
							"value": 1
						}
					},
					"customLast": {
						"enable": true,
						"time": {
							"display": "weeks",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoWiFi Failure by City",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.city,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_failed_call_setup_volume&groupingDimensions=network_element_b_id.city,time&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 18,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T00:00:00+02:00",
						"toDate": "2021-04-29T00:00:00+02:00"
					},
					"last": {
						"enable": false,
						"time": {
							"display": "Hours",
							"value": 1
						}
					},
					"customLast": {
						"enable": true,
						"time": {
							"display": "weeks",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoWiFi Failure by Region",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.region,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_failed_call_setup_volume&groupingDimensions=network_element_b_id.region,time&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "region",
						"propertyDisplayName": "Region",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 18,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T00:00:00+02:00",
						"toDate": "2021-04-29T00:00:00+02:00"
					},
					"last": {
						"enable": false,
						"time": {
							"display": "Hours",
							"value": 1
						}
					},
					"customLast": {
						"enable": true,
						"time": {
							"display": "weeks",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Dropped Rate by Region",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.region",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_rate&groupingDimensions=network_element_b_id.region&sortBy=-common_call_dropped_rate&limit=10&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "region",
						"propertyDisplayName": "Region",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_dropped_rate",
				"top": 10,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Dropped Rate by City",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.city",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_rate&groupingDimensions=network_element_b_id.city&sortBy=-common_call_dropped_rate&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_dropped_rate",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoWiFi Failure  by Device",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=imei_tac_id.model_name&sortBy=-common_call_failed_call_setup_volume&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_failed_call_setup_volume",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoWiFi ASR by Device",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-04-28T16:00:00&toTime=2021-04-29T16:00:00&inputGranularity=HOURLY&metrics=common_call_asr&groupingDimensions=imei_tac_id.model_name&sortBy=-common_call_asr&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoWiFi ASR by Device",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name,time",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_asr&groupingDimensions=imei_tac_id.model_name,time&sortBy=time,-common_call_asr&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-02-25T00:00:00+01:00",
						"toDate": "2021-03-04T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": "-common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoWiFi Failure by Device",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name,time",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-04-22T16:19:20&toTime=2021-04-29T16:19:20&inputGranularity=DAILY&metrics=common_call_failed_call_setup_volume&groupingDimensions=imei_tac_id.model_name,time&sortBy=time,-common_call_failed_call_setup_volume&limit=25&dimensionFilter=access_type_id.description=MW&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-22T00:00:00+01:00",
						"toDate": "2021-03-29T00:00:00+02:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": "-common_call_failed_call_setup_volume",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}]
		},
		"tabsList": [{
			"name": "VoWiFi Analysis",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}, {
			"name": "VoWiFi Media",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}, {
			"name": "VoWiFi Distribution",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}],
		"defaultReport": true,
		"alarmLevels": null,
		"favorite": false,
		"type": "CHARTS"
	}, {
		"filterName": "VoLTE Service Analysis",
		"userName": "admin",
		"perspectiveName": "VoLTE, VoWiFi & IMS",
		"perspectiveId": 23,
		"is_private": false,
		"icon": null,
		"isView": true,
		"isFilter": true,
		"organization": null,
		"group": null,
		"currentMode": null,
		"filterRequiredData": {
			"filter": {
				"range": {
					"enable": false,
					"fromDate": "2021-05-02T17:00:00+02:00",
					"toDate": "2021-05-03T17:00:00+02:00"
				},
				"last": {
					"enable": false,
					"time": {
						"display": "Hours",
						"value": 1
					}
				},
				"customLast": {
					"enable": true,
					"time": {
						"display": "hours",
						"value": 24
					}
				},
				"agingPeriod": null,
				"sinceMidNightChecked": false,
				"refreshActualsAutomatically": true,
				"serviceUrlParams": null,
				"selectedDimensionProperites": null,
				"timezone": "(UTC+01:00) Europe/Rome",
				"promptFilters": null
			},
			"agingPeriod": "HOURLY",
			"workflow": {},
			"columnFilters": null,
			"visualizationList": [{
				"id": 0,
				"name": "MO Volumes by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_call_volume,common_call_failed_call_setup_volume,common_call_successful_setup_volume&groupingDimensions=time&dimensionFilter=from_access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_call_volume",
					"description": "A call that has been succesfully answered is considered dropped if one of the mobile legs are dropped.",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Dropped Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_successful_setup_volume",
					"description": "Number of Calls that successfully reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Successful Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"from_access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "MT Volumes by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_call_volume,common_call_failed_call_setup_volume,common_call_successful_setup_volume&groupingDimensions=time&dimensionFilter=to_access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_call_volume",
					"description": "A call that has been succesfully answered is considered dropped if one of the mobile legs are dropped.",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Dropped Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_successful_setup_volume",
					"description": "Number of Calls that successfully reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Successful Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"to_access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day Failure  by Cause",
				"type": "Pie Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "6",
					"currentGroupDimension": "&groupingDimensions=protocol_error_id.reason",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=protocol_error_id.reason&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=protocol_error_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Pie Chart",
				"chartCode": 6,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "protocol_error_id",
						"displayName": "Cause",
						"description": "Causes for both Voice and Mobile",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "reason",
						"propertyDisplayName": "Cause Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "PDD by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_average_pdd&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_average_pdd",
					"description": "Call Average PDD",
					"unit": "msec",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "Call Average PDD (msec)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "ALOC by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_aloc&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_aloc",
					"description": "COMMON average length for end to end call",
					"unit": "sec",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "Call ALOC (sec)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "ASR/NER/ABR by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_abr,common_call_asr,common_call_ner&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_abr",
					"description": "COMMON answer-bid ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ABR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_ner",
					"description": "COMMON Call network effectiveness rate",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call NER (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Failures Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_blocked_rate,common_call_dropped_rate,common_call_failure_setup_rate&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_blocked_rate",
					"description": "The number of blocked calls divided by calls that contain a mobile leg",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Blocked Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failure_setup_rate",
					"description": "Numer of calls that failed to reach the ringing state divided by the total number of calls",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Failure Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - ASR/NER/ABR  by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-26T15:25:18&toTime=2021-05-03T15:25:18&inputGranularity=DAILY&metrics=common_call_abr,common_call_asr,common_call_ner&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_abr",
					"description": "COMMON answer-bid ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ABR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_ner",
					"description": "COMMON Call network effectiveness rate",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call NER (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - Failures Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-26T15:25:19&toTime=2021-05-03T15:25:19&inputGranularity=DAILY&metrics=common_call_blocked_rate,common_call_dropped_rate,common_call_failure_setup_rate&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_blocked_rate",
					"description": "The number of blocked calls divided by calls that contain a mobile leg",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Blocked Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}, {
					"metricsName": "common_call_failure_setup_rate",
					"description": "Numer of calls that failed to reach the ringing state divided by the total number of calls",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Failure Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Volume by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=media_packets_lost_ratio&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_packets_lost_ratio",
					"description": "Total number of packets lost / Total number of packets expected (received + lost)",
					"unit": null,
					"aggregationType": "sum_ratio",
					"metricsType": "KPI",
					"displayName": "MEDIA Packets Lost Ratio",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "MOS by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=media_average_mos&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_mos",
					"description": "Average MOS",
					"unit": "mos",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average MOS (mos)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "R-Factor by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=media_average_r_factor&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_r_factor",
					"description": "Media average R-Factor",
					"unit": "r-factor",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average R Factor (r-factor)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - MOS by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-26T15:25:19&toTime=2021-05-03T15:25:19&inputGranularity=DAILY&metrics=media_average_mos&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_mos",
					"description": "Average MOS",
					"unit": "mos",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average MOS (mos)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Jitter by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=media_average_jitter&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_jitter",
					"description": "Average Jitter",
					"unit": "timestamp",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average Jitter (timestamp)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - R-Factor by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-26T15:25:19&toTime=2021-05-03T15:25:19&inputGranularity=DAILY&metrics=media_average_r_factor&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_r_factor",
					"description": "Media average R-Factor",
					"unit": "r-factor",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average R Factor (r-factor)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - Jitter by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-04-26T15:25:19&toTime=2021-05-03T15:25:19&inputGranularity=DAILY&metrics=media_average_jitter&groupingDimensions=time&dimensionFilter=access_type_id.description=4G"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "media_average_jitter",
					"description": "Average Jitter",
					"unit": "timestamp",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "MEDIA Average Jitter (timestamp)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS-VoLTE (Voice)",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoLTE ASR by Cell",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=cell_id.cell_name,cell_id.ac_name",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_asr&groupingDimensions=cell_id.cell_name,cell_id.ac_name&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "cell_name",
						"propertyDisplayName": "Cell Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}, {
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "ac_name",
						"propertyDisplayName": "LAC/TAC Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": ["cell_id.cell_name ● cell_id.ac_name"],
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoLTE ASR by City",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=cell_id.city",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_asr&groupingDimensions=cell_id.city&sortBy=common_call_asr&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoLTE Failure by City",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=cell_id.city",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=cell_id.city&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": {
						"critical": false,
						"major": false,
						"minor": false,
						"warning": false,
						"clear": false
					}
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": ["cell_id.city", "common_call_failed_call_setup_volume"],
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": "Last Day VoLTE Failure by City1620055654543N4C2W",
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoLTE Failure by Cell",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=cell_id.cell_name,cell_id.ac_name",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=cell_id.cell_name,cell_id.ac_name&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "cell_name",
						"propertyDisplayName": "Cell Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}, {
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "ac_name",
						"propertyDisplayName": "LAC/TAC Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": {
						"critical": false,
						"major": false,
						"minor": false,
						"warning": false,
						"clear": false
					}
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": ["cell_id.cell_name", "cell_id.ac_name", "common_call_failed_call_setup_volume"],
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": ["cell_id.cell_name ● cell_id.ac_name"],
				"identifier": "Last Day VoLTE Failure by Cell1620055601033RATJW",
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoLTE ASR by Cell",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=cell_id.cell_name,cell_id.ac_name,time",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-04-26T15:28:43&toTime=2021-05-03T15:28:43&inputGranularity=DAILY&metrics=common_call_asr&groupingDimensions=cell_id.cell_name,cell_id.ac_name,time&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "cell_name",
						"propertyDisplayName": "Cell Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}, {
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "ac_name",
						"propertyDisplayName": "LAC/TAC Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": ["cell_id.cell_name ● cell_id.ac_name"],
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-26T00:00:00+02:00",
						"toDate": "2021-05-03T00:00:00+02:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "hours",
							"value": 24
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoLTE ASR by City",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=cell_id.city,time",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-04-26T15:25:18&toTime=2021-05-03T15:25:18&inputGranularity=DAILY&metrics=common_call_asr&groupingDimensions=cell_id.city,time&sortBy=time,common_call_asr&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 12,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-02-25T00:00:00+01:00",
						"toDate": "2021-03-04T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": "common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoLTE Failure by Cell",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=cell_id.cell_name,cell_id.ac_name,time",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-04-26T15:28:56&toTime=2021-05-03T15:28:56&inputGranularity=DAILY&metrics=common_call_failed_call_setup_volume&groupingDimensions=cell_id.cell_name,cell_id.ac_name,time&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "cell_name",
						"propertyDisplayName": "Cell Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}, {
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "ac_name",
						"propertyDisplayName": "LAC/TAC Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 18,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": ["cell_id.cell_name ● cell_id.ac_name"],
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-22T00:00:00+01:00",
						"toDate": "2021-03-29T00:00:00+02:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "hours",
							"value": 24
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoLTE Failure by City",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=cell_id.city,time",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-04-26T15:25:18&toTime=2021-05-03T15:25:18&inputGranularity=DAILY&metrics=common_call_failed_call_setup_volume&groupingDimensions=cell_id.city,time&sortBy=time,-common_call_failed_call_setup_volume&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 18,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-02-25T00:00:00+01:00",
						"toDate": "2021-03-04T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": "-common_call_failed_call_setup_volume",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Dropped Rate by City",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=cell_id.city",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_rate&groupingDimensions=cell_id.city&sortBy=-common_call_dropped_rate&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "city",
						"propertyDisplayName": "City",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_dropped_rate",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Dropped Rate by Cell",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=cell_id.cell_name,cell_id.ac_name",
					"currentQuery": ["/mediation-reports/aggregators/location_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_dropped_rate&groupingDimensions=cell_id.cell_name,cell_id.ac_name&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=cell_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "cell_name",
						"propertyDisplayName": "Cell Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}, {
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "cell_id",
						"displayName": "Cell",
						"description": "Cell",
						"rootDimension": null,
						"groupBy": "location_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "ac_name",
						"propertyDisplayName": "LAC/TAC Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_dropped_rate",
					"description": "The number of dropped calls divided by calls that contain a mobile leg and are succesfully answered.",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "location_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": ["cell_id.cell_name ● cell_id.ac_name"],
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "Location",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "location_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoLTE Failure  by Device",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_failed_call_setup_volume&groupingDimensions=imei_tac_id.model_name&sortBy=-common_call_failed_call_setup_volume&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_failed_call_setup_volume",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Last Day VoLTE ASR by Device",
				"type": "Multi Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "1",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-05-02T15:00:00&toTime=2021-05-03T15:00:00&inputGranularity=HOURLY&metrics=common_call_asr&groupingDimensions=imei_tac_id.model_name&sortBy=-common_call_asr&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Multi Bar Chart",
				"chartCode": 1,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoLTE ASR by Device",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name,time",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-04-26T15:25:18&toTime=2021-05-03T15:25:18&inputGranularity=DAILY&metrics=common_call_asr&groupingDimensions=imei_tac_id.model_name,time&sortBy=time,-common_call_asr&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_asr",
					"description": "COMMON answer-seizure ratio",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call ASR",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-02-25T00:00:00+01:00",
						"toDate": "2021-03-04T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": "-common_call_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend - VoLTE Failure by Device",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=imei_tac_id.model_name,time",
					"currentQuery": ["/mediation-reports/aggregators/devices_aggregator/metricValues?fromTime=2021-04-26T15:25:18&toTime=2021-05-03T15:25:18&inputGranularity=DAILY&metrics=common_call_failed_call_setup_volume&groupingDimensions=imei_tac_id.model_name,time&sortBy=time,-common_call_failed_call_setup_volume&limit=25&dimensionFilter=access_type_id.description=4G&excludeReservedDimensions=imei_tac_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "imei_tac_id",
						"displayName": "Device",
						"description": "Device",
						"rootDimension": null,
						"groupBy": "devices_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "model_name",
						"propertyDisplayName": "UE Model Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "common_call_failed_call_setup_volume",
					"description": "Number of calls that failed to reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "devices_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 24,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-02T00:00:00+01:00",
						"toDate": "2021-03-09T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": "-common_call_failed_call_setup_volume",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "Devices",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "devices_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}]
		},
		"tabsList": [{
			"name": "VoLTE Analysis",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}, {
			"name": "VoLTE Media",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}, {
			"name": "VoLTE Distribution",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}],
		"defaultReport": true,
		"alarmLevels": null,
		"favorite": true,
		"type": "CHARTS"
	}, {
		"filterName": "IMS Analysis",
		"userName": "anoopg",
		"perspectiveName": "VoLTE, VoWiFi & IMS",
		"perspectiveId": 97,
		"is_private": false,
		"icon": null,
		"isView": true,
		"isFilter": true,
		"organization": null,
		"group": null,
		"currentMode": null,
		"filterRequiredData": {
			"filter": {
				"range": {
					"enable": false,
					"fromDate": "2021-05-17T16:00:00+05:30",
					"toDate": "2021-05-18T16:00:00+05:30"
				},
				"last": {
					"enable": false,
					"time": {
						"display": "Hours",
						"value": 1
					}
				},
				"customLast": {
					"enable": true,
					"time": {
						"display": "hours",
						"value": 24
					}
				},
				"agingPeriod": null,
				"sinceMidNightChecked": false,
				"refreshActualsAutomatically": true,
				"serviceUrlParams": null,
				"selectedDimensionProperites": null,
				"timezone": "(UTC+05:30) Asia/Kolkata",
				"promptFilters": {
					"0": {
						"aggregator": "ims_network_aggregator",
						"filter": {
							"group_ids.group_name": []
						}
					},
					"1": {
						"aggregator": "devices_aggregator",
						"filter": {
							"group_ids.group_name": []
						}
					},
					"2": {
						"aggregator": "location_aggregator",
						"filter": {
							"group_ids.group_name": []
						}
					},
					"3": {
						"aggregator": "aaa_network_aggregator",
						"filter": {
							"group_ids.group_name": []
						}
					}
				}
			},
			"agingPeriod": "HOURLY",
			"workflow": {},
			"columnFilters": null,
			"visualizationList": [{
				"id": 0,
				"name": "SAR Volume by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/aaa_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=procedure_count&groupingDimensions=time&dimensionFilter=procedure_id.description=Server-Assignment%5BAND%5Dprotocol_id.description=DIAMETER"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "procedure_count",
					"description": "Count of number of procedures",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Procedure Count",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "aaa_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"procedure_id.description": ["Server-Assignment"],
						"protocol_id.description": ["DIAMETER"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "AAA",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "aaa_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SAR Success Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/aaa_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=successful_procedure_rate&groupingDimensions=time&dimensionFilter=procedure_id.description=Server-Assignment%5BAND%5Dprotocol_id.description=DIAMETER"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "successful_procedure_rate",
					"description": "Percentage value indicating the success ratio between the number of successful procedures and the total number of procedures",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Successful Procedure Rate",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "aaa_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"procedure_id.description": ["Server-Assignment"],
						"protocol_id.description": ["DIAMETER"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "AAA",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "aaa_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Worst NE - SAR Success Rate",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/aaa_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=successful_procedure_rate&groupingDimensions=network_element_b_id.name&sortBy=successful_procedure_rate&limit=25&dimensionFilter=procedure_id.description=Server-Assignment%5BAND%5Dprotocol_id.description=DIAMETER&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "aaa_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "successful_procedure_rate",
					"description": "Percentage value indicating the success ratio between the number of successful procedures and the total number of procedures",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Successful Procedure Rate",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "aaa_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"procedure_id.description": ["Server-Assignment"],
						"protocol_id.description": ["DIAMETER"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "successful_procedure_rate",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "AAA",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "aaa_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend -  SAR Success Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/aaa_network_aggregator/metricValues?fromTime=2021-05-11T10:48:27&toTime=2021-05-18T10:48:27&inputGranularity=DAILY&metrics=successful_procedure_rate&groupingDimensions=time&dimensionFilter=procedure_id.description=Server-Assignment%5BAND%5Dprotocol_id.description=DIAMETER"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "successful_procedure_rate",
					"description": "Percentage value indicating the success ratio between the number of successful procedures and the total number of procedures",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Successful Procedure Rate",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "aaa_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"procedure_id.description": ["Server-Assignment"],
						"protocol_id.description": ["DIAMETER"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T00:00:00+02:00",
						"toDate": "2021-04-29T00:00:00+02:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "AAA",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "aaa_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend -  SAR Volume by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=time",
					"currentQuery": ["/mediation-reports/aggregators/aaa_network_aggregator/metricValues?fromTime=2021-05-11T12:04:52&toTime=2021-05-18T12:04:52&inputGranularity=DAILY&metrics=procedure_count&groupingDimensions=time&dimensionFilter=procedure_id.description=Server-Assignment%5BAND%5Dprotocol_id.description=DIAMETER"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "Time",
						"displayName": "Time",
						"description": "Time",
						"rootDimension": null,
						"groupBy": "Time"
					},
					"dimensionPropertyList": [{
						"propertyName": "Time",
						"propertyDisplayName": "Time",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "procedure_count",
					"description": "Count of number of procedures",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Procedure Count",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "aaa_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"procedure_id.description": ["Server-Assignment"],
						"protocol_id.description": ["DIAMETER"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T03:30:00+05:30",
						"toDate": "2021-04-29T03:30:00+05:30"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "hours",
							"value": 24
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "AAA",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "aaa_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": true,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Response Code Summary - SAR Failure Volume by Cause",
				"type": "Pie Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "6",
					"currentGroupDimension": "&groupingDimensions=protocol_error_id.reason",
					"currentQuery": ["/mediation-reports/aggregators/aaa_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=failed_procedure_count&groupingDimensions=protocol_error_id.reason&dimensionFilter=protocol_id.description=DIAMETER%5BAND%5Dprocedure_id.description=Server-Assignment&excludeReservedDimensions=protocol_error_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Pie Chart",
				"chartCode": 6,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "protocol_error_id",
						"displayName": "Cause",
						"description": "Causes for both Voice and Mobile",
						"rootDimension": null,
						"groupBy": "aaa_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "reason",
						"propertyDisplayName": "Cause Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "failed_procedure_count",
					"description": "Count of number of failed procedures",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Failed Procedure Count",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "aaa_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 1,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["DIAMETER"],
						"procedure_id.description": ["Server-Assignment"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "AAA",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "aaa_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Volume by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_successful_setup_rate&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_successful_setup_rate",
					"description": "Number of legs that succesfully reach the ringing state divided by the total number of legs",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Successful Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": {
						"critical": false,
						"major": false,
						"minor": false,
						"warning": false,
						"clear": false
					}
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": "SIP  Analysis - Volume by Time1614857093992GJNKX",
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Attempts by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_count&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Daccess_type_id.description=4G,MW%5BAND%5Dinterface_id.interface=ISC,Mw&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_count",
					"description": "Number of legs",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Leg Attempts Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"access_type_id.description": ["4G", "MW"],
						"interface_id.interface": ["ISC", "Mw"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "ASR by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_asr&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_asr",
					"description": "answer-seizure ratio",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg ASR (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "NER by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_ner&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_ner",
					"description": "network error rate",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg NER (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 0,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Dropped Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_dropped_rate&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_dropped_rate",
					"description": "Ratio of (Number of Dropped Legs/ Total Number of Legs Answered), expressed as percentage",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Failure Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=to_access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_failed_setup_rate&groupingDimensions=to_access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=to_access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "to_access_type_id",
						"displayName": "To Access Type",
						"description": "To Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_failed_setup_rate",
					"description": "Number of legs that succesfully reach the ringing state divided by the total number of legs",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Failed Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 6,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "PDD by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_average_pdd&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_average_pdd",
					"description": "average PDD",
					"unit": "msec",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "Call Leg Average PDD (msec)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Failures by Cause",
				"type": "Pie Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "6",
					"currentGroupDimension": "&groupingDimensions=protocol_error_id.reason",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_failed_setup_volume&groupingDimensions=protocol_error_id.reason&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=protocol_error_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Pie Chart",
				"chartCode": 6,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "protocol_error_id",
						"displayName": "Cause",
						"description": "Causes for both Voice and Mobile",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "reason",
						"propertyDisplayName": "Cause Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_failed_setup_volume",
					"description": "Number of Legs that failedly reach the ringing state",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Call Leg Failed Setup Volume",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 6,
				"sizeY": 6,
				"row": 6,
				"col": 18,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Worst NE - ASR",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_asr&groupingDimensions=network_element_b_id.name&sortBy=leg_asr&limit=25&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_asr",
					"description": "answer-seizure ratio",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg ASR (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 12,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "leg_asr",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Worst NE - Dropped Rate",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_dropped_rate&groupingDimensions=network_element_b_id.name&sortBy=-leg_dropped_rate&limit=25&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_dropped_rate",
					"description": "Ratio of (Number of Dropped Legs/ Total Number of Legs Answered), expressed as percentage",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 12,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-leg_dropped_rate",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Worst NE - Failure Rate",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_failed_setup_rate&groupingDimensions=network_element_b_id.name&sortBy=-leg_failed_setup_rate&limit=25&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_failed_setup_rate",
					"description": "Number of legs that succesfully reach the ringing state divided by the total number of legs",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Failed Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 12,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-leg_failed_setup_rate",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Worst NE - Setup Rate",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=leg_successful_setup_rate&groupingDimensions=network_element_b_id.name&sortBy=leg_successful_setup_rate&limit=25&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_successful_setup_rate",
					"description": "Number of legs that succesfully reach the ringing state divided by the total number of legs",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Successful Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 18,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "leg_successful_setup_rate",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Worst NE - MOS",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=sip_average_call_mos&groupingDimensions=network_element_b_id.name&sortBy=sip_average_call_mos&limit=25&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "sip_average_call_mos",
					"description": "Average MOS from associated end to end call",
					"unit": "mos",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "SIP Average Call MOS (mos)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 18,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "sip_average_call_mos",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Worst NE - Jitter",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=sip_average_call_jitter&groupingDimensions=network_element_b_id.name&sortBy=-sip_average_call_jitter&limit=25&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "sip_average_call_jitter",
					"description": "Average Jitter from associated end to end call",
					"unit": "timestamp",
					"aggregationType": "avg",
					"metricsType": "KPI",
					"displayName": "SIP Average Call Jitter (timestamp)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 18,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "-sip_average_call_jitter",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Weekly Trend - ASR",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-11T10:48:27&toTime=2021-05-18T10:48:27&inputGranularity=DAILY&metrics=leg_asr&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_asr",
					"description": "answer-seizure ratio",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg ASR (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 24,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-04T00:00:00+01:00",
						"toDate": "2021-03-11T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Weekly Trend - NER",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-11T10:48:27&toTime=2021-05-18T10:48:27&inputGranularity=DAILY&metrics=leg_ner&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_ner",
					"description": "network error rate",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg NER (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 24,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T00:00:00+02:00",
						"toDate": "2021-04-29T00:00:00+02:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Weekly Trend - Dropped Rate",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-11T10:48:27&toTime=2021-05-18T10:48:27&inputGranularity=DAILY&metrics=leg_dropped_rate&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_dropped_rate",
					"description": "Ratio of (Number of Dropped Legs/ Total Number of Legs Answered), expressed as percentage",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Dropped Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 30,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "SIP  Analysis - Weekly Trend - Failure Rate",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-11T10:48:27&toTime=2021-05-18T10:48:27&inputGranularity=DAILY&metrics=leg_failed_setup_rate&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP%5BAND%5Dinterface_id.description=ISC,Mw%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "leg_failed_setup_rate",
					"description": "Number of legs that succesfully reach the ringing state divided by the total number of legs",
					"unit": "%",
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Call Leg Failed Setup Rate (%)",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 12,
				"sizeY": 6,
				"row": 30,
				"col": 12,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 2,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP"],
						"interface_id.description": ["ISC", "Mw"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-01T00:00:00+01:00",
						"toDate": "2021-03-08T00:00:00+01:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Volumes by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=procedure_count&groupingDimensions=access_type_id.description,time&dimensionFilter=access_type_id.description=4G,MW%5BAND%5Dprotocol_id.description=SIP TRANSACTIONS%5BAND%5Dprocedure_id.description=Register&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "procedure_count",
					"description": "Count of number of procedures",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Procedure Count",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G", "MW"],
						"protocol_id.description": ["SIP TRANSACTIONS"],
						"procedure_id.description": ["Register"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Success Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=successful_procedure_rate&groupingDimensions=access_type_id.description,time&dimensionFilter=procedure_id.description=Register%5BAND%5Dprotocol_id.description=SIP TRANSACTIONS%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "successful_procedure_rate",
					"description": "Percentage value indicating the success ratio between the number of successful procedures and the total number of procedures",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Successful Procedure Rate",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"procedure_id.description": ["Register"],
						"protocol_id.description": ["SIP TRANSACTIONS"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Worst NE - Success Rate",
				"type": "Horizontal Bar Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "8",
					"currentGroupDimension": "&groupingDimensions=network_element_b_id.name",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=successful_procedure_rate&groupingDimensions=network_element_b_id.name&sortBy=successful_procedure_rate&limit=25&dimensionFilter=access_type_id.description=4G,MW%5BAND%5Dprotocol_id.description=SIP TRANSACTIONS%5BAND%5Dprocedure_id.description=Register&excludeReservedDimensions=network_element_b_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Horizontal Bar Chart",
				"chartCode": 8,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "network_element_b_id",
						"displayName": "Target Network Element",
						"description": "Network Element representing target",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "name",
						"propertyDisplayName": "Network Element Name",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "successful_procedure_rate",
					"description": "Percentage value indicating the success ratio between the number of successful procedures and the total number of procedures",
					"unit": null,
					"aggregationType": "ratio",
					"metricsType": "KPI",
					"displayName": "Successful Procedure Rate",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 0,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"access_type_id.description": ["4G", "MW"],
						"protocol_id.description": ["SIP TRANSACTIONS"],
						"procedure_id.description": ["Register"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": "successful_procedure_rate",
				"top": 25,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend-  Success Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-11T10:48:27&toTime=2021-05-18T10:48:27&inputGranularity=DAILY&metrics=procedure_count&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP TRANSACTIONS%5BAND%5Dprocedure_id.description=Register%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "procedure_count",
					"description": "Count of number of procedures",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Procedure Count",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": {
						"critical": false,
						"major": false,
						"minor": false,
						"warning": false,
						"clear": false
					}
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 0,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP TRANSACTIONS"],
						"procedure_id.description": ["Register"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": "Registration Analysis -  Weekly Trend-  Success Rate by Time16148588535588KXDE",
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-03-23T00:00:00+01:00",
						"toDate": "2021-03-30T00:00:00+02:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Weekly Trend-  Failure Rate by Time",
				"type": "Line Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "3",
					"currentGroupDimension": "&groupingDimensions=access_type_id.description,time",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-11T10:48:27&toTime=2021-05-18T10:48:27&inputGranularity=DAILY&metrics=successful_procedure_count&groupingDimensions=access_type_id.description,time&dimensionFilter=protocol_id.description=SIP TRANSACTIONS%5BAND%5Dprocedure_id.description=Register%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=access_type_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Line Chart",
				"chartCode": 3,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "access_type_id",
						"displayName": "Access Type",
						"description": "Access Type",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "description",
						"propertyDisplayName": "Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "successful_procedure_count",
					"description": "Count of number of successful procedures",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Successful Procedure Count",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 8,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": true,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP TRANSACTIONS"],
						"procedure_id.description": ["Register"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": {
					"range": {
						"enable": false,
						"fromDate": "2021-04-22T00:00:00+02:00",
						"toDate": "2021-04-29T00:00:00+02:00"
					},
					"last": {
						"enable": true,
						"time": {
							"display": "Weeks",
							"value": 1
						}
					},
					"customLast": {
						"enable": false,
						"time": {
							"display": "days",
							"value": 1
						}
					},
					"agingPeriod": "DAILY",
					"sinceMidNightChecked": false,
					"refreshActualsAutomatically": false,
					"serviceUrlParams": null,
					"selectedDimensionProperites": null,
					"timezone": null,
					"promptFilters": null
				},
				"customTimeRangeEnabled": true,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}, {
				"id": 0,
				"name": "Failure  Volume by Cause",
				"type": "Pie Chart",
				"showLED": false,
				"titleEnabled": "true",
				"subtitleEnabled": "false",
				"pdfGenDataObj": {
					"currentChartType": "6",
					"currentGroupDimension": "&groupingDimensions=protocol_error_id.reason",
					"currentQuery": ["/mediation-reports/aggregators/ims_network_aggregator/metricValues?fromTime=2021-05-17T10:30:00&toTime=2021-05-18T10:30:00&inputGranularity=HOURLY&metrics=failed_procedure_count&groupingDimensions=protocol_error_id.reason&dimensionFilter=protocol_id.description=SIP TRANSACTIONS%5BAND%5Dprocedure_id.description=Register%5BAND%5Daccess_type_id.description=4G,MW&excludeReservedDimensions=protocol_error_id"],
					"isSecondaryDashboard": null,
					"isDefaultView": null,
					"parentManagedObject": null
				},
				"chartType": "Pie Chart",
				"chartCode": 6,
				"dualGrouping": false,
				"groupingDimension": [{
					"dimensionInfoId": 0,
					"dimension": {
						"dimensionName": "protocol_error_id",
						"displayName": "Cause",
						"description": "Causes for both Voice and Mobile",
						"rootDimension": null,
						"groupBy": "ims_network_aggregator"
					},
					"dimensionPropertyList": [{
						"propertyName": "reason",
						"propertyDisplayName": "Cause Description",
						"propertyValues": null,
						"enableThreshold": false,
						"userDisplayName": null
					}]
				}],
				"metricsList": [{
					"metricsName": "failed_procedure_count",
					"description": "Count of number of failed procedures",
					"unit": null,
					"aggregationType": "count",
					"metricsType": "KPI",
					"displayName": "Failed Procedure Count",
					"userDisplayName": null,
					"advancedMetric": false,
					"groupBy": "ims_network_aggregator",
					"threshold": null
				}],
				"toolTipThreshold": 0.0,
				"isEnabled": false,
				"customViewId": 0,
				"customViewName": null,
				"enableThreshold": false,
				"includeNotEnriched": false,
				"sizeX": 8,
				"sizeY": 6,
				"row": 6,
				"col": 16,
				"leftAxis": null,
				"rightAxis": null,
				"overtime": false,
				"halfRound": false,
				"defaultTableColumnsOrder": null,
				"sortedColumns": null,
				"hiddenColumns": null,
				"columnOrder": null,
				"columnFilters": null,
				"stackedEnabled": false,
				"tabIndex": 3,
				"customFilters": {
					"enabled": true,
					"selectedDimensionProperties": {
						"protocol_id.description": ["SIP TRANSACTIONS"],
						"procedure_id.description": ["Register"],
						"access_type_id.description": ["4G", "MW"]
					}
				},
				"customDimensionsFilters": null,
				"isLinkDisabled": null,
				"linkedId": null,
				"parentId": null,
				"hashKey": null,
				"linkedDimensions": null,
				"identifier": null,
				"linkedTabs": null,
				"labelText": null,
				"filter": null,
				"customTimeRangeEnabled": false,
				"sortBy": null,
				"top": null,
				"targetDashboard": {
					"perspectiveName": "IMS",
					"perspectiveType": "dor",
					"perspectiveTypeLabel": "Diagnostix Operational Report"
				},
				"serviceModelNodes": null,
				"sourceType": "Aggregation Table",
				"aggregationTable": "ims_network_aggregator",
				"alarmingConfigData": null,
				"subtitle": null,
				"isSecondaryDashboard": null,
				"isTimeGrouping": false,
				"valueType": null,
				"viewBoxTrend": false,
				"hideEmptyValues": false,
				"enableLightMode": false,
				"isKIValuesTable": null
			}]
		},
		"tabsList": [{
			"name": "Diameter Analysis",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}, {
			"name": "SIP Analysis",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}, {
			"name": "SIP Registration",
			"linkedParent": null,
			"linkedTooltip": null,
			"availableFilters": null
		}],
		"defaultReport": true,
		"alarmLevels": null,
		"favorite": false,
		"type": "CHARTS"
	}],
	"workflowList": [],
	"filters": [],
	"promptFilters": [{
		"aggregator": "ims_network_aggregator",
		"filter": {
			"group_ids.group_name": []
		}
	}, {
		"aggregator": "devices_aggregator",
		"filter": {
			"group_ids.group_name": []
		}
	}, {
		"aggregator": "location_aggregator",
		"filter": {
			"group_ids.group_name": []
		}
	}, {
		"aggregator": "aaa_network_aggregator",
		"filter": {
			"group_ids.group_name": []
		}
	}]
};

perspectiveSelectedByUser.solutionPackages = [];
const result = [];
    
for (let i = 0; i < perspectives.length; i++) {
  const perspectiveSps = perspectives[i].solutionPackages || [];
  const currentSps = perspectiveSelectedByUser.solutionPackages;

  const commonSps = perspectiveSps.filter((p) => currentSps.indexOf(p) !== -1);

//   console.log('commonSps',commonSps);
  if (commonSps.length > 0 || currentSps.length === 0)
    result.push(perspectives[i]);
}

drilldownPerspectivesList = result.slice();

console.log('perspectives',perspectives);
console.log('perspectiveSelectedByUser',perspectiveSelectedByUser.solutionPackages);
console.log('drilldownPerspectivesList',drilldownPerspectivesList);