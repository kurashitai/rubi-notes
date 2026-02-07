// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "myJar",
  "type": "Hunt",
  "title": "Werelions + Avalanches",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTAzLzZWdktYd0J2LTEucG5nIn0=",
  "minLevel": 400,
  "maxLevel": 700,
  "minProfitH": 600000,
  "maxProfitH": 850000,
  "minXpH": 2500000,
  "maxXpH": 3000000,
  "upvoteCount": 27,
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
  "videoId": "H0p4P0QVO9Y",
  "videoStartAt": 36,
  "centerCoordinates": "33124,32282,11",
  "instructions": "<p>Great spawn for paladins level 400+. The xp is average but the profit is awesome 💰.</p>\n<p></p>\n<p>🏹 You can attack from distance or close a box with creatures. Lure a group of monsters and shoot arrows + avalanche runes + <em>exevo mas san</em>.</p>\n<p></p>\n<p>🛡️ Equipments:</p>\n<ul>\n  <li>Zaoan Helmet<em> + Powerful Void</em></li>\n  <li>Ghost Chestplate<em> + Powerful Vampirism &amp; Demon Presence</em></li>\n  <li>Living Vine Bow/Rift Bowl<em> + Powerful Vampirism, Void &amp; Critical</em></li>\n  <li>Prismatic Legs</li>\n  <li>Guardian Boots</li>\n  <li>Sleep Shawl</li>\n  <li>Prismatic Ring/Ring of Blue Plasma</li>\n  <li>Leech Torch</li>\n</ul>\n<p></p>\n<p>⚡️ Charms:</p>\n<ul>\n  <li>Dodge on Werelion</li>\n  <li>Freeze on Werelioness</li>\n  <li>Wound on White Lion</li>\n</ul>",
  "createdAt": "2021-11-29T19:23:44.780Z",
  "updatedAt": "2024-03-18T00:11:08.835Z",
  "dungeon": {
    "id": 426,
    "type": "Dungeon",
    "title": "Lion Sanctum",
    "accountStatus": "premium",
    "entranceCoordinates": "33124,32282,11",
    "entranceDirections": "{\"blocks\":[{\"key\":\"abeq1\",\"text\":\"Lion Sanctum is located north-west of Darashia. Access to this area is obtained during the mission An Ancient Feud of the Grimvale Quest. To get here:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":99,\"length\":37,\"key\":0}],\"data\":{}},{\"key\":\"3t8ll\",\"text\":\"Go up [map c=\\\"33159,32364,7\\\" map]this[/map] mountain until the last floor.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bbbgt\",\"text\":\"Use the lion head to be teleported to the spawn.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Grimvale_Quest/Spoiler#An_Ancient_Feud\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [
    {
      "id": 165,
      "type": "DungeonRequirement",
      "dungeonId": 426,
      "description": "Mission \"An Ancient Feud\" done of Grimvale Quest",
      "link": "https://tibia.fandom.com/wiki/Grimvale_Quest/Spoiler#An_Ancient_Feud"
    }
  ],
  "sections": [
    {
      "id": 1043,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1533,
          "type": "Creature",
          "title": "Werelioness",
          "formerNames": null,
          "healthPoints": 3000,
          "xpPoints": 2500,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlbGlvbmVzcy5naWYifQ=="
        },
        {
          "id": 1532,
          "type": "Creature",
          "title": "Werelion",
          "formerNames": null,
          "healthPoints": 2800,
          "xpPoints": 2400,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlbGlvbi5naWYifQ=="
        },
        {
          "id": 1529,
          "type": "Creature",
          "title": "White Lion",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 2300,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaGl0ZV9MaW9uLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 13780,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 1.01,
      "isInestimable": false,
      "item": {
        "id": 1002,
        "type": "Item",
        "title": "Magma Legs",
        "pluralizedTitle": "Magma Legs",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 40000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hZ21hX0xlZ3MuZ2lmIn0="
      }
    },
    {
      "id": 13759,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.93,
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
      "id": 13782,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.6,
      "isInestimable": false,
      "item": {
        "id": 4295,
        "type": "Item",
        "title": "Lion Figurine",
        "pluralizedTitle": "Lion Figurines",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": null,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpb25fRmlndXJpbmUuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 78,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 59,
        "type": "DungeonRequiredItem",
        "dungeonId": 426,
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
      "huntId": 103
    }
  ],
  "huntRequirements": [
    {
      "id": 110,
      "type": "HuntRequirement",
      "huntId": 103,
      "dungeonRequirement": {
        "id": 165,
        "type": "DungeonRequirement",
        "dungeonId": 426,
        "description": "Mission \"An Ancient Feud\" done of Grimvale Quest",
        "link": "https://tibia.fandom.com/wiki/Grimvale_Quest/Spoiler#An_Ancient_Feud"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 405,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "paladin",
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
      "id": 406,
      "type": "HuntSupply",
      "quantity": 780,
      "vocation": "paladin",
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
      "id": 407,
      "type": "HuntSupply",
      "quantity": 450,
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
      "id": 408,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "paladin",
      "supply": {
        "id": 16,
        "type": "Supply",
        "item": {
          "id": 870,
          "type": "Item",
          "title": "Bullseye Potion",
          "pluralizedTitle": "Bullseye Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0J1bGxzZXllX1BvdGlvbi5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:51:33.800Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:51:33.783Z",
  "youtubeChannel": {
    "id": 40,
    "type": "YoutubeChannel",
    "name": "Paulo Melloo",
    "youtubeId": "UC0LtFLqzHPvkVcUPy_kq0Pg",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
