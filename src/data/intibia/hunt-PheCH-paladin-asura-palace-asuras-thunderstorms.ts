// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "PheCH",
  "type": "Hunt",
  "title": "Asuras + Thunderstorms",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTAyL3duZ0JZYTdMLTIucG5nIn0=",
  "minLevel": 300,
  "maxLevel": 600,
  "minProfitH": 100000,
  "maxProfitH": 200000,
  "minXpH": 2500000,
  "maxXpH": 3500000,
  "upvoteCount": 30,
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
  "videoId": "TrRa8Y3-l94",
  "videoStartAt": null,
  "centerCoordinates": "32949,32679,7",
  "instructions": "<p>One of the best hunts for paladins level 300+. Great for experience and loot.</p>\n<p></p>\n<p>🏹 You can attack from distance or close a box (in this case be ready to use prismatic rings). Use diamond arrows + <em>exevo mas san </em>+ thunderstorm runes to kill the creatures<em>.</em></p>\n<p></p>\n<p>🛡️ Always bring Stone Skin Amulets and Might Rings to use in case of danger. Recommended equips:</p>\n<ul>\n  <li>Helmet: Zaoan Helmet + Powerful Mana Leech</li>\n  <li>Armor: Ghost Chestplate + Powerful Life Leech</li>\n  <li>Bow: Bow of Cataclysm + Powerful Critical, Mana Leech &amp; Life Leech</li>\n  <li>Legs: Fabulous Legs</li>\n  <li>Boots: Guardian Boots</li>\n  <li>Amulet: Enchanted Werewolf Amulet or Sleep Shawl</li>\n</ul>\n<p>🐾 You will make the bestiaries for Dawnfire Asura, Midnight Asura and Hellspawn (100 charm points in total). It will take around 10 hours to finish all the bestiaries.</p>\n<p></p>\n<p>⚡️ Charm runes:</p>\n<ul>\n  <li>Dodge or Zap on Midnight Asura</li>\n  <li>Freeze or Wound on Dawnfire Asura</li>\n  <li>Freeze on Hellspawn</li>\n</ul>",
  "createdAt": "2021-11-29T19:05:20.402Z",
  "updatedAt": "2024-03-20T20:46:19.893Z",
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
      "id": 400,
      "type": "HuntSupply",
      "quantity": 300,
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
      "id": 401,
      "type": "HuntSupply",
      "quantity": 550,
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
      "id": 402,
      "type": "HuntSupply",
      "quantity": 100,
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
      "id": 403,
      "type": "HuntSupply",
      "quantity": 150,
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
      "id": 404,
      "type": "HuntSupply",
      "quantity": 2,
      "vocation": "paladin",
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
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:49:55.379Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:49:55.349Z",
  "youtubeChannel": {
    "id": 25,
    "type": "YoutubeChannel",
    "name": "Leozika",
    "youtubeId": "UCwWhxYOQXK8F0W8n9Uk_m-A",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
