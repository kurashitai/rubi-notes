// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "YhhbJ",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOTQvSWpHUWE5Q0EtMTAucG5nIn0=",
  "minLevel": 150,
  "maxLevel": 250,
  "minProfitH": 30000,
  "maxProfitH": 80000,
  "minXpH": 300000,
  "maxXpH": 400000,
  "upvoteCount": 1,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
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
  "videoId": "k83d3pXgO6c",
  "videoStartAt": null,
  "centerCoordinates": "33570,32368,7",
  "instructions": "<p>The spawn gives a great profit, good experience, is close to a protection zone and a shop to refill. It's very open so it's fine to hunt here even someone is already hunting.</p>\n<p></p>\n<p>💰 Silencers drop Silencer Claws (used for Void imbuement) and depending on your world, they can be sold for a nice price on the market.</p>\n<p></p>\n<p>⚡️ Creatures here are very fast, so it's safer to hunt with energy walls. If you’re unable to do so because of your world type, you can run around walls and rocks.</p>\n<p></p>\n<p>To start shoot an energy wall (01:10) and lure a monster from the east.</p>\n<p></p>\n<p>Walk up and down through the energy field, attacking the creature with a distance weapon and exori san.</p>\n<p></p>\n<p>🛡️ You don’t need any special equipment to hunt here, but garlic necklace help to reduce incoming damage.</p>\n<p></p>\n<p>For imbuements, use Basic Mana Leech and Critical Strike on the bow, and Basic Mana Leech on the helmet.</p>\n<p></p>\n<p>⚗️ Almost all of the creature products can be sold below the depot. You can refill your potions and arrows at the same NPC. He doesn’t sell energy walls though, so make sure to stock up on those.</p>",
  "createdAt": "2021-11-29T04:11:16.127Z",
  "updatedAt": "2024-03-17T21:19:12.338Z",
  "dungeon": {
    "id": 249,
    "type": "Dungeon",
    "title": "Upper Roshamuul",
    "accountStatus": "premium",
    "entranceCoordinates": "33625,32396,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"bnsbu\",\"text\":\"Upper Roshamuul is located north of Roshamuul, [map c=\\\"33625,32396,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
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
      "id": 249,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 833,
          "type": "Creature",
          "title": "Guzzlemaw",
          "formerNames": null,
          "healthPoints": 6400,
          "xpPoints": 6050,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HdXp6bGVtYXcuZ2lmIn0="
        },
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
          "id": 840,
          "type": "Creature",
          "title": "Choking Fear",
          "formerNames": null,
          "healthPoints": 5800,
          "xpPoints": 4700,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DaG9raW5nX0ZlYXIuZ2lmIn0="
        },
        {
          "id": 834,
          "type": "Creature",
          "title": "Retching Horror",
          "formerNames": null,
          "healthPoints": 5300,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SZXRjaGluZ19Ib3Jyb3IuZ2lmIn0="
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
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 6876,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35000,
      "percentage": 0.54,
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
      "id": 6896,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.15,
      "isInestimable": false,
      "item": {
        "id": 91,
        "type": "Item",
        "title": "Steel Boots",
        "pluralizedTitle": "Steel Boots",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 40000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWVsX0Jvb3RzLmdpZiJ9"
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
      "id": 372,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "paladin",
      "supply": {
        "id": 37,
        "type": "Supply",
        "item": {
          "id": 1057,
          "type": "Item",
          "title": "Energy Wall Rune",
          "pluralizedTitle": "Energy Wall Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuZXJneV9XYWxsX1J1bmUuZ2lmIn0="
        }
      }
    },
    {
      "id": 373,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "paladin",
      "supply": {
        "id": 88,
        "type": "Supply",
        "item": {
          "id": 172,
          "type": "Item",
          "title": "Garlic Necklace",
          "pluralizedTitle": "Garlic Necklaces",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dhcmxpY19OZWNrbGFjZS5naWYifQ=="
        }
      }
    },
    {
      "id": 374,
      "type": "HuntSupply",
      "quantity": 350,
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
    },
    {
      "id": 375,
      "type": "HuntSupply",
      "quantity": 1200,
      "vocation": "paladin",
      "supply": {
        "id": 122,
        "type": "Supply",
        "item": {
          "id": 2328,
          "type": "Item",
          "title": "Crystalline Arrow",
          "pluralizedTitle": "Crystalline Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NyeXN0YWxsaW5lX0Fycm93LmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:39:44.074Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:39:44.057Z",
  "youtubeChannel": {
    "id": 2,
    "type": "YoutubeChannel",
    "name": "Eric / Psykik",
    "youtubeId": "UCl3CvJSRKWrZ-Nvj6tBqz-g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
