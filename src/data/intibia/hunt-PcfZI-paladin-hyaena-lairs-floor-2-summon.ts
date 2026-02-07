// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "PcfZI",
  "type": "Hunt",
  "title": "Floor -2 + Summon",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTE0L3pYMzhuajI5LTI1LUh5YWVuYV9MYWlyc19QYWxhZGluLW1pbi5wbmcifQ==",
  "minLevel": 280,
  "maxLevel": 350,
  "minProfitH": 150000,
  "maxProfitH": 500000,
  "minXpH": 1800000,
  "maxXpH": 2800000,
  "upvoteCount": 9,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 43,
    "type": "User",
    "username": "LorennZinn",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "cGWBgxisb4M",
  "videoStartAt": 60,
  "centerCoordinates": "33168,32405,11",
  "instructions": "<p>The best way to hunt in this place is luring and attacking the monsters, so when they are in middle/low life, finish them in the box.</p>",
  "createdAt": "2021-12-06T14:55:15.948Z",
  "updatedAt": "2025-07-06T17:48:11.610Z",
  "dungeon": {
    "id": 415,
    "type": "Dungeon",
    "title": "Hyaena Lairs",
    "accountStatus": "premium",
    "entranceCoordinates": "33212,32358,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"72jks\",\"text\":\"Hyaena Lairs are located north of Darashia. To get there, walk to the Darashia desert and go down the hole, [map c=\\\"33212,32358,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 960,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1530,
          "type": "Creature",
          "title": "Werehyaena",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 2200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlaHlhZW5hLmdpZiJ9"
        },
        {
          "id": 1531,
          "type": "Creature",
          "title": "Werehyaena Shaman",
          "formerNames": null,
          "healthPoints": 2500,
          "xpPoints": 2200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlaHlhZW5hX1NoYW1hbi5naWYifQ=="
        },
        {
          "id": 83,
          "type": "Creature",
          "title": "Lich",
          "formerNames": null,
          "healthPoints": 880,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaWNoLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 837,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 400000,
      "percentage": 0.05,
      "isInestimable": false,
      "item": {
        "id": 1936,
        "type": "Item",
        "title": "Maxilla Maximus",
        "pluralizedTitle": "Maxilla Maximus",
        "formerNames": null,
        "minValue": 400000,
        "maxValue": 1100000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01heGlsbGFfTWF4aW11cy5naWYifQ=="
      }
    },
    {
      "id": 13720,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.2,
      "isInestimable": false,
      "item": {
        "id": 4317,
        "type": "Item",
        "title": "Werehyaena Trophy",
        "pluralizedTitle": "Werehyaena Trophies",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": null,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dlcmVoeWFlbmFfVHJvcGh5LmdpZiJ9"
      }
    },
    {
      "id": 836,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.2,
      "isInestimable": false,
      "item": {
        "id": 58,
        "type": "Item",
        "title": "Blue Robe",
        "pluralizedTitle": "Blue Robes",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 15000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JsdWVfUm9iZS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 80,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 61,
        "type": "DungeonRequiredItem",
        "dungeonId": 415,
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
      "huntId": 114
    },
    {
      "id": 81,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 62,
        "type": "DungeonRequiredItem",
        "dungeonId": 415,
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
      "huntId": 114
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 427,
      "type": "HuntSupply",
      "quantity": 700,
      "vocation": "paladin",
      "supply": {
        "id": 11,
        "type": "Supply",
        "item": {
          "id": 1061,
          "type": "Item",
          "title": "Great Spirit Potion",
          "pluralizedTitle": "Great Spirit Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X1NwaXJpdF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 428,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "paladin",
      "supply": {
        "id": 12,
        "type": "Supply",
        "item": {
          "id": 3060,
          "type": "Item",
          "title": "Ultimate Spirit Potion",
          "pluralizedTitle": "Ultimate Spirit Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX1NwaXJpdF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 429,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "paladin",
      "supply": {
        "id": 29,
        "type": "Supply",
        "item": {
          "id": 1963,
          "type": "Item",
          "title": "Avalanche Rune",
          "pluralizedTitle": "Avalanche Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0F2YWxhbmNoZV9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 430,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "paladin",
      "supply": {
        "id": 123,
        "type": "Supply",
        "item": {
          "id": 3340,
          "type": "Item",
          "title": "Diamond Arrow",
          "pluralizedTitle": "Diamond Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RpYW1vbmRfQXJyb3cuZ2lmIn0="
        }
      }
    },
    {
      "id": 431,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "paladin",
      "supply": {
        "id": 16,
        "type": "Supply",
        "item": {
          "id": 870,
          "type": "Item",
          "title": "Bullseye Potion",
          "pluralizedTitle": "Bullseye Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0J1bGxzZXllX1BvdGlvbi5naWYifQ=="
        }
      }
    },
    {
      "id": 432,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "paladin",
      "supply": {
        "id": 110,
        "type": "Supply",
        "item": {
          "id": 3107,
          "type": "Item",
          "title": "Ring of Blue Plasma",
          "pluralizedTitle": "Ring of Blue Plasmas",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfQmx1ZV9QbGFzbWEuZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-12-12T12:43:57.815Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-12T12:43:57.796Z",
  "youtubeChannel": {
    "id": 25,
    "type": "YoutubeChannel",
    "name": "Leozika",
    "youtubeId": "UCwWhxYOQXK8F0W8n9Uk_m-A",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
