// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "OrnHg",
  "type": "Hunt",
  "title": "Warlocks + SDs",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNjgvaERrUFFIY00tT3JuSGctbWluLnBuZyJ9",
  "minLevel": 140,
  "maxLevel": 200,
  "minProfitH": 30000,
  "maxProfitH": 100000,
  "minXpH": 450000,
  "maxXpH": 600000,
  "upvoteCount": 1,
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
  "videoId": "bIzJATR3Aag",
  "videoStartAt": null,
  "centerCoordinates": "32479,31664,14",
  "instructions": "<p>Good place for free account mages level 140+ to make a nice profit and a average experience 💰.</p>\n<p></p>\n<p>🏁 It's a very far spot, it takes about 10 minutes to get there on a level 200+ with strong haste. If you are hunted or play in a hardcore PVP world it's a good hunting option because the enemies will have a hard time to find you as not everyone knows how to get here.</p>\n<p></p>\n<p>⭐️ Once in the spawn, walk clockwise and kill Warlocks/Infernalists with SDs. If the creatures get invisible, use the stone shower rune to make them appear.</p>\n<p></p>\n<p>☠️ Bring a death wand and a full magic set, no shield needed.</p>",
  "createdAt": "2021-11-23T22:13:08.597Z",
  "updatedAt": "2025-08-25T23:17:32.530Z",
  "dungeon": {
    "id": 15,
    "type": "Dungeon",
    "title": "Demona",
    "accountStatus": "free",
    "entranceCoordinates": "32479,31664,14",
    "entranceDirections": "{\"blocks\":[{\"key\":\"d1k2s\",\"text\":\"Demona is located west of Ab'dendriel, hidden below the Maze of Lost Souls. To get there, follow the maps.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":7,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":90,\"length\":15,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Route:_Demona\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 5,
      "type": "City",
      "name": "Carlin"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 15,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 414,
          "type": "Creature",
          "title": "Infernalist",
          "formerNames": null,
          "healthPoints": 3650,
          "xpPoints": 4000,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9JbmZlcm5hbGlzdC5naWYifQ=="
        },
        {
          "id": 29,
          "type": "Creature",
          "title": "Warlock",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYXJsb2NrLmdpZiJ9"
        },
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
          "id": 42,
          "type": "Creature",
          "title": "Elf Arcanist",
          "formerNames": null,
          "healthPoints": 220,
          "xpPoints": 175,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGZfQXJjYW5pc3QuZ2lmIn0="
        },
        {
          "id": 39,
          "type": "Creature",
          "title": "Dwarf Guard",
          "formerNames": null,
          "healthPoints": 245,
          "xpPoints": 165,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ed2FyZl9HdWFyZC5naWYifQ=="
        },
        {
          "id": 19,
          "type": "Creature",
          "title": "Minotaur Guard",
          "formerNames": null,
          "healthPoints": 185,
          "xpPoints": 160,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9HdWFyZC5naWYifQ=="
        },
        {
          "id": 35,
          "type": "Creature",
          "title": "Stone Golem",
          "formerNames": null,
          "healthPoints": 270,
          "xpPoints": 160,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TdG9uZV9Hb2xlbS5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 355,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.39,
      "isInestimable": false,
      "item": {
        "id": 110,
        "type": "Item",
        "title": "Ring of the Sky",
        "pluralizedTitle": "Ring of the Skies",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 40000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfdGhlX1NreS5naWYifQ=="
      }
    },
    {
      "id": 358,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 20000,
      "percentage": 0.22,
      "isInestimable": false,
      "item": {
        "id": 49,
        "type": "Item",
        "title": "Golden Armor",
        "pluralizedTitle": "Golden Armors",
        "formerNames": null,
        "minValue": 20000,
        "maxValue": 32000,
        "npcBuyValue": 20000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dvbGRlbl9Bcm1vci5naWYifQ=="
      }
    },
    {
      "id": 4100,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 13000,
      "percentage": 0.46,
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
    }
  ],
  "huntRequiredItems": [
    {
      "id": 60,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 45,
        "type": "DungeonRequiredItem",
        "dungeonId": 15,
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
      "huntId": 68
    },
    {
      "id": 61,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 46,
        "type": "DungeonRequiredItem",
        "dungeonId": 15,
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
      "huntId": 68
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 292,
      "type": "HuntSupply",
      "quantity": 350,
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
      "id": 293,
      "type": "HuntSupply",
      "quantity": 800,
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
      "id": 294,
      "type": "HuntSupply",
      "quantity": 300,
      "vocation": "mage",
      "supply": {
        "id": 59,
        "type": "Supply",
        "item": {
          "id": 1961,
          "type": "Item",
          "title": "Stone Shower Rune",
          "pluralizedTitle": "Stone Shower Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0b25lX1Nob3dlcl9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 295,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "mage",
      "supply": {
        "id": 65,
        "type": "Supply",
        "item": {
          "id": 269,
          "type": "Item",
          "title": "Brown Mushroom",
          "pluralizedTitle": "Brown Mushrooms",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jyb3duX011c2hyb29tLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-24T19:00:48.381Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-24T19:00:48.352Z",
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
