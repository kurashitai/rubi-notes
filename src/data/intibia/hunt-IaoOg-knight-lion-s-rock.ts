// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "IaoOg",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTYwL0pvNVcxT3JsLTktTGlvbl9zX1JvY2stbWluLnBuZyJ9",
  "minLevel": 50,
  "maxLevel": 80,
  "minProfitH": -50000,
  "maxProfitH": -10000,
  "minXpH": 100000,
  "maxXpH": 250000,
  "upvoteCount": 16,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1402,
    "type": "User",
    "username": "Cremoso",
    "avatar": "orc",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "e1o1Rnzedw4",
  "videoStartAt": null,
  "centerCoordinates": "33164,32349,9",
  "instructions": "<p>Great hunt for experience on low level knights. The focus is xp and you will have waste.</p>\n<p></p>\n<p>⚠️ In the way, be careful with ancient scarabs, do not lure more than 2 of them, they can kill you at low levels.</p>\n<p></p>\n<p>🦁 Lure 3 lions at a time and attack with your weapon and using <em>exori.</em></p>\n<p></p>\n<p>❄️ Use ice weapon to attack and 🛡️physical set to defend.</p>",
  "createdAt": "2022-01-07T02:03:11.263Z",
  "updatedAt": "2025-09-03T12:12:40.279Z",
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
      "id": 253,
      "type": "HuntRequirement",
      "huntId": 160,
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
      "id": 628,
      "type": "HuntSupply",
      "quantity": 120,
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
      "id": 629,
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
  "lootUpdatedAt": "2022-01-08T23:57:42.431Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T23:57:42.414Z",
  "youtubeChannel": {
    "id": 21,
    "type": "YoutubeChannel",
    "name": "Dokin",
    "youtubeId": "UCPitnBd-YEClRK8geNrLdZg",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
