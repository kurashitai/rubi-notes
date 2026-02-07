// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "cMkti",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTk2L1lRMlRqaFphLTEtVGhlX0hpdmUtbWluLnBuZyJ9",
  "minLevel": 200,
  "maxLevel": 300,
  "minProfitH": 200000,
  "maxProfitH": 300000,
  "minXpH": 1000000,
  "maxXpH": 1300000,
  "upvoteCount": 15,
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
  "videoId": "E53-_hrVN38",
  "videoStartAt": 14,
  "centerCoordinates": "33519,31209,7",
  "instructions": "<p>Use an ice weapon, all creatures here are weak or neutral to ice.</p>\n<p></p>\n<p>There's not much of a secret, just lure the creatures and kill them. The hunt has several floors, the higher it is, the greater the amount of creatures, so be careful.</p>",
  "createdAt": "2022-01-16T17:36:12.688Z",
  "updatedAt": "2024-03-17T21:09:20.275Z",
  "dungeon": {
    "id": 437,
    "type": "Dungeon",
    "title": "The Hive",
    "accountStatus": "premium",
    "entranceCoordinates": "33520,31267,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"7qm3p\",\"text\":\"Travel to Gray Island from Ab'Dendriel, Edron, Venore, or Darashia\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dva0h\",\"text\":\"Go down the hole, walk to the east and step on the water vortex\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1ku8\",\"text\":\"Go up one floor and cross the bridge [map c=\\\"33460,31308,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"706r1\",\"text\":\"Walk to The Hive, [map c=\\\"33520,31267,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 11,
      "type": "City",
      "name": "Gray Beach"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1353,
      "type": "DungeonSection",
      "name": "Upper floors",
      "position": 2,
      "groupName": "Inside hive",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 676,
          "type": "Creature",
          "title": "Hive Overseer",
          "formerNames": null,
          "healthPoints": 7500,
          "xpPoints": 5500,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IaXZlX092ZXJzZWVyLmdpZiJ9"
        },
        {
          "id": 678,
          "type": "Creature",
          "title": "Spidris Elite",
          "formerNames": null,
          "healthPoints": 5000,
          "xpPoints": 4000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcGlkcmlzX0VsaXRlLmdpZiJ9"
        },
        {
          "id": 671,
          "type": "Creature",
          "title": "Spidris",
          "formerNames": null,
          "healthPoints": 3700,
          "xpPoints": 2600,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcGlkcmlzLmdpZiJ9"
        },
        {
          "id": 670,
          "type": "Creature",
          "title": "Kollos",
          "formerNames": null,
          "healthPoints": 3800,
          "xpPoints": 2400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Lb2xsb3MuZ2lmIn0="
        },
        {
          "id": 669,
          "type": "Creature",
          "title": "Spitter",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 1100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcGl0dGVyLmdpZiJ9"
        },
        {
          "id": 667,
          "type": "Creature",
          "title": "Crawler",
          "formerNames": null,
          "healthPoints": 1450,
          "xpPoints": 1000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmF3bGVyLmdpZiJ9"
        },
        {
          "id": 665,
          "type": "Creature",
          "title": "Waspoid",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 830,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYXNwb2lkLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 5479,
      "type": "Loot",
      "min": 1,
      "max": 2,
      "value": 60000,
      "percentage": 13.04,
      "isInestimable": false,
      "item": {
        "id": 2221,
        "type": "Item",
        "title": "Gooey Mass",
        "pluralizedTitle": "Gooey Masses",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 70000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dvb2V5X01hc3MuZ2lmIn0="
      }
    },
    {
      "id": 5408,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 32000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 2128,
        "type": "Item",
        "title": "Carapace Shield",
        "pluralizedTitle": "Carapace Shields",
        "formerNames": null,
        "minValue": 32000,
        "maxValue": null,
        "npcBuyValue": 32000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NhcmFwYWNlX1NoaWVsZC5naWYifQ=="
      }
    },
    {
      "id": 5486,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.49,
      "isInestimable": false,
      "item": {
        "id": 91,
        "type": "Item",
        "title": "Steel Boots",
        "pluralizedTitle": "Steel Boots",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 40000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWVsX0Jvb3RzLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 757,
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
      "id": 758,
      "type": "HuntSupply",
      "quantity": 130,
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
    },
    {
      "id": 759,
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
    }
  ],
  "lootUpdatedAt": "2022-07-03T14:52:27.604Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-07-03T14:52:27.546Z",
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
