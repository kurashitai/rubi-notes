// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "QQlVE",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMjIvdGR0SGpRT1AtMDE3LWtuaWdodC1kcmlsbHdvcm0tY2F2ZS5wbmcifQ==",
  "minLevel": 100,
  "maxLevel": 200,
  "minProfitH": 20000,
  "maxProfitH": 60000,
  "minXpH": 180000,
  "maxXpH": 250000,
  "upvoteCount": 3,
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
  "videoId": "_9Y6qfemU_U",
  "videoStartAt": null,
  "centerCoordinates": "32626,32042,14",
  "instructions": "<p>Great hunt for free account knights for xp and profit. Recommended level 100+ with skills 80/80+.</p>\n<p></p>\n<p>⚔️ <strong>Strategy</strong></p>\n<p>Focus on killing one Drillworm at a time. If there are more creatures use a firebomb 🔥 on the ground, go to the center and lure one creature at a time with ❄️ icicle rune.</p>\n<p></p>\n<p>Drillworms make a big damage and attack from distance, so be careful even inside the firebomb. If there are 3+ drills on the screen, go back until there are only 2, to be on the safe side.</p>\n<p></p>\n<p>↘️ Never stay in front of Drillworms as they cast powerful waves.</p>\n<p></p>\n<p>💍 Bring dwarven rings in case you run out of supplies or need to leave the hunt in a rush.</p>\n<p>Also, bring 4x melee rings (axe/club/sword) to make more damage.</p>\n<p></p>\n<p>Use GFBs when there are more than 1 drillworm or when the giant spiders summons their hatchlings 🕷️, to avoid breaking your defense.</p>",
  "createdAt": "2021-11-02T20:02:19.356Z",
  "updatedAt": "2025-05-23T15:31:28.307Z",
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
      "id": 217,
      "type": "DungeonSection",
      "name": "Entrance cave",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 217,
          "type": "Creature",
          "title": "Wyvern",
          "formerNames": null,
          "healthPoints": 795,
          "xpPoints": 515,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XeXZlcm4uZ2lmIn0="
        },
        {
          "id": 327,
          "type": "Creature",
          "title": "Earth Elemental",
          "formerNames": null,
          "healthPoints": 650,
          "xpPoints": 450,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FYXJ0aF9FbGVtZW50YWwuZ2lmIn0="
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
        },
        {
          "id": 161,
          "type": "Creature",
          "title": "Carrion Worm",
          "formerNames": null,
          "healthPoints": 145,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DYXJyaW9uX1dvcm0uZ2lmIn0="
        }
      ]
    },
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
      "id": 9,
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
      "huntId": 22
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 66,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "knight",
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
      "id": 67,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "knight",
      "supply": {
        "id": 4,
        "type": "Supply",
        "item": {
          "id": 973,
          "type": "Item",
          "title": "Great Health Potion",
          "pluralizedTitle": "Great Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 68,
      "type": "HuntSupply",
      "quantity": 15,
      "vocation": "knight",
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
    },
    {
      "id": 69,
      "type": "HuntSupply",
      "quantity": 40,
      "vocation": "knight",
      "supply": {
        "id": 46,
        "type": "Supply",
        "item": {
          "id": 1958,
          "type": "Item",
          "title": "Icicle Rune",
          "pluralizedTitle": "Icicle Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ljaWNsZV9SdW5lLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.369Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-02T20:02:19.356Z",
  "youtubeChannel": {
    "id": 15,
    "type": "YoutubeChannel",
    "name": "WoW TV",
    "youtubeId": "UCk2U0HH-Qz35r-Vz1tJrDhA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
