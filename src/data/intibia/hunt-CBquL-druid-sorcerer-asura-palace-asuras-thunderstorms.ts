// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "CBquL",
  "type": "Hunt",
  "title": "Asuras + Thunderstorms",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNzcvSXRPUnBvZXYtMDE1LWRydWlkLXNvcmNlcmVyLWFzdXJhLXBhbGFjZS1hc3VyYXMtdGh1bmRlcnN0b3Jtcy1taW4ucG5nIn0=",
  "minLevel": 200,
  "maxLevel": 350,
  "minProfitH": 0,
  "maxProfitH": 25000,
  "minXpH": 1100000,
  "maxXpH": 1500000,
  "upvoteCount": 1,
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
  "videoId": "RgLVLg9Fe24",
  "videoStartAt": 9,
  "centerCoordinates": "32949,32679,7",
  "instructions": "<p>Great hunt for mages level 200+ for experience. Loot is not very good but you also don't waste.</p>\n<p></p>\n<p>Starting from basement, clear each floor and go up. Lure a group of asuras and shoot Thunderstorm runes ⚡️.</p>\n<p></p>\n<p>🍺 Bring dwarven rings and always use when you are drunk (set a hotkey for it).</p>",
  "createdAt": "2021-11-24T05:18:06.603Z",
  "updatedAt": "2024-03-17T23:21:16.148Z",
  "dungeon": {
    "id": 271,
    "type": "Dungeon",
    "title": "Asura Palace",
    "accountStatus": "premium",
    "entranceCoordinates": "32949,32679,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"26fau\",\"text\":\"Asura Palace is located east of Port Hope in Tiquanda jungle. To get there travel to Port Hope and walk to the location, [map c=\\\"32949,32679,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 13,
      "type": "City",
      "name": "Port Hope"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 461,
      "type": "DungeonSection",
      "name": "Basement",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 118,
          "type": "Creature",
          "title": "Hydra",
          "formerNames": null,
          "healthPoints": 2350,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IeWRyYS5naWYifQ=="
        },
        {
          "id": 83,
          "type": "Creature",
          "title": "Lich",
          "formerNames": null,
          "healthPoints": 880,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaWNoLmdpZiJ9"
        }
      ]
    },
    {
      "id": 462,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1282,
          "type": "Creature",
          "title": "Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9GbG93ZXJfQXN1cmEuZ2lmIn0="
        },
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        }
      ]
    },
    {
      "id": 463,
      "type": "DungeonSection",
      "name": "Floor +1",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1282,
          "type": "Creature",
          "title": "Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9GbG93ZXJfQXN1cmEuZ2lmIn0="
        },
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        }
      ]
    },
    {
      "id": 464,
      "type": "DungeonSection",
      "name": "Floor +2",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1282,
          "type": "Creature",
          "title": "Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9GbG93ZXJfQXN1cmEuZ2lmIn0="
        },
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        },
        {
          "id": 207,
          "type": "Creature",
          "title": "Destroyer",
          "formerNames": null,
          "healthPoints": 3700,
          "xpPoints": 2500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZXN0cm95ZXIuZ2lmIn0="
        }
      ]
    },
    {
      "id": 465,
      "type": "DungeonSection",
      "name": "Floor +3",
      "position": 5,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1282,
          "type": "Creature",
          "title": "Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9GbG93ZXJfQXN1cmEuZ2lmIn0="
        },
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        },
        {
          "id": 330,
          "type": "Creature",
          "title": "Massive Fire Elemental",
          "formerNames": null,
          "healthPoints": 1800,
          "xpPoints": 1400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYXNzaXZlX0ZpcmVfRWxlbWVudGFsLmdpZiJ9"
        }
      ]
    },
    {
      "id": 466,
      "type": "DungeonSection",
      "name": "Floor +4",
      "position": 6,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        }
      ]
    },
    {
      "id": 467,
      "type": "DungeonSection",
      "name": "Floor +5",
      "position": 7,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1282,
          "type": "Creature",
          "title": "Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9GbG93ZXJfQXN1cmEuZ2lmIn0="
        },
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        },
        {
          "id": 333,
          "type": "Creature",
          "title": "Massive Energy Elemental",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 950,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYXNzaXZlX0VuZXJneV9FbGVtZW50YWwuZ2lmIn0="
        }
      ]
    },
    {
      "id": 468,
      "type": "DungeonSection",
      "name": "Floor +6",
      "position": 8,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1282,
          "type": "Creature",
          "title": "Frost Flower Asura",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 4200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9GbG93ZXJfQXN1cmEuZ2lmIn0="
        },
        {
          "id": 952,
          "type": "Creature",
          "title": "Dawnfire Asura",
          "formerNames": null,
          "healthPoints": 2900,
          "xpPoints": 4100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXduZmlyZV9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 953,
          "type": "Creature",
          "title": "Midnight Asura",
          "formerNames": null,
          "healthPoints": 3100,
          "xpPoints": 4100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaWRuaWdodF9Bc3VyYS5naWYifQ=="
        },
        {
          "id": 396,
          "type": "Creature",
          "title": "Hellspawn",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 2550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZWxsc3Bhd24uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 837,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 400000,
      "percentage": 0.05,
      "isInestimable": false,
      "item": {
        "id": 1936,
        "type": "Item",
        "title": "Maxilla Maximus",
        "pluralizedTitle": "Maxilla Maximus",
        "formerNames": null,
        "minValue": 400000,
        "maxValue": 1100000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01heGlsbGFfTWF4aW11cy5naWYifQ=="
      }
    },
    {
      "id": 2146,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 40000,
      "percentage": 0.12,
      "isInestimable": false,
      "item": {
        "id": 643,
        "type": "Item",
        "title": "Skull Helmet",
        "pluralizedTitle": "Skull Helmets",
        "formerNames": null,
        "minValue": 40000,
        "maxValue": 50000,
        "npcBuyValue": 40000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NrdWxsX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 2141,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.83,
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
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 309,
      "type": "HuntSupply",
      "quantity": 800,
      "vocation": "mage",
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
      "id": 310,
      "type": "HuntSupply",
      "quantity": 250,
      "vocation": "mage",
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
      "id": 311,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "mage",
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
      "id": 312,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "mage",
      "supply": {
        "id": 65,
        "type": "Supply",
        "item": {
          "id": 269,
          "type": "Item",
          "title": "Brown Mushroom",
          "pluralizedTitle": "Brown Mushrooms",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jyb3duX011c2hyb29tLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-25T19:04:46.582Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-25T19:04:46.543Z",
  "youtubeChannel": {
    "id": 34,
    "type": "YoutubeChannel",
    "name": "Carpels TV",
    "youtubeId": "UCjOLDb8I23vR3gBp8I80uEQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
