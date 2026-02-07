// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Gr7j6",
  "type": "Hunt",
  "title": "Lamassu + Sphynx + SD",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTIwL1hpeWRjaDljLTAwOS1kcnVpZC1zb3JjZXJlci1ueWtyaS1kZWx0YS1sYW1hc3N1LXNwaHlueC1zZC1taW4ucG5nIn0=",
  "minLevel": 80,
  "maxLevel": 300,
  "minProfitH": -70000,
  "maxProfitH": 20000,
  "minXpH": 1000000,
  "maxXpH": 1800000,
  "upvoteCount": 59,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 238,
    "type": "User",
    "username": "Kriskvald",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "JY1IiK408Ns",
  "videoStartAt": null,
  "centerCoordinates": "33845,31475,7",
  "instructions": "<p>Great place to rush xp on mages, the loot can be good depending on your luck but you can have some waste.</p>\n<p></p>\n<p>🛡️ Lure one creature at time. If you are a low level mage, keep distance by running, be with full mana, and always renew your utamo.</p>\n<p></p>\n<p>💀 Attack with SD and never stops. When then first creature got red, lure the next. Loot the creatures at the cooldown of attack.</p>",
  "createdAt": "2021-12-09T20:32:46.239Z",
  "updatedAt": "2024-05-16T07:28:09.340Z",
  "dungeon": {
    "id": 368,
    "type": "Dungeon",
    "title": "Nykri Delta",
    "accountStatus": "premium",
    "entranceCoordinates": "33845,31475,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"abts0\",\"text\":\"Nykri Delta is located north-west of Issavi. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"5ciuu\",\"text\":\"Go from Venore to Issavi.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"elco3\",\"text\":\"Cross the bridge, [map c=\\\"33885,31460,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1jaob\",\"text\":\"Go down [map c=\\\"33871,31457,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
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
  "requirements": [],
  "sections": [
    {
      "id": 1156,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1403,
          "type": "Creature",
          "title": "Lamassu",
          "formerNames": null,
          "healthPoints": 8700,
          "xpPoints": 9000,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYW1hc3N1LmdpZiJ9"
        },
        {
          "id": 1405,
          "type": "Creature",
          "title": "Sphinx",
          "formerNames": null,
          "healthPoints": 8500,
          "xpPoints": 7500,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcGhpbnguZ2lmIn0="
        },
        {
          "id": 125,
          "type": "Creature",
          "title": "Crocodile",
          "formerNames": null,
          "healthPoints": 105,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Dcm9jb2RpbGUuZ2lmIn0="
        },
        {
          "id": 50,
          "type": "Creature",
          "title": "Cobra",
          "formerNames": null,
          "healthPoints": 65,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db2JyYS5naWYifQ=="
        },
        {
          "id": 111,
          "type": "Creature",
          "title": "Crab",
          "formerNames": null,
          "healthPoints": 55,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmFiLmdpZiJ9"
        },
        {
          "id": 510,
          "type": "Creature",
          "title": "Sandcrawler",
          "formerNames": null,
          "healthPoints": 30,
          "xpPoints": 20,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYW5kY3Jhd2xlci5naWYifQ=="
        },
        {
          "id": 175,
          "type": "Creature",
          "title": "Seagull",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TZWFndWxsLmdpZiJ9"
        },
        {
          "id": 14,
          "type": "Creature",
          "title": "Sheep",
          "formerNames": null,
          "healthPoints": 20,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TaGVlcC5naWYifQ=="
        },
        {
          "id": 138,
          "type": "Creature",
          "title": "Flamingo",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GbGFtaW5nby5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 12647,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 1.19,
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
      "id": 12614,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 1.85,
      "isInestimable": false,
      "item": {
        "id": 341,
        "type": "Item",
        "title": "Violet Gem",
        "pluralizedTitle": "Violet Gems",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 100000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Zpb2xldF9HZW0uZ2lmIn0="
      }
    },
    {
      "id": 12645,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6500,
      "percentage": 2.13,
      "isInestimable": false,
      "item": {
        "id": 2269,
        "type": "Item",
        "title": "Wand of Defiance",
        "pluralizedTitle": "Wand of Defiances",
        "formerNames": null,
        "minValue": 6500,
        "maxValue": 450000,
        "npcBuyValue": 6500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhbmRfb2ZfRGVmaWFuY2UuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 534,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "mage",
      "supply": {
        "id": 60,
        "type": "Supply",
        "item": {
          "id": 115,
          "type": "Item",
          "title": "Sudden Death Rune",
          "pluralizedTitle": "Sudden Death Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N1ZGRlbl9EZWF0aF9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 535,
      "type": "HuntSupply",
      "quantity": 300,
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
    }
  ],
  "lootUpdatedAt": "2021-12-17T01:00:36.609Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-17T01:00:36.587Z",
  "youtubeChannel": {
    "id": 20,
    "type": "YoutubeChannel",
    "name": "Mp3_Player",
    "youtubeId": "UCSKoJ_uQlpvieN0NfCtg_wA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
