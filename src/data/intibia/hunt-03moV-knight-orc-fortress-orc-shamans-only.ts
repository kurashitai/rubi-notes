// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "03moV",
  "type": "Hunt",
  "title": "Orc Shamans only",
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTYvRVRhQmFpdjItMDExLWtuaWdodC11bGRlcmVrcy1yb2NrLW9yYy1zaGFtYW5zLW9ubHkucG5nIn0=",
  "minLevel": 60,
  "maxLevel": 300,
  "minProfitH": 100000,
  "maxProfitH": 250000,
  "minXpH": 30000,
  "maxXpH": 60000,
  "upvoteCount": 11,
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
  "videoId": "fee6_j4a7NM",
  "videoStartAt": null,
  "centerCoordinates": "32931,31773,7",
  "instructions": "<p>It's a great place for knights to profit. It's bad to get experience and it's not the intent of the hunt.</p>\n<p></p>\n<p>💰<strong> Loot</strong></p>\n<p>The goal here is to loot as many <strong>broken shamanic staffs </strong>as possible from orc shamans. It's worth approximately 4k and you can drop up to 60+ per hour (240k).</p>\n<p></p>\n<p>⚔️<strong> Strategy</strong></p>\n<p>Ignore all creatures except orc shamans. Use stealth rings to avoid most creatures and run from those who see invisibility (orc warrior, leader and more).</p>",
  "createdAt": "2021-11-01T19:18:41.602Z",
  "updatedAt": "2025-11-01T16:26:44.568Z",
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
    },
    {
      "id": 1401,
      "type": "DungeonSection",
      "name": "Lower floors",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 36,
          "type": "Creature",
          "title": "Dragon",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb24uZ2lmIn0="
        },
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
          "id": 4,
          "type": "Creature",
          "title": "Bonelord",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 170,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lbG9yZC5naWYifQ=="
        },
        {
          "id": 56,
          "type": "Creature",
          "title": "Slime",
          "formerNames": null,
          "healthPoints": 150,
          "xpPoints": 160,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TbGltZS5naWYifQ=="
        },
        {
          "id": 35,
          "type": "Creature",
          "title": "Stone Golem",
          "formerNames": null,
          "healthPoints": 270,
          "xpPoints": 160,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TdG9uZV9Hb2xlbS5naWYifQ=="
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
      "id": 433,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 4000,
      "percentage": 0.3,
      "isInestimable": false,
      "item": {
        "id": 197,
        "type": "Item",
        "title": "Dragon Shield",
        "pluralizedTitle": "Dragon Shields",
        "formerNames": null,
        "minValue": 4000,
        "maxValue": 6000,
        "npcBuyValue": 4000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyYWdvbl9TaGllbGQuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 41,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "knight",
      "supply": {
        "id": 117,
        "type": "Supply",
        "item": {
          "id": 107,
          "type": "Item",
          "title": "Stealth Ring",
          "pluralizedTitle": "Stealth Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWFsdGhfUmluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 42,
      "type": "HuntSupply",
      "quantity": 50,
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
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:47.923Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-01T19:18:41.602Z",
  "youtubeChannel": {
    "id": 11,
    "type": "YoutubeChannel",
    "name": "bielzingah",
    "youtubeId": "UC9FXQg6w5zrdspZu6zCtANA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
