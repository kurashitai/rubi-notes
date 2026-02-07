// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "AVQaN",
  "type": "Hunt",
  "title": "Larvas + Scarabs",
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMS9tOFdDQUJGSi1hbmtyYWhtdW4tZWFzdC1sYXJ2YS1jYXZlLWtuaWdodC5wbmcifQ==",
  "minLevel": 15,
  "maxLevel": 45,
  "minProfitH": 1000,
  "maxProfitH": 4000,
  "minXpH": 15000,
  "maxXpH": 35000,
  "upvoteCount": 4,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
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
  "videoId": "sFyVjVUOGz8",
  "videoStartAt": null,
  "centerCoordinates": "33257,32742,7",
  "instructions": "<p>Just hit larvas and scarabs with a melee weapon ⚔️ . If you have a fire weapon 🔥 it's good, because larvas and scarabs are weak to fire. From skills 60/60+ you can try the second floor.</p>",
  "createdAt": "2021-10-23T02:17:43.764Z",
  "updatedAt": "2024-03-17T21:02:30.374Z",
  "dungeon": {
    "id": 424,
    "type": "Dungeon",
    "title": "East Larva Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "33257,32742,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"3nmk7\",\"text\":\"East Larva Cave is located to the east of Ankrahmun desert. It's reachable by land and you will need a shovel to open the entrance hole, [map c=\\\"33257,32742,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":16,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 7,
      "type": "City",
      "name": "Ankrahmun"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1032,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        }
      ]
    },
    {
      "id": 1033,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 54,
          "type": "Creature",
          "title": "Scarab",
          "formerNames": null,
          "healthPoints": 320,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY2FyYWIuZ2lmIn0="
        },
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 620,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 250,
      "percentage": 0.34,
      "isInestimable": false,
      "item": {
        "id": 35,
        "type": "Item",
        "title": "Small Emerald",
        "pluralizedTitle": "Small Emeralds",
        "formerNames": null,
        "minValue": 250,
        "maxValue": null,
        "npcBuyValue": 250,
        "npcSellValue": 500,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX0VtZXJhbGQuZ2lmIn0="
      }
    },
    {
      "id": 619,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 200,
      "percentage": 0.51,
      "isInestimable": false,
      "item": {
        "id": 294,
        "type": "Item",
        "title": "Small Amethyst",
        "pluralizedTitle": "Small Amethysts",
        "formerNames": null,
        "minValue": 200,
        "maxValue": null,
        "npcBuyValue": 200,
        "npcSellValue": 400,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX0FtZXRoeXN0LmdpZiJ9"
      }
    },
    {
      "id": 621,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 110,
      "percentage": 0.3,
      "isInestimable": false,
      "item": {
        "id": 244,
        "type": "Item",
        "title": "Daramian Mace",
        "pluralizedTitle": "Daramian Maces",
        "formerNames": null,
        "minValue": 110,
        "maxValue": null,
        "npcBuyValue": 110,
        "npcSellValue": 500,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RhcmFtaWFuX01hY2UuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 1,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 1,
        "type": "DungeonRequiredItem",
        "dungeonId": 424,
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
      "huntId": 1
    },
    {
      "id": 2,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 2,
        "type": "DungeonRequiredItem",
        "dungeonId": 424,
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
      "huntId": 1
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 1,
      "type": "HuntSupply",
      "quantity": 10,
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
      "id": 2,
      "type": "HuntSupply",
      "quantity": 15,
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
  "lootUpdatedAt": "2021-11-15T00:45:47.680Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-10-23T02:17:43.764Z",
  "youtubeChannel": {
    "id": 10,
    "type": "YoutubeChannel",
    "name": "MrVerry Win",
    "youtubeId": "UCUKIgtxvExyOR0wxFYg9tUw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
