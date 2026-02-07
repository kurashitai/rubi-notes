// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "UzjcC",
  "type": "Hunt",
  "title": "Behemoths + Avalanches",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNzAvUkJ1bWFQclotMDIwLWRydWlkLXNvcmNlcmVyLWN5Y2xvcG9saXMtYmVoZW1vdGhzLWF2YWxhbmNoZXMtbWluLnBuZyJ9",
  "minLevel": 180,
  "maxLevel": 250,
  "minProfitH": 60000,
  "maxProfitH": 120000,
  "minXpH": 400000,
  "maxXpH": 700000,
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
  "videoId": "Z7qaWbHoF18",
  "videoStartAt": 13,
  "centerCoordinates": "33297,31696,15",
  "instructions": "<p>Good place for mages level 180+ to make Behemoth bestiary and task. The xp is low and the loot is good.</p>\n<p></p>\n<p>💍 Use a stealth ring or utana vid to reach the spawn and stay invisible there to prevent minor creatures (like Cyclops Smith) to attack you.</p>\n<p></p>\n<p>Lure 3~5 behemoths and attack them with Avalanche rune ❄️.</p>\n<p>The rotation is up to you since it's a big respawn and doesn't matter much the directions you take.</p>\n<p></p>\n<p>🛡️ Bring a full defensive set to maximize your protection against the behemoths.</p>",
  "createdAt": "2021-11-23T23:12:23.497Z",
  "updatedAt": "2025-08-25T16:17:00.576Z",
  "dungeon": {
    "id": 7,
    "type": "Dungeon",
    "title": "Cyclopolis",
    "accountStatus": "premium",
    "entranceCoordinates": "33250,31697,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"du175\",\"text\":\"Cyclopolis is located north of Edron. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"9m2sb\",\"text\":\"Cross the mountain, [map c=\\\"33241,31767,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cl4at\",\"text\":\"Walk to the north-east and go down the ladder, [map c=\\\"33251,31697,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": false,
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
      "id": 584,
      "type": "DungeonSection",
      "name": "Floor -8",
      "position": 9,
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
          "id": 304,
          "type": "Creature",
          "title": "Cyclops Smith",
          "formerNames": null,
          "healthPoints": 435,
          "xpPoints": 255,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzX1NtaXRoLmdpZiJ9"
        },
        {
          "id": 303,
          "type": "Creature",
          "title": "Cyclops Drone",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzX0Ryb25lLmdpZiJ9"
        },
        {
          "id": 31,
          "type": "Creature",
          "title": "Cyclops",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzLmdpZiJ9"
        },
        {
          "id": 40,
          "type": "Creature",
          "title": "Dwarf Soldier",
          "formerNames": null,
          "healthPoints": 135,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ed2FyZl9Tb2xkaWVyLmdpZiJ9"
        }
      ]
    },
    {
      "id": 583,
      "type": "DungeonSection",
      "name": "Floor -7",
      "position": 8,
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
          "id": 91,
          "type": "Creature",
          "title": "Fire Elemental",
          "formerNames": null,
          "healthPoints": 280,
          "xpPoints": 220,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GaXJlX0VsZW1lbnRhbC5naWYifQ=="
        },
        {
          "id": 31,
          "type": "Creature",
          "title": "Cyclops",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzLmdpZiJ9"
        },
        {
          "id": 40,
          "type": "Creature",
          "title": "Dwarf Soldier",
          "formerNames": null,
          "healthPoints": 135,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ed2FyZl9Tb2xkaWVyLmdpZiJ9"
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
    },
    {
      "id": 373,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 17000,
      "percentage": 0.96,
      "isInestimable": false,
      "item": {
        "id": 22,
        "type": "Item",
        "title": "Giant Sword",
        "pluralizedTitle": "Giant Swords",
        "formerNames": null,
        "minValue": 17000,
        "maxValue": 20000,
        "npcBuyValue": 17000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dpYW50X1N3b3JkLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 57,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 42,
        "type": "DungeonRequiredItem",
        "dungeonId": 7,
        "requiredItem": {
          "id": 8,
          "type": "RequiredItem",
          "item": {
            "id": 696,
            "type": "Item",
            "title": "Obsidian Knife",
            "pluralizedTitle": "Obsidian Knives",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ic2lkaWFuX0tuaWZlLmdpZiJ9"
          }
        }
      },
      "huntId": 70
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 300,
      "type": "HuntSupply",
      "quantity": 200,
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
      "id": 301,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "mage",
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
      "id": 302,
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
      "id": 303,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "mage",
      "supply": {
        "id": 33,
        "type": "Supply",
        "item": {
          "id": 1945,
          "type": "Item",
          "title": "Destroy Field Rune",
          "pluralizedTitle": "Destroy Field Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Rlc3Ryb3lfRmllbGRfUnVuZS5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-24T19:30:38.018Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-24T19:30:37.984Z",
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
