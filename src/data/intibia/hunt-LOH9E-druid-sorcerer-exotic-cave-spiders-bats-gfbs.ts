// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "LOH9E",
  "type": "Hunt",
  "title": "Spiders + Bats + GFBs",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTExL25MeXJjMkVOLTAxMi1kcnVpZC1zb3JjZXJlci1leG90aWMtY2F2ZS1zcGlkZXJzLWJhdHMtZ2Zicy1taW4ucG5nIn0=",
  "minLevel": 100,
  "maxLevel": 200,
  "minProfitH": 40000,
  "maxProfitH": 150000,
  "minXpH": 750000,
  "maxXpH": 1000000,
  "upvoteCount": 11,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 40,
    "type": "User",
    "username": "yunghike",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "AGM9bd0CIxo",
  "videoStartAt": null,
  "centerCoordinates": "33919,31469,7",
  "instructions": "<p>Get physical protection set because Exotic Cave Spiders can hit pretty hard.</p>\n<p></p>\n<p>🕷️ Avoid getting boxes with more than 3-4 Exotic Cave spiders, because they can oneshot you.</p>\n<p></p>\n<p>Try to run around, shoot GFB's 🔥 and use your UE. Loot every Terra Item, mushrooms, platinum coins and spider silks 🕸️.</p>",
  "createdAt": "2021-12-06T14:11:37.148Z",
  "updatedAt": "2024-05-06T01:29:17.085Z",
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
      "id": 79,
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
      "huntId": 111
    }
  ],
  "huntRequirements": [
    {
      "id": 214,
      "type": "HuntRequirement",
      "huntId": 111,
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
      "id": 456,
      "type": "HuntSupply",
      "quantity": 1000,
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
    },
    {
      "id": 457,
      "type": "HuntSupply",
      "quantity": 350,
      "vocation": "mage",
      "supply": {
        "id": 10,
        "type": "Supply",
        "item": {
          "id": 3059,
          "type": "Item",
          "title": "Ultimate Mana Potion",
          "pluralizedTitle": "Ultimate Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX01hbmFfUG90aW9uLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-12-09T19:17:31.112Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-09T19:17:31.087Z",
  "youtubeChannel": {
    "id": 42,
    "type": "YoutubeChannel",
    "name": "DoGolpe Produções",
    "youtubeId": "UCFCrh_eDa-xLUcSCrfqW5CA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
