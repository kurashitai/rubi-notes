// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "YFauz",
  "type": "Hunt",
  "title": "Summon + Spells",
  "vocation": "sorcerer",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTU1L1Ywb1N3cXFGLTEwLURlZXBlcl9CYW51dGEtbWluLnBuZyJ9",
  "minLevel": 200,
  "maxLevel": 300,
  "minProfitH": 30000,
  "maxProfitH": 100000,
  "minXpH": 1600000,
  "maxXpH": 2200000,
  "upvoteCount": 2,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1328,
    "type": "User",
    "username": "Herzer",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "Z6qYW6Hpq40",
  "videoStartAt": null,
  "centerCoordinates": "32815,32576,11",
  "instructions": "<p>Great hunt to make tasks of hydra, medusa and serpent spawn. It always makes a profit, even if it's little.</p>\n<p></p>\n<p>⚡️ Use your familiar to block the creatures and attack with energy and fire spells. After luring, throw an energy bomb in your foot to prevent from getting attacked.</p>\n<p></p>\n<p>🐕 The familiar only lasts for 30 minutes. When it expires you can attack while you run from the creatures, but be very careful not to get traped.</p>",
  "createdAt": "2022-01-05T23:47:42.796Z",
  "updatedAt": "2024-03-17T21:33:12.800Z",
  "dungeon": {
    "id": 211,
    "type": "Dungeon",
    "title": "Deeper Banuta",
    "accountStatus": "premium",
    "entranceCoordinates": "32815,32576,11",
    "entranceDirections": "{\"blocks\":[{\"key\":\"5g8am\",\"text\":\"Deeper Banuta is located north-east of Port Hope, in the depths of Tiquanda.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"cetgl\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1bbeo\",\"text\":\"If you unlocked the shortcut in mission 9 of The Ape City Quest you can go directly to the teleport, [map c=\\\"32853,32669,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":32,\"length\":31,\"key\":0}],\"data\":{}},{\"key\":\"9cc10\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bcd5v\",\"text\":\"Otherwise:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fd40\",\"text\":\"Walk to Banuta and go down the hole, [map c=\\\"32827,32575,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7ml6d\",\"text\":\"Go to the north-west and go down, [map c=\\\"32802,32546,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"89t0r\",\"text\":\"Access the teleport to floor -3, [map c=\\\"32839,32533,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"60e1o\",\"text\":\"Break the four Large Amphoras located [map c=\\\"32791,32525,10\\\" map]here[/map], [map c=\\\"32823,32524,10\\\" map]here[/map], [map c=\\\"32743,32583,10\\\" map]here[/map] and [map c=\\\"32876,32581,10\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2gn6a\",\"text\":\"Access the teleport to the hunt, [map c=\\\"32854,32544,10\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_Ape_City_Quest/Spoiler#Mission_9:_The_Deepest_Catacombs\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 13,
      "type": "City",
      "name": "Port Hope"
    }
  },
  "requirements": [
    {
      "id": 281,
      "type": "DungeonRequirement",
      "dungeonId": 211,
      "description": "Mission \"The Catacombs\" done of The Ape City Quest ",
      "link": "https://www.tibiawiki.com.br/wiki/The_Ape_City_Quest"
    }
  ],
  "sections": [
    {
      "id": 619,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 443,
          "type": "Creature",
          "title": "Medusa",
          "formerNames": null,
          "healthPoints": 4500,
          "xpPoints": 4050,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NZWR1c2EuZ2lmIn0="
        },
        {
          "id": 152,
          "type": "Creature",
          "title": "Serpent Spawn",
          "formerNames": null,
          "healthPoints": 3000,
          "xpPoints": 3050,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TZXJwZW50X1NwYXduLmdpZiJ9"
        },
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
          "id": 523,
          "type": "Creature",
          "title": "Eternal Guardian",
          "formerNames": null,
          "healthPoints": 2500,
          "xpPoints": 1800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FdGVybmFsX0d1YXJkaWFuLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 1242,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.22,
      "isInestimable": false,
      "item": {
        "id": 144,
        "type": "Item",
        "title": "Royal Helmet",
        "pluralizedTitle": "Royal Helmets",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 35000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JveWFsX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 1244,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 1,
        "type": "Item",
        "title": "Boots of Haste",
        "pluralizedTitle": "Boots of Hastes",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": null,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jvb3RzX29mX0hhc3RlLmdpZiJ9"
      }
    },
    {
      "id": 4610,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 1688,
        "type": "Item",
        "title": "Zaoan Sword",
        "pluralizedTitle": "Zaoan Swords",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 50000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX1N3b3JkLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 195,
      "type": "HuntRequirement",
      "huntId": 155,
      "dungeonRequirement": {
        "id": 281,
        "type": "DungeonRequirement",
        "dungeonId": 211,
        "description": "Mission \"The Catacombs\" done of The Ape City Quest ",
        "link": "https://www.tibiawiki.com.br/wiki/The_Ape_City_Quest"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 608,
      "type": "HuntSupply",
      "quantity": 250,
      "vocation": "sorcerer",
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
    }
  ],
  "lootUpdatedAt": "2022-01-08T23:08:22.824Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T23:08:22.807Z",
  "youtubeChannel": {
    "id": 67,
    "type": "YoutubeChannel",
    "name": "Herzer",
    "youtubeId": "UCZl4nL-JYs6a7yPawDHLwdg",
    "verifiedAt": "Sat Jan 08 2022 19:55:03 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 1328,
      "type": "User",
      "username": "Herzer",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
