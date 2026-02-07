// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Nhs22",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTMvQ3p0SFNySXYtMDA4LWtuaWdodC1hc2h0YWRhcmFtYWktYmx1ZS1kamlubi1mb3J0cmVzcy5wbmcifQ==",
  "minLevel": 60,
  "maxLevel": 90,
  "minProfitH": 0,
  "maxProfitH": 5000,
  "minXpH": 75000,
  "maxXpH": 90000,
  "upvoteCount": 0,
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
  "videoId": "xPiZSEoqz4c",
  "videoStartAt": null,
  "centerCoordinates": "33102,32528,6",
  "instructions": "<p>Loot and experience here are average to bad, but it can be an alternative if the good dungeons are taken.</p>\n<p></p>\n<p>The dungeon becomes harder each floor. Clean the floors and keep going up as far as you feel safe.</p>\n<p>If you are struggling with cleaning floors, ignore the towers and stay only in the basement.</p>\n<p></p>\n<p>🍺 Bring a few dwarven rings because djinns make you drunk all the time and it will slow your hunt.</p>",
  "createdAt": "2021-10-28T19:02:54.805Z",
  "updatedAt": "2024-03-17T21:07:10.836Z",
  "dungeon": {
    "id": 34,
    "type": "Dungeon",
    "title": "Ashta'daramai (Blue Djinn Fortress)",
    "accountStatus": "premium",
    "entranceCoordinates": "33102,32527,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"85g7q\",\"text\":\"Ashta'daramai is located to the south-west of Darashia and north of Ankrahmun. It can be reached by land:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"7pdkm\",\"text\":\"Go up the mountain, [map c=\\\"33175,32529,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"crb2u\",\"text\":\"Walk to the north-west and go down a hidden hole, [map c=\\\"33102,32499,6\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5nkh8\",\"text\":\"Walk south, to the fortress entrance\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 7,
      "type": "City",
      "name": "Ankrahmun"
    }
  },
  "requirements": [
    {
      "id": 70,
      "type": "DungeonRequirement",
      "dungeonId": 34,
      "description": "The Djinn War Quest (Efreet Faction) done",
      "link": "https://tibiawiki.com.br/wiki/The_Djinn_War_Quest"
    },
    {
      "id": 274,
      "type": "DungeonRequirement",
      "dungeonId": 34,
      "description": "Level 30",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 447,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
        },
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        },
        {
          "id": 73,
          "type": "Creature",
          "title": "Lion",
          "formerNames": null,
          "healthPoints": 80,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaW9uLmdpZiJ9"
        }
      ]
    },
    {
      "id": 448,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
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
        }
      ]
    },
    {
      "id": 449,
      "type": "DungeonSection",
      "name": "Floor +1",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
        },
        {
          "id": 73,
          "type": "Creature",
          "title": "Lion",
          "formerNames": null,
          "healthPoints": 80,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaW9uLmdpZiJ9"
        }
      ]
    },
    {
      "id": 450,
      "type": "DungeonSection",
      "name": "Floor +2",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
        },
        {
          "id": 54,
          "type": "Creature",
          "title": "Scarab",
          "formerNames": null,
          "healthPoints": 320,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY2FyYWIuZ2lmIn0="
        }
      ]
    },
    {
      "id": 454,
      "type": "DungeonSection",
      "name": "Floor +6",
      "position": 8,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 95,
          "type": "Creature",
          "title": "Marid",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 410,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYXJpZC5naWYifQ=="
        },
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
        }
      ]
    },
    {
      "id": 453,
      "type": "DungeonSection",
      "name": "Floor +5",
      "position": 7,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 95,
          "type": "Creature",
          "title": "Marid",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 410,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYXJpZC5naWYifQ=="
        },
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
        }
      ]
    },
    {
      "id": 452,
      "type": "DungeonSection",
      "name": "Floor +4",
      "position": 6,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 95,
          "type": "Creature",
          "title": "Marid",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 410,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYXJpZC5naWYifQ=="
        },
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
        }
      ]
    },
    {
      "id": 451,
      "type": "DungeonSection",
      "name": "Floor +3",
      "position": 5,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 95,
          "type": "Creature",
          "title": "Marid",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 410,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYXJpZC5naWYifQ=="
        },
        {
          "id": 91,
          "type": "Creature",
          "title": "Fire Elemental",
          "formerNames": null,
          "healthPoints": 280,
          "xpPoints": 220,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GaXJlX0VsZW1lbnRhbC5naWYifQ=="
        },
        {
          "id": 93,
          "type": "Creature",
          "title": "Blue Djinn",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbHVlX0RqaW5uLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 970,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.12,
      "isInestimable": false,
      "item": {
        "id": 431,
        "type": "Item",
        "title": "Blue Gem",
        "pluralizedTitle": "Blue Gems",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 25000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JsdWVfR2VtLmdpZiJ9"
      }
    },
    {
      "id": 964,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 0.62,
      "isInestimable": false,
      "item": {
        "id": 962,
        "type": "Item",
        "title": "Hailstorm Rod",
        "pluralizedTitle": "Hailstorm Rods",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": null,
        "npcBuyValue": 3000,
        "npcSellValue": 15000,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hhaWxzdG9ybV9Sb2QuZ2lmIn0="
      }
    },
    {
      "id": 967,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2500,
      "percentage": 0.34,
      "isInestimable": false,
      "item": {
        "id": 976,
        "type": "Item",
        "title": "Magma Monocle",
        "pluralizedTitle": "Magma Monocles",
        "formerNames": null,
        "minValue": 2500,
        "maxValue": 7000,
        "npcBuyValue": 2500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hZ21hX01vbm9jbGUuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 11,
      "type": "HuntRequirement",
      "huntId": 13,
      "dungeonRequirement": {
        "id": 70,
        "type": "DungeonRequirement",
        "dungeonId": 34,
        "description": "The Djinn War Quest (Efreet Faction) done",
        "link": "https://tibiawiki.com.br/wiki/The_Djinn_War_Quest"
      }
    },
    {
      "id": 184,
      "type": "HuntRequirement",
      "huntId": 13,
      "dungeonRequirement": {
        "id": 274,
        "type": "DungeonRequirement",
        "dungeonId": 34,
        "description": "Level 30",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 27,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "knight",
      "supply": {
        "id": 104,
        "type": "Supply",
        "item": {
          "id": 97,
          "type": "Item",
          "title": "Dwarven Ring",
          "pluralizedTitle": "Dwarven Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0R3YXJ2ZW5fUmluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 28,
      "type": "HuntSupply",
      "quantity": 400,
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
      "id": 29,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "knight",
      "supply": {
        "id": 3,
        "type": "Supply",
        "item": {
          "id": 972,
          "type": "Item",
          "title": "Strong Health Potion",
          "pluralizedTitle": "Strong Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19IZWFsdGhfUG90aW9uLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:47.650Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-10-28T19:02:54.805Z",
  "youtubeChannel": {
    "id": 4,
    "type": "YoutubeChannel",
    "name": "Moranah",
    "youtubeId": "UCxtjOY03AmOYGgUMj3",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
