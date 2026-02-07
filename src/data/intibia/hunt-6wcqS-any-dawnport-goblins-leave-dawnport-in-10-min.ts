// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "6wcqS",
  "type": "Hunt",
  "title": "Leave Dawnport in 10 min",
  "vocation": "any",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTQ0L3paVW1lY0hqLTAwMi1hbnktZGF3bnBvcnQtZ29ibGlucy1sZWF2ZS1kYXducG9ydC1pbi0xMC1taW4tbWluLnBuZyJ9",
  "minLevel": 2,
  "maxLevel": 8,
  "minProfitH": 0,
  "maxProfitH": 2000,
  "minXpH": 5000,
  "maxXpH": 6000,
  "upvoteCount": 3,
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
  "videoId": "QiCNSl_lrLM",
  "videoStartAt": null,
  "centerCoordinates": "32113,31889,8",
  "instructions": "<p><strong>Hunt to leave Dawnport in 8-10 minutes.</strong></p>\n<p></p>\n<p>Keep a distance from goblins and attack them with your wand, attack spells and runes.</p>\n<p>Don't forget you need to have a <strong>Shovel </strong>and a <strong>Rope </strong>to hunt here.</p>\n<p></p>\n<p>It is NOT necessary to get the loots if you just want to rush to Mainland. 👌</p>",
  "createdAt": "2022-01-04T19:36:22.902Z",
  "updatedAt": "2024-03-17T21:03:08.586Z",
  "dungeon": {
    "id": 447,
    "type": "Dungeon",
    "title": "Dawnport Goblins",
    "accountStatus": "free",
    "entranceCoordinates": "32113,31890,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"4d6t6\",\"text\":\"Dawnport Goblins is located under Dawnport. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":16,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dt5j8\",\"text\":\"Go down the ladders, [map c=\\\"32064,31905,5\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6au16\",\"text\":\"Walk to the north-east, open the hole and go down, [map c=\\\"32082,31887,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"flun8\",\"text\":\"Go down one more floor.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 20,
      "type": "City",
      "name": "Dawnport"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1517,
      "type": "DungeonSection",
      "name": "All respawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 893,
          "type": "Creature",
          "title": "Muglex Clan Assassin",
          "formerNames": null,
          "healthPoints": 75,
          "xpPoints": 48,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdWdsZXhfQ2xhbl9Bc3Nhc3Npbi5naWYifQ=="
        },
        {
          "id": 887,
          "type": "Creature",
          "title": "Muglex Clan Scavenger",
          "formerNames": null,
          "healthPoints": 60,
          "xpPoints": 37,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdWdsZXhfQ2xhbl9TY2F2ZW5nZXIuZ2lmIn0="
        },
        {
          "id": 886,
          "type": "Creature",
          "title": "Muglex Clan Footman",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 25,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdWdsZXhfQ2xhbl9Gb290bWFuLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 7738,
      "type": "Loot",
      "min": 1,
      "max": 3,
      "value": 30,
      "percentage": 12.35,
      "isInestimable": false,
      "item": {
        "id": 80,
        "type": "Item",
        "title": "Small Stone",
        "pluralizedTitle": "Small Stones",
        "formerNames": null,
        "minValue": 10,
        "maxValue": 40,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX1N0b25lLmdpZiJ9"
      }
    },
    {
      "id": 7747,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 25,
      "percentage": 1.63,
      "isInestimable": false,
      "item": {
        "id": 52,
        "type": "Item",
        "title": "Studded Armor",
        "pluralizedTitle": "Studded Armors",
        "formerNames": null,
        "minValue": 25,
        "maxValue": 25,
        "npcBuyValue": 25,
        "npcSellValue": 90,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0dWRkZWRfQXJtb3IuZ2lmIn0="
      }
    },
    {
      "id": 7746,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 25,
      "percentage": 4.66,
      "isInestimable": false,
      "item": {
        "id": 242,
        "type": "Item",
        "title": "Bone Club",
        "pluralizedTitle": "Bone Clubs",
        "formerNames": null,
        "minValue": 25,
        "maxValue": 100,
        "npcBuyValue": 5,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JvbmVfQ2x1Yi5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 114,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 85,
        "type": "DungeonRequiredItem",
        "dungeonId": 447,
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
      "huntId": 144
    },
    {
      "id": 115,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 86,
        "type": "DungeonRequiredItem",
        "dungeonId": 447,
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
      "huntId": 144
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 652,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "any",
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
      "id": 653,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "any",
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
      "id": 654,
      "type": "HuntSupply",
      "quantity": 4,
      "vocation": "any",
      "supply": {
        "id": 71,
        "type": "Supply",
        "item": {
          "id": 8,
          "type": "Item",
          "title": "Meat",
          "pluralizedTitle": "Meats",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01lYXQuZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-08T18:24:48.654Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T18:24:04.460Z",
  "youtubeChannel": {
    "id": 47,
    "type": "YoutubeChannel",
    "name": "Severus_RP",
    "youtubeId": "UC1iXN0mwWY-NtjjzTLK0ecA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
