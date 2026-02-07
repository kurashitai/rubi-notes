// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "kzgsi",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTQ3L3JDaGR3Uk9NLTctVmVub3JlX1NhbGFtYW5kZXJfQ2F2ZS1taW4ucG5nIn0=",
  "minLevel": 20,
  "maxLevel": 35,
  "minProfitH": 30000,
  "maxProfitH": 60000,
  "minXpH": 25000,
  "maxXpH": 45000,
  "upvoteCount": 12,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1123,
    "type": "User",
    "username": "Nuno",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "vSPymkBSM9s",
  "videoStartAt": null,
  "centerCoordinates": "32913,32143,9",
  "instructions": "<p>Good hunt for free accounts to make a great profit on low level characters. There are 4 types of creatures, so it's also a good place to do bestiary.</p>\n<p></p>\n<p>🛡️ The creatures are very weak, so a brass/plate set is enough.</p>\n<p></p>\n<p>💰 Marsh Stalker and Swampling drop valuable loots, used in quests and imbuements:</p>\n<ul>\n  <li>Marsh Stalker Feather (quest item)</li>\n  <li>Marsh Stalker Beak (during bewitched event it's expensive)&nbsp;</li>\n  <li>Piece of swampling wood (imbuement)</li>\n</ul>",
  "createdAt": "2022-01-04T21:59:02.397Z",
  "updatedAt": "2024-03-18T00:00:40.755Z",
  "dungeon": {
    "id": 213,
    "type": "Dungeon",
    "title": "Venore Salamander Cave",
    "accountStatus": "free",
    "entranceCoordinates": "32924,32148,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"4bknr\",\"text\":\"Venore Salamander Cave is located in Venore, near the south gate. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":22,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"7e5g9\",\"text\":\"Walk to the south gate and go down the ladder, [map c=\\\"32936,32159,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1js3q\",\"text\":\"Walk to the north-west and go down the hole, [map c=\\\"32924,32148,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
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
      "id": 213,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 778,
          "type": "Creature",
          "title": "Marsh Stalker",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 50,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYXJzaF9TdGFsa2VyLmdpZiJ9"
        },
        {
          "id": 780,
          "type": "Creature",
          "title": "Swampling",
          "formerNames": null,
          "healthPoints": 80,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Td2FtcGxpbmcuZ2lmIn0="
        },
        {
          "id": 777,
          "type": "Creature",
          "title": "Emerald Damselfly",
          "formerNames": null,
          "healthPoints": 90,
          "xpPoints": 35,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbWVyYWxkX0RhbXNlbGZseS5naWYifQ=="
        },
        {
          "id": 779,
          "type": "Creature",
          "title": "Salamander",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 25,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYWxhbWFuZGVyLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 6282,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 150,
      "percentage": 0.49,
      "isInestimable": false,
      "item": {
        "id": 159,
        "type": "Item",
        "title": "Scimitar",
        "pluralizedTitle": "Scimitars",
        "formerNames": null,
        "minValue": 150,
        "maxValue": null,
        "npcBuyValue": 150,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NjaW1pdGFyLmdpZiJ9"
      }
    },
    {
      "id": 6273,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 150,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 984,
        "type": "Item",
        "title": "Seeds",
        "pluralizedTitle": "Seeds",
        "formerNames": null,
        "minValue": 150,
        "maxValue": null,
        "npcBuyValue": 150,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NlZWRzLmdpZiJ9"
      }
    },
    {
      "id": 6281,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 130,
      "percentage": 0.74,
      "isInestimable": false,
      "item": {
        "id": 72,
        "type": "Item",
        "title": "Bow",
        "pluralizedTitle": "Bows",
        "formerNames": null,
        "minValue": 130,
        "maxValue": 350,
        "npcBuyValue": 130,
        "npcSellValue": 400,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jvdy5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 136,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 93,
        "type": "DungeonRequiredItem",
        "dungeonId": 213,
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
      "huntId": 147
    },
    {
      "id": 137,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 94,
        "type": "DungeonRequiredItem",
        "dungeonId": 213,
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
      "huntId": 147
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 688,
      "type": "HuntSupply",
      "quantity": 10,
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
  "lootUpdatedAt": "2022-01-13T17:20:22.834Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-13T17:20:22.811Z",
  "youtubeChannel": {
    "id": 16,
    "type": "YoutubeChannel",
    "name": "Cyf Plays",
    "youtubeId": "UC63m_-yKdNtax7AZjgk4atQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
