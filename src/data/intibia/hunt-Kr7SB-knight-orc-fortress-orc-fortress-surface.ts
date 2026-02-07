// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Kr7SB",
  "type": "Hunt",
  "title": "Orc Fortress Surface",
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTcvNXRUT1VZWWQtMDEyLWtuaWdodC11bGRlcmVrcy1yb2NrLW9yYy1mb3J0cmVzcy1zdXJmYWNlLnBuZyJ9",
  "minLevel": 45,
  "maxLevel": 70,
  "minProfitH": -5000,
  "maxProfitH": 10000,
  "minXpH": 25000,
  "maxXpH": 60000,
  "upvoteCount": 3,
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
  "videoId": "UzgOs9vsKKE",
  "videoStartAt": null,
  "centerCoordinates": "32936,31766,7",
  "instructions": "<p>Good free account hunt for low level knights. You can come here as early as level 45, with skills 60/60+.</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>The orcs drop many heavy items (halberds, two handed swords) and you can make a bagloot if you want.</p>\n<p></p>\n<p>🗺️<strong> Rotation</strong></p>\n<p>Start at the surface, outside of the fortress, and advance as you feel safe. After entering the fortress, go down the ladder and head to the left, on the edge, to avoid getting surrounded by creatures.</p>\n<p></p>\n<p>Focus on the Orc Berserker, which is the creature that will deal the most damage and has little health.</p>\n<p></p>\n<p>Inside the fortress there is no secret, just walk in circles. This guide doesn't cover underground floor.</p>\n<p></p>\n<p>🛡️<strong> Equipments</strong></p>\n<p>Knight Set or better to protect yourself from physical damage.</p>\n<p></p>",
  "createdAt": "2021-11-01T23:15:19.315Z",
  "updatedAt": "2024-03-17T23:57:26.791Z",
  "dungeon": {
    "id": 12,
    "type": "Dungeon",
    "title": "Orc Fortress",
    "accountStatus": "free",
    "entranceCoordinates": "32936,31766,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"fm0l\",\"text\":\"Ulderek's Rock (aka Orc Fortress) is located north-west of Venore and south-east of Ab'dendriel. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":14,\"style\":\"BOLD\"},{\"offset\":20,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"95hod\",\"text\":\"Walk from Venore to the Amazon Camp ([map c=\\\"32816,31917,7\\\" map]here[/map]), and cross the bridge.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bujkg\",\"text\":\"Walk to the fortress entrance ([map c=\\\"32873,31772,7\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 2,
      "type": "City",
      "name": "Venore"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1400,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 63,
          "type": "Creature",
          "title": "Orc Warlord",
          "formerNames": null,
          "healthPoints": 950,
          "xpPoints": 670,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfV2FybG9yZC5naWYifQ=="
        },
        {
          "id": 58,
          "type": "Creature",
          "title": "Orc Leader",
          "formerNames": null,
          "healthPoints": 450,
          "xpPoints": 270,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfTGVhZGVyLmdpZiJ9"
        },
        {
          "id": 61,
          "type": "Creature",
          "title": "Orc Berserker",
          "formerNames": null,
          "healthPoints": 210,
          "xpPoints": 195,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfQmVyc2Vya2VyLmdpZiJ9"
        },
        {
          "id": 31,
          "type": "Creature",
          "title": "Cyclops",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzLmdpZiJ9"
        },
        {
          "id": 59,
          "type": "Creature",
          "title": "Orc Rider",
          "formerNames": null,
          "healthPoints": 180,
          "xpPoints": 110,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfUmlkZXIuZ2lmIn0="
        },
        {
          "id": 60,
          "type": "Creature",
          "title": "Orc Shaman",
          "formerNames": null,
          "healthPoints": 115,
          "xpPoints": 110,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfU2hhbWFuLmdpZiJ9"
        },
        {
          "id": 806,
          "type": "Creature",
          "title": "Rorc",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 105,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Sb3JjLmdpZiJ9"
        },
        {
          "id": 77,
          "type": "Creature",
          "title": "War Wolf",
          "formerNames": null,
          "healthPoints": 140,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYXJfV29sZi5naWYifQ=="
        },
        {
          "id": 64,
          "type": "Creature",
          "title": "Orc Warrior",
          "formerNames": null,
          "healthPoints": 125,
          "xpPoints": 50,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfV2Fycmlvci5naWYifQ=="
        },
        {
          "id": 41,
          "type": "Creature",
          "title": "Elf",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 42,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGYuZ2lmIn0="
        },
        {
          "id": 62,
          "type": "Creature",
          "title": "Orc Spearman",
          "formerNames": null,
          "healthPoints": 105,
          "xpPoints": 38,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfU3BlYXJtYW4uZ2lmIn0="
        },
        {
          "id": 13,
          "type": "Creature",
          "title": "Orc",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 25,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmMuZ2lmIn0="
        },
        {
          "id": 70,
          "type": "Creature",
          "title": "Bear",
          "formerNames": null,
          "healthPoints": 80,
          "xpPoints": 23,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CZWFyLmdpZiJ9"
        },
        {
          "id": 32,
          "type": "Creature",
          "title": "Wolf",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 18,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb2xmLmdpZiJ9"
        },
        {
          "id": 139,
          "type": "Creature",
          "title": "Chicken",
          "formerNames": null,
          "healthPoints": 15,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DaGlja2VuLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 698,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 0.31,
      "isInestimable": false,
      "item": {
        "id": 143,
        "type": "Item",
        "title": "Crusader Helmet",
        "pluralizedTitle": "Crusader Helmets",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 8000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NydXNhZGVyX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 640,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 142,
        "type": "Item",
        "title": "Warrior Helmet",
        "pluralizedTitle": "Warrior Helmets",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 8000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhcnJpb3JfSGVsbWV0LmdpZiJ9"
      }
    },
    {
      "id": 772,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 0.05,
      "isInestimable": false,
      "item": {
        "id": 817,
        "type": "Item",
        "title": "Wolf Trophy",
        "pluralizedTitle": "Wolf Trophies",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": null,
        "npcBuyValue": 3000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dvbGZfVHJvcGh5LmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 43,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "knight",
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
    },
    {
      "id": 44,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "knight",
      "supply": {
        "id": 2,
        "type": "Supply",
        "item": {
          "id": 988,
          "type": "Item",
          "title": "Health Potion",
          "pluralizedTitle": "Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.442Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-01T23:15:19.315Z",
  "youtubeChannel": {
    "id": 12,
    "type": "YoutubeChannel",
    "name": "0 Shockz",
    "youtubeId": "UCTIQXSyPR0JtAaksP9q6dYA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
