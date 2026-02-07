// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "ouLrq",
  "type": "Hunt",
  "title": "RP + MS on Winter Elves",
  "vocation": null,
  "teamSize": "duo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTU0L0lxSUQzWHA2LW91THJxLW1pbi5wbmcifQ==",
  "minLevel": 350,
  "maxLevel": 550,
  "minProfitH": 500000,
  "maxProfitH": 1000000,
  "minXpH": 2200000,
  "maxXpH": 3300000,
  "upvoteCount": 3,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1323,
    "type": "User",
    "username": "Paralecus",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "Zh6jGOVCAys",
  "videoStartAt": null,
  "centerCoordinates": "33698,32125,7",
  "instructions": "<p>🔥 Best way to hunt here is making circles shooting GFBs and the Paladin can box when mobs are low health.</p>\n<p></p>\n<p>💍 Prismatic and energy rings are to use when the Paladin gets boxed with Thanatursus and Arachnophobicas.</p>\n<p></p>\n<p>💖 Sorcerer must have UHs ready to heal Paladin and combo with Magic Shield (Utamo Vita) to avoid Healing group cooldown.</p>",
  "createdAt": "2022-01-05T23:02:16.010Z",
  "updatedAt": "2024-03-18T00:04:29.087Z",
  "dungeon": {
    "id": 366,
    "type": "Dungeon",
    "title": "Court of Winter",
    "accountStatus": "premium",
    "entranceCoordinates": "33698,32125,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"856gv\",\"text\":\"Court of Winter is located north-east of Feyrist an can be accessed through Tyrsung. After starting The Dream Courts Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":100,\"length\":22,\"key\":0}],\"data\":{}},{\"key\":\"3r7vb\",\"text\":\"From Svargrond go to NPC Buddel ([map c=\\\"32256,31195,7\\\" map]here[/map]) and ask for a passage to Tyrsung.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"49vrh\",\"text\":\"Go up the mountain [map c=\\\"32425,31278,7\\\" map]here[/map], [map c=\\\"32372,31245,6\\\" map]here[/map], [map c=\\\"32374,31265,5\\\" map]here[/map] and [map c=\\\"32367,31259,4\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6fg83\",\"text\":\"Access the portal, [map c=\\\"32354,31246,3\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_Dream_Courts_Quest\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 18,
      "type": "City",
      "name": "Feyrist"
    }
  },
  "requirements": [
    {
      "id": 289,
      "type": "DungeonRequirement",
      "dungeonId": 366,
      "description": "Must have started The Dream Courts Quest",
      "link": "https://tibia.fandom.com/wiki/The_Dream_Courts_Quest"
    }
  ],
  "sections": [
    {
      "id": 366,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1359,
          "type": "Creature",
          "title": "Thanatursus",
          "formerNames": null,
          "healthPoints": 7200,
          "xpPoints": 6300,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UaGFuYXR1cnN1cy5naWYifQ=="
        },
        {
          "id": 1357,
          "type": "Creature",
          "title": "Soul-Broken Harbinger",
          "formerNames": null,
          "healthPoints": 6300,
          "xpPoints": 5800,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Tb3VsLUJyb2tlbl9IYXJiaW5nZXIuZ2lmIn0="
        },
        {
          "id": 1364,
          "type": "Creature",
          "title": "Crazed Winter Vanguard",
          "formerNames": null,
          "healthPoints": 5800,
          "xpPoints": 5400,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmF6ZWRfV2ludGVyX1Zhbmd1YXJkLmdpZiJ9"
        },
        {
          "id": 1363,
          "type": "Creature",
          "title": "Crazed Winter Rearguard",
          "formerNames": null,
          "healthPoints": 5200,
          "xpPoints": 4700,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmF6ZWRfV2ludGVyX1JlYXJndWFyZC5naWYifQ=="
        },
        {
          "id": 1351,
          "type": "Creature",
          "title": "Arachnophobica",
          "formerNames": null,
          "healthPoints": 5000,
          "xpPoints": 4700,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BcmFjaG5vcGhvYmljYS5naWYifQ=="
        },
        {
          "id": 1365,
          "type": "Creature",
          "title": "Hibernal Moth",
          "formerNames": null,
          "healthPoints": 850,
          "xpPoints": 700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IaWJlcm5hbF9Nb3RoLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 12036,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 13000,
      "percentage": 1.13,
      "isInestimable": false,
      "item": {
        "id": 1123,
        "type": "Item",
        "title": "Spellbook of Mind Control",
        "pluralizedTitle": "Spellbook of Mind Controls",
        "formerNames": null,
        "minValue": 13000,
        "maxValue": 30000,
        "npcBuyValue": 13000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwZWxsYm9va19vZl9NaW5kX0NvbnRyb2wuZ2lmIn0="
      }
    },
    {
      "id": 12076,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 1.71,
      "isInestimable": false,
      "item": {
        "id": 2129,
        "type": "Item",
        "title": "Warrior's Axe",
        "pluralizedTitle": "Warrior's Axes",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 11000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhcnJpb3JfMjdzX0F4ZS5naWYifQ=="
      }
    },
    {
      "id": 12167,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 2.47,
      "isInestimable": false,
      "item": {
        "id": 1013,
        "type": "Item",
        "title": "Glacier Robe",
        "pluralizedTitle": "Glacier Robes",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 15000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dsYWNpZXJfUm9iZS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 222,
      "type": "HuntRequirement",
      "huntId": 154,
      "dungeonRequirement": {
        "id": 289,
        "type": "DungeonRequirement",
        "dungeonId": 366,
        "description": "Must have started The Dream Courts Quest",
        "link": "https://tibia.fandom.com/wiki/The_Dream_Courts_Quest"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 592,
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
      "id": 593,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "paladin",
      "supply": {
        "id": 43,
        "type": "Supply",
        "item": {
          "id": 1949,
          "type": "Item",
          "title": "Great Fireball Rune",
          "pluralizedTitle": "Great Fireball Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X0ZpcmViYWxsX1J1bmUuZ2lmIn0="
        }
      }
    },
    {
      "id": 594,
      "type": "HuntSupply",
      "quantity": 200,
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
      "id": 595,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "paladin",
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
      "id": 596,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "paladin",
      "supply": {
        "id": 89,
        "type": "Supply",
        "item": {
          "id": 1090,
          "type": "Item",
          "title": "Glacier Amulet",
          "pluralizedTitle": "Glacier Amulets",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dsYWNpZXJfQW11bGV0LmdpZiJ9"
        }
      }
    },
    {
      "id": 597,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "paladin",
      "supply": {
        "id": 109,
        "type": "Supply",
        "item": {
          "id": 2285,
          "type": "Item",
          "title": "Prismatic Ring",
          "pluralizedTitle": "Prismatic Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1ByaXNtYXRpY19SaW5nLmdpZiJ9"
        }
      }
    },
    {
      "id": 598,
      "type": "HuntSupply",
      "quantity": 2,
      "vocation": "paladin",
      "supply": {
        "id": 105,
        "type": "Supply",
        "item": {
          "id": 105,
          "type": "Item",
          "title": "Energy Ring",
          "pluralizedTitle": "Energy Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuZXJneV9SaW5nLmdpZiJ9"
        }
      }
    },
    {
      "id": 599,
      "type": "HuntSupply",
      "quantity": 2,
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
    },
    {
      "id": 600,
      "type": "HuntSupply",
      "quantity": 6,
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
      "id": 601,
      "type": "HuntSupply",
      "quantity": 300,
      "vocation": "sorcerer",
      "supply": {
        "id": 10,
        "type": "Supply",
        "item": {
          "id": 3059,
          "type": "Item",
          "title": "Ultimate Mana Potion",
          "pluralizedTitle": "Ultimate Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX01hbmFfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 602,
      "type": "HuntSupply",
      "quantity": 800,
      "vocation": "sorcerer",
      "supply": {
        "id": 43,
        "type": "Supply",
        "item": {
          "id": 1949,
          "type": "Item",
          "title": "Great Fireball Rune",
          "pluralizedTitle": "Great Fireball Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X0ZpcmViYWxsX1J1bmUuZ2lmIn0="
        }
      }
    },
    {
      "id": 603,
      "type": "HuntSupply",
      "quantity": 150,
      "vocation": "sorcerer",
      "supply": {
        "id": 62,
        "type": "Supply",
        "item": {
          "id": 2371,
          "type": "Item",
          "title": "Ultimate Healing Rune (Item)",
          "pluralizedTitle": "Ultimate Healing Rune (Item)s",
          "formerNames": "Ultimate healing rune",
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX0hlYWxpbmdfUnVuZV9fMjhJdGVtXzI5LmdpZiJ9"
        }
      }
    },
    {
      "id": 604,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "sorcerer",
      "supply": {
        "id": 89,
        "type": "Supply",
        "item": {
          "id": 1090,
          "type": "Item",
          "title": "Glacier Amulet",
          "pluralizedTitle": "Glacier Amulets",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dsYWNpZXJfQW11bGV0LmdpZiJ9"
        }
      }
    },
    {
      "id": 605,
      "type": "HuntSupply",
      "quantity": 2,
      "vocation": "sorcerer",
      "supply": {
        "id": 111,
        "type": "Supply",
        "item": {
          "id": 3106,
          "type": "Item",
          "title": "Ring of Green Plasma",
          "pluralizedTitle": "Ring of Green Plasmas",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfR3JlZW5fUGxhc21hLmdpZiJ9"
        }
      }
    },
    {
      "id": 606,
      "type": "HuntSupply",
      "quantity": 6,
      "vocation": "sorcerer",
      "supply": {
        "id": 14,
        "type": "Supply",
        "item": {
          "id": 895,
          "type": "Item",
          "title": "Mastermind Potion",
          "pluralizedTitle": "Mastermind Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hc3Rlcm1pbmRfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 607,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "sorcerer",
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
    }
  ],
  "lootUpdatedAt": "2022-01-06T04:10:11.399Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-06T04:10:11.378Z",
  "youtubeChannel": {
    "id": 55,
    "type": "YoutubeChannel",
    "name": "Horobi Tibia Gaming",
    "youtubeId": "UCz9Gpfk-zLZadXyzYl2q77g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Duo"
} as const;

export default hunt;
