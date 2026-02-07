// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "1sLpU",
  "type": "Hunt",
  "title": "Minotaurs",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTA4L1NxUEpQTnJ5LTIucG5nIn0=",
  "minLevel": 300,
  "maxLevel": 500,
  "minProfitH": 200000,
  "maxProfitH": 450000,
  "minXpH": 1200000,
  "maxXpH": 1500000,
  "upvoteCount": 4,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 31,
    "type": "User",
    "username": "Xarkost",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "HpWTfp390II",
  "videoStartAt": null,
  "centerCoordinates": "33627,31950,13",
  "instructions": "<p>One thing to remember is that the raids take place every hour after the servers have come up and it is random which one you will find active. Once the raid starts it only lasts for around 45 minutes.&nbsp;</p>\n<p></p>\n<p>🛡️ You'll be taking mostly physical damage in this spawn. There are some other elemental damage types but they are all pretty negligible. You may want to wear a Sleep Shawl or Enchanted Pendulet for additional physical protection but their elemental resistances won't help.</p>\n<p></p>\n<p>⚔️ You'll also want to be careful of the Minotaur Totem and the Glooth Powered Minotaur. The Minotaur Totem will heal all creatures within its range. Make sure not to get trapped by one or you may have trouble escaping. It is especially dangerous if 2 Minotaur Totems are within range of each other as they each can heal 500-1000 health per turn. The Glooth Powered Minotaurs have to be lured over special tiles called Glooth Extractors. Once you do this they will become a Depowered Minotaur which makes them much easier to kill.</p>",
  "createdAt": "2021-12-06T13:24:39.386Z",
  "updatedAt": "2024-03-17T23:12:29.535Z",
  "dungeon": {
    "id": 430,
    "type": "Dungeon",
    "title": "Oramond Factory Raids",
    "accountStatus": "premium",
    "entranceCoordinates": "33552,31952,13",
    "entranceDirections": "{\"blocks\":[{\"key\":\"c05op\",\"text\":\"Oramond Factory Raids are located below Rathleton. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":21,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"a7kcn\",\"text\":\"In Rathleton, step in the slime slide, [map c=\\\"33651,31941,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f7dhl\",\"text\":\"Go down the ladder, [map c=\\\"33566,31965,12\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2m579\",\"text\":\"Access the teleport of the desired hunt: east (minotaurs), south (mechanical mobs) or west (wild life).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
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
      "id": 1174,
      "type": "DungeonSection",
      "name": "East (Minotaurs)",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 930,
          "type": "Creature",
          "title": "Glooth Powered Minotaur",
          "formerNames": null,
          "healthPoints": null,
          "xpPoints": null,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HbG9vdGhfUG93ZXJlZF9NaW5vdGF1ci5naWYifQ=="
        },
        {
          "id": 862,
          "type": "Creature",
          "title": "Moohtant",
          "formerNames": null,
          "healthPoints": 3200,
          "xpPoints": 2600,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Nb29odGFudC5naWYifQ=="
        },
        {
          "id": 860,
          "type": "Creature",
          "title": "Execowtioner",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FeGVjb3d0aW9uZXIuZ2lmIn0="
        },
        {
          "id": 859,
          "type": "Creature",
          "title": "Minotaur Amazon",
          "formerNames": null,
          "healthPoints": 2600,
          "xpPoints": 2200,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9BbWF6b24uZ2lmIn0="
        },
        {
          "id": 861,
          "type": "Creature",
          "title": "Minotaur Hunter",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9IdW50ZXIuZ2lmIn0="
        },
        {
          "id": 932,
          "type": "Creature",
          "title": "Minotaur Invader",
          "formerNames": null,
          "healthPoints": 1850,
          "xpPoints": 1600,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9JbnZhZGVyLmdpZiJ9"
        },
        {
          "id": 863,
          "type": "Creature",
          "title": "Worm Priestess",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 1500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb3JtX1ByaWVzdGVzcy5naWYifQ=="
        },
        {
          "id": 929,
          "type": "Creature",
          "title": "Depowered Minotaur",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 1100,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZXBvd2VyZWRfTWlub3RhdXIuZ2lmIn0="
        },
        {
          "id": 857,
          "type": "Creature",
          "title": "Mooh'Tah Warrior",
          "formerNames": null,
          "healthPoints": 1200,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Nb29oXzI3VGFoX1dhcnJpb3IuZ2lmIn0="
        },
        {
          "id": 931,
          "type": "Creature",
          "title": "Minotaur Totem",
          "formerNames": null,
          "healthPoints": 6000,
          "xpPoints": 500,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9Ub3RlbS5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 7363,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 18000,
      "percentage": 0.51,
      "isInestimable": false,
      "item": {
        "id": 944,
        "type": "Item",
        "title": "Butcher's Axe",
        "pluralizedTitle": "Butcher's Axes",
        "formerNames": null,
        "minValue": 18000,
        "maxValue": 340000,
        "npcBuyValue": 18000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0J1dGNoZXJfMjdzX0F4ZS5naWYifQ=="
      }
    },
    {
      "id": 7399,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 14000,
      "percentage": 0.97,
      "isInestimable": false,
      "item": {
        "id": 2701,
        "type": "Item",
        "title": "Moohtant Cudgel",
        "pluralizedTitle": "Moohtant Cudgels",
        "formerNames": null,
        "minValue": 14000,
        "maxValue": null,
        "npcBuyValue": 14000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01vb2h0YW50X0N1ZGdlbC5naWYifQ=="
      }
    },
    {
      "id": 7361,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.63,
      "isInestimable": false,
      "item": {
        "id": 130,
        "type": "Item",
        "title": "Crown Armor",
        "pluralizedTitle": "Crown Armors",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": 15000,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Nyb3duX0FybW9yLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 523,
      "type": "HuntSupply",
      "quantity": 500,
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
      "id": 524,
      "type": "HuntSupply",
      "quantity": 1000,
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
    },
    {
      "id": 525,
      "type": "HuntSupply",
      "quantity": 800,
      "vocation": "paladin",
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
  "lootUpdatedAt": "2021-12-19T06:15:38.776Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-19T06:15:38.751Z",
  "youtubeChannel": {
    "id": 41,
    "type": "YoutubeChannel",
    "name": "Xarkost",
    "youtubeId": "UC-QoyM7EJJQOf3obGbjaINw",
    "verifiedAt": "Wed Dec 08 2021 23:46:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 31,
      "type": "User",
      "username": "Xarkost",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
