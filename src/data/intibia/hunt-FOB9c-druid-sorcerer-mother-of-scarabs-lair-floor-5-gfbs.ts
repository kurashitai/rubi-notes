// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "FOB9c",
  "type": "Hunt",
  "title": "Floor -5 + GFBs",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNTgvQ0c4VFM3RjYtRk9COWMtbWluLnBuZyJ9",
  "minLevel": 60,
  "maxLevel": 90,
  "minProfitH": -50000,
  "maxProfitH": -20000,
  "minXpH": 450000,
  "maxXpH": 600000,
  "upvoteCount": 17,
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
  "videoId": "hLnIwtBolto",
  "videoStartAt": null,
  "centerCoordinates": "33236,32575,7",
  "instructions": "<p>Good place for mages level 60+. The experience is decent but you will waste.</p>\n<p></p>\n<p>🛡️ Use a defensive set and terra protection items. Recommended imbuements are mana leech and critical.</p>\n<p></p>\n<p>Walk in circles, luring 3 ancient scarabs and shooting GFBs. Lure more as you feel more confident, but be careful because Ancient Scarabs make high combos AND paralyse.</p>\n<p></p>\n<p>🔥 Use <em>exevo gran mas flam</em> when there are 4+ ancient scarabs to finish them faster.</p>\n<p></p>\n<p>💖 Heal yourself with <em>exura gran</em> and <em>exura </em>to remove paralyse and recover your life. Avoid walking in diagonal.</p>\n<p></p>\n<p>🐾 Start tasks for ancient scarabs and bonebeasts before hunting.</p>",
  "createdAt": "2021-11-22T00:06:26.241Z",
  "updatedAt": "2025-02-23T19:34:38.057Z",
  "dungeon": {
    "id": 268,
    "type": "Dungeon",
    "title": "Mother of Scarabs Lair",
    "accountStatus": "premium",
    "entranceCoordinates": "33236,32575,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"863hc\",\"text\":\"Mother of Scarabs Lair is located north-east of the Ankrahmun desert. The entrance is [map c=\\\"33236,32575,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":22,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 7,
      "type": "City",
      "name": "Ankrahmun"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1120,
      "type": "DungeonSection",
      "name": "Floor -5",
      "position": 6,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 48,
          "type": "Creature",
          "title": "Ancient Scarab",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 720,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BbmNpZW50X1NjYXJhYi5naWYifQ=="
        },
        {
          "id": 79,
          "type": "Creature",
          "title": "Bonebeast",
          "formerNames": null,
          "healthPoints": 515,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lYmVhc3QuZ2lmIn0="
        },
        {
          "id": 24,
          "type": "Creature",
          "title": "Necromancer",
          "formerNames": null,
          "healthPoints": 580,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OZWNyb21hbmNlci5naWYifQ=="
        },
        {
          "id": 54,
          "type": "Creature",
          "title": "Scarab",
          "formerNames": null,
          "healthPoints": 320,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY2FyYWIuZ2lmIn0="
        },
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 273,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.2,
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
      "id": 276,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 989,
        "type": "Item",
        "title": "Noble Axe",
        "pluralizedTitle": "Noble Axes",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 20000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL05vYmxlX0F4ZS5naWYifQ=="
      }
    },
    {
      "id": 274,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 1088,
        "type": "Item",
        "title": "Spellbook of Warding",
        "pluralizedTitle": "Spellbook of Wardings",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": 10000,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwZWxsYm9va19vZl9XYXJkaW5nLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 48,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 37,
        "type": "DungeonRequiredItem",
        "dungeonId": 268,
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
      "huntId": 58
    },
    {
      "id": 49,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 38,
        "type": "DungeonRequiredItem",
        "dungeonId": 268,
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
      "huntId": 58
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 221,
      "type": "HuntSupply",
      "quantity": 150,
      "vocation": "mage",
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
      "id": 222,
      "type": "HuntSupply",
      "quantity": 330,
      "vocation": "mage",
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
    }
  ],
  "lootUpdatedAt": "2021-11-22T02:33:46.498Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-22T02:33:46.463Z",
  "youtubeChannel": {
    "id": 27,
    "type": "YoutubeChannel",
    "name": "Peruzzo",
    "youtubeId": "UCL2aujc0pa4FV6evnXfxbYg",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
