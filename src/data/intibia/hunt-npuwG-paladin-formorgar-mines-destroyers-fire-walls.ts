// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "npuwG",
  "type": "Hunt",
  "title": "Destroyers + Fire walls",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOTMvemNBMzU1Q0stbnB1d0ctbWluLnBuZyJ9",
  "minLevel": 120,
  "maxLevel": 200,
  "minProfitH": 20000,
  "maxProfitH": 80000,
  "minXpH": 200000,
  "maxXpH": 270000,
  "upvoteCount": 3,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
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
  "videoId": "Sim9bHqjj_g",
  "videoStartAt": null,
  "centerCoordinates": "32132,31092,6",
  "instructions": "<p>Good place for paladins level 120+ to get profit. The experience is low but the loot pays off.</p>\n<p></p>\n<p>🔥 Once in the spawn, shoot a fire wall diagonally in the center of the main room. Then walk up and down killing the destroyers.</p>\n<p></p>\n<p>🚩 Then go to the east side, west, south and north, clearing each spawn.</p>\n<p></p>\n<p>🐾 After level 130+ you can make <a href=\"https://tibia.fandom.com/wiki/Killing_in_the_Name_of..._Quest/Spoiler#Destroyers\">Destroyer's task</a>. Kill 650 for a 30k experience reward and a chance to kill the boss that is located in the same cave.</p>",
  "createdAt": "2021-11-29T03:27:33.840Z",
  "updatedAt": "2024-06-20T14:17:13.583Z",
  "dungeon": {
    "id": 89,
    "type": "Dungeon",
    "title": "Formorgar Mines",
    "accountStatus": "premium",
    "entranceCoordinates": "32132,31092,6",
    "entranceDirections": "{\"blocks\":[{\"key\":\"c5pt2\",\"text\":\"Formorgar Mines is located west of Svargrond. To get there follow the maps.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":16,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":59,\"length\":15,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_Ice_Islands_Quest#Formorgar_Mines_1:_The_Mission\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 16,
      "type": "City",
      "name": "Svargrond"
    }
  },
  "requirements": [
    {
      "id": 136,
      "type": "DungeonRequirement",
      "dungeonId": 89,
      "description": "Mission \"Formorgar Mines 1\" done of The Ice Islands Quest",
      "link": "https://tibia.fandom.com/wiki/The_Ice_Islands_Quest#Formorgar_Mines_1:_The_Mission"
    },
    {
      "id": 284,
      "type": "DungeonRequirement",
      "dungeonId": 89,
      "description": "Level 100",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 826,
      "type": "DungeonSection",
      "name": "Floor -5",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 12,
          "type": "Creature",
          "title": "Demon",
          "formerNames": null,
          "healthPoints": 8200,
          "xpPoints": 6000,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZW1vbi5naWYifQ=="
        },
        {
          "id": 210,
          "type": "Creature",
          "title": "Lost Soul",
          "formerNames": null,
          "healthPoints": 5800,
          "xpPoints": 4000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Mb3N0X1NvdWwuZ2lmIn0="
        },
        {
          "id": 223,
          "type": "Creature",
          "title": "Plaguesmith",
          "formerNames": null,
          "healthPoints": 8250,
          "xpPoints": 3555,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QbGFndWVzbWl0aC5naWYifQ=="
        },
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
          "id": 207,
          "type": "Creature",
          "title": "Destroyer",
          "formerNames": null,
          "healthPoints": 3700,
          "xpPoints": 2500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZXN0cm95ZXIuZ2lmIn0="
        },
        {
          "id": 256,
          "type": "Creature",
          "title": "Frost Dragon",
          "formerNames": null,
          "healthPoints": 1800,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9EcmFnb24uZ2lmIn0="
        },
        {
          "id": 205,
          "type": "Creature",
          "title": "Nightmare",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 1666,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OaWdodG1hcmUuZ2lmIn0="
        },
        {
          "id": 263,
          "type": "Creature",
          "title": "Ice Witch",
          "formerNames": null,
          "healthPoints": 650,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9JY2VfV2l0Y2guZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 151,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 90000,
      "percentage": 0.09,
      "isInestimable": false,
      "item": {
        "id": 131,
        "type": "Item",
        "title": "Magic Plate Armor",
        "pluralizedTitle": "Magic Plate Armors",
        "formerNames": null,
        "minValue": 90000,
        "maxValue": 200000,
        "npcBuyValue": 90000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hZ2ljX1BsYXRlX0FybW9yLmdpZiJ9"
      }
    },
    {
      "id": 148,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 50000,
      "percentage": 0.47,
      "isInestimable": false,
      "item": {
        "id": 205,
        "type": "Item",
        "title": "Mastermind Shield",
        "pluralizedTitle": "Mastermind Shields",
        "formerNames": null,
        "minValue": 50000,
        "maxValue": 85000,
        "npcBuyValue": 50000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hc3Rlcm1pbmRfU2hpZWxkLmdpZiJ9"
      }
    },
    {
      "id": 2795,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 40000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 50,
        "type": "Item",
        "title": "Dragon Scale Mail",
        "pluralizedTitle": "Dragon Scale Mails",
        "formerNames": null,
        "minValue": 40000,
        "maxValue": 60000,
        "npcBuyValue": 40000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyYWdvbl9TY2FsZV9NYWlsLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 79,
      "type": "HuntRequirement",
      "huntId": 93,
      "dungeonRequirement": {
        "id": 136,
        "type": "DungeonRequirement",
        "dungeonId": 89,
        "description": "Mission \"Formorgar Mines 1\" done of The Ice Islands Quest",
        "link": "https://tibia.fandom.com/wiki/The_Ice_Islands_Quest#Formorgar_Mines_1:_The_Mission"
      }
    },
    {
      "id": 202,
      "type": "HuntRequirement",
      "huntId": 93,
      "dungeonRequirement": {
        "id": 284,
        "type": "DungeonRequirement",
        "dungeonId": 89,
        "description": "Level 100",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 365,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "paladin",
      "supply": {
        "id": 142,
        "type": "Supply",
        "item": {
          "id": 155,
          "type": "Item",
          "title": "Pair of Soft Boots",
          "pluralizedTitle": "Pair of Soft Boots",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1BhaXJfb2ZfU29mdF9Cb290cy5naWYifQ=="
        }
      }
    },
    {
      "id": 366,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "paladin",
      "supply": {
        "id": 106,
        "type": "Supply",
        "item": {
          "id": 102,
          "type": "Item",
          "title": "Life Ring",
          "pluralizedTitle": "Life Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpZmVfUmluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 367,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "paladin",
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
      "id": 368,
      "type": "HuntSupply",
      "quantity": 30,
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
      "id": 369,
      "type": "HuntSupply",
      "quantity": 350,
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
      "id": 370,
      "type": "HuntSupply",
      "quantity": 20,
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
      "id": 371,
      "type": "HuntSupply",
      "quantity": 1300,
      "vocation": "paladin",
      "supply": {
        "id": 122,
        "type": "Supply",
        "item": {
          "id": 2328,
          "type": "Item",
          "title": "Crystalline Arrow",
          "pluralizedTitle": "Crystalline Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NyeXN0YWxsaW5lX0Fycm93LmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:38:56.198Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:38:56.180Z",
  "youtubeChannel": {
    "id": 2,
    "type": "YoutubeChannel",
    "name": "Eric / Psykik",
    "youtubeId": "UCl3CvJSRKWrZ-Nvj6tBqz-g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
