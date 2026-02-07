// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "HuJ6V",
  "type": "Hunt",
  "title": null,
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNjAvZVhYb0M0cHEtSHVKNlYtbWluLnBuZyJ9",
  "minLevel": 65,
  "maxLevel": 85,
  "minProfitH": -30000,
  "maxProfitH": -20000,
  "minXpH": 250000,
  "maxXpH": 350000,
  "upvoteCount": 1,
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
  "videoId": "HC1-oimROkc",
  "videoStartAt": 336,
  "centerCoordinates": "32386,32843,7",
  "instructions": "<p>Good hunt for xp for mages level 65+. The waste is up to -30k/h.</p>\n<p></p>\n<p>Lure one Wyrm at a time and kill with SDs.</p>",
  "createdAt": "2021-11-22T00:55:22.405Z",
  "updatedAt": "2024-03-18T00:04:49.121Z",
  "dungeon": {
    "id": 285,
    "type": "Dungeon",
    "title": "Vandura Wyrm Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "32387,32841,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"8i53j\",\"text\":\"Vandura Wyrm Cave is located east of Liberty Bay. To get there just go downstairs [map c=\\\"32387,32841,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":17,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 12,
      "type": "City",
      "name": "Liberty Bay"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1425,
      "type": "DungeonSection",
      "name": "Floor -2 (Main)",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 341,
          "type": "Creature",
          "title": "Wyrm",
          "formerNames": null,
          "healthPoints": 1825,
          "xpPoints": 1550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XeXJtLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 3413,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 25000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 1094,
        "type": "Item",
        "title": "Composite Hornbow",
        "pluralizedTitle": "Composite Hornbows",
        "formerNames": null,
        "minValue": 25000,
        "maxValue": null,
        "npcBuyValue": 25000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NvbXBvc2l0ZV9Ib3JuYm93LmdpZiJ9"
      }
    },
    {
      "id": 3407,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 1.22,
      "isInestimable": false,
      "item": {
        "id": 1142,
        "type": "Item",
        "title": "Focus Cape",
        "pluralizedTitle": "Focus Capes",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 8000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZvY3VzX0NhcGUuZ2lmIn0="
      }
    },
    {
      "id": 3411,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3600,
      "percentage": 0.47,
      "isInestimable": false,
      "item": {
        "id": 1079,
        "type": "Item",
        "title": "Wand of Starstorm",
        "pluralizedTitle": "Wand of Starstorms",
        "formerNames": null,
        "minValue": 3600,
        "maxValue": 9000,
        "npcBuyValue": 3600,
        "npcSellValue": 18000,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhbmRfb2ZfU3RhcnN0b3JtLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 226,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "mage",
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
      "id": 227,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "mage",
      "supply": {
        "id": 60,
        "type": "Supply",
        "item": {
          "id": 115,
          "type": "Item",
          "title": "Sudden Death Rune",
          "pluralizedTitle": "Sudden Death Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N1ZGRlbl9EZWF0aF9SdW5lLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-22T02:46:30.347Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-22T02:46:30.321Z",
  "youtubeChannel": {
    "id": 21,
    "type": "YoutubeChannel",
    "name": "Dokin",
    "youtubeId": "UCPitnBd-YEClRK8geNrLdZg",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
