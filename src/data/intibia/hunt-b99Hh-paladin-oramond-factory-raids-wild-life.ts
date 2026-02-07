// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "b99Hh",
  "type": "Hunt",
  "title": "Wild Life",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTA5L3g4TzU2TzFWLTEucG5nIn0=",
  "minLevel": 300,
  "maxLevel": 600,
  "minProfitH": 300000,
  "maxProfitH": 450000,
  "minXpH": 1800000,
  "maxXpH": 2400000,
  "upvoteCount": 8,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 31,
    "type": "User",
    "username": "Xarkost",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "Yn_RP8hEcbo",
  "videoStartAt": null,
  "centerCoordinates": "33451,31956,13",
  "instructions": "<p>One thing to remember is that the raids take place every hour after the servers have come up and it is random which one you will find active. Once the raid starts it only lasts for around 45 minutes.&nbsp;</p>\n<p></p>\n<p>🛡️ You'll be taking mostly physical damage in this spawn followed by earth, life drain, and energy damage. The earth damage is quite high at around 25% so you may want to run the Powerful Snake Skin imbuement if you are a lower level or new to the spawn. It is also a great spawn to use Sleep Shawl, Lion Spangenhelm, and a Living Vine Bow.</p>",
  "createdAt": "2021-12-06T13:27:44.460Z",
  "updatedAt": "2024-03-18T00:05:23.533Z",
  "dungeon": {
    "id": 430,
    "type": "Dungeon",
    "title": "Oramond Factory Raids",
    "accountStatus": "premium",
    "entranceCoordinates": "33552,31952,13",
    "entranceDirections": "{\"blocks\":[{\"key\":\"c05op\",\"text\":\"Oramond Factory Raids are located below Rathleton. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":21,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"a7kcn\",\"text\":\"In Rathleton, step in the slime slide, [map c=\\\"33651,31941,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f7dhl\",\"text\":\"Go down the ladder, [map c=\\\"33566,31965,12\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2m579\",\"text\":\"Access the teleport of the desired hunt: east (minotaurs), south (mechanical mobs) or west (wild life).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 14,
      "type": "City",
      "name": "Rathleton"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1176,
      "type": "DungeonSection",
      "name": "West (Wild life)",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 30,
          "type": "Creature",
          "title": "Behemoth",
          "formerNames": null,
          "healthPoints": 4000,
          "xpPoints": 2500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CZWhlbW90aC5naWYifQ=="
        },
        {
          "id": 795,
          "type": "Creature",
          "title": "Elder Wyrm",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 2500,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9XeXJtLmdpZiJ9"
        },
        {
          "id": 866,
          "type": "Creature",
          "title": "Devourer",
          "formerNames": null,
          "healthPoints": 1900,
          "xpPoints": 1755,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZXZvdXJlci5naWYifQ=="
        },
        {
          "id": 872,
          "type": "Creature",
          "title": "Glooth Anemone",
          "formerNames": null,
          "healthPoints": 2400,
          "xpPoints": 1755,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HbG9vdGhfQW5lbW9uZS5naWYifQ=="
        },
        {
          "id": 865,
          "type": "Creature",
          "title": "Blood Beast",
          "formerNames": null,
          "healthPoints": 1600,
          "xpPoints": 1000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbG9vZF9CZWFzdC5naWYifQ=="
        },
        {
          "id": 788,
          "type": "Creature",
          "title": "Drillworm",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 858,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmlsbHdvcm0uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 378,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.43,
      "isInestimable": false,
      "item": {
        "id": 91,
        "type": "Item",
        "title": "Steel Boots",
        "pluralizedTitle": "Steel Boots",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 40000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWVsX0Jvb3RzLmdpZiJ9"
      }
    },
    {
      "id": 6430,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 25000,
      "percentage": 0.23,
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
      "id": 380,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 20000,
      "percentage": 0.12,
      "isInestimable": false,
      "item": {
        "id": 748,
        "type": "Item",
        "title": "Behemoth Trophy",
        "pluralizedTitle": "Behemoth Trophies",
        "formerNames": null,
        "minValue": 20000,
        "maxValue": 25000,
        "npcBuyValue": 20000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JlaGVtb3RoX1Ryb3BoeS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 526,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "paladin",
      "supply": {
        "id": 77,
        "type": "Supply",
        "item": {
          "id": 3811,
          "type": "Item",
          "title": "Enchanted Sleep Shawl",
          "pluralizedTitle": "Enchanted Sleep Shawls",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuY2hhbnRlZF9TbGVlcF9TaGF3bC5naWYifQ=="
        }
      }
    },
    {
      "id": 527,
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
      "id": 528,
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
      "id": 529,
      "type": "HuntSupply",
      "quantity": 800,
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
    }
  ],
  "lootUpdatedAt": "2021-12-19T06:17:26.148Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-19T06:17:26.121Z",
  "youtubeChannel": {
    "id": 41,
    "type": "YoutubeChannel",
    "name": "Xarkost",
    "youtubeId": "UC-QoyM7EJJQOf3obGbjaINw",
    "verifiedAt": "Wed Dec 08 2021 23:46:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 31,
      "type": "User",
      "username": "Xarkost",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
