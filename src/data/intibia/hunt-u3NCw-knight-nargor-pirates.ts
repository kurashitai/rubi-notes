// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "u3NCw",
  "type": "Hunt",
  "title": "Pirates",
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTIvdzRmMVBienUtMDA3LWtuaWdodC1uYXJnb3ItcGlyYXRlcy5wbmcifQ==",
  "minLevel": 50,
  "maxLevel": 80,
  "minProfitH": 10000,
  "maxProfitH": 25000,
  "minXpH": 70000,
  "maxXpH": 90000,
  "upvoteCount": 8,
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
  "videoId": "9RIb3WTmcGw",
  "videoStartAt": null,
  "centerCoordinates": "31978,32856,6",
  "instructions": "<p>It's a good place to profit for low level knights, but not so much for experience.</p>\n<p></p>\n<p>⚔️<strong> Strategy</strong></p>\n<p>Even though pirates are weak individually, the amount of monsters make it harder. Try to not get hit by more than 3 at the same time, use the objects on the map to dodge. When there are 3 or more around you, use <em>exori</em>.</p>\n<p></p>\n<p>Focus on Pirate Corsairs because they are the strongest of them.</p>\n<p></p>\n<p>Bring food because creatures here don't drop 🍄.</p>\n<p></p>\n<p>🐻<strong> Task</strong></p>\n<p>Nargor is the place with the most pirates in Tibia, so it's a good opportunity to do the <a href=\"https://tibia.fandom.com/wiki/Killing_in_the_Name_of..._Quest#Meriana_Rebels:_Pirates\">pirate's task</a>.</p>",
  "createdAt": "2021-10-27T23:02:38.624Z",
  "updatedAt": "2024-03-17T21:09:36.134Z",
  "dungeon": {
    "id": 60,
    "type": "Dungeon",
    "title": "Nargor",
    "accountStatus": "premium",
    "entranceCoordinates": "31976,32843,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"nbkv\",\"text\":\"Nargor is an island located to the west of Liberty Bay. If you have completed Meriana Quest, you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":78,\"length\":13,\"key\":0}],\"data\":{}},{\"key\":\"cmdqj\",\"text\":\"Go to Captain Waverider, south of Liberty Bay ([map c=\\\"32347,32856,7\\\" map]here[/map]), and say \\\"hi - peg leg - yes\\\"\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"795ls\",\"text\":\"Ask Sebastian to go to Nargor, \\\"hi - nargor - yes\\\"\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Meriana_Quest\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": true,
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
      "id": 188,
      "type": "DungeonRequirement",
      "dungeonId": 60,
      "description": "Mission \"Access to Meriana\" done of The Shattered Isles Quest",
      "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Meriana"
    }
  ],
  "sections": [
    {
      "id": 1140,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 165,
          "type": "Creature",
          "title": "Pirate Corsair",
          "formerNames": null,
          "healthPoints": 675,
          "xpPoints": 350,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdGVfQ29yc2Fpci5naWYifQ=="
        },
        {
          "id": 164,
          "type": "Creature",
          "title": "Pirate Buccaneer",
          "formerNames": null,
          "healthPoints": 425,
          "xpPoints": 250,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdGVfQnVjY2FuZWVyLmdpZiJ9"
        },
        {
          "id": 167,
          "type": "Creature",
          "title": "Pirate Ghost",
          "formerNames": null,
          "healthPoints": 275,
          "xpPoints": 250,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdGVfR2hvc3QuZ2lmIn0="
        },
        {
          "id": 166,
          "type": "Creature",
          "title": "Pirate Cutthroat",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 175,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdGVfQ3V0dGhyb2F0LmdpZiJ9"
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
          "id": 176,
          "type": "Creature",
          "title": "Thornback Tortoise",
          "formerNames": null,
          "healthPoints": 300,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UaG9ybmJhY2tfVG9ydG9pc2UuZ2lmIn0="
        },
        {
          "id": 168,
          "type": "Creature",
          "title": "Pirate Marauder",
          "formerNames": null,
          "healthPoints": 210,
          "xpPoints": 125,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdGVfTWFyYXVkZXIuZ2lmIn0="
        },
        {
          "id": 106,
          "type": "Creature",
          "title": "Tarantula",
          "formerNames": null,
          "healthPoints": 225,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UYXJhbnR1bGEuZ2lmIn0="
        },
        {
          "id": 169,
          "type": "Creature",
          "title": "Pirate Skeleton",
          "formerNames": null,
          "healthPoints": 190,
          "xpPoints": 85,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdGVfU2tlbGV0b24uZ2lmIn0="
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
          "id": 104,
          "type": "Creature",
          "title": "Smuggler",
          "formerNames": null,
          "healthPoints": 130,
          "xpPoints": 48,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TbXVnZ2xlci5naWYifQ=="
        },
        {
          "id": 111,
          "type": "Creature",
          "title": "Crab",
          "formerNames": null,
          "healthPoints": 55,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmFiLmdpZiJ9"
        },
        {
          "id": 74,
          "type": "Creature",
          "title": "Pig",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaWcuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 1808,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 1.11,
      "isInestimable": false,
      "item": {
        "id": 672,
        "type": "Item",
        "title": "Turtle Shell",
        "pluralizedTitle": "Turtle Shells",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 10000,
        "npcBuyValue": 90,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1R1cnRsZV9TaGVsbC5naWYifQ=="
      }
    },
    {
      "id": 1703,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 0.32,
      "isInestimable": false,
      "item": {
        "id": 695,
        "type": "Item",
        "title": "Pirate Boots",
        "pluralizedTitle": "Pirate Boots",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": 10000,
        "npcBuyValue": 3000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1BpcmF0ZV9Cb290cy5naWYifQ=="
      }
    },
    {
      "id": 1047,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 815,
        "type": "Item",
        "title": "Deer Trophy",
        "pluralizedTitle": "Deer Trophies",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": 15000,
        "npcBuyValue": 3000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RlZXJfVHJvcGh5LmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 120,
      "type": "HuntRequirement",
      "huntId": 12,
      "dungeonRequirement": {
        "id": 188,
        "type": "DungeonRequirement",
        "dungeonId": 60,
        "description": "Mission \"Access to Meriana\" done of The Shattered Isles Quest",
        "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Meriana"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 25,
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
      "id": 26,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "knight",
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
  "lootUpdatedAt": "2021-11-15T00:45:47.849Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-10-27T23:02:38.624Z",
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
