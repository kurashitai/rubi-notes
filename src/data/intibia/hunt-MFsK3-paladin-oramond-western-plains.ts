// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "MFsK3",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMjU0L1hCcXJVTTA0LTQtT3JhbW9uZF9XZXN0ZXJuX1BsYWlucy1taW4ucG5nIn0=",
  "minLevel": 200,
  "maxLevel": 300,
  "minProfitH": -250000,
  "maxProfitH": 0,
  "minXpH": 1500000,
  "maxXpH": 2200000,
  "upvoteCount": 9,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 3922,
    "type": "User",
    "username": "TibiaPanal",
    "avatar": "orc",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "AK_dpnskv7Y",
  "videoStartAt": null,
  "centerCoordinates": "33526,31933,7",
  "instructions": "<p>For best exp follow the route on the video, keep luring as many monster as you can and attack them with area spells and runes. Diamond arrows are great here (try to attack more than 8 creatures at a time).</p>\n<p></p>\n<p>Earth protection equipments are recommended.</p>\n<p></p>\n<p>The loot is quite bad here so dont bother looting or just try to loot the green/blue items that you find. The loot aspect is compensated with experience and multiple charms you can complete.</p>",
  "createdAt": "2022-05-19T18:01:51.712Z",
  "updatedAt": "2025-12-03T13:15:19.673Z",
  "dungeon": {
    "id": 335,
    "type": "Dungeon",
    "title": "Oramond Western Plains",
    "accountStatus": "premium",
    "entranceCoordinates": "33526,31933,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"1pniv\",\"text\":\"Oramond Western Plains is located west of Rathleton. To get there, levitate down [map c=\\\"33574,31915,6\\\" map]here[/map] and walk to the west.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":22,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 14,
      "type": "City",
      "name": "Rathleton"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1191,
      "type": "DungeonSection",
      "name": "Raid",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 194,
          "type": "Creature",
          "title": "Quara Hydromancer Scout",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9RdWFyYV9IeWRyb21hbmNlcl9TY291dC5naWYifQ=="
        },
        {
          "id": 193,
          "type": "Creature",
          "title": "Quara Pincher Scout",
          "formerNames": null,
          "healthPoints": 775,
          "xpPoints": 600,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9RdWFyYV9QaW5jaGVyX1Njb3V0LmdpZiJ9"
        },
        {
          "id": 191,
          "type": "Creature",
          "title": "Quara Predator Scout",
          "formerNames": null,
          "healthPoints": 890,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9RdWFyYV9QcmVkYXRvcl9TY291dC5naWYifQ=="
        },
        {
          "id": 195,
          "type": "Creature",
          "title": "Quara Constrictor Scout",
          "formerNames": null,
          "healthPoints": 450,
          "xpPoints": 200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9RdWFyYV9Db25zdHJpY3Rvcl9TY291dC5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 1943,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.52,
      "isInestimable": false,
      "item": {
        "id": 41,
        "type": "Item",
        "title": "Knight Armor",
        "pluralizedTitle": "Knight Armors",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0tuaWdodF9Bcm1vci5naWYifQ=="
      }
    },
    {
      "id": 1942,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000,
      "percentage": 0.9,
      "isInestimable": false,
      "item": {
        "id": 451,
        "type": "Item",
        "title": "Wand of Cosmic Energy",
        "pluralizedTitle": "Wand of Cosmic Energies",
        "formerNames": null,
        "minValue": 2000,
        "maxValue": null,
        "npcBuyValue": 2000,
        "npcSellValue": 10000,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhbmRfb2ZfQ29zbWljX0VuZXJneS5naWYifQ=="
      }
    },
    {
      "id": 1916,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1500,
      "percentage": 0.95,
      "isInestimable": false,
      "item": {
        "id": 1075,
        "type": "Item",
        "title": "Northwind Rod",
        "pluralizedTitle": "Northwind Rods",
        "formerNames": null,
        "minValue": 1500,
        "maxValue": null,
        "npcBuyValue": 1500,
        "npcSellValue": 7500,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL05vcnRod2luZF9Sb2QuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 931,
      "type": "HuntSupply",
      "quantity": 700,
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
      "id": 932,
      "type": "HuntSupply",
      "quantity": 100,
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
      "id": 933,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "paladin",
      "supply": {
        "id": 12,
        "type": "Supply",
        "item": {
          "id": 3060,
          "type": "Item",
          "title": "Ultimate Spirit Potion",
          "pluralizedTitle": "Ultimate Spirit Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX1NwaXJpdF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 934,
      "type": "HuntSupply",
      "quantity": 600,
      "vocation": "paladin",
      "supply": {
        "id": 61,
        "type": "Supply",
        "item": {
          "id": 1956,
          "type": "Item",
          "title": "Thunderstorm Rune",
          "pluralizedTitle": "Thunderstorm Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RodW5kZXJzdG9ybV9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 935,
      "type": "HuntSupply",
      "quantity": 1200,
      "vocation": "paladin",
      "supply": {
        "id": 123,
        "type": "Supply",
        "item": {
          "id": 3340,
          "type": "Item",
          "title": "Diamond Arrow",
          "pluralizedTitle": "Diamond Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RpYW1vbmRfQXJyb3cuZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-07-02T19:09:07.934Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-07-02T19:09:07.883Z",
  "youtubeChannel": {
    "id": 74,
    "type": "YoutubeChannel",
    "name": "TibiaPanal",
    "youtubeId": "UCCMJJzbrfG4O45V_qxzSg3A",
    "verifiedAt": "Sat Jul 02 2022 16:07:23 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 3922,
      "type": "User",
      "username": "TibiaPanal",
      "avatar": "orc",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
