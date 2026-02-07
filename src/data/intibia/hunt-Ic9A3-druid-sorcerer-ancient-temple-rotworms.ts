// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Ic9A3",
  "type": "Hunt",
  "title": null,
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNTIvWk5oeFhvcEgtSWM5QTMtbWluLnBuZyJ9",
  "minLevel": 8,
  "maxLevel": 15,
  "minProfitH": -2000,
  "maxProfitH": 2000,
  "minXpH": 15000,
  "maxXpH": 18000,
  "upvoteCount": 2,
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
  "videoId": "0Phq4-FCmgI",
  "videoStartAt": 70,
  "centerCoordinates": "32356,32170,7",
  "instructions": "<p>Try to always be attacking some creature. Walk through the cave luring and killing the rotworms with your wand/rod.</p>\n<p></p>\n<p>Heal with exura/exura infir 💖.</p>\n<p></p>\n<p>If you have money, it's very important to buy a pair of Boots of Haste 👟. It will improve a lot your experience.</p>",
  "createdAt": "2021-11-21T17:57:44.305Z",
  "updatedAt": "2024-12-22T00:06:00.151Z",
  "dungeon": {
    "id": 382,
    "type": "Dungeon",
    "title": "Ancient Temple Rotworms",
    "accountStatus": "free",
    "entranceCoordinates": "32355,32155,11",
    "entranceDirections": "{\"blocks\":[{\"key\":\"ev3tu\",\"text\":\"Ancient Temple Rotworms is located north of Thais. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":23,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"7igal\",\"text\":\"Enter the Ancient Temple ([map c=\\\"32356,32170,7\\\" map]here[/map]) and go down one floor.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1neb0\",\"text\":\"Walk to the north and go downstairs, [map c=\\\"32354,32138,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c5guq\",\"text\":\"Go down one more floor and go to the south, [map c=\\\"32358,32154,11\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 3,
      "type": "City",
      "name": "Thais"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 423,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 161,
          "type": "Creature",
          "title": "Carrion Worm",
          "formerNames": null,
          "healthPoints": 145,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DYXJyaW9uX1dvcm0uZ2lmIn0="
        },
        {
          "id": 6,
          "type": "Creature",
          "title": "Rotworm",
          "formerNames": null,
          "healthPoints": 65,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Sb3R3b3JtLmdpZiJ9"
        },
        {
          "id": 66,
          "type": "Creature",
          "title": "Skeleton",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 35,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ta2VsZXRvbi5naWYifQ=="
        },
        {
          "id": 53,
          "type": "Creature",
          "title": "Poison Spider",
          "formerNames": null,
          "healthPoints": 26,
          "xpPoints": 22,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Qb2lzb25fU3BpZGVyLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 730,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 66,
      "percentage": 7.85,
      "isInestimable": false,
      "item": {
        "id": 114,
        "type": "Item",
        "title": "Viking Helmet",
        "pluralizedTitle": "Viking Helmets",
        "formerNames": null,
        "minValue": 66,
        "maxValue": null,
        "npcBuyValue": 66,
        "npcSellValue": 265,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Zpa2luZ19IZWxtZXQuZ2lmIn0="
      }
    },
    {
      "id": 1640,
      "type": "Loot",
      "min": 1,
      "max": 45,
      "value": 45,
      "percentage": 57.76,
      "isInestimable": false,
      "item": {
        "id": 95,
        "type": "Item",
        "title": "Gold Coin",
        "pluralizedTitle": "Gold Coins",
        "formerNames": null,
        "minValue": 1,
        "maxValue": null,
        "npcBuyValue": 1,
        "npcSellValue": 1,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dvbGRfQ29pbi5naWYifQ=="
      }
    },
    {
      "id": 1641,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35,
      "percentage": 10.01,
      "isInestimable": false,
      "item": {
        "id": 1595,
        "type": "Item",
        "title": "Carrion Worm Fang",
        "pluralizedTitle": "Carrion Worm Fangs",
        "formerNames": null,
        "minValue": 35,
        "maxValue": null,
        "npcBuyValue": 35,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NhcnJpb25fV29ybV9GYW5nLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 43,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 32,
        "type": "DungeonRequiredItem",
        "dungeonId": 382,
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
      "huntId": 52
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 169,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "mage",
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
    }
  ],
  "lootUpdatedAt": "2021-11-21T18:14:57.789Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-21T18:14:57.750Z",
  "youtubeChannel": {
    "id": 23,
    "type": "YoutubeChannel",
    "name": "Barba Negra",
    "youtubeId": "UC2VNnwae_tUpKZ0rV4GDH8A",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
