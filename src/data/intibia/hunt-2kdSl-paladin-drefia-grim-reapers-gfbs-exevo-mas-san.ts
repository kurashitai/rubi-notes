// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "2kdSl",
  "type": "Hunt",
  "title": "GFBs + Exevo Mas San",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOTgvT1pkYVNHSmEtNi5wbmcifQ==",
  "minLevel": 200,
  "maxLevel": 350,
  "minProfitH": -70000,
  "maxProfitH": -30000,
  "minXpH": 1300000,
  "maxXpH": 1600000,
  "upvoteCount": 2,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
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
  "videoId": "Q_ZUjczKgag",
  "videoStartAt": null,
  "centerCoordinates": "33039,32464,12",
  "instructions": "<p>Great place for paladins level 200+ to get experience. It's a waste though.</p>\n<p></p>\n<p>Lure 3~4 Grim Reapers and kill them with GFBs + <em>exevo mas san</em>.</p>\n<p></p>\n<p>🛡️ Suggested equipments and imbuements:</p>\n<ul>\n  <li>⛑️ Helmet: Royal Helmet (ML and mana leech).</li>\n  <li>👕 Armor: Prismatic Armor (life leech) or Depth Lorica (death protection and life leech).</li>\n  <li>👖 Legs: Prismatic Legs.</li>\n  <li>👢 Boots: Guardian Boots.</li>\n  <li>🏹 Weapon: Bow of Mayhem or Crossbow of Mayhem with infernal bolts (highly recommended after level 250) or Warsinger/Rift/Mycological Bow (critical, mana leech and life leech).</li>\n  <li>👔 Amulets: Werewolf Amulet (or anything that gives you armor) or Collar of Blue Plasma (xp boost).</li>\n  <li>💍 Rings: Prismatic Ring or Ring for Blue Plasma (xp boost).</li>\n</ul>",
  "createdAt": "2021-11-29T15:36:09.173Z",
  "updatedAt": "2024-03-17T21:41:22.903Z",
  "dungeon": {
    "id": 2,
    "type": "Dungeon",
    "title": "Drefia Grim Reapers",
    "accountStatus": "premium",
    "entranceCoordinates": "33039,32464,12",
    "entranceDirections": "{\"blocks\":[{\"key\":\"4u72c\",\"text\":\"Drefia Grim Reapers is located west of Darashia. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":19,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"92o8v\",\"text\":\"Go up the rope spot, [map c=\\\"33049,32428,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7ffct\",\"text\":\"Go down the hole and stairs, [map c=\\\"33050,32442,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dduds\",\"text\":\"Go up the ladder, [map c=\\\"33017,32454,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6c3jf\",\"text\":\"Levitate up, [map c=\\\"33026,32441,7\\\" map]here[/map], and go down the stairs.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fp778\",\"text\":\"Go down 5 floors until you reach the Grim Reapers.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 643,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 2,
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
          "id": 214,
          "type": "Creature",
          "title": "Spectre",
          "formerNames": null,
          "healthPoints": 1350,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcGVjdHJlLmdpZiJ9"
        },
        {
          "id": 809,
          "type": "Creature",
          "title": "Gravedigger",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 950,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZWRpZ2dlci5naWYifQ=="
        },
        {
          "id": 21,
          "type": "Creature",
          "title": "Banshee",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CYW5zaGVlLmdpZiJ9"
        },
        {
          "id": 800,
          "type": "Creature",
          "title": "Shadow Pupil",
          "formerNames": null,
          "healthPoints": 450,
          "xpPoints": 410,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TaGFkb3dfUHVwaWwuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 234,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 80000,
      "percentage": 0.03,
      "isInestimable": false,
      "item": {
        "id": 1928,
        "type": "Item",
        "title": "Sweet Smelling Bait",
        "pluralizedTitle": "Sweet Smelling Baits",
        "formerNames": null,
        "minValue": 80000,
        "maxValue": 150000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N3ZWV0X1NtZWxsaW5nX0JhaXQuZ2lmIn0="
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
      "id": 2317,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 32000,
      "percentage": 0.12,
      "isInestimable": false,
      "item": {
        "id": 795,
        "type": "Item",
        "title": "Demonbone Amulet",
        "pluralizedTitle": "Demonbone Amulets",
        "formerNames": null,
        "minValue": 32000,
        "maxValue": 100000,
        "npcBuyValue": 32000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RlbW9uYm9uZV9BbXVsZXQuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 76,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 57,
        "type": "DungeonRequiredItem",
        "dungeonId": 2,
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
      "huntId": 98
    },
    {
      "id": 77,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 58,
        "type": "DungeonRequiredItem",
        "dungeonId": 2,
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
      "huntId": 98
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 385,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "paladin",
      "supply": {
        "id": 11,
        "type": "Supply",
        "item": {
          "id": 1061,
          "type": "Item",
          "title": "Great Spirit Potion",
          "pluralizedTitle": "Great Spirit Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X1NwaXJpdF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 386,
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
      "id": 387,
      "type": "HuntSupply",
      "quantity": 1000,
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
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:46:13.557Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:46:13.536Z",
  "youtubeChannel": {
    "id": 39,
    "type": "YoutubeChannel",
    "name": "LukeS",
    "youtubeId": "UCT_lQuP58L-HsVq5ZBF-YHA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
