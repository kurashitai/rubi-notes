// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "zHl15",
  "type": "Hunt",
  "title": "Inner Sanctum",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOTcva3pvWmNDR1ItNy5wbmcifQ==",
  "minLevel": 200,
  "maxLevel": 350,
  "minProfitH": 50000,
  "maxProfitH": 150000,
  "minXpH": 270000,
  "maxXpH": 420000,
  "upvoteCount": 4,
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
  "videoId": "rvbz9NIf5sc",
  "videoStartAt": 12,
  "centerCoordinates": "33072,31102,14",
  "instructions": "<p>Nice alternative place for paladins level 200+ to get a good profit but a low experience.</p>\n<p></p>\n<p>🏹 Lure 2 creatures and attack them from distance. You can shoot energy walls in the ground to make it easier to hunt (warning: using field runes on RETRO PVP worlds can get you a RED/BLACK skull).</p>\n<p></p>\n<p>🛡️ Around level 200 you should use a death protection set (Yalahari Legs, Koshei's Amulet, Divine Plate, Elite Draken Helmet).</p>\n<p></p>\n<p>🐾 You can do 3 <a href=\"https://tibia.fandom.com/wiki/Killing_in_the_Name_of..._Quest/Spoiler#Level_130.2B_Tasks\">tasks</a> simultaneously here: Undead Dragons (400), Ghastly Dragons (500) and Drakens (900).</p>",
  "createdAt": "2021-11-29T15:03:59.509Z",
  "updatedAt": "2024-03-18T00:10:27.950Z",
  "dungeon": {
    "id": 177,
    "type": "Dungeon",
    "title": "Razachai",
    "accountStatus": "premium",
    "entranceCoordinates": "33077,31185,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"8t2sl\",\"text\":\"Razachai (aka Lizard City) is located north-west of Zao. The access is gained through the Wrath of the Emperor Quest. After getting the access:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":90,\"length\":26,\"key\":0}],\"data\":{}},{\"key\":\"3beuh\",\"text\":\"Fly from Edron ([map c=\\\"33191,31783,3\\\" map]here[/map]) or Darashia ([map c=\\\"33269,32441,6\\\" map]here[/map]) to Farmine, through the magic carpet.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9hdrc\",\"text\":\"Go down the ladder, then up the hill to the east and enter in the teleport on the last floor.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6i8k6\",\"text\":\"Enter in the new teleport that appeared.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"egrl6\",\"text\":\"Go down the ladder and up to the hill in the west, [map c=\\\"33139,31249,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f7jpf\",\"text\":\"Pass through the top teleport, [map c=\\\"33136,31248,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7718p\",\"text\":\"Pass through the fire teleport to the east, [map c=\\\"33216,31067,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"h1tp\",\"text\":\"To go to the Lizard City, just go up the ladder to the east, [map c=\\\"33085,31219,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6cmbn\",\"text\":\"Else, if you want to reach the depths of Razachai, pass the gate of expertise, put a Scale of Corruption in the Coal basin and pass through the teleport, [map c=\\\"33084,31213,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": false,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 10,
      "type": "City",
      "name": "Farmine"
    }
  },
  "requirements": [
    {
      "id": 210,
      "type": "DungeonRequirement",
      "dungeonId": 177,
      "description": "Must have completed Wrath of the Emperor Quest ",
      "link": "https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest"
    }
  ],
  "sections": [
    {
      "id": 1255,
      "type": "DungeonSection",
      "name": "Underground",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 213,
          "type": "Creature",
          "title": "Undead Dragon",
          "formerNames": null,
          "healthPoints": 8350,
          "xpPoints": 7200,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9VbmRlYWRfRHJhZ29uLmdpZiJ9"
        },
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
          "id": 511,
          "type": "Creature",
          "title": "Ghastly Dragon",
          "formerNames": null,
          "healthPoints": 7800,
          "xpPoints": 4600,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaGFzdGx5X0RyYWdvbi5naWYifQ=="
        },
        {
          "id": 548,
          "type": "Creature",
          "title": "Draken Elite",
          "formerNames": null,
          "healthPoints": 5550,
          "xpPoints": 4200,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFrZW5fRWxpdGUuZ2lmIn0="
        },
        {
          "id": 550,
          "type": "Creature",
          "title": "Draken Abomination",
          "formerNames": null,
          "healthPoints": 6250,
          "xpPoints": 3800,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFrZW5fQWJvbWluYXRpb24uZ2lmIn0="
        },
        {
          "id": 506,
          "type": "Creature",
          "title": "Draken Spellweaver",
          "formerNames": null,
          "healthPoints": 5000,
          "xpPoints": 3100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFrZW5fU3BlbGx3ZWF2ZXIuZ2lmIn0="
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
        },
        {
          "id": 505,
          "type": "Creature",
          "title": "Draken Warmaster",
          "formerNames": null,
          "healthPoints": 4150,
          "xpPoints": 2400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFrZW5fV2FybWFzdGVyLmdpZiJ9"
        },
        {
          "id": 504,
          "type": "Creature",
          "title": "Lizard Chosen",
          "formerNames": null,
          "healthPoints": 3050,
          "xpPoints": 2200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfQ2hvc2VuLmdpZiJ9"
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
          "id": 45,
          "type": "Creature",
          "title": "Dragon Lord",
          "formerNames": null,
          "healthPoints": 1900,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb25fTG9yZC5naWYifQ=="
        },
        {
          "id": 501,
          "type": "Creature",
          "title": "Lizard Zaogun",
          "formerNames": null,
          "healthPoints": 2955,
          "xpPoints": 1700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfWmFvZ3VuLmdpZiJ9"
        },
        {
          "id": 341,
          "type": "Creature",
          "title": "Wyrm",
          "formerNames": null,
          "healthPoints": 1825,
          "xpPoints": 1550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XeXJtLmdpZiJ9"
        },
        {
          "id": 549,
          "type": "Creature",
          "title": "Brimstone Bug",
          "formerNames": null,
          "healthPoints": 1300,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ccmltc3RvbmVfQnVnLmdpZiJ9"
        },
        {
          "id": 298,
          "type": "Creature",
          "title": "Dragon Lord Hatchling",
          "formerNames": null,
          "healthPoints": 750,
          "xpPoints": 645,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb25fTG9yZF9IYXRjaGxpbmcuZ2lmIn0="
        },
        {
          "id": 404,
          "type": "Creature",
          "title": "Mutated Rat",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 450,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdXRhdGVkX1JhdC5naWYifQ=="
        },
        {
          "id": 514,
          "type": "Creature",
          "title": "Wailing Widow",
          "formerNames": null,
          "healthPoints": 850,
          "xpPoints": 450,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYWlsaW5nX1dpZG93LmdpZiJ9"
        },
        {
          "id": 513,
          "type": "Creature",
          "title": "Lancer Beetle",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 275,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYW5jZXJfQmVldGxlLmdpZiJ9"
        },
        {
          "id": 122,
          "type": "Creature",
          "title": "Centipede",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 34,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DZW50aXBlZGUuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4757,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1400000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1864,
        "type": "Item",
        "title": "Shield of Corruption",
        "pluralizedTitle": "Shield of Corruptions",
        "formerNames": null,
        "minValue": 1400000,
        "maxValue": 2200000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NoaWVsZF9vZl9Db3JydXB0aW9uLmdpZiJ9"
      }
    },
    {
      "id": 4727,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 200000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1870,
        "type": "Item",
        "title": "Cobra Crown",
        "pluralizedTitle": "Cobra Crowns",
        "formerNames": null,
        "minValue": 200000,
        "maxValue": 900000,
        "npcBuyValue": 50000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NvYnJhX0Nyb3duLmdpZiJ9"
      }
    },
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
    }
  ],
  "huntRequiredItems": [
    {
      "id": 74,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 55,
        "type": "DungeonRequiredItem",
        "dungeonId": 177,
        "requiredItem": {
          "id": 116,
          "type": "RequiredItem",
          "item": {
            "id": 1824,
            "type": "Item",
            "title": "Scale of Corruption",
            "pluralizedTitle": "Scale of Corruptions",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NjYWxlX29mX0NvcnJ1cHRpb24uZ2lmIn0="
          }
        }
      },
      "huntId": 97
    },
    {
      "id": 75,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 56,
        "type": "DungeonRequiredItem",
        "dungeonId": 177,
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
      "huntId": 97
    }
  ],
  "huntRequirements": [
    {
      "id": 157,
      "type": "HuntRequirement",
      "huntId": 97,
      "dungeonRequirement": {
        "id": 210,
        "type": "DungeonRequirement",
        "dungeonId": 177,
        "description": "Must have completed Wrath of the Emperor Quest ",
        "link": "https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 381,
      "type": "HuntSupply",
      "quantity": 40,
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
      "id": 382,
      "type": "HuntSupply",
      "quantity": 1500,
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
    },
    {
      "id": 383,
      "type": "HuntSupply",
      "quantity": 1000,
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
      "id": 384,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "paladin",
      "supply": {
        "id": 104,
        "type": "Supply",
        "item": {
          "id": 97,
          "type": "Item",
          "title": "Dwarven Ring",
          "pluralizedTitle": "Dwarven Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0R3YXJ2ZW5fUmluZy5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:44:00.018Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:43:59.989Z",
  "youtubeChannel": {
    "id": 33,
    "type": "YoutubeChannel",
    "name": "TibiaTome",
    "youtubeId": "UCxIr2MmChvGeLcMRoecgrYw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
