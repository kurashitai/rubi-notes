// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "BRBB7",
  "type": "Hunt",
  "title": null,
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNTcvVFU2NVFIMnQtQlJCQjctbWluLnBuZyJ9",
  "minLevel": 40,
  "maxLevel": 60,
  "minProfitH": -5000,
  "maxProfitH": 5000,
  "minXpH": 90000,
  "maxXpH": 120000,
  "upvoteCount": 3,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
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
  "videoId": "2CaECVGpICo",
  "videoStartAt": 7,
  "centerCoordinates": "33265,32278,7",
  "instructions": "<p>Lure one dragon at a time and kill it with wand + <em>exori frigo</em>.</p>",
  "createdAt": "2021-11-21T23:47:31.953Z",
  "updatedAt": "2024-03-21T09:30:43.892Z",
  "dungeon": {
    "id": 148,
    "type": "Dungeon",
    "title": "Darashia Dragon Lair",
    "accountStatus": "premium",
    "entranceCoordinates": "33237,32258,10",
    "entranceDirections": "{\"blocks\":[{\"key\":\"d7d89\",\"text\":\"Darashia Dragon Lair is located to the north of Darashia desert.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":20,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"9i2ps\",\"text\":\"Pass the level 40 door [map c=\\\"33265,32278,7\\\" map](here)[/map] and go down the ladders.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [
    {
      "id": 108,
      "type": "DungeonRequirement",
      "dungeonId": 148,
      "description": "Level 40",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 148,
      "type": "DungeonSection",
      "name": "1st floor",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 36,
          "type": "Creature",
          "title": "Dragon",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb24uZ2lmIn0="
        },
        {
          "id": 297,
          "type": "Creature",
          "title": "Dragon Hatchling",
          "formerNames": null,
          "healthPoints": 380,
          "xpPoints": 185,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb25fSGF0Y2hsaW5nLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 433,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 4000,
      "percentage": 0.3,
      "isInestimable": false,
      "item": {
        "id": 197,
        "type": "Item",
        "title": "Dragon Shield",
        "pluralizedTitle": "Dragon Shields",
        "formerNames": null,
        "minValue": 4000,
        "maxValue": 6000,
        "npcBuyValue": 4000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyYWdvbl9TaGllbGQuZ2lmIn0="
      }
    },
    {
      "id": 435,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 885,
        "type": "Item",
        "title": "Dragonbone Staff",
        "pluralizedTitle": "Dragonbone Staffs",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": 5000,
        "npcBuyValue": 3000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyYWdvbmJvbmVfU3RhZmYuZ2lmIn0="
      }
    },
    {
      "id": 425,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 1.05,
      "isInestimable": false,
      "item": {
        "id": 456,
        "type": "Item",
        "title": "Wand of Inferno",
        "pluralizedTitle": "Wand of Infernos",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": null,
        "npcBuyValue": 3000,
        "npcSellValue": 15000,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhbmRfb2ZfSW5mZXJuby5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 47,
      "type": "HuntRequirement",
      "huntId": 57,
      "dungeonRequirement": {
        "id": 108,
        "type": "DungeonRequirement",
        "dungeonId": 148,
        "description": "Level 40",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 220,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "mage",
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
  "lootUpdatedAt": "2021-11-22T02:31:54.282Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-22T02:31:54.262Z",
  "youtubeChannel": {
    "id": 26,
    "type": "YoutubeChannel",
    "name": "GamingWorld",
    "youtubeId": "UCoMHJIeGoU8yHPDgH-eKFSQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
