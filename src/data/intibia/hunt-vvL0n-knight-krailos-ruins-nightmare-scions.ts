// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "vvL0n",
  "type": "Hunt",
  "title": "Nightmare Scions",
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTY0LzFGWll4NE5pLTE0LUtyYWlsb3NfUnVpbnMtbWluLnBuZyJ9",
  "minLevel": 80,
  "maxLevel": 130,
  "minProfitH": 10000,
  "maxProfitH": 100000,
  "minXpH": 700000,
  "maxXpH": 800000,
  "upvoteCount": 36,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1453,
    "type": "User",
    "username": "Dcaari",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "oJtdTvSPNrk",
  "videoStartAt": null,
  "centerCoordinates": "33582,31585,8",
  "instructions": "<p>💯 Great hunt for knights level 80+ to rush experience. Easy to access, high xp, but the profit is not good. You can improve your profit if you complete <a href=\"https://tibia.fandom.com/wiki/Krailos_Quest\">Krailos Quest</a> to be able to buy/sell potions in Krailos, so you can refill faster and pick gold coins.</p>\n<p></p>\n<p>⚔️ Lure 3 monsters at a time and rotate attack spells (<em>exori - exori mas - exori</em>). Get more monsters as you feel more confident. If you feel that it's too easy, you can go down to the -2 floor.</p>\n<ul>\n  <li>From level 90+ abuse of <em>exori min</em>.</li>\n  <li>Do not use <em>utito tempo</em> before level 100.</li>\n</ul>\n<p></p>\n<p>⚗️ <strong>Imbuements</strong></p>\n<ul>\n  <li>2x Powerful Mana</li>\n  <li>2x Powerful Life</li>\n</ul>",
  "createdAt": "2022-01-08T15:45:02.366Z",
  "updatedAt": "2024-03-17T23:21:26.711Z",
  "dungeon": {
    "id": 420,
    "type": "Dungeon",
    "title": "Krailos Ruins",
    "accountStatus": "premium",
    "entranceCoordinates": "33583,31579,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"67skl\",\"text\":\"Krailos Ruins is located north of Krailos. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":14,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"e9fl5\",\"text\":\"Travel from Thais to Krailos.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cf5lu\",\"text\":\"Cross to the island swimming, [map c=\\\"33527,31697,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"adoil\",\"text\":\"Walk to the north and go down [map c=\\\"33580,31585,7\\\" map]here[/map]. \",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 21,
      "type": "City",
      "name": "Krailos"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1010,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
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
          "id": 407,
          "type": "Creature",
          "title": "Nightmare Scion",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1350,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OaWdodG1hcmVfU2Npb24uZ2lmIn0="
        },
        {
          "id": 408,
          "type": "Creature",
          "title": "Undead Gladiator",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9VbmRlYWRfR2xhZGlhdG9yLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 2101,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.32,
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
      "id": 2102,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 931,
        "type": "Item",
        "title": "War Axe",
        "pluralizedTitle": "War Axes",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": null,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhcl9BeGUuZ2lmIn0="
      }
    },
    {
      "id": 3997,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.16,
      "isInestimable": false,
      "item": {
        "id": 720,
        "type": "Item",
        "title": "Flask of Warrior's Sweat",
        "pluralizedTitle": "Flask of Warrior's Sweats",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 25000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZsYXNrX29mX1dhcnJpb3JfMjdzX1N3ZWF0LmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 129,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 89,
        "type": "DungeonRequiredItem",
        "dungeonId": 420,
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
      "huntId": 164
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 647,
      "type": "HuntSupply",
      "quantity": 200,
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
    },
    {
      "id": 648,
      "type": "HuntSupply",
      "quantity": 100,
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
    }
  ],
  "lootUpdatedAt": "2022-01-08T17:28:47.849Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T17:28:47.829Z",
  "youtubeChannel": {
    "id": 64,
    "type": "YoutubeChannel",
    "name": "Dcaari",
    "youtubeId": "UCZ-jpzIqy2zGkIDruOs-Lhw",
    "verifiedAt": "Sat Jan 08 2022 12:12:38 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 1453,
      "type": "User",
      "username": "Dcaari",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
