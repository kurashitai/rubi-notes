// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Wk9mF",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMjgvYUNrTTN1U0QtbWlzdHJvY2stcGFsYWRpbi5wbmcifQ==",
  "minLevel": 25,
  "maxLevel": 50,
  "minProfitH": 0,
  "maxProfitH": 3000,
  "minXpH": 45000,
  "maxXpH": 60000,
  "upvoteCount": 5,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 6,
    "type": "User",
    "username": "V4SK",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "Po13uqlTgnY",
  "videoStartAt": null,
  "centerCoordinates": "32588,31438,7",
  "instructions": "<p>Good hunt for low level paladins. It's a 3-floor mountain, full of cyclops, so there is no big problem if someone else is hunting there too.</p>\n<p></p>\n<p>The best way to experience here is clearing each floor and going up.</p>\n<p></p>\n<p>Lure the creatures while you are walking to the next floor. Try to be always attacking a creature.</p>\n<p></p>\n<p>💍 In case of danger, use a stealth ring so the cyclops can't see you. Stealth rings are 10 minutes long.</p>",
  "createdAt": "2021-11-10T02:01:40.598Z",
  "updatedAt": "2024-03-18T00:11:42.617Z",
  "dungeon": {
    "id": 130,
    "type": "Dungeon",
    "title": "Mistrock",
    "accountStatus": "premium",
    "entranceCoordinates": "32588,31438,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"6hkj4\",\"text\":\"Mistrock is an isolated island south-west of Yalahar.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":9,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4k7dk\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"35tod\",\"text\":\"You can get there via NPC Maris [map c=\\\"32648,31293,6\\\" map](here)[/map]. His boat is located at the docks in the Foreigner Quarter, and the ticket costs 100 gp. To get to Foreigner Quarter cross the mountain first, [map c=\\\"32758,31248,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": true,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 17,
      "type": "City",
      "name": "Yalahar"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 130,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 304,
          "type": "Creature",
          "title": "Cyclops Smith",
          "formerNames": null,
          "healthPoints": 435,
          "xpPoints": 255,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzX1NtaXRoLmdpZiJ9"
        },
        {
          "id": 303,
          "type": "Creature",
          "title": "Cyclops Drone",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzX0Ryb25lLmdpZiJ9"
        },
        {
          "id": 160,
          "type": "Creature",
          "title": "Blood Crab",
          "formerNames": null,
          "healthPoints": 290,
          "xpPoints": 160,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbG9vZF9DcmFiLmdpZiJ9"
        },
        {
          "id": 31,
          "type": "Creature",
          "title": "Cyclops",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 2943,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.13,
      "isInestimable": false,
      "item": {
        "id": 882,
        "type": "Item",
        "title": "Spiked Squelcher",
        "pluralizedTitle": "Spiked Squelchers",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwaWtlZF9TcXVlbGNoZXIuZ2lmIn0="
      }
    },
    {
      "id": 2930,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 500,
      "percentage": 0.12,
      "isInestimable": false,
      "item": {
        "id": 749,
        "type": "Item",
        "title": "Cyclops Trophy",
        "pluralizedTitle": "Cyclops Trophies",
        "formerNames": null,
        "minValue": 500,
        "maxValue": 500,
        "npcBuyValue": 500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0N5Y2xvcHNfVHJvcGh5LmdpZiJ9"
      }
    },
    {
      "id": 2927,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 400,
      "percentage": 0.68,
      "isInestimable": false,
      "item": {
        "id": 231,
        "type": "Item",
        "title": "Halberd",
        "pluralizedTitle": "Halberds",
        "formerNames": null,
        "minValue": 400,
        "maxValue": null,
        "npcBuyValue": 400,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hhbGJlcmQuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 444,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "paladin",
      "supply": {
        "id": 117,
        "type": "Supply",
        "item": {
          "id": 107,
          "type": "Item",
          "title": "Stealth Ring",
          "pluralizedTitle": "Stealth Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWFsdGhfUmluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 445,
      "type": "HuntSupply",
      "quantity": 25,
      "vocation": "paladin",
      "supply": {
        "id": 146,
        "type": "Supply",
        "item": {
          "id": 903,
          "type": "Item",
          "title": "Royal Spear",
          "pluralizedTitle": "Royal Spears",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JveWFsX1NwZWFyLmdpZiJ9"
        }
      }
    },
    {
      "id": 446,
      "type": "HuntSupply",
      "quantity": 40,
      "vocation": "paladin",
      "supply": {
        "id": 7,
        "type": "Supply",
        "item": {
          "id": 977,
          "type": "Item",
          "title": "Mana Potion",
          "pluralizedTitle": "Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hbmFfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 447,
      "type": "HuntSupply",
      "quantity": 35,
      "vocation": "paladin",
      "supply": {
        "id": 3,
        "type": "Supply",
        "item": {
          "id": 972,
          "type": "Item",
          "title": "Strong Health Potion",
          "pluralizedTitle": "Strong Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19IZWFsdGhfUG90aW9uLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:47.879Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-10T02:01:40.598Z",
  "youtubeChannel": {
    "id": 18,
    "type": "YoutubeChannel",
    "name": "Piessi",
    "youtubeId": "UCQVZ_e2VPZn_1WwpR-UvbEw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
