// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Cwotl",
  "type": "Hunt",
  "title": null,
  "vocation": "no_vocation",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTQyLzAwVVQ3UGFqLUN3b3RsLW1pbi5wbmcifQ==",
  "minLevel": 2,
  "maxLevel": 300,
  "minProfitH": 0,
  "maxProfitH": 1000,
  "minXpH": 15000,
  "maxXpH": 32000,
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
  "videoId": "ifESifZTtd8",
  "videoStartAt": null,
  "centerCoordinates": "31981,32195,7",
  "instructions": "<p>🐺 Wolves are so nice to hunt because they drop meat all the time! This way, you almost don't need to use Small Health Potions.</p>\n<p></p>\n<p>🥇 This is the best premium account hunt and the 2nd best hunt in Rookgaard, only losing for Mino Hell, which is usually full because it's free account and mino's drops are more valuable.</p>",
  "createdAt": "2022-01-04T19:10:02.458Z",
  "updatedAt": "2024-03-17T21:41:09.092Z",
  "dungeon": {
    "id": 449,
    "type": "Dungeon",
    "title": "Rookgaard Premium Wolves",
    "accountStatus": "premium",
    "entranceCoordinates": "31978,32196,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"ajrrn\",\"text\":\"Rookgaard Premium Wolves is located west of Rookgaard. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":24,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"20ois\",\"text\":\"Leave the city through the west bridge, [map c=\\\"32025,32203,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"24veh\",\"text\":\"Walk to the north-west and go up, [map c=\\\"31978,32196,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
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
      "id": 1519,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
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
      "id": 399,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 70,
      "percentage": 1.02,
      "isInestimable": false,
      "item": {
        "id": 662,
        "type": "Item",
        "title": "Wolf Paw",
        "pluralizedTitle": "Wolf Paws",
        "formerNames": null,
        "minValue": 70,
        "maxValue": 250,
        "npcBuyValue": 70,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dvbGZfUGF3LmdpZiJ9"
      }
    },
    {
      "id": 398,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2,
      "percentage": 70.24,
      "isInestimable": false,
      "item": {
        "id": 8,
        "type": "Item",
        "title": "Meat",
        "pluralizedTitle": "Meats",
        "formerNames": null,
        "minValue": 2,
        "maxValue": null,
        "npcBuyValue": 2,
        "npcSellValue": 3,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01lYXQuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 108,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 81,
        "type": "DungeonRequiredItem",
        "dungeonId": 449,
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
      "huntId": 142
    },
    {
      "id": 109,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 82,
        "type": "DungeonRequiredItem",
        "dungeonId": 449,
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
      "huntId": 142
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 568,
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
    }
  ],
  "lootUpdatedAt": "2022-01-13T16:47:01.711Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-13T16:47:01.683Z",
  "youtubeChannel": {
    "id": 72,
    "type": "YoutubeChannel",
    "name": "Daniel H",
    "youtubeId": "UCNploQOYcj3sxZ-LLYIQj3g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
