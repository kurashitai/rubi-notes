// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "PSg8x",
  "type": "Hunt",
  "title": "Nightmare Cave -2",
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTI5L3hSQWJ3cWNQLTIzLUZleXJpc3RfTWVhZG93c19LbmlnaHQtbWluLnBuZyJ9",
  "minLevel": 140,
  "maxLevel": 200,
  "minProfitH": 50000,
  "maxProfitH": 250000,
  "minXpH": 530000,
  "maxXpH": 800000,
  "upvoteCount": 14,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 180,
    "type": "User",
    "username": "Victelion",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "tkZH_FoVBEs",
  "videoStartAt": 7,
  "centerCoordinates": "33581,32287,9",
  "instructions": "<p>Okay exp hunt, but amazing profit 💰.</p>\n<p></p>\n<p>Very quick trip from Feyrist. You may want to use the walls to prevent too many creatures from attacking at once when you first come here. Otherwise, it's a pretty straightforward hunt, just run loops on either level pulling creaturers as you go.</p>\n<p></p>\n<p>🛡️ A garlic necklace can help with the Weakened Frazzlemaw's significant life drain.</p>\n<p></p>\n<p>🌟 Once you complete a mission from Maelyrra in Feyrist (kill 200 Enfeebled Silencers and Weakened Frazzlemaws) you have access to kill the boss in -2 of the cave, Kroazur, every two hours. This boss should be pretty easy if you can handle the hunt here, and occassionaly drops decent loot.</p>",
  "createdAt": "2021-12-15T14:41:57.881Z",
  "updatedAt": "2024-03-18T00:02:20.442Z",
  "dungeon": {
    "id": 322,
    "type": "Dungeon",
    "title": "Feyrist Meadows",
    "accountStatus": "premium",
    "entranceCoordinates": "33511,32230,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"aa3i1\",\"text\":\"Feyrist Meadows is located north-west of Roshamuul. After completing mission Troubled Animals of the Threatened Dreams Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":77,\"length\":47,\"key\":0}],\"data\":{}},{\"key\":\"fpsi8\",\"text\":\"Go to the temple of any city and pass through an Holy Shrine.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":49,\"length\":11,\"key\":1}],\"data\":{}},{\"key\":\"7i1vo\",\"text\":\"Use one of the following gems to be teleported to Feyrist: Saphire (Ice ❄️), Emerald (Earth 🌱), Amethyst (Energy ⚡️) or Ruby (Fire 🔥).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":72,\"length\":2,\"key\":2},{\"offset\":92,\"length\":1,\"key\":3},{\"offset\":113,\"length\":2,\"key\":4},{\"offset\":131,\"length\":1,\"key\":5}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Threatened_Dreams_Quest#Troubled_Animals\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Holy_Shrines\"}},\"2\":{\"type\":\"emoji\",\"mutability\":\"IMMUTABLE\",\"data\":{\"emojiUnicode\":\"❄️\"}},\"3\":{\"type\":\"emoji\",\"mutability\":\"IMMUTABLE\",\"data\":{\"emojiUnicode\":\"🌱\"}},\"4\":{\"type\":\"emoji\",\"mutability\":\"IMMUTABLE\",\"data\":{\"emojiUnicode\":\"⚡️\"}},\"5\":{\"type\":\"emoji\",\"mutability\":\"IMMUTABLE\",\"data\":{\"emojiUnicode\":\"🔥\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
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
      "id": 127,
      "type": "DungeonRequirement",
      "dungeonId": 322,
      "description": "Mission \"Troubled Animals\" done of Threatened Dreams Quest",
      "link": "https://tibia.fandom.com/wiki/Threatened_Dreams_Quest#Troubled_Animals"
    }
  ],
  "sections": [
    {
      "id": 770,
      "type": "DungeonSection",
      "name": "Nightmare cave & south of mountain",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1150,
          "type": "Creature",
          "title": "Enfeebled Silencer",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 1100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbmZlZWJsZWRfU2lsZW5jZXIuZ2lmIn0="
        },
        {
          "id": 1149,
          "type": "Creature",
          "title": "Weakened Frazzlemaw",
          "formerNames": null,
          "healthPoints": 1200,
          "xpPoints": 1000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZWFrZW5lZF9GcmF6emxlbWF3LmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 10033,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35000,
      "percentage": 0.35,
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
      "id": 10048,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.5,
      "isInestimable": false,
      "item": {
        "id": 1,
        "type": "Item",
        "title": "Boots of Haste",
        "pluralizedTitle": "Boots of Hastes",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": null,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jvb3RzX29mX0hhc3RlLmdpZiJ9"
      }
    },
    {
      "id": 10034,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 16500,
      "percentage": 0.29,
      "isInestimable": false,
      "item": {
        "id": 1687,
        "type": "Item",
        "title": "Sai",
        "pluralizedTitle": "Sais",
        "formerNames": null,
        "minValue": 16500,
        "maxValue": 20000,
        "npcBuyValue": 16500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NhaS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 95,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 72,
        "type": "DungeonRequiredItem",
        "dungeonId": 322,
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
      "huntId": 129
    }
  ],
  "huntRequirements": [
    {
      "id": 66,
      "type": "HuntRequirement",
      "huntId": 129,
      "dungeonRequirement": {
        "id": 127,
        "type": "DungeonRequirement",
        "dungeonId": 322,
        "description": "Mission \"Troubled Animals\" done of Threatened Dreams Quest",
        "link": "https://tibia.fandom.com/wiki/Threatened_Dreams_Quest#Troubled_Animals"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 484,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "knight",
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
    },
    {
      "id": 485,
      "type": "HuntSupply",
      "quantity": 15,
      "vocation": "knight",
      "supply": {
        "id": 5,
        "type": "Supply",
        "item": {
          "id": 1062,
          "type": "Item",
          "title": "Ultimate Health Potion",
          "pluralizedTitle": "Ultimate Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 486,
      "type": "HuntSupply",
      "quantity": 600,
      "vocation": "knight",
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
  "lootUpdatedAt": "2021-12-15T23:23:07.585Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-15T23:23:07.554Z",
  "youtubeChannel": {
    "id": 48,
    "type": "YoutubeChannel",
    "name": "Gomufas",
    "youtubeId": "UCdCespUELfi7CF2UqIc1m6w",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
