// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "iH3AU",
  "type": "Hunt",
  "title": "Coryms + Stealth ring",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTM3L2FENGhENk1xLTE4LVZlbm9yZV9Db3J5bV9DYXZlLW1pbi5wbmcifQ==",
  "minLevel": 30,
  "maxLevel": 45,
  "minProfitH": -5000,
  "maxProfitH": 5000,
  "minXpH": 60000,
  "maxXpH": 90000,
  "upvoteCount": 2,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1010,
    "type": "User",
    "username": "Viniluque",
    "avatar": "orc",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "UigPBypoeRc",
  "videoStartAt": null,
  "centerCoordinates": "33071,32089,7",
  "instructions": "<p>Good alternative for making experience on paladins level 30+.</p>\n<p></p>\n<p>🏹 Lure one Corym at a time, keep a distance and attack. If there's more than one creature, use your stealth ring.</p>\n<p></p>\n<p>⚠️ Be careful with <strong>Corym Vanguard</strong>, because it can see invisibility.</p>",
  "createdAt": "2022-01-04T17:46:06.360Z",
  "updatedAt": "2024-07-09T18:09:26.997Z",
  "dungeon": {
    "id": 212,
    "type": "Dungeon",
    "title": "Venore Corym Cave",
    "accountStatus": "free",
    "entranceCoordinates": "33072,32086,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"fqupu\",\"text\":\"Venore Corym Cave is located east of Venore in the swamp. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":17,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"5jrfs\",\"text\":\"Go down the east exit on Venore, [map c=\\\"33003,32095,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"45t4n\",\"text\":\"Walk to the cave entrance, [map c=\\\"33071,32089,7\\\" map]here[/map], and go up the ladder.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cv66d\",\"text\":\"Go down the floors until you reach Coryms.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
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
      "id": 212,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 787,
          "type": "Creature",
          "title": "Corym Vanguard",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 490,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db3J5bV9WYW5ndWFyZC5naWYifQ=="
        },
        {
          "id": 782,
          "type": "Creature",
          "title": "Corym Skirmisher",
          "formerNames": null,
          "healthPoints": 450,
          "xpPoints": 260,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db3J5bV9Ta2lybWlzaGVyLmdpZiJ9"
        },
        {
          "id": 781,
          "type": "Creature",
          "title": "Corym Charlatan",
          "formerNames": null,
          "healthPoints": 250,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db3J5bV9DaGFybGF0YW4uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 6385,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2500,
      "percentage": 0.02,
      "isInestimable": false,
      "item": {
        "id": 2465,
        "type": "Item",
        "title": "Rat God Doll",
        "pluralizedTitle": "Rat God Dolls",
        "formerNames": null,
        "minValue": 2500,
        "maxValue": null,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JhdF9Hb2RfRG9sbC5naWYifQ=="
      }
    },
    {
      "id": 6313,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 750,
      "percentage": 0.6,
      "isInestimable": false,
      "item": {
        "id": 2445,
        "type": "Item",
        "title": "Leather Harness",
        "pluralizedTitle": "Leather Harnesses",
        "formerNames": null,
        "minValue": 750,
        "maxValue": null,
        "npcBuyValue": 750,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xlYXRoZXJfSGFybmVzcy5naWYifQ=="
      }
    },
    {
      "id": 6379,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 500,
      "percentage": 5.11,
      "isInestimable": false,
      "item": {
        "id": 2439,
        "type": "Item",
        "title": "Ratana",
        "pluralizedTitle": "Ratanas",
        "formerNames": null,
        "minValue": 500,
        "maxValue": null,
        "npcBuyValue": 500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JhdGFuYS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 103,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 76,
        "type": "DungeonRequiredItem",
        "dungeonId": 212,
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
      "huntId": 137
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 556,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "paladin",
      "supply": {
        "id": 117,
        "type": "Supply",
        "item": {
          "id": 107,
          "type": "Item",
          "title": "Stealth Ring",
          "pluralizedTitle": "Stealth Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWFsdGhfUmluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 557,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "paladin",
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
      "id": 558,
      "type": "HuntSupply",
      "quantity": 300,
      "vocation": "paladin",
      "supply": {
        "id": 133,
        "type": "Supply",
        "item": {
          "id": 2156,
          "type": "Item",
          "title": "Tarsal Arrow",
          "pluralizedTitle": "Tarsal Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RhcnNhbF9BcnJvdy5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-06T03:35:56.863Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-06T03:35:56.844Z",
  "youtubeChannel": {
    "id": 54,
    "type": "YoutubeChannel",
    "name": "Vinerr Games",
    "youtubeId": "UCuBTqUN_2gC3O5C1R9opnmA",
    "verifiedAt": "Thu Jan 06 2022 00:07:48 GMT-0300 (Horário Padrão de Brasília)",
    "user": {
      "id": 1010,
      "type": "User",
      "username": "Viniluque",
      "avatar": "orc",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
