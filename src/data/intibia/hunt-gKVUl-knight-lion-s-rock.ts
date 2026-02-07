// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "gKVUl",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTgveWRQTUVocG8tMDEzLWtuaWdodC1saW9ucy1yb2NrLnBuZyJ9",
  "minLevel": 70,
  "maxLevel": 110,
  "minProfitH": 5000,
  "maxProfitH": 15000,
  "minXpH": 130000,
  "maxXpH": 160000,
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
  "videoId": "0j1zOSHhtp4",
  "videoStartAt": null,
  "centerCoordinates": "33148,32364,7",
  "instructions": "<p>Good hunt for premium account knights in terms of experience and loot. You can hunt here from at least level 70 and skills 80/80+.</p>\n<p></p>\n<p>💯 <strong>Experience</strong></p>\n<p>You are able to make 130k to 160k per hour of experience (up to 240k/h on green stamina).</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>The loot here is amazing, you will get many gems, profiting 5k to 15k per hour.</p>\n<p></p>\n<p>🗺️<strong> Rotation</strong></p>\n<p>Basically you will do a big loop through the floor. Watch the rotation at 📹 0:41. Heal with <em>exura ico</em> and kill the monsters with <em>exori </em>(when there's a group of them around) and <em>exori hur</em>.</p>",
  "createdAt": "2021-11-01T23:45:37.277Z",
  "updatedAt": "2024-03-17T21:07:57.457Z",
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
      "id": 1044,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 54,
          "type": "Creature",
          "title": "Scarab",
          "formerNames": null,
          "healthPoints": 320,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY2FyYWIuZ2lmIn0="
        },
        {
          "id": 55,
          "type": "Creature",
          "title": "Scorpion",
          "formerNames": null,
          "healthPoints": 45,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY29ycGlvbi5naWYifQ=="
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
        }
      ]
    },
    {
      "id": 1046,
      "type": "DungeonSection",
      "name": "Underground",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 79,
          "type": "Creature",
          "title": "Bonebeast",
          "formerNames": null,
          "healthPoints": 515,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lYmVhc3QuZ2lmIn0="
        },
        {
          "id": 65,
          "type": "Creature",
          "title": "Demon Skeleton",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 240,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZW1vbl9Ta2VsZXRvbi5naWYifQ=="
        },
        {
          "id": 80,
          "type": "Creature",
          "title": "Crypt Shambler",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 195,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcnlwdF9TaGFtYmxlci5naWYifQ=="
        },
        {
          "id": 509,
          "type": "Creature",
          "title": "Terramite",
          "formerNames": null,
          "healthPoints": 365,
          "xpPoints": 160,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UZXJyYW1pdGUuZ2lmIn0="
        },
        {
          "id": 84,
          "type": "Creature",
          "title": "Mummy",
          "formerNames": null,
          "healthPoints": 240,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdW1teS5naWYifQ=="
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
        },
        {
          "id": 47,
          "type": "Creature",
          "title": "Ghoul",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 85,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG91bC5naWYifQ=="
        },
        {
          "id": 55,
          "type": "Creature",
          "title": "Scorpion",
          "formerNames": null,
          "healthPoints": 45,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY29ycGlvbi5naWYifQ=="
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
          "id": 50,
          "type": "Creature",
          "title": "Cobra",
          "formerNames": null,
          "healthPoints": 65,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db2JyYS5naWYifQ=="
        }
      ]
    },
    {
      "id": 1045,
      "type": "DungeonSection",
      "name": "Mountain",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 509,
          "type": "Creature",
          "title": "Terramite",
          "formerNames": null,
          "healthPoints": 365,
          "xpPoints": 160,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UZXJyYW1pdGUuZ2lmIn0="
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
          "id": 50,
          "type": "Creature",
          "title": "Cobra",
          "formerNames": null,
          "healthPoints": 65,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db2JyYS5naWYifQ=="
        }
      ]
    },
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
      "id": 785,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 1691,
        "type": "Item",
        "title": "Bonebeast Trophy",
        "pluralizedTitle": "Bonebeast Trophies",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 20000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JvbmViZWFzdF9Ucm9waHkuZ2lmIn0="
      }
    },
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
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 251,
      "type": "HuntRequirement",
      "huntId": 18,
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
      "id": 45,
      "type": "HuntSupply",
      "quantity": 300,
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
      "id": 46,
      "type": "HuntSupply",
      "quantity": 30,
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
  "lootUpdatedAt": "2021-11-15T00:45:48.535Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-01T23:45:37.277Z",
  "youtubeChannel": {
    "id": 13,
    "type": "YoutubeChannel",
    "name": "Triznok",
    "youtubeId": "UCrymBQ4YGeLwPTQ2i9vVqaA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
