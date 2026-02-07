// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "3MLDq",
  "type": "Hunt",
  "title": "Grim Reapers + Exori Flam",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNTUvZlJLSkxvWjMtM01MRHEtbWluLnBuZyJ9",
  "minLevel": 30,
  "maxLevel": 70,
  "minProfitH": -50000,
  "maxProfitH": -10000,
  "minXpH": 200000,
  "maxXpH": 260000,
  "upvoteCount": 4,
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
  "videoId": "El7qj4vhfCM",
  "videoStartAt": 270,
  "centerCoordinates": "33103,31674,11",
  "instructions": "<p>💍 Use a stealth ring to get to the grim reaper floor (-4).</p>\n<p></p>\n<p>🔥 Throw the fire field runes in the stairs in the entrance of the floor (📹 06:08).</p>\n<p></p>\n<p><strong>Don't do it on RETRO PVP servers or you can get a RED/BLACK SKULL.</strong></p>\n<p></p>\n<p>Use MIGHT RINGS and STONE SKIN AMULETS 💀 when you are luring, but remember to remove them when fighting others creatures than Grim Reapers (like Dark Magicians and Apprentices).</p>\n<p></p>\n<p>🛡️ Use <em>utamo vita</em>, kill the magicians that are around first, lure one Grim Reaper with caution and run to the stairs. Then walk up and down in the fire, shooting <em>exori flams</em> in the creature.</p>\n<p></p>\n<p>Always renew your fire fields after killing the reaper and your magic shield (<em>utamo vita</em>) before luring again.</p>",
  "createdAt": "2021-11-21T23:12:52.248Z",
  "updatedAt": "2024-03-17T23:59:00.812Z",
  "dungeon": {
    "id": 6,
    "type": "Dungeon",
    "title": "Hero Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "33163,31636,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"71sj4\",\"text\":\"Hero Cave is located north of Edron. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":9,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"750ci\",\"text\":\"Cross the mountain, [map c=\\\"33241,31767,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"28i7l\",\"text\":\"Walk to the north-west and go down the hole, [map c=\\\"33163,31636,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 9,
      "type": "City",
      "name": "Edron"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 931,
      "type": "DungeonSection",
      "name": "Floor -4",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 329,
          "type": "Creature",
          "title": "Grim Reaper",
          "formerNames": null,
          "healthPoints": 3900,
          "xpPoints": 5500,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmltX1JlYXBlci5naWYifQ=="
        },
        {
          "id": 51,
          "type": "Creature",
          "title": "Giant Spider",
          "formerNames": null,
          "healthPoints": 1300,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaWFudF9TcGlkZXIuZ2lmIn0="
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
          "id": 25,
          "type": "Creature",
          "title": "Priestess",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 420,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Qcmllc3Rlc3MuZ2lmIn0="
        },
        {
          "id": 65,
          "type": "Creature",
          "title": "Demon Skeleton",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 240,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZW1vbl9Ta2VsZXRvbi5naWYifQ=="
        },
        {
          "id": 305,
          "type": "Creature",
          "title": "Dark Magician",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 185,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXJrX01hZ2ljaWFuLmdpZiJ9"
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
          "id": 4,
          "type": "Creature",
          "title": "Bonelord",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 170,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lbG9yZC5naWYifQ=="
        },
        {
          "id": 11,
          "type": "Creature",
          "title": "Minotaur Mage",
          "formerNames": null,
          "healthPoints": 155,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9NYWdlLmdpZiJ9"
        },
        {
          "id": 60,
          "type": "Creature",
          "title": "Orc Shaman",
          "formerNames": null,
          "healthPoints": 115,
          "xpPoints": 110,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfU2hhbWFuLmdpZiJ9"
        },
        {
          "id": 306,
          "type": "Creature",
          "title": "Dark Apprentice",
          "formerNames": null,
          "healthPoints": 225,
          "xpPoints": 100,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXJrX0FwcHJlbnRpY2UuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 2962,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1927,
        "type": "Item",
        "title": "Reins",
        "pluralizedTitle": "Reins",
        "formerNames": null,
        "minValue": 2000000,
        "maxValue": 3500000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JlaW5zLmdpZiJ9"
      }
    },
    {
      "id": 3312,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35000,
      "percentage": 0.64,
      "isInestimable": false,
      "item": {
        "id": 1089,
        "type": "Item",
        "title": "Nightmare Blade",
        "pluralizedTitle": "Nightmare Blades",
        "formerNames": null,
        "minValue": 35000,
        "maxValue": 60000,
        "npcBuyValue": 35000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL05pZ2h0bWFyZV9CbGFkZS5naWYifQ=="
      }
    },
    {
      "id": 3314,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 18000,
      "percentage": 0.26,
      "isInestimable": false,
      "item": {
        "id": 1136,
        "type": "Item",
        "title": "Skullcracker Armor",
        "pluralizedTitle": "Skullcracker Armors",
        "formerNames": null,
        "minValue": 18000,
        "maxValue": 25000,
        "npcBuyValue": 18000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NrdWxsY3JhY2tlcl9Bcm1vci5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 46,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 35,
        "type": "DungeonRequiredItem",
        "dungeonId": 6,
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
      "huntId": 55
    },
    {
      "id": 47,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 36,
        "type": "DungeonRequiredItem",
        "dungeonId": 6,
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
      "huntId": 55
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 210,
      "type": "HuntSupply",
      "quantity": 120,
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
    },
    {
      "id": 211,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "mage",
      "supply": {
        "id": 84,
        "type": "Supply",
        "item": {
          "id": 176,
          "type": "Item",
          "title": "Stone Skin Amulet",
          "pluralizedTitle": "Stone Skin Amulets",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0b25lX1NraW5fQW11bGV0LmdpZiJ9"
        }
      }
    },
    {
      "id": 212,
      "type": "HuntSupply",
      "quantity": 4,
      "vocation": "mage",
      "supply": {
        "id": 107,
        "type": "Supply",
        "item": {
          "id": 108,
          "type": "Item",
          "title": "Might Ring",
          "pluralizedTitle": "Might Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01pZ2h0X1JpbmcuZ2lmIn0="
        }
      }
    },
    {
      "id": 213,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "mage",
      "supply": {
        "id": 117,
        "type": "Supply",
        "item": {
          "id": 107,
          "type": "Item",
          "title": "Stealth Ring",
          "pluralizedTitle": "Stealth Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWFsdGhfUmluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 214,
      "type": "HuntSupply",
      "quantity": 135,
      "vocation": "mage",
      "supply": {
        "id": 40,
        "type": "Supply",
        "item": {
          "id": 1052,
          "type": "Item",
          "title": "Fire Field Rune",
          "pluralizedTitle": "Fire Field Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfRmllbGRfUnVuZS5naWYifQ=="
        }
      }
    },
    {
      "id": 215,
      "type": "HuntSupply",
      "quantity": 30,
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
  "lootUpdatedAt": "2021-11-22T02:26:57.975Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-22T02:26:57.955Z",
  "youtubeChannel": {
    "id": 20,
    "type": "YoutubeChannel",
    "name": "Mp3_Player",
    "youtubeId": "UCSKoJ_uQlpvieN0NfCtg_wA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
