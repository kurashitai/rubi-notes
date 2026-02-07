// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "JBxus",
  "type": "Hunt",
  "title": "Fire bomb + Energy wall",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTM2L1V3dU90S1JqLTE5LUdyaW12YWxlLW1pbi5wbmcifQ==",
  "minLevel": 40,
  "maxLevel": 80,
  "minProfitH": -5000,
  "maxProfitH": 50000,
  "minXpH": 150000,
  "maxXpH": 210000,
  "upvoteCount": 25,
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
  "videoId": "JHp-kVi1804",
  "videoStartAt": null,
  "centerCoordinates": "33341,31682,7",
  "instructions": "<p>Good xp and great profit for paladins level 50+.</p>\n<p></p>\n<p>🔥 Once you get down in the hole, throw a firebomb on your foot and a straight energy wall on the left (next to the firebomb).</p>\n<p></p>\n<p>⚡️ Lure one creature at a time, attack and walk in the fire bomb, making the creature take damage from the energy wall.</p>",
  "createdAt": "2022-01-04T17:36:09.296Z",
  "updatedAt": "2024-03-17T21:19:14.972Z",
  "dungeon": {
    "id": 270,
    "type": "Dungeon",
    "title": "Grimvale",
    "accountStatus": "premium",
    "entranceCoordinates": "33341,31682,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"6mnsb\",\"text\":\"Grimvale is a small island located north-east of Edron. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"7bbev\",\"text\":\"Go to the north-east of Edron, [map c=\\\"33304,31721,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1rhbs\",\"text\":\"Take the boat with Cornell (hi - grimvale - yes).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"74ql7\",\"text\":\"Go down the hole, [map c=\\\"33353,31670,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": true
    },
    "city": {
      "id": 9,
      "type": "City",
      "name": "Edron"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 883,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 942,
          "type": "Creature",
          "title": "Wereboar",
          "formerNames": null,
          "healthPoints": 2200,
          "xpPoints": 2000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlYm9hci5naWYifQ=="
        },
        {
          "id": 941,
          "type": "Creature",
          "title": "Werebadger",
          "formerNames": null,
          "healthPoints": 1700,
          "xpPoints": 1600,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlYmFkZ2VyLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 8178,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 15000,
      "percentage": 0.08,
      "isInestimable": false,
      "item": {
        "id": 898,
        "type": "Item",
        "title": "Dreaded Cleaver",
        "pluralizedTitle": "Dreaded Cleavers",
        "formerNames": null,
        "minValue": 15000,
        "maxValue": 80000,
        "npcBuyValue": 15000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyZWFkZWRfQ2xlYXZlci5naWYifQ=="
      }
    },
    {
      "id": 8177,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.16,
      "isInestimable": false,
      "item": {
        "id": 2868,
        "type": "Item",
        "title": "Wereboar Trophy",
        "pluralizedTitle": "Wereboar Trophies",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": null,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dlcmVib2FyX1Ryb3BoeS5naWYifQ=="
      }
    },
    {
      "id": 8157,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 7500,
      "percentage": 0.88,
      "isInestimable": false,
      "item": {
        "id": 2881,
        "type": "Item",
        "title": "Badger Boots",
        "pluralizedTitle": "Badger Boots",
        "formerNames": null,
        "minValue": 7500,
        "maxValue": null,
        "npcBuyValue": 7500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JhZGdlcl9Cb290cy5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 102,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 53,
        "type": "DungeonRequiredItem",
        "dungeonId": 270,
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
      "huntId": 136
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 615,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "paladin",
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
    },
    {
      "id": 616,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "paladin",
      "supply": {
        "id": 37,
        "type": "Supply",
        "item": {
          "id": 1057,
          "type": "Item",
          "title": "Energy Wall Rune",
          "pluralizedTitle": "Energy Wall Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuZXJneV9XYWxsX1J1bmUuZ2lmIn0="
        }
      }
    },
    {
      "id": 617,
      "type": "HuntSupply",
      "quantity": 25,
      "vocation": "paladin",
      "supply": {
        "id": 39,
        "type": "Supply",
        "item": {
          "id": 1947,
          "type": "Item",
          "title": "Fire Bomb Rune",
          "pluralizedTitle": "Fire Bomb Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfQm9tYl9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 618,
      "type": "HuntSupply",
      "quantity": 600,
      "vocation": "paladin",
      "supply": {
        "id": 128,
        "type": "Supply",
        "item": {
          "id": 879,
          "type": "Item",
          "title": "Onyx Arrow",
          "pluralizedTitle": "Onyx Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ueXhfQXJyb3cuZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-06T03:19:07.307Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-06T03:19:07.282Z",
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
