// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Od9F9",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTE4L3BDQTdaTjdOLTI0LU5vbWFkX0NhdmUtbWluLnBuZyJ9",
  "minLevel": 15,
  "maxLevel": 50,
  "minProfitH": 30000,
  "maxProfitH": 40000,
  "minXpH": 15000,
  "maxXpH": 20000,
  "upvoteCount": 11,
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
  "videoId": "vXDcm6duoXs",
  "videoStartAt": 13,
  "centerCoordinates": "33229,32514,8",
  "instructions": "<p>One of the best places to profit on low level 💰. You will loot rope belts, an item to make imbuements that's very demanded in the market.</p>\n<p></p>\n<p>Just lure a few nomads and attack with your weapon.</p>",
  "createdAt": "2021-12-09T00:47:44.052Z",
  "updatedAt": "2024-03-17T23:20:27.990Z",
  "dungeon": {
    "id": 97,
    "type": "Dungeon",
    "title": "Nomad Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "33205,32544,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"d1g15\",\"text\":\"Nomad Cave is located below the mountain pass between Darashia and Ankrahmun. After starting Arito's Task you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":93,\"length\":12,\"key\":0}],\"data\":{}},{\"key\":\"c86ed\",\"text\":\"Walk to the north of the Ankrahmun desert and go up [map c=\\\"33205,32544,7\\\" map]this ladder[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"538j7\",\"text\":\"Use a scimitar in the cracked floor and throw water two sqms to the right.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6ssdb\",\"text\":\"This will open the dungeon, then go down and enter the teleport.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6jqne\",\"text\":\"If you completed Nomads Land Quest you can enter through the secret entrance. Just open the hidden hole and enter, [map c=\\\"33214,32552,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":17,\"length\":17,\"key\":1}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/Tibia_Tales_Quest\",\"title\":\"Tibia Tales Quest\",\"url\":\"https://tibia.fandom.com/wiki/Tibia_Tales_Quest\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Nomads_Land_Quest\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 7,
      "type": "City",
      "name": "Ankrahmun"
    }
  },
  "requirements": [
    {
      "id": 193,
      "type": "DungeonRequirement",
      "dungeonId": 97,
      "description": "Must have started Arito's Task Quest",
      "link": "https://tibia.fandom.com/wiki/Arito%27s_Task_Quest"
    }
  ],
  "sections": [
    {
      "id": 97,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 161,
          "type": "Creature",
          "title": "Carrion Worm",
          "formerNames": null,
          "healthPoints": 145,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DYXJyaW9uX1dvcm0uZ2lmIn0="
        },
        {
          "id": 222,
          "type": "Creature",
          "title": "Nomad (Basic)",
          "formerNames": "nomad",
          "healthPoints": 160,
          "xpPoints": 60,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ob21hZF9fMjhCYXNpY18yOS5naWYifQ=="
        },
        {
          "id": 55,
          "type": "Creature",
          "title": "Scorpion",
          "formerNames": null,
          "healthPoints": 45,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY29ycGlvbi5naWYifQ=="
        },
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
      "id": 2448,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1000,
      "percentage": 0.21,
      "isInestimable": false,
      "item": {
        "id": 996,
        "type": "Item",
        "title": "Nomad Parchment",
        "pluralizedTitle": "Nomad Parchments",
        "formerNames": null,
        "minValue": 1000,
        "maxValue": 5000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL05vbWFkX1BhcmNobWVudC5naWYifQ=="
      }
    },
    {
      "id": 2443,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 150,
      "percentage": 2.45,
      "isInestimable": false,
      "item": {
        "id": 53,
        "type": "Item",
        "title": "Brass Armor",
        "pluralizedTitle": "Brass Armors",
        "formerNames": null,
        "minValue": 150,
        "maxValue": null,
        "npcBuyValue": 150,
        "npcSellValue": 450,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JyYXNzX0FybW9yLmdpZiJ9"
      }
    },
    {
      "id": 2447,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 150,
      "percentage": 0.59,
      "isInestimable": false,
      "item": {
        "id": 94,
        "type": "Item",
        "title": "Iron Helmet",
        "pluralizedTitle": "Iron Helmets",
        "formerNames": null,
        "minValue": 150,
        "maxValue": null,
        "npcBuyValue": 150,
        "npcSellValue": 390,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0lyb25fSGVsbWV0LmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 91,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 70,
        "type": "DungeonRequiredItem",
        "dungeonId": 97,
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
      "huntId": 118
    },
    {
      "id": 92,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 71,
        "type": "DungeonRequiredItem",
        "dungeonId": 97,
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
      "huntId": 118
    }
  ],
  "huntRequirements": [
    {
      "id": 125,
      "type": "HuntRequirement",
      "huntId": 118,
      "dungeonRequirement": {
        "id": 193,
        "type": "DungeonRequirement",
        "dungeonId": 97,
        "description": "Must have started Arito's Task Quest",
        "link": "https://tibia.fandom.com/wiki/Arito%27s_Task_Quest"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 480,
      "type": "HuntSupply",
      "quantity": 20,
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
    },
    {
      "id": 481,
      "type": "HuntSupply",
      "quantity": 5,
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
    }
  ],
  "lootUpdatedAt": "2021-12-12T13:26:31.063Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-12T13:26:31.039Z",
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
