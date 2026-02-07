// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "xDj9f",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTk1L0kwazhRdVdSLTUtR2xvb3RoX1Rvd2VyLW1pbi5wbmcifQ==",
  "minLevel": 300,
  "maxLevel": 600,
  "minProfitH": 100000,
  "maxProfitH": 400000,
  "minXpH": 1600000,
  "maxXpH": 2100000,
  "upvoteCount": 7,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 209,
    "type": "User",
    "username": "Icarouo",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": "guard"
  },
  "videoId": "K5fKWfWIxLg",
  "videoStartAt": 14,
  "centerCoordinates": "33549,31930,7",
  "instructions": "<p>If you're not sure you can handle a box, try to kill against the wall.<br>\n<br>\nIf you already have a certain level, just go to the center of each room and close the box.</p>\n<p></p>\n<p>Dodge on glooth golem for lower income damage.</p>\n<p></p>\n<p>Energy or Physical damage weapons for hunt here.</p>",
  "createdAt": "2022-01-16T17:08:13.248Z",
  "updatedAt": "2024-03-18T00:07:09.116Z",
  "dungeon": {
    "id": 446,
    "type": "Dungeon",
    "title": "Glooth Tower",
    "accountStatus": "premium",
    "entranceCoordinates": "33549,31930,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"86oia\",\"text\":\"Glooth Tower is located west of Rathleton. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"36g6i\",\"text\":\"Levitate down, [map c=\\\"33572,31915,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fbrvi\",\"text\":\"Cross the bridge, [map c=\\\"33562,31916,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2bnq5\",\"text\":\"Go up the tower, [map c=\\\"33556,31921,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 14,
      "type": "City",
      "name": "Rathleton"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1516,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 868,
          "type": "Creature",
          "title": "Rustheap Golem",
          "formerNames": null,
          "healthPoints": 2800,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SdXN0aGVhcF9Hb2xlbS5naWYifQ=="
        },
        {
          "id": 866,
          "type": "Creature",
          "title": "Devourer",
          "formerNames": null,
          "healthPoints": 1900,
          "xpPoints": 1755,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZXZvdXJlci5naWYifQ=="
        },
        {
          "id": 871,
          "type": "Creature",
          "title": "Glooth Golem",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 1606,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HbG9vdGhfR29sZW0uZ2lmIn0="
        },
        {
          "id": 869,
          "type": "Creature",
          "title": "Rot Elemental",
          "formerNames": null,
          "healthPoints": 850,
          "xpPoints": 750,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Sb3RfRWxlbWVudGFsLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 7543,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.98,
      "isInestimable": false,
      "item": {
        "id": 2716,
        "type": "Item",
        "title": "Rubber Cap",
        "pluralizedTitle": "Rubber Caps",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": null,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1J1YmJlcl9DYXAuZ2lmIn0="
      }
    },
    {
      "id": 7539,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 1.52,
      "isInestimable": false,
      "item": {
        "id": 2715,
        "type": "Item",
        "title": "Heat Core",
        "pluralizedTitle": "Heat Cores",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": null,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hlYXRfQ29yZS5naWYifQ=="
      }
    },
    {
      "id": 7495,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 9000,
      "percentage": 0.91,
      "isInestimable": false,
      "item": {
        "id": 2714,
        "type": "Item",
        "title": "Metal Bat",
        "pluralizedTitle": "Metal Bats",
        "formerNames": null,
        "minValue": 9000,
        "maxValue": null,
        "npcBuyValue": 9000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01ldGFsX0JhdC5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 754,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "knight",
      "supply": {
        "id": 8,
        "type": "Supply",
        "item": {
          "id": 970,
          "type": "Item",
          "title": "Strong Mana Potion",
          "pluralizedTitle": "Strong Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19NYW5hX1BvdGlvbi5naWYifQ=="
        }
      }
    },
    {
      "id": 755,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "knight",
      "supply": {
        "id": 6,
        "type": "Supply",
        "item": {
          "id": 3058,
          "type": "Item",
          "title": "Supreme Health Potion",
          "pluralizedTitle": "Supreme Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N1cHJlbWVfSGVhbHRoX1BvdGlvbi5naWYifQ=="
        }
      }
    },
    {
      "id": 756,
      "type": "HuntSupply",
      "quantity": 550,
      "vocation": "knight",
      "supply": {
        "id": 5,
        "type": "Supply",
        "item": {
          "id": 1062,
          "type": "Item",
          "title": "Ultimate Health Potion",
          "pluralizedTitle": "Ultimate Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-07-02T16:34:56.003Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-07-02T16:34:55.939Z",
  "youtubeChannel": {
    "id": 43,
    "type": "YoutubeChannel",
    "name": "Icarouou",
    "youtubeId": "UCzya2oco3fcaBOtnn1-Bl4A",
    "verifiedAt": "Thu Dec 09 2021 16:34:11 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 209,
      "type": "User",
      "username": "Icarouo",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": "guard"
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
