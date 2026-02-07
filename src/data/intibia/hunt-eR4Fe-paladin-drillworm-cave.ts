// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "eR4Fe",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODYvMWY4MnE4Y0MtZVI0RmUtbWluLnBuZyJ9",
  "minLevel": 80,
  "maxLevel": 130,
  "minProfitH": 15000,
  "maxProfitH": 35000,
  "minXpH": 200000,
  "maxXpH": 280000,
  "upvoteCount": 2,
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
  "videoId": "54EBsPR1g4U",
  "videoStartAt": null,
  "centerCoordinates": "32585,32022,15",
  "instructions": "<p>Good hunt for free account paladins level 80+. It gives decent experience and money.</p>\n<p></p>\n<p>🏹 The creatures are spread so you don't need a shield. You can use Crystalline Arrows with a bow.</p>\n<p></p>\n<p>✨ Attack from distance and use <em>exori con </em>to kill the monsters. <em>Exori san </em>is not good here because the Drillworms are resistent to holy.</p>\n<p></p>\n<p>🛡️ For safety measures bring fire bomb or fire wall runes and throw in the ground in case of danger. Drillworms won't step in unless you attack them.</p>",
  "createdAt": "2021-11-27T22:59:39.236Z",
  "updatedAt": "2024-03-22T00:23:18.400Z",
  "dungeon": {
    "id": 217,
    "type": "Dungeon",
    "title": "Drillworm Cave",
    "accountStatus": "free",
    "entranceCoordinates": "32585,32022,15",
    "entranceDirections": "{\"blocks\":[{\"key\":\"dj2ff\",\"text\":\"The Drillworm Cave is located in the southern part of the Kazordoon city mine, near the Steamship:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":4,\"length\":14,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"am8mt\",\"text\":\"On Kazordoon depot, buy a wagon ticket from NCP Lokur and take the wagon to the Steamboat.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"sgj\",\"text\":\"Go up the rope spots, [map c=\\\"32668,31978,15\\\" map]here[/map] and [map c=\\\"32667,31980,14\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cf4ov\",\"text\":\"Go down the hole ([map c=\\\"32658,32011,13\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"edu41\",\"text\":\"Head to the west or east until you reach a hole ([map c=\\\"32569,32049,14\\\" map]here[/map] or [map c=\\\"32680,32061,14\\\" map]here[/map]) and go down.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 4,
      "type": "City",
      "name": "Kazordoon"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 652,
      "type": "DungeonSection",
      "name": "East cave",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 788,
          "type": "Creature",
          "title": "Drillworm",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 858,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmlsbHdvcm0uZ2lmIn0="
        },
        {
          "id": 217,
          "type": "Creature",
          "title": "Wyvern",
          "formerNames": null,
          "healthPoints": 795,
          "xpPoints": 515,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XeXZlcm4uZ2lmIn0="
        }
      ]
    },
    {
      "id": 653,
      "type": "DungeonSection",
      "name": "West cave",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
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
          "id": 788,
          "type": "Creature",
          "title": "Drillworm",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 858,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmlsbHdvcm0uZ2lmIn0="
        },
        {
          "id": 217,
          "type": "Creature",
          "title": "Wyvern",
          "formerNames": null,
          "healthPoints": 795,
          "xpPoints": 515,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XeXZlcm4uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 608,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.49,
      "isInestimable": false,
      "item": {
        "id": 41,
        "type": "Item",
        "title": "Knight Armor",
        "pluralizedTitle": "Knight Armors",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0tuaWdodF9Bcm1vci5naWYifQ=="
      }
    },
    {
      "id": 606,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.84,
      "isInestimable": false,
      "item": {
        "id": 42,
        "type": "Item",
        "title": "Knight Legs",
        "pluralizedTitle": "Knight Legs",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0tuaWdodF9MZWdzLmdpZiJ9"
      }
    },
    {
      "id": 6400,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.51,
      "isInestimable": false,
      "item": {
        "id": 882,
        "type": "Item",
        "title": "Spiked Squelcher",
        "pluralizedTitle": "Spiked Squelchers",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwaWtlZF9TcXVlbGNoZXIuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 67,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 9,
        "type": "DungeonRequiredItem",
        "dungeonId": 217,
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
      "huntId": 86
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 346,
      "type": "HuntSupply",
      "quantity": 1,
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
    },
    {
      "id": 347,
      "type": "HuntSupply",
      "quantity": 500,
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
      "id": 348,
      "type": "HuntSupply",
      "quantity": 100,
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
      "id": 349,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "paladin",
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
  "lootUpdatedAt": "2021-11-29T19:31:39.458Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:31:39.439Z",
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
