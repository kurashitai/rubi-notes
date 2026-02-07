// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "jA6my",
  "type": "Hunt",
  "title": "Lizard City + Avalanches",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNzIvdTVkMkRoWUwtMDE4LWRydWlkLXNvcmNlcmVyLXJhemFjaGFpLWxpemFyZC1jaXR5LWF2YWxhbmNoZXMtbWluLnBuZyJ9",
  "minLevel": 150,
  "maxLevel": 250,
  "minProfitH": -40000,
  "maxProfitH": 40000,
  "minXpH": 700000,
  "maxXpH": 1400000,
  "upvoteCount": 2,
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
  "videoId": "9RrU0GAmnpw",
  "videoStartAt": null,
  "centerCoordinates": "33077,31185,7",
  "instructions": "<p>Good place for mages level 150+ to get experience. The loot varies but in the long run it will probably cover the waste.</p>\n<p></p>\n<p>Focus on killing big groups with avalanche ❄️ and do not stop for single creatures. The route here is very important and can affect your experience drastically (📹 01:50).</p>\n<p></p>\n<p>Avoid getting trapped and if you feel it's inevitable just go to a wall.</p>\n<p></p>\n<p>🛡️ Use a full defense set to prevent physical damage.</p>",
  "createdAt": "2021-11-23T23:43:37.104Z",
  "updatedAt": "2024-03-17T21:37:30.143Z",
  "dungeon": {
    "id": 177,
    "type": "Dungeon",
    "title": "Razachai",
    "accountStatus": "premium",
    "entranceCoordinates": "33077,31185,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"8t2sl\",\"text\":\"Razachai (aka Lizard City) is located north-west of Zao. The access is gained through the Wrath of the Emperor Quest. After getting the access:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":90,\"length\":26,\"key\":0}],\"data\":{}},{\"key\":\"3beuh\",\"text\":\"Fly from Edron ([map c=\\\"33191,31783,3\\\" map]here[/map]) or Darashia ([map c=\\\"33269,32441,6\\\" map]here[/map]) to Farmine, through the magic carpet.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9hdrc\",\"text\":\"Go down the ladder, then up the hill to the east and enter in the teleport on the last floor.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6i8k6\",\"text\":\"Enter in the new teleport that appeared.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"egrl6\",\"text\":\"Go down the ladder and up to the hill in the west, [map c=\\\"33139,31249,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f7jpf\",\"text\":\"Pass through the top teleport, [map c=\\\"33136,31248,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7718p\",\"text\":\"Pass through the fire teleport to the east, [map c=\\\"33216,31067,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"h1tp\",\"text\":\"To go to the Lizard City, just go up the ladder to the east, [map c=\\\"33085,31219,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6cmbn\",\"text\":\"Else, if you want to reach the depths of Razachai, pass the gate of expertise, put a Scale of Corruption in the Coal basin and pass through the teleport, [map c=\\\"33084,31213,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": false,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 10,
      "type": "City",
      "name": "Farmine"
    }
  },
  "requirements": [
    {
      "id": 210,
      "type": "DungeonRequirement",
      "dungeonId": 177,
      "description": "Must have completed Wrath of the Emperor Quest ",
      "link": "https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest"
    }
  ],
  "sections": [
    {
      "id": 1254,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 506,
          "type": "Creature",
          "title": "Draken Spellweaver",
          "formerNames": null,
          "healthPoints": 5000,
          "xpPoints": 3100,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFrZW5fU3BlbGx3ZWF2ZXIuZ2lmIn0="
        },
        {
          "id": 505,
          "type": "Creature",
          "title": "Draken Warmaster",
          "formerNames": null,
          "healthPoints": 4150,
          "xpPoints": 2400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFrZW5fV2FybWFzdGVyLmdpZiJ9"
        },
        {
          "id": 562,
          "type": "Creature",
          "title": "Lizard Magistratus",
          "formerNames": null,
          "healthPoints": 6250,
          "xpPoints": 2000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfTWFnaXN0cmF0dXMuZ2lmIn0="
        },
        {
          "id": 558,
          "type": "Creature",
          "title": "Lizard Noble",
          "formerNames": null,
          "healthPoints": 7000,
          "xpPoints": 2000,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfTm9ibGUuZ2lmIn0="
        },
        {
          "id": 501,
          "type": "Creature",
          "title": "Lizard Zaogun",
          "formerNames": null,
          "healthPoints": 2955,
          "xpPoints": 1700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfWmFvZ3VuLmdpZiJ9"
        },
        {
          "id": 502,
          "type": "Creature",
          "title": "Lizard High Guard",
          "formerNames": null,
          "healthPoints": 1800,
          "xpPoints": 1450,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfSGlnaF9HdWFyZC5naWYifQ=="
        },
        {
          "id": 500,
          "type": "Creature",
          "title": "Lizard Dragon Priest",
          "formerNames": null,
          "healthPoints": 1450,
          "xpPoints": 1320,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfRHJhZ29uX1ByaWVzdC5naWYifQ=="
        },
        {
          "id": 503,
          "type": "Creature",
          "title": "Lizard Legionnaire",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfTGVnaW9ubmFpcmUuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4477,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 80000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1709,
        "type": "Item",
        "title": "Draken Trophy",
        "pluralizedTitle": "Draken Trophies",
        "formerNames": null,
        "minValue": 80000,
        "maxValue": 160000,
        "npcBuyValue": 15000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyYWtlbl9Ucm9waHkuZ2lmIn0="
      }
    },
    {
      "id": 4428,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 40000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1692,
        "type": "Item",
        "title": "Lizard Trophy",
        "pluralizedTitle": "Lizard Trophies",
        "formerNames": null,
        "minValue": 40000,
        "maxValue": 80000,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpemFyZF9Ucm9waHkuZ2lmIn0="
      }
    },
    {
      "id": 4474,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.38,
      "isInestimable": false,
      "item": {
        "id": 110,
        "type": "Item",
        "title": "Ring of the Sky",
        "pluralizedTitle": "Ring of the Skies",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 40000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfdGhlX1NreS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 145,
      "type": "HuntRequirement",
      "huntId": 72,
      "dungeonRequirement": {
        "id": 210,
        "type": "DungeonRequirement",
        "dungeonId": 177,
        "description": "Must have completed Wrath of the Emperor Quest ",
        "link": "https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 307,
      "type": "HuntSupply",
      "quantity": 300,
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
      "id": 308,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "mage",
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
    }
  ],
  "lootUpdatedAt": "2021-11-25T03:14:50.580Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-25T03:14:50.518Z",
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
