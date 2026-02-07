// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "SFGcT",
  "type": "Hunt",
  "title": "Mino Hell + Spiders Cave",
  "vocation": "no_vocation",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTQxL2pHR3ZhSHp1LVNGR2NULW1pbi5wbmcifQ==",
  "minLevel": 70,
  "maxLevel": 300,
  "minProfitH": 1000,
  "maxProfitH": 3000,
  "minXpH": 15000,
  "maxXpH": 20000,
  "upvoteCount": 0,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
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
  "videoId": "Gol-G99lp78",
  "videoStartAt": null,
  "centerCoordinates": "32134,32065,11",
  "instructions": "<p>⚡️ This is <strong>ONLY for high level Rookers</strong> because you <strong>need to run fast</strong> to keep high xp/hour.&nbsp;</p>\n<p></p>\n<p>The route is basically <strong>Mino Hell &gt; Spiders Cave &gt; Mino Hell.</strong></p>",
  "createdAt": "2022-01-04T19:03:44.403Z",
  "updatedAt": "2024-03-18T00:02:49.764Z",
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
    },
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
    }
  ],
  "notableLoots": [
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
      "id": 106,
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
      "huntId": 141
    },
    {
      "id": 107,
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
      "huntId": 141
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 566,
      "type": "HuntSupply",
      "quantity": 15,
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
    },
    {
      "id": 567,
      "type": "HuntSupply",
      "quantity": 300,
      "vocation": "no_vocation",
      "supply": {
        "id": 68,
        "type": "Supply",
        "item": {
          "id": 63,
          "type": "Item",
          "title": "Egg",
          "pluralizedTitle": "Eggs",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VnZy5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-08T13:35:59.874Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T13:35:59.845Z",
  "youtubeChannel": {
    "id": 59,
    "type": "YoutubeChannel",
    "name": "MDN Productions",
    "youtubeId": "UC1EfXC1cAKwUGbMSf-FcW-w",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
