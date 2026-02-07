// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Bq01U",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTYzL0NDMlhqSXRPLTE1LUFzdXJhX01pcnJvci1taW4ucG5nIn0=",
  "minLevel": 400,
  "maxLevel": 1500,
  "minProfitH": 300000,
  "maxProfitH": 1000000,
  "minXpH": 4000000,
  "maxXpH": 6000000,
  "upvoteCount": 31,
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
  "videoId": "th1jzPPJzhk",
  "videoStartAt": 21,
  "centerCoordinates": "32851,32786,9",
  "instructions": "<p>Great place for knights level 400+ to make both experience and profit. It's near to the city and easy to refill.</p>\n<p></p>\n<p>Lure the creatures and rotate you attack spells to kill them.</p>\n<p></p>\n<p>⚠️ It's very important to trap the True Asuras to be able to hunt properly here. Watch <a href=\"http://youtube.com/watch?v=_Y0QfX8e1U8\">this video</a> to learn how to do it.</p>\n<p></p>\n<p>⚡️<strong> Charms</strong></p>\n<p>Dodge in Midnight Asura, Enflame in Frost Flower Asura and Low Blow in Dawnfire Asura.</p>\n<p></p>\n<p>⚗️ <strong>Imbuements</strong></p>\n<ul>\n  <li>2x Powerful Mana</li>\n  <li>1x Powerful Life</li>\n  <li>1x Powerful Strike</li>\n  <li>1x Powerful Skill</li>\n</ul>",
  "createdAt": "2022-01-08T14:43:26.078Z",
  "updatedAt": "2024-09-13T16:49:55.522Z",
  "dungeon": {
    "id": 386,
    "type": "Dungeon",
    "title": "Asura Mirror",
    "accountStatus": "premium",
    "entranceCoordinates": "32851,32786,9",
    "entranceDirections": "{\"blocks\":[{\"key\":\"4ced0\",\"text\":\"Asura Mirror (a.k.a Vaults) is located in Port Hope. After completing the Asura Palace Quest and The Lost Brother Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":74,\"length\":18,\"key\":0},{\"offset\":97,\"length\":22,\"key\":1}],\"data\":{}},{\"key\":\"634h8\",\"text\":\"From Port Hope, walk to Asura Palace, [map c=\\\"32949,32693,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"a1gi8\",\"text\":\"Use the Mirror on the ground floor, [map c=\\\"32950,32670,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/Asura_Palace_Quest\",\"title\":\"Asura Palace Quest\",\"url\":\"https://tibia.fandom.com/wiki/Asura_Palace_Quest\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/The_Lost_Brother_Quest\",\"title\":\"The Lost Brother Quest\",\"url\":\"https://tibia.fandom.com/wiki/The_Lost_Brother_Quest\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 13,
      "type": "City",
      "name": "Port Hope"
    }
  },
  "requirements": [
    {
      "id": 73,
      "type": "DungeonRequirement",
      "dungeonId": 386,
      "description": "The Lost Brother Quest done",
      "link": "https://tibia.fandom.com/wiki/The_Lost_Brother_Quest"
    },
    {
      "id": 74,
      "type": "DungeonRequirement",
      "dungeonId": 386,
      "description": "Asura Palace Quest done",
      "link": "https://tibia.fandom.com/wiki/Asura_Palace_Quest"
    },
    {
      "id": 298,
      "type": "DungeonRequirement",
      "dungeonId": 386,
      "description": "Mission \"The Lament\" started of The Secret Library Quest ",
      "link": "https://tibia.fandom.com/wiki/The_Secret_Library_Quest#The_Lament"
    }
  ],
  "sections": [
    {
      "id": 473,
      "type": "DungeonSection",
      "name": "Secret Basement -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1283,
          "type": "Creature",
          "title": "True Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 8500,
          "xpPoints": 7475,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UcnVlX0Rhd25maXJlX0FzdXJhLmdpZiJ9"
        },
        {
          "id": 1284,
          "type": "Creature",
          "title": "True Midnight Asura",
          "formerNames": null,
          "healthPoints": 9000,
          "xpPoints": 7313,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UcnVlX01pZG5pZ2h0X0FzdXJhLmdpZiJ9"
        },
        {
          "id": 1285,
          "type": "Creature",
          "title": "True Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 4000,
          "xpPoints": 7069,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UcnVlX0Zyb3N0X0Zsb3dlcl9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 1282,
          "type": "Creature",
          "title": "Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9GbG93ZXJfQXN1cmEuZ2lmIn0="
        },
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 3874,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 22000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 1297,
        "type": "Item",
        "title": "Onyx Flail",
        "pluralizedTitle": "Onyx Flails",
        "formerNames": null,
        "minValue": 22000,
        "maxValue": 50000,
        "npcBuyValue": 22000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ueXhfRmxhaWwuZ2lmIn0="
      }
    },
    {
      "id": 11453,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 20000,
      "percentage": 0.83,
      "isInestimable": false,
      "item": {
        "id": 940,
        "type": "Item",
        "title": "Assassin Dagger",
        "pluralizedTitle": "Assassin Daggers",
        "formerNames": null,
        "minValue": 20000,
        "maxValue": 40000,
        "npcBuyValue": 20000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Fzc2Fzc2luX0RhZ2dlci5naWYifQ=="
      }
    },
    {
      "id": 11391,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 18000,
      "percentage": 0.31,
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
      "id": 130,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 90,
        "type": "DungeonRequiredItem",
        "dungeonId": 386,
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
      "huntId": 163
    }
  ],
  "huntRequirements": [
    {
      "id": 18,
      "type": "HuntRequirement",
      "huntId": 163,
      "dungeonRequirement": {
        "id": 73,
        "type": "DungeonRequirement",
        "dungeonId": 386,
        "description": "The Lost Brother Quest done",
        "link": "https://tibia.fandom.com/wiki/The_Lost_Brother_Quest"
      }
    },
    {
      "id": 24,
      "type": "HuntRequirement",
      "huntId": 163,
      "dungeonRequirement": {
        "id": 74,
        "type": "DungeonRequirement",
        "dungeonId": 386,
        "description": "Asura Palace Quest done",
        "link": "https://tibia.fandom.com/wiki/Asura_Palace_Quest"
      }
    },
    {
      "id": 250,
      "type": "HuntRequirement",
      "huntId": 163,
      "dungeonRequirement": {
        "id": 298,
        "type": "DungeonRequirement",
        "dungeonId": 386,
        "description": "Mission \"The Lament\" started of The Secret Library Quest ",
        "link": "https://tibia.fandom.com/wiki/The_Secret_Library_Quest#The_Lament"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 644,
      "type": "HuntSupply",
      "quantity": 2000,
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
      "id": 645,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "knight",
      "supply": {
        "id": 6,
        "type": "Supply",
        "item": {
          "id": 3058,
          "type": "Item",
          "title": "Supreme Health Potion",
          "pluralizedTitle": "Supreme Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N1cHJlbWVfSGVhbHRoX1BvdGlvbi5naWYifQ=="
        }
      }
    },
    {
      "id": 646,
      "type": "HuntSupply",
      "quantity": 1000,
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
  "lootUpdatedAt": "2022-01-08T15:55:47.266Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T15:48:02.355Z",
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
