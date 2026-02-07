// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "bwU4j",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODcvREEwOTZsTDItYndVNGotbWluLnBuZyJ9",
  "minLevel": 75,
  "maxLevel": 150,
  "minProfitH": 50000,
  "maxProfitH": 100000,
  "minXpH": 200000,
  "maxXpH": 250000,
  "upvoteCount": 4,
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
  "videoId": "Dg8CcZkpe3Y",
  "videoStartAt": null,
  "centerCoordinates": "32086,32586,10",
  "instructions": "<p>Great hunt for paladins level 75+ to get a wonderful profit and a good experience.</p>\n<p></p>\n<p>💰 The cultists drop rope belts that can be sold for up to 3.5k depending on the server.</p>\n<p></p>\n<p>🏹 Use crystalline arrows or prismatic bolts as ammunition.</p>\n<p></p>\n<p>⚡️ You can use thunderstorm runes to improve a little your experience but you will spend more.</p>\n<p></p>\n<p>⚠️ The teleport in the platform will bring you to Goroma Demons. If you can kill demons you can add this spawn to your hunting route, but your xp/h will decrease.</p>",
  "createdAt": "2021-11-27T23:40:35.867Z",
  "updatedAt": "2024-03-17T21:41:28.975Z",
  "dungeon": {
    "id": 444,
    "type": "Dungeon",
    "title": "Goroma Cults",
    "accountStatus": "premium",
    "entranceCoordinates": "32086,32586,10",
    "entranceDirections": "{\"blocks\":[{\"key\":\"2tf9l\",\"text\":\"Goroma Cults is located in the depths of Hellgorge, in Goroma. After completing mission \\\"The Counterspell\\\" of The Shattered Isles Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":80,\"length\":55,\"key\":0}],\"data\":{}},{\"key\":\"e6vl\",\"text\":\"If you have Access to Goroma done, travel from Liberty Bay to Goroma. Otherwise, travel from Liberty Bay to Thais until the boat docks in Goroma (you have to try many times).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":12,\"length\":16,\"key\":1}],\"data\":{}},{\"key\":\"1atql\",\"text\":\"Cross the underground path, [map c=\\\"32097,32576,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"a4snb\",\"text\":\"Walk to the hole and go down, [map c=\\\"32097,32631,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"19a3t\",\"text\":\"Go down [map c=\\\"32120,32575,8\\\" map]here[/map] and [map c=\\\"32146,32613,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#The_Counterspell\",\"rel\":\"noopener noreferrer\",\"title\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#The_Counterspell\",\"url\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#The_Counterspell\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Goroma\",\"rel\":\"noopener noreferrer\",\"title\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Goroma\",\"url\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Goroma\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 12,
      "type": "City",
      "name": "Liberty Bay"
    }
  },
  "requirements": [
    {
      "id": 282,
      "type": "DungeonRequirement",
      "dungeonId": 444,
      "description": "Mission \"The Counterspell\" done of The Shattered Isles Quest",
      "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#The_Counterspell"
    }
  ],
  "sections": [
    {
      "id": 1510,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 157,
          "type": "Creature",
          "title": "Acolyte of the Cult",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BY29seXRlX29mX3RoZV9DdWx0LmdpZiJ9"
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
          "id": 90,
          "type": "Creature",
          "title": "Fire Devil",
          "formerNames": null,
          "healthPoints": 200,
          "xpPoints": 145,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GaXJlX0RldmlsLmdpZiJ9"
        },
        {
          "id": 28,
          "type": "Creature",
          "title": "Witch",
          "formerNames": null,
          "healthPoints": 300,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaXRjaC5naWYifQ=="
        }
      ]
    },
    {
      "id": 1511,
      "type": "DungeonSection",
      "name": "Floor -3",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 162,
          "type": "Creature",
          "title": "Enlightened of the Cult",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbmxpZ2h0ZW5lZF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 158,
          "type": "Creature",
          "title": "Adept of the Cult",
          "formerNames": null,
          "healthPoints": 430,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BZGVwdF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 157,
          "type": "Creature",
          "title": "Acolyte of the Cult",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BY29seXRlX29mX3RoZV9DdWx0LmdpZiJ9"
        }
      ]
    },
    {
      "id": 1512,
      "type": "DungeonSection",
      "name": "Floor -4",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 25,
          "type": "Creature",
          "title": "Priestess",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 420,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Qcmllc3Rlc3MuZ2lmIn0="
        },
        {
          "id": 158,
          "type": "Creature",
          "title": "Adept of the Cult",
          "formerNames": null,
          "healthPoints": 430,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BZGVwdF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 157,
          "type": "Creature",
          "title": "Acolyte of the Cult",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BY29seXRlX29mX3RoZV9DdWx0LmdpZiJ9"
        },
        {
          "id": 100,
          "type": "Creature",
          "title": "Elder Bonelord",
          "formerNames": null,
          "healthPoints": 500,
          "xpPoints": 280,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9Cb25lbG9yZC5naWYifQ=="
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
          "id": 28,
          "type": "Creature",
          "title": "Witch",
          "formerNames": null,
          "healthPoints": 300,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaXRjaC5naWYifQ=="
        }
      ]
    },
    {
      "id": 1513,
      "type": "DungeonSection",
      "name": "Floor -4 (platform)",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 162,
          "type": "Creature",
          "title": "Enlightened of the Cult",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbmxpZ2h0ZW5lZF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 25,
          "type": "Creature",
          "title": "Priestess",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 420,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Qcmllc3Rlc3MuZ2lmIn0="
        },
        {
          "id": 158,
          "type": "Creature",
          "title": "Adept of the Cult",
          "formerNames": null,
          "healthPoints": 430,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BZGVwdF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 157,
          "type": "Creature",
          "title": "Acolyte of the Cult",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BY29seXRlX29mX3RoZV9DdWx0LmdpZiJ9"
        },
        {
          "id": 100,
          "type": "Creature",
          "title": "Elder Bonelord",
          "formerNames": null,
          "healthPoints": 500,
          "xpPoints": 280,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9Cb25lbG9yZC5naWYifQ=="
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
          "id": 90,
          "type": "Creature",
          "title": "Fire Devil",
          "formerNames": null,
          "healthPoints": 200,
          "xpPoints": 145,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GaXJlX0RldmlsLmdpZiJ9"
        }
      ]
    },
    {
      "id": 1514,
      "type": "DungeonSection",
      "name": "Floor -5",
      "position": 5,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 162,
          "type": "Creature",
          "title": "Enlightened of the Cult",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbmxpZ2h0ZW5lZF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 158,
          "type": "Creature",
          "title": "Adept of the Cult",
          "formerNames": null,
          "healthPoints": 430,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BZGVwdF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 157,
          "type": "Creature",
          "title": "Acolyte of the Cult",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BY29seXRlX29mX3RoZV9DdWx0LmdpZiJ9"
        },
        {
          "id": 100,
          "type": "Creature",
          "title": "Elder Bonelord",
          "formerNames": null,
          "healthPoints": 500,
          "xpPoints": 280,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9Cb25lbG9yZC5naWYifQ=="
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
          "id": 90,
          "type": "Creature",
          "title": "Fire Devil",
          "formerNames": null,
          "healthPoints": 200,
          "xpPoints": 145,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GaXJlX0RldmlsLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 335,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1800000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1733,
        "type": "Item",
        "title": "Stuffed Toad",
        "pluralizedTitle": "Stuffed Toads",
        "formerNames": null,
        "minValue": 1800000,
        "maxValue": 2500000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0dWZmZWRfVG9hZC5naWYifQ=="
      }
    },
    {
      "id": 1662,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.08,
      "isInestimable": false,
      "item": {
        "id": 58,
        "type": "Item",
        "title": "Blue Robe",
        "pluralizedTitle": "Blue Robes",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 15000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JsdWVfUm9iZS5naWYifQ=="
      }
    },
    {
      "id": 1012,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 0.08,
      "isInestimable": false,
      "item": {
        "id": 497,
        "type": "Item",
        "title": "Bonelord Helmet",
        "pluralizedTitle": "Bonelord Helmets",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": 50000,
        "npcBuyValue": 7500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JvbmVsb3JkX0hlbG1ldC5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 68,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 50,
        "type": "DungeonRequiredItem",
        "dungeonId": 444,
        "requiredItem": {
          "id": 11,
          "type": "RequiredItem",
          "item": {
            "id": 116,
            "type": "Item",
            "title": "Rope",
            "pluralizedTitle": "Ropes",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JvcGUuZ2lmIn0="
          }
        }
      },
      "huntId": 87
    }
  ],
  "huntRequirements": [
    {
      "id": 199,
      "type": "HuntRequirement",
      "huntId": 87,
      "dungeonRequirement": {
        "id": 282,
        "type": "DungeonRequirement",
        "dungeonId": 444,
        "description": "Mission \"The Counterspell\" done of The Shattered Isles Quest",
        "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#The_Counterspell"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 350,
      "type": "HuntSupply",
      "quantity": 600,
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
    },
    {
      "id": 351,
      "type": "HuntSupply",
      "quantity": 25,
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
      "id": 352,
      "type": "HuntSupply",
      "quantity": 1,
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
  "lootUpdatedAt": "2021-11-29T19:31:57.735Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:31:57.688Z",
  "youtubeChannel": {
    "id": 8,
    "type": "YoutubeChannel",
    "name": "Gudii",
    "youtubeId": "UCzpQDQs7IfFElqGNluk08iw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
