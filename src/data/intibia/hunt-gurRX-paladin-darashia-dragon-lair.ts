// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "gurRX",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMzAvTW02bnlaSlctMDIyLXBhbGFkaW4tZGFyYXNoaWEtZHJhZ29uLWxhaXIucG5nIn0=",
  "minLevel": 40,
  "maxLevel": 75,
  "minProfitH": 5000,
  "maxProfitH": 15000,
  "minXpH": 60000,
  "maxXpH": 90000,
  "upvoteCount": 11,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 6,
    "type": "User",
    "username": "V4SK",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "B6OSF2YjXwM",
  "videoStartAt": null,
  "centerCoordinates": "33231,32256,10",
  "instructions": "<p>Good hunt for low level paladins to get experience. You can come as early as level 40 but it is recommended level 50+ with at least skills 60+.</p>\n<p></p>\n<p>🛡️ <strong>Equipment</strong></p>\n<p>You can choose between:</p>\n<ul>\n  <li>Bow + Onyx Arrows: easier hunting and less cost with pots</li>\n  <li>Royal Spears: best value for money</li>\n</ul>\n<p>⚔️ <strong>Strategy</strong></p>\n<p>The best way to hunt in this place is luring one dragon at a time, so you don't get many waves around you. Keep a safe distance while you attack and avoid staying in front of them.</p>",
  "createdAt": "2021-11-10T13:53:59.074Z",
  "updatedAt": "2024-03-17T23:11:52.575Z",
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
      "id": 49,
      "type": "HuntRequirement",
      "huntId": 30,
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
      "id": 94,
      "type": "HuntSupply",
      "quantity": 700,
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
    },
    {
      "id": 95,
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
      "id": 96,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "paladin",
      "supply": {
        "id": 3,
        "type": "Supply",
        "item": {
          "id": 972,
          "type": "Item",
          "title": "Strong Health Potion",
          "pluralizedTitle": "Strong Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19IZWFsdGhfUG90aW9uLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.147Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-10T13:53:59.074Z",
  "youtubeChannel": {
    "id": 18,
    "type": "YoutubeChannel",
    "name": "Piessi",
    "youtubeId": "UCQVZ_e2VPZn_1WwpR-UvbEw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
