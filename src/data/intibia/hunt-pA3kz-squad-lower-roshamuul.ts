// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "pA3kz",
  "type": "Hunt",
  "title": null,
  "vocation": null,
  "teamSize": "squad",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTEzL1U4REtBTXlOLXBBM2t6LW1pbi5wbmcifQ==",
  "minLevel": 100,
  "maxLevel": 200,
  "minProfitH": -100000,
  "maxProfitH": 50000,
  "minXpH": 1000000,
  "maxXpH": 1500000,
  "upvoteCount": 0,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "es",
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
  "videoId": "g_qDkJL00c0",
  "videoStartAt": null,
  "centerCoordinates": "33613,32469,7",
  "instructions": "<ul>\n  <li>EK with good skills can easily take a full box</li>\n  <li>💖 ED should sio EK every 1-2 rounds, same goes to MS with UHR.</li>\n  <li>EK should also avoid getting beamed by Frazzlemaws since they hit pretty hard.</li>\n  <li>Don't go further than the bridge.</li>\n  <li>You can also hunt Shockheads by going down the stairs on the eastern part of this place, although EK should use utamo when blocking Shockheads because they deal a lot of damage.</li>\n  <li>🔥 Mages can also stay on fire bombs since the Silencers don't walk on fire.</li>\n  <li>Mages should use all of their waves and UE's (don't forget that Silencers and Shock Heads are 100% resistant to earth damage and Shock Heads are also 100% resistant to fire damage).</li>\n  <li>🏹 RP should use diamond arrows and Exevo Mas San.&nbsp;</li>\n</ul>",
  "createdAt": "2021-12-06T14:34:50.655Z",
  "updatedAt": "2024-03-17T21:39:39.765Z",
  "dungeon": {
    "id": 250,
    "type": "Dungeon",
    "title": "Lower Roshamuul",
    "accountStatus": "premium",
    "entranceCoordinates": "33528,32530,6",
    "entranceDirections": "{\"blocks\":[{\"key\":\"f05c7\",\"text\":\"Lower Roshamuul is located south of Roshamuul. The area includes a part of the mountain and the beach to the east of the camp. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"115g\",\"text\":\"Travel from Thais to Roshamuul.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4bhcc\",\"text\":\"Go up the hill, [map c=\\\"33523,32548,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 15,
      "type": "City",
      "name": "Roshamuul"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1048,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 838,
          "type": "Creature",
          "title": "Silencer",
          "formerNames": null,
          "healthPoints": 5400,
          "xpPoints": 5100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TaWxlbmNlci5naWYifQ=="
        },
        {
          "id": 832,
          "type": "Creature",
          "title": "Frazzlemaw",
          "formerNames": null,
          "healthPoints": 4100,
          "xpPoints": 3740,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GcmF6emxlbWF3LmdpZiJ9"
        },
        {
          "id": 836,
          "type": "Creature",
          "title": "Shock Head",
          "formerNames": null,
          "healthPoints": 4200,
          "xpPoints": 2300,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TaG9ja19IZWFkLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 6846,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35000,
      "percentage": 0.77,
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
      "id": 6924,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.17,
      "isInestimable": false,
      "item": {
        "id": 144,
        "type": "Item",
        "title": "Royal Helmet",
        "pluralizedTitle": "Royal Helmets",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 35000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JveWFsX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 6965,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.48,
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
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 423,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "druid",
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
      "id": 424,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "druid",
      "supply": {
        "id": 39,
        "type": "Supply",
        "item": {
          "id": 1947,
          "type": "Item",
          "title": "Fire Bomb Rune",
          "pluralizedTitle": "Fire Bomb Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfQm9tYl9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 425,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "sorcerer",
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
      "id": 426,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "sorcerer",
      "supply": {
        "id": 62,
        "type": "Supply",
        "item": {
          "id": 2371,
          "type": "Item",
          "title": "Ultimate Healing Rune (Item)",
          "pluralizedTitle": "Ultimate Healing Rune (Item)s",
          "formerNames": "Ultimate healing rune",
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX0hlYWxpbmdfUnVuZV9fMjhJdGVtXzI5LmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-12-17T18:30:05.068Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-12T12:41:40.098Z",
  "youtubeChannel": {
    "id": 46,
    "type": "YoutubeChannel",
    "name": "Naneex",
    "youtubeId": "UCWeo4axPpnPZixdmJSA8e0A",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Time x4"
} as const;

export default hunt;
