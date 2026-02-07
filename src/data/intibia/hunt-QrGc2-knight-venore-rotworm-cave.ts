// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "QrGc2",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNy9MclRxQlhmNS0wMDIta25pZ2h0LXZlbm9yZS1yb3R3b3JtLWNhdmUucG5nIn0=",
  "minLevel": 8,
  "maxLevel": 20,
  "minProfitH": 1000,
  "maxProfitH": 1500,
  "minXpH": 8000,
  "maxXpH": 12000,
  "upvoteCount": 11,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1,
    "type": "User",
    "username": "warturtle",
    "avatar": "gamemaster",
    "role": "admin",
    "membershipLevel": "counselor"
  },
  "videoId": "YCfjBkatQjw",
  "videoStartAt": null,
  "centerCoordinates": "33109,32104,7",
  "instructions": "<p>Good hunt for free account low level knights (the place is good for every vocation actually).</p>\n<p></p>\n<p>You can do about 10k of xp per hour (15k with green stamina) and up to 1.5k/h of profit.</p>\n<p></p>\n<p>You can come here with any basic set (dawnport, plate set) and a melee weapon ⚔️ .</p>\n<p></p>\n<p>Just heal with \"exura infir ico\" and eat food constantly (which you pick from rotworms 🍖) , there won't be much danger. If you can, bring a few health and mana potions, just for caution.</p>\n<p></p>\n<p>Don't let your mana go full and use spells to train your magic level.</p>",
  "createdAt": "2021-10-27T00:05:29.365Z",
  "updatedAt": "2026-01-15T16:38:56.455Z",
  "dungeon": {
    "id": 440,
    "type": "Dungeon",
    "title": "Venore Rotworm Cave",
    "accountStatus": "free",
    "entranceCoordinates": "33109,32104,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"9qhf7\",\"text\":\"Venore Rotworm Cave is located to the east of Venore swamp and can be easily reached by land.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":19,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"gfkm\",\"text\":\"On Venore, go down [map c=\\\"33004,32095,6\\\" map]this[/map] ladder\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9mo4q\",\"text\":\"Go up the ladder on your right, walk north-east and go down [map c=\\\"33032,32096,6\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"d37d5\",\"text\":\"Walk to the east and cross the bridge, [map c=\\\"33099,32084,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8c95h\",\"text\":\"Open the hole to the right with a shovel and go down, [map c=\\\"33109,32104,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 2,
      "type": "City",
      "name": "Venore"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1494,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 6,
          "type": "Creature",
          "title": "Rotworm",
          "formerNames": null,
          "healthPoints": 65,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Sb3R3b3JtLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 65,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30,
      "percentage": 4.44,
      "isInestimable": false,
      "item": {
        "id": 27,
        "type": "Item",
        "title": "Mace",
        "pluralizedTitle": "Maces",
        "formerNames": null,
        "minValue": 30,
        "maxValue": null,
        "npcBuyValue": 30,
        "npcSellValue": 90,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hY2UuZ2lmIn0="
      }
    },
    {
      "id": 67,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 25,
      "percentage": 3.04,
      "isInestimable": false,
      "item": {
        "id": 26,
        "type": "Item",
        "title": "Sword",
        "pluralizedTitle": "Swords",
        "formerNames": null,
        "minValue": 25,
        "maxValue": null,
        "npcBuyValue": 25,
        "npcSellValue": 85,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N3b3JkLmdpZiJ9"
      }
    },
    {
      "id": 61,
      "type": "Loot",
      "min": 1,
      "max": 17,
      "value": 17,
      "percentage": 71.81,
      "isInestimable": false,
      "item": {
        "id": 95,
        "type": "Item",
        "title": "Gold Coin",
        "pluralizedTitle": "Gold Coins",
        "formerNames": null,
        "minValue": 1,
        "maxValue": null,
        "npcBuyValue": 1,
        "npcSellValue": 1,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dvbGRfQ29pbi5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 5,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 5,
        "type": "DungeonRequiredItem",
        "dungeonId": 440,
        "requiredItem": {
          "id": 11,
          "type": "RequiredItem",
          "item": {
            "id": 116,
            "type": "Item",
            "title": "Rope",
            "pluralizedTitle": "Ropes",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JvcGUuZ2lmIn0="
          }
        }
      },
      "huntId": 7
    },
    {
      "id": 6,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 6,
        "type": "DungeonRequiredItem",
        "dungeonId": 440,
        "requiredItem": {
          "id": 13,
          "type": "RequiredItem",
          "item": {
            "id": 45,
            "type": "Item",
            "title": "Shovel",
            "pluralizedTitle": "Shovels",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Nob3ZlbC5naWYifQ=="
          }
        }
      },
      "huntId": 7
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 12,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "knight",
      "supply": {
        "id": 2,
        "type": "Supply",
        "item": {
          "id": 988,
          "type": "Item",
          "title": "Health Potion",
          "pluralizedTitle": "Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 13,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "knight",
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
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.420Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-10-27T00:05:29.365Z",
  "youtubeChannel": {
    "id": 5,
    "type": "YoutubeChannel",
    "name": "Roxohq",
    "youtubeId": "UCcXMIROWzfN2w8PR9B-aClA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
