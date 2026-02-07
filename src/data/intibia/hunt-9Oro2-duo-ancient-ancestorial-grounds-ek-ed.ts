// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "9Oro2",
  "type": "Hunt",
  "title": "EK + ED",
  "vocation": null,
  "teamSize": "duo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTcyL1RJVTR0cWRhLTlPcm8yLW1pbi5wbmcifQ==",
  "minLevel": 350,
  "maxLevel": 800,
  "minProfitH": 800000,
  "maxProfitH": 1000000,
  "minXpH": 3500000,
  "maxXpH": 4000000,
  "upvoteCount": 9,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 209,
    "type": "User",
    "username": "Icarouo",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": "guard"
  },
  "videoId": "Bz5GgcAicfc",
  "videoStartAt": 7,
  "centerCoordinates": "33573,31441,14",
  "instructions": "<p>Good experience and very good profit for duos level 350+ (EK + ED).</p>\n<p></p>\n<p>⚔️ Lure the creatures, make a box in each spot (🎥 04:38) and the druid attack with earth spells. The druid must bring poison bombs to not get attacked by monsters out of the box.</p>\n<p></p>\n<p>🛡️<strong> Prismatic Ring</strong>, <strong>Prismatic Necklace</strong> and <strong>Gil Necklace</strong> for lower lvls will help with full box or overlures.</p>\n<p></p>\n<p>⚗️<strong> Dodge </strong>on scout can help you survive there.</p>",
  "createdAt": "2022-01-14T01:00:44.651Z",
  "updatedAt": "2024-03-18T00:15:13.464Z",
  "dungeon": {
    "id": 341,
    "type": "Dungeon",
    "title": "Ancient Ancestorial Grounds",
    "accountStatus": "premium",
    "entranceCoordinates": "33573,31441,14",
    "entranceDirections": "{\"blocks\":[{\"key\":\"7fsv7\",\"text\":\"Ancient Ancestorial Grounds is located in the depths of Gray Beach. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":27,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"a16im\",\"text\":\"Travel to Gray Island from Ab'Dendriel, Edron, Venore or Darashia.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"d134a\",\"text\":\"Go down the hole to the west, cross the water teleport and go up the hole.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"b85o4\",\"text\":\"Once in Gray Beach head to the east and go down [map c=\\\"33514,31323,7\\\" map]this hole[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1r891\",\"text\":\"Go down all of the stairs and go two floors up to the east, [map c=\\\"33522,31367,15\\\" map]here[/map] and [map c=\\\"33562,31380,14\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"31utc\",\"text\":\"Pass through the teleport [map c=\\\"33584,31388,13\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 11,
      "type": "City",
      "name": "Gray Beach"
    }
  },
  "requirements": [
    {
      "id": 67,
      "type": "DungeonRequirement",
      "dungeonId": 341,
      "description": "Mission \"Liquid Death\" done of The Secret Library Quest",
      "link": "https://tibia.fandom.com/wiki/The_Secret_Library_Quest"
    }
  ],
  "sections": [
    {
      "id": 341,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1323,
          "type": "Creature",
          "title": "Deathling Spellsinger",
          "formerNames": null,
          "healthPoints": 7200,
          "xpPoints": 6400,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZWF0aGxpbmdfU3BlbGxzaW5nZXIuZ2lmIn0="
        },
        {
          "id": 1267,
          "type": "Creature",
          "title": "Deathling Scout",
          "formerNames": null,
          "healthPoints": 7200,
          "xpPoints": 6300,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZWF0aGxpbmdfU2NvdXQuZ2lmIn0="
        },
        {
          "id": 653,
          "type": "Creature",
          "title": "Deepling Guard",
          "formerNames": null,
          "healthPoints": 1900,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZWVwbGluZ19HdWFyZC5naWYifQ=="
        },
        {
          "id": 652,
          "type": "Creature",
          "title": "Deepling Warrior",
          "formerNames": null,
          "healthPoints": 1600,
          "xpPoints": 1500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZWVwbGluZ19XYXJyaW9yLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 5354,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000000,
      "percentage": 0.02,
      "isInestimable": false,
      "item": {
        "id": 2144,
        "type": "Item",
        "title": "Foxtail",
        "pluralizedTitle": "Foxtails",
        "formerNames": null,
        "minValue": 6000000,
        "maxValue": 9000000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZveHRhaWwuZ2lmIn0="
      }
    },
    {
      "id": 5352,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.41,
      "isInestimable": false,
      "item": {
        "id": 2159,
        "type": "Item",
        "title": "Ornate Crossbow",
        "pluralizedTitle": "Ornate Crossbows",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": null,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ybmF0ZV9Dcm9zc2Jvdy5naWYifQ=="
      }
    },
    {
      "id": 5339,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.51,
      "isInestimable": false,
      "item": {
        "id": 2129,
        "type": "Item",
        "title": "Warrior's Axe",
        "pluralizedTitle": "Warrior's Axes",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 11000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhcnJpb3JfMjdzX0F4ZS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 8,
      "type": "HuntRequirement",
      "huntId": 172,
      "dungeonRequirement": {
        "id": 67,
        "type": "DungeonRequirement",
        "dungeonId": 341,
        "description": "Mission \"Liquid Death\" done of The Secret Library Quest",
        "link": "https://tibia.fandom.com/wiki/The_Secret_Library_Quest"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 691,
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
      "id": 692,
      "type": "HuntSupply",
      "quantity": 50,
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
      "id": 693,
      "type": "HuntSupply",
      "quantity": 150,
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
      "id": 694,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "druid",
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
    },
    {
      "id": 695,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "druid",
      "supply": {
        "id": 59,
        "type": "Supply",
        "item": {
          "id": 1961,
          "type": "Item",
          "title": "Stone Shower Rune",
          "pluralizedTitle": "Stone Shower Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0b25lX1Nob3dlcl9SdW5lLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-14T02:46:44.837Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-14T02:46:44.818Z",
  "youtubeChannel": {
    "id": 43,
    "type": "YoutubeChannel",
    "name": "Icarouou",
    "youtubeId": "UCzya2oco3fcaBOtnn1-Bl4A",
    "verifiedAt": "Thu Dec 09 2021 16:34:11 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 209,
      "type": "User",
      "username": "Icarouo",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": "guard"
    }
  },
  "rejectText": null,
  "teamTag": "Duo"
} as const;

export default hunt;
