// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "DZ6ue",
  "type": "Hunt",
  "title": "Crocodiles Task",
  "vocation": "knight",
  "teamSize": "solo",
  "image": null,
  "minLevel": 15,
  "maxLevel": 25,
  "minProfitH": 5000,
  "maxProfitH": 10000,
  "minXpH": 10000,
  "maxXpH": 23000,
  "upvoteCount": 4,
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
  "videoId": "cwZmGwkwhtI",
  "videoStartAt": 13,
  "centerCoordinates": "32589,32692,8",
  "instructions": "<p>Great place for crocodile task.</p>\n<p></p>\n<p>At lower levels hunt only at first floor, there are Tortoises on lower floors and if you don't have high skill or a little more level you can't kill it.</p>",
  "createdAt": "2022-01-16T18:02:46.765Z",
  "updatedAt": "2024-03-17T23:16:35.264Z",
  "dungeon": {
    "id": 144,
    "type": "Dungeon",
    "title": "Tiquanda Crustacean Caves",
    "accountStatus": "premium",
    "entranceCoordinates": "32589,32692,8",
    "entranceDirections": null,
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 13,
      "type": "City",
      "name": "Port Hope"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1362,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 125,
          "type": "Creature",
          "title": "Crocodile",
          "formerNames": null,
          "healthPoints": 105,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Dcm9jb2RpbGUuZ2lmIn0="
        },
        {
          "id": 111,
          "type": "Creature",
          "title": "Crab",
          "formerNames": null,
          "healthPoints": 55,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmFiLmdpZiJ9"
        }
      ]
    },
    {
      "id": 1364,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
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
          "id": 178,
          "type": "Creature",
          "title": "Tortoise",
          "formerNames": null,
          "healthPoints": 185,
          "xpPoints": 90,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ub3J0b2lzZS5naWYifQ=="
        },
        {
          "id": 125,
          "type": "Creature",
          "title": "Crocodile",
          "formerNames": null,
          "healthPoints": 105,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Dcm9jb2RpbGUuZ2lmIn0="
        },
        {
          "id": 187,
          "type": "Creature",
          "title": "Green Frog",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmVlbl9Gcm9nLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 1824,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.81,
      "isInestimable": false,
      "item": {
        "id": 672,
        "type": "Item",
        "title": "Turtle Shell",
        "pluralizedTitle": "Turtle Shells",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 10000,
        "npcBuyValue": 90,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1R1cnRsZV9TaGVsbC5naWYifQ=="
      }
    },
    {
      "id": 1285,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1000,
      "percentage": 0.09,
      "isInestimable": false,
      "item": {
        "id": 317,
        "type": "Item",
        "title": "Crocodile Boots",
        "pluralizedTitle": "Crocodile Boots",
        "formerNames": null,
        "minValue": 1000,
        "maxValue": null,
        "npcBuyValue": 1000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Nyb2NvZGlsZV9Cb290cy5naWYifQ=="
      }
    },
    {
      "id": 1639,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 160,
      "percentage": 0.53,
      "isInestimable": false,
      "item": {
        "id": 326,
        "type": "Item",
        "title": "White Pearl",
        "pluralizedTitle": "White Pearls",
        "formerNames": null,
        "minValue": 160,
        "maxValue": null,
        "npcBuyValue": 160,
        "npcSellValue": 320,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1doaXRlX1BlYXJsLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 151,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 101,
        "type": "DungeonRequiredItem",
        "dungeonId": 144,
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
      "huntId": 202
    },
    {
      "id": 152,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 102,
        "type": "DungeonRequiredItem",
        "dungeonId": 144,
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
      "huntId": 202
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 773,
      "type": "HuntSupply",
      "quantity": 50,
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
    }
  ],
  "lootUpdatedAt": "2022-12-16T02:04:35.727Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-12-16T02:04:35.622Z",
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
