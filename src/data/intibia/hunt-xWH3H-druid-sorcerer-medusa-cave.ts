// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "xWH3H",
  "type": "Hunt",
  "title": null,
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNjkvakJ2ZTNCV1ctMDIxLWRydWlkLXNvcmNlcmVyLW1lZHVzYS1jYXZlLW1pbi5wbmcifQ==",
  "minLevel": 130,
  "maxLevel": 220,
  "minProfitH": -10000,
  "maxProfitH": 40000,
  "minXpH": 600000,
  "maxXpH": 800000,
  "upvoteCount": 3,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
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
  "videoId": "X_hugoFBHAE",
  "videoStartAt": null,
  "centerCoordinates": "31927,32614,11",
  "instructions": "<p>Good hunt for mages level 130+. It gives a good xp, usually no waste and, depending on your luck, up to 40k of profit/h.</p>\n<p></p>\n<p>Once in the spawn you will go to each \"leg\" of the cave, killing one creature at a time with SDs 💀. To prevent luring many creatures you can close the path with a fire wall 🔥 and the creatures won't cross it (unless you attack them).</p>\n<p></p>\n<p>👕 <strong>Equipment</strong></p>\n<p>Use a TERRA SET for earth protection and GARLIC NECKLACES to prevent Life Drain.</p>\n<p></p>\n<p>If you can, use 2x Mana Leech imbuements. This will allow you to bring much more SDs and just a few mana potions (30 UMP is enough).</p>",
  "createdAt": "2021-11-23T22:57:28.243Z",
  "updatedAt": "2024-03-18T00:14:41.165Z",
  "dungeon": {
    "id": 150,
    "type": "Dungeon",
    "title": "Medusa Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "31927,32614,11",
    "entranceDirections": "{\"blocks\":[{\"key\":\"fpa6r\",\"text\":\"Medusa Cave is located in the depths of Talahu, acessed through Goroma.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"aqpih\",\"text\":\"After completing Mission \\\"Access to Talahu\\\" of The Shattered Isles Quest you are able to use the teleportation hubs to go to Talahu. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":17,\"length\":55,\"key\":0}],\"data\":{}},{\"key\":\"8d8fq\",\"text\":\"If you have Access to Goroma done, travel from Liberty Bay to Goroma. Otherwise, travel from Liberty Bay to Thais until the boat docks in Goroma (you have to try many times).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":12,\"length\":16,\"key\":1}],\"data\":{}},{\"key\":\"1qs1i\",\"text\":\"Cross the underground path, [map c=\\\"32097,32576,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7s4dh\",\"text\":\"Walk to the Shattered Isles portals, [map c=\\\"32038,32560,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3vids\",\"text\":\"Use the portals to the east two times to get to Ramoa.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1ofro\",\"text\":\"Go down the stairs, [map c=\\\"31936,32678,7\\\" map]here[/map] and [map c=\\\"31930,32678,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5f6sl\",\"text\":\"Use a pick [map c=\\\"31928,32670,9\\\" map]here[/map] and go down.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ebo9i\",\"text\":\"Go to the north and enter in the dungeon [map c=\\\"31928,32631,10\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Talahu\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Goroma\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 12,
      "type": "City",
      "name": "Liberty Bay"
    }
  },
  "requirements": [
    {
      "id": 174,
      "type": "DungeonRequirement",
      "dungeonId": 150,
      "description": "Mission \"Access to Talahu\" done of The Shattered Isles Quest",
      "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Talahu"
    },
    {
      "id": 279,
      "type": "DungeonRequirement",
      "dungeonId": 150,
      "description": "Level 80",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 1502,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 443,
          "type": "Creature",
          "title": "Medusa",
          "formerNames": null,
          "healthPoints": 4500,
          "xpPoints": 4050,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NZWR1c2EuZ2lmIn0="
        },
        {
          "id": 152,
          "type": "Creature",
          "title": "Serpent Spawn",
          "formerNames": null,
          "healthPoints": 3000,
          "xpPoints": 3050,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TZXJwZW50X1NwYXduLmdpZiJ9"
        }
      ]
    },
    {
      "id": 1503,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 443,
          "type": "Creature",
          "title": "Medusa",
          "formerNames": null,
          "healthPoints": 4500,
          "xpPoints": 4050,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NZWR1c2EuZ2lmIn0="
        },
        {
          "id": 152,
          "type": "Creature",
          "title": "Serpent Spawn",
          "formerNames": null,
          "healthPoints": 3000,
          "xpPoints": 3050,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TZXJwZW50X1NwYXduLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 1526,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.13,
      "isInestimable": false,
      "item": {
        "id": 144,
        "type": "Item",
        "title": "Royal Helmet",
        "pluralizedTitle": "Royal Helmets",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 35000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JveWFsX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 1528,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 20000,
      "percentage": 0.08,
      "isInestimable": false,
      "item": {
        "id": 1303,
        "type": "Item",
        "title": "Swamplair Armor",
        "pluralizedTitle": "Swamplair Armors",
        "formerNames": null,
        "minValue": 20000,
        "maxValue": 50000,
        "npcBuyValue": 16000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N3YW1wbGFpcl9Bcm1vci5naWYifQ=="
      }
    },
    {
      "id": 4157,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 15000,
      "percentage": 0.38,
      "isInestimable": false,
      "item": {
        "id": 1003,
        "type": "Item",
        "title": "Terra Legs",
        "pluralizedTitle": "Terra Legs",
        "formerNames": null,
        "minValue": 15000,
        "maxValue": 25000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RlcnJhX0xlZ3MuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 55,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 40,
        "type": "DungeonRequiredItem",
        "dungeonId": 150,
        "requiredItem": {
          "id": 9,
          "type": "RequiredItem",
          "item": {
            "id": 10,
            "type": "Item",
            "title": "Pick",
            "pluralizedTitle": "Picks",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1BpY2suZ2lmIn0="
          }
        }
      },
      "huntId": 69
    },
    {
      "id": 56,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 41,
        "type": "DungeonRequiredItem",
        "dungeonId": 150,
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
      "huntId": 69
    }
  ],
  "huntRequirements": [
    {
      "id": 113,
      "type": "HuntRequirement",
      "huntId": 69,
      "dungeonRequirement": {
        "id": 174,
        "type": "DungeonRequirement",
        "dungeonId": 150,
        "description": "Mission \"Access to Talahu\" done of The Shattered Isles Quest",
        "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Talahu"
      }
    },
    {
      "id": 191,
      "type": "HuntRequirement",
      "huntId": 69,
      "dungeonRequirement": {
        "id": 279,
        "type": "DungeonRequirement",
        "dungeonId": 150,
        "description": "Level 80",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 296,
      "type": "HuntSupply",
      "quantity": 270,
      "vocation": "mage",
      "supply": {
        "id": 9,
        "type": "Supply",
        "item": {
          "id": 971,
          "type": "Item",
          "title": "Great Mana Potion",
          "pluralizedTitle": "Great Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X01hbmFfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 297,
      "type": "HuntSupply",
      "quantity": 750,
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
    },
    {
      "id": 298,
      "type": "HuntSupply",
      "quantity": 40,
      "vocation": "mage",
      "supply": {
        "id": 41,
        "type": "Supply",
        "item": {
          "id": 1058,
          "type": "Item",
          "title": "Fire Wall Rune",
          "pluralizedTitle": "Fire Wall Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfV2FsbF9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 299,
      "type": "HuntSupply",
      "quantity": 7,
      "vocation": "mage",
      "supply": {
        "id": 88,
        "type": "Supply",
        "item": {
          "id": 172,
          "type": "Item",
          "title": "Garlic Necklace",
          "pluralizedTitle": "Garlic Necklaces",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dhcmxpY19OZWNrbGFjZS5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-24T19:30:08.474Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-24T19:25:47.951Z",
  "youtubeChannel": {
    "id": 32,
    "type": "YoutubeChannel",
    "name": "Eduardo Yukio",
    "youtubeId": "UCqvesC2TJzSaTbuF9sNUlqQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
