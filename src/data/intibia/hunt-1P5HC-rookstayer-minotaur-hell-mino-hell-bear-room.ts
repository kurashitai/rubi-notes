// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "1P5HC",
  "type": "Hunt",
  "title": "Mino Hell + Bear Room",
  "vocation": "no_vocation",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTQzL0l6Z1M5RkhYLTMucG5nIn0=",
  "minLevel": 20,
  "maxLevel": 300,
  "minProfitH": 1000,
  "maxProfitH": 3000,
  "minXpH": 12000,
  "maxXpH": 15000,
  "upvoteCount": 1,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1053,
    "type": "User",
    "username": "DogsGuerre",
    "avatar": "orc",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "sXDqono-wgw",
  "videoStartAt": null,
  "centerCoordinates": "32129,32062,12",
  "instructions": "<p><strong>The best free account hunt in Rookgaard!</strong></p>\n<p></p>\n<p>Minotaurs drop Mino Leathers, the best item for Rookers, also you can find the boss Apprentice Sheng that drops nice items.</p>\n<p></p>\n<p>🍖 Wolves and Orcs will help you dropping food, so you just need to carry Small Health Potions. 😄&nbsp;</p>\n<p></p>\n<p>The route is <strong>Mino Hell &gt;&gt; Bear Room Area &gt;&gt; Mino Hell</strong>.</p>\n<p></p>\n<p>The only \"problem\" of this hunt is that it's the best one. So frequently you will see people hunting there OR even training skills on Minotaurs.</p>",
  "createdAt": "2022-01-04T19:17:29.624Z",
  "updatedAt": "2024-03-17T23:17:20.760Z",
  "dungeon": {
    "id": 4,
    "type": "Dungeon",
    "title": "Minotaur Hell",
    "accountStatus": "free",
    "entranceCoordinates": "32134,32065,11",
    "entranceDirections": "{\"blocks\":[{\"key\":\"3j8u4\",\"text\":\"Minotaur Hell is located in the depths of the main Rookgaard cave. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"alet2\",\"text\":\"Enter the main cave, [map c=\\\"32094,32137,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c08t5\",\"text\":\"Go to the east and go down the hole, [map c=\\\"32126,32124,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cvisn\",\"text\":\"Go to the north and go down the hole, [map c=\\\"32114,32092,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3ng7r\",\"text\":\"Pass through the labyrinth and go down, [map c=\\\"32123,32050,10\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2ot4a\",\"text\":\"Walk to the south-east and go down, [map c=\\\"32134,32065,11\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 1,
      "type": "City",
      "name": "Rookgaard"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1106,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 17,
          "type": "Creature",
          "title": "Minotaur",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 50,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1ci5naWYifQ=="
        },
        {
          "id": 13,
          "type": "Creature",
          "title": "Orc",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 25,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmMuZ2lmIn0="
        },
        {
          "id": 32,
          "type": "Creature",
          "title": "Wolf",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 18,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb2xmLmdpZiJ9"
        }
      ]
    },
    {
      "id": 1107,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 17,
          "type": "Creature",
          "title": "Minotaur",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 50,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1ci5naWYifQ=="
        },
        {
          "id": 32,
          "type": "Creature",
          "title": "Wolf",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 18,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb2xmLmdpZiJ9"
        }
      ]
    },
    {
      "id": 1108,
      "type": "DungeonSection",
      "name": "Bosses",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 225,
          "type": "Creature",
          "title": "Apprentice Sheng",
          "formerNames": null,
          "healthPoints": 95,
          "xpPoints": 150,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BcHByZW50aWNlX1NoZW5nLmdpZiJ9"
        }
      ]
    },
    {
      "id": 1105,
      "type": "DungeonSection",
      "name": "Labyrinth",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 13,
          "type": "Creature",
          "title": "Orc",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 25,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmMuZ2lmIn0="
        },
        {
          "id": 32,
          "type": "Creature",
          "title": "Wolf",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 18,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb2xmLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 161,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 150,
      "percentage": 0.09,
      "isInestimable": false,
      "item": {
        "id": 1553,
        "type": "Item",
        "title": "Orc Tooth",
        "pluralizedTitle": "Orc Tooths",
        "formerNames": null,
        "minValue": 150,
        "maxValue": null,
        "npcBuyValue": 150,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09yY19Ub290aC5naWYifQ=="
      }
    },
    {
      "id": 177,
      "type": "Loot",
      "min": 1,
      "max": 2,
      "value": 150,
      "percentage": 2.02,
      "isInestimable": false,
      "item": {
        "id": 1778,
        "type": "Item",
        "title": "Minotaur Horn",
        "pluralizedTitle": "Minotaur Horns",
        "formerNames": null,
        "minValue": 75,
        "maxValue": null,
        "npcBuyValue": 75,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01pbm90YXVyX0hvcm4uZ2lmIn0="
      }
    },
    {
      "id": 178,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 80,
      "percentage": 1.01,
      "isInestimable": false,
      "item": {
        "id": 659,
        "type": "Item",
        "title": "Minotaur Leather",
        "pluralizedTitle": "Minotaur Leathers",
        "formerNames": null,
        "minValue": 80,
        "maxValue": 500,
        "npcBuyValue": 80,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01pbm90YXVyX0xlYXRoZXIuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 110,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 79,
        "type": "DungeonRequiredItem",
        "dungeonId": 4,
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
      "huntId": 143
    },
    {
      "id": 111,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 80,
        "type": "DungeonRequiredItem",
        "dungeonId": 4,
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
      "huntId": 143
    },
    {
      "id": 112,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 83,
        "type": "DungeonRequiredItem",
        "dungeonId": 4,
        "requiredItem": {
          "id": 9,
          "type": "RequiredItem",
          "item": {
            "id": 10,
            "type": "Item",
            "title": "Pick",
            "pluralizedTitle": "Picks",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1BpY2suZ2lmIn0="
          }
        }
      },
      "huntId": 143
    },
    {
      "id": 113,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 84,
        "type": "DungeonRequiredItem",
        "dungeonId": 4,
        "requiredItem": {
          "id": 30,
          "type": "RequiredItem",
          "item": {
            "id": 428,
            "type": "Item",
            "title": "Key 4601",
            "pluralizedTitle": "Key 4601s",
            "formerNames": "Bear Room Key",
            "image": null
          }
        }
      },
      "huntId": 143
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 569,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "no_vocation",
      "supply": {
        "id": 1,
        "type": "Supply",
        "item": {
          "id": 1117,
          "type": "Item",
          "title": "Small Health Potion",
          "pluralizedTitle": "Small Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-06T04:34:15.898Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-06T04:34:15.868Z",
  "youtubeChannel": {
    "id": 57,
    "type": "YoutubeChannel",
    "name": "BoomerHD",
    "youtubeId": "UCimG1yXT0z6tAbZBHm-chyA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
