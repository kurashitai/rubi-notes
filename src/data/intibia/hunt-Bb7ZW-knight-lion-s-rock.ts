// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Bb7ZW",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNDIvWWtrZ2dhQTctQmI3WlctbWluLnBuZyJ9",
  "minLevel": 60,
  "maxLevel": 120,
  "minProfitH": 20000,
  "maxProfitH": 100000,
  "minXpH": 300000,
  "maxXpH": 430000,
  "upvoteCount": 37,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 10,
    "type": "User",
    "username": "HenryKnight",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "cDQVf8k5eFA",
  "videoStartAt": 42,
  "centerCoordinates": "33148,32364,7",
  "instructions": "<p>A great place to level up a knight before level 100. This hunt gives excellent experience 💯 and a decent profit.</p>\n<p></p>\n<p>The recommended level is 60+, however, it is possible to come even at level 35 if the character has good equipment and skills.</p>\n<p></p>\n<p>🦁 The monsters here are Ancient Scarab, Noble Lion and Roaring Lion. The most dangerous is the Ancient Scarab, which can make high combos.</p>\n<p></p>\n<p>Before entering Lion's Rock, you need make an very quickly access, which is part of Lion's Rock Quest (📹 1:47).</p>\n<p></p>\n<p>The beginning of the hunt is the hardest part, as more than 4 Ancient Scarab can come at once and, depending on your level, this can be dangerous. Move carefully, luring 3 creatures at a time, and lure more as you get more confident.</p>\n<p></p>\n<p>💰 The hunt is close to the depot and is good for lootbags, so if you want to increase your profit, take advantage of it.</p>\n<p></p>\n<p>⚔️<strong> Charms</strong></p>\n<p>If you want to improve your defense in this hunt, put DODGE rune in Ancient Scarab or Roaring Lion.</p>\n<p></p>\n<p>🛡️<strong> Equipments</strong></p>\n<p>If even with the charms it is still difficult, use EARTH protection items.</p>\n<p>Recommended imbuements are <em>1 POWERFUL VAMPIRISM and 1 POWERFUL VOID</em> <strong>or</strong> <em>2 INTRICATE</em>.</p>",
  "createdAt": "2021-11-13T19:53:00.029Z",
  "updatedAt": "2024-04-15T15:29:51.347Z",
  "dungeon": {
    "id": 259,
    "type": "Dungeon",
    "title": "Lion's Rock",
    "accountStatus": "premium",
    "entranceCoordinates": "33137,32352,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"9bjc4\",\"text\":\"Lion's Rock is located north-west of Darashia. After completing mission \\\"Three Trials\\\" of Lion's Rock Quest you can access the hunt:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":64,\"length\":43,\"key\":0}],\"data\":{}},{\"key\":\"6v6oe\",\"text\":\"Walk to the west of Darashia and go down the ladder, [map c=\\\"33137,32352,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"amhj7\",\"text\":\"Pass through the teleport, [map c=\\\"33128,32308,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"48eq0\",\"text\":\"Walk to the south-east and go down the ladder, [map c=\\\"33133,32321,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Lion%27s_Rock_Quest#Three_Trials\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [
    {
      "id": 299,
      "type": "DungeonRequirement",
      "dungeonId": 259,
      "description": "Mission \"Three Trials\" done of the Lion's Rock Quest",
      "link": "https://tibia.fandom.com/wiki/Lion%27s_Rock_Quest#Three_Trials"
    }
  ],
  "sections": [
    {
      "id": 1047,
      "type": "DungeonSection",
      "name": "Inner Sanctum",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 817,
          "type": "Creature",
          "title": "Roaring Lion",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Sb2FyaW5nX0xpb24uZ2lmIn0="
        },
        {
          "id": 48,
          "type": "Creature",
          "title": "Ancient Scarab",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 720,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BbmNpZW50X1NjYXJhYi5naWYifQ=="
        },
        {
          "id": 904,
          "type": "Creature",
          "title": "Noble Lion",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ob2JsZV9MaW9uLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 591,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3600,
      "percentage": 0.98,
      "isInestimable": false,
      "item": {
        "id": 1076,
        "type": "Item",
        "title": "Springsprout Rod",
        "pluralizedTitle": "Springsprout Rods",
        "formerNames": null,
        "minValue": 3600,
        "maxValue": 6000,
        "npcBuyValue": 3600,
        "npcSellValue": 18000,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwcmluZ3Nwcm91dF9Sb2QuZ2lmIn0="
      }
    },
    {
      "id": 6687,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2500,
      "percentage": 0.57,
      "isInestimable": false,
      "item": {
        "id": 140,
        "type": "Item",
        "title": "Crown Helmet",
        "pluralizedTitle": "Crown Helmets",
        "formerNames": null,
        "minValue": 2500,
        "maxValue": 5000,
        "npcBuyValue": 2500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Nyb3duX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 593,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2500,
      "percentage": 0.43,
      "isInestimable": false,
      "item": {
        "id": 987,
        "type": "Item",
        "title": "Terra Hood",
        "pluralizedTitle": "Terra Hoods",
        "formerNames": null,
        "minValue": 2500,
        "maxValue": 7000,
        "npcBuyValue": 2500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RlcnJhX0hvb2QuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 252,
      "type": "HuntRequirement",
      "huntId": 42,
      "dungeonRequirement": {
        "id": 299,
        "type": "DungeonRequirement",
        "dungeonId": 259,
        "description": "Mission \"Three Trials\" done of the Lion's Rock Quest",
        "link": "https://tibia.fandom.com/wiki/Lion%27s_Rock_Quest#Three_Trials"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 123,
      "type": "HuntSupply",
      "quantity": 100,
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
    },
    {
      "id": 124,
      "type": "HuntSupply",
      "quantity": 600,
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
  "lootUpdatedAt": "2021-11-20T21:52:03.795Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-20T21:52:03.711Z",
  "youtubeChannel": {
    "id": 1,
    "type": "YoutubeChannel",
    "name": "Henry Knight",
    "youtubeId": "UCgONX028fTKQNrdIWjLN8jg",
    "verifiedAt": "Sat Nov 13 2021 02:10:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 10,
      "type": "User",
      "username": "HenryKnight",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
