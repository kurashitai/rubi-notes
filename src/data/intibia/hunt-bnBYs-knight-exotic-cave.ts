// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "bnBYs",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTUyL1pVTmI1NFJPLTEyLUV4b3RpY19DYXZlLW1pbi5wbmcifQ==",
  "minLevel": 130,
  "maxLevel": 250,
  "minProfitH": 75000,
  "maxProfitH": 185000,
  "minXpH": 900000,
  "maxXpH": 1400000,
  "upvoteCount": 36,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1266,
    "type": "User",
    "username": "chickenbeard",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "R9UGlt85aoI",
  "videoStartAt": null,
  "centerCoordinates": "33878,31402,8",
  "instructions": "<p>💰 Great place for low level knights, easy to refill, very near to city. It's good to profit also to exp, but the cave usually is very crowded.</p>\n<p></p>\n<p>If you are around level 100 test the box of creatures, lure 5 monsters first, then gradually increase until you get used to the place. But don't worry, the creatures are pretty weak.</p>\n<p></p>\n<p>🔥 Until level 200 you won't have good elemental weapons, but after that (or if you are coming to do bestiary) you may use fire weapons, they are 110% effective against the creatures.</p>\n<p></p>\n<p>⚗️<strong> Imbuements</strong></p>\n<p>Use 1 powerful vampirism and 1 powerful void. There is no need to use more imbuements, only if you want 💸.</p>\n<p></p>\n<p>⚡️<strong> Charms</strong></p>\n<p>There is no need for charms because the creatures here are very weak. If you still want, put DODGE on bats and GUT on spiders.</p>\n<p></p>\n<p>🛡️<strong> Equipments</strong></p>\n<p>Terra protection set. Low levels may bring Silver Amulets if needed.</p>",
  "createdAt": "2022-01-05T15:34:40.695Z",
  "updatedAt": "2024-03-18T00:09:01.226Z",
  "dungeon": {
    "id": 408,
    "type": "Dungeon",
    "title": "Exotic Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "33919,31469,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"c94if\",\"text\":\"Exotic Cave is located north of Issavi. After completing mission Rascacoon of A Pirate's Tail Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":57,\"length\":42,\"key\":0}],\"data\":{}},{\"key\":\"mtbg\",\"text\":\"Go from Venore to Issavi.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"e98pi\",\"text\":\"Walk to [map c=\\\"33919,31469,7\\\" map]this point[/map] and use the shell.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/A_Pirate's_Tail_Quest#Rascacoon\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 19,
      "type": "City",
      "name": "Issavi"
    }
  },
  "requirements": [
    {
      "id": 288,
      "type": "DungeonRequirement",
      "dungeonId": 408,
      "description": "Mission \"Rascacoon\" done of A Pirate's Tail Quest",
      "link": "https://tibia.fandom.com/wiki/A_Pirate's_Tail_Quest#Rascacoon"
    }
  ],
  "sections": [
    {
      "id": 755,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1585,
          "type": "Creature",
          "title": "Exotic Cave Spider",
          "formerNames": null,
          "healthPoints": 1900,
          "xpPoints": 1400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FeG90aWNfQ2F2ZV9TcGlkZXIuZ2lmIn0="
        },
        {
          "id": 1586,
          "type": "Creature",
          "title": "Exotic Bat",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FeG90aWNfQmF0LmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 14289,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.86,
      "isInestimable": false,
      "item": {
        "id": 1001,
        "type": "Item",
        "title": "Terra Mantle",
        "pluralizedTitle": "Terra Mantles",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 20000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RlcnJhX01hbnRsZS5naWYifQ=="
      }
    },
    {
      "id": 14288,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 4000,
      "percentage": 2.91,
      "isInestimable": false,
      "item": {
        "id": 1480,
        "type": "Item",
        "title": "Spider Silk",
        "pluralizedTitle": "Spider Silks",
        "formerNames": null,
        "minValue": 4000,
        "maxValue": 13000,
        "npcBuyValue": 100,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwaWRlcl9TaWxrLmdpZiJ9"
      }
    },
    {
      "id": 14287,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2500,
      "percentage": 4.19,
      "isInestimable": false,
      "item": {
        "id": 1004,
        "type": "Item",
        "title": "Terra Boots",
        "pluralizedTitle": "Terra Boots",
        "formerNames": null,
        "minValue": 2500,
        "maxValue": 10000,
        "npcBuyValue": 2500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RlcnJhX0Jvb3RzLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 122,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 60,
        "type": "DungeonRequiredItem",
        "dungeonId": 408,
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
      "huntId": 152
    }
  ],
  "huntRequirements": [
    {
      "id": 213,
      "type": "HuntRequirement",
      "huntId": 152,
      "dungeonRequirement": {
        "id": 288,
        "type": "DungeonRequirement",
        "dungeonId": 408,
        "description": "Mission \"Rascacoon\" done of A Pirate's Tail Quest",
        "link": "https://tibia.fandom.com/wiki/A_Pirate's_Tail_Quest#Rascacoon"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 586,
      "type": "HuntSupply",
      "quantity": 25,
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
      "id": 587,
      "type": "HuntSupply",
      "quantity": 1000,
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
  "lootUpdatedAt": "2022-01-08T18:02:53.670Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T18:02:53.650Z",
  "youtubeChannel": {
    "id": 1,
    "type": "YoutubeChannel",
    "name": "Henry Knight",
    "youtubeId": "UCgONX028fTKQNrdIWjLN8jg",
    "verifiedAt": "Sat Nov 13 2021 02:10:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 10,
      "type": "User",
      "username": "HenryKnight",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
