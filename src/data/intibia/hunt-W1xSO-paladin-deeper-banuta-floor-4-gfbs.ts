// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "W1xSO",
  "type": "Hunt",
  "title": "Floor -4 + GFBs",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTIzL2VTSHFmOG1NLTgucG5nIn0=",
  "minLevel": 250,
  "maxLevel": 500,
  "minProfitH": 250000,
  "maxProfitH": 450000,
  "minXpH": 1800000,
  "maxXpH": 2300000,
  "upvoteCount": 12,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 31,
    "type": "User",
    "username": "Xarkost",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "q_ff8ycftIc",
  "videoStartAt": null,
  "centerCoordinates": "32753,32604,15",
  "instructions": "<p>Good spawn to do Grizzy Adams tasks as&nbsp;you can kill Hydras, Medusas, and Serpent Spawns</p>\n<p>simultaneously.</p>\n<p></p>\n<p>🏹 Lure groups and shoot GFB as it is the most effective against Serpent Spawns and Medusa which will be the majority of what we'll be killing in this spawn.&nbsp;</p>\n<p></p>\n<p>🛡️ If you are looking for additional protection a Sleep Shawl will be quite useful as well as a Ring of Souls. If you have them it is also helpful to use a Living Vine Bow, Line Spagenhelm, and a Bone Fiddle.&nbsp;</p>",
  "createdAt": "2021-12-10T16:59:56.973Z",
  "updatedAt": "2025-07-06T18:29:43.922Z",
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
      "id": 621,
      "type": "DungeonSection",
      "name": "Floor -4",
      "position": 5,
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
        },
        {
          "id": 551,
          "type": "Creature",
          "title": "Souleater",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 1300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Tb3VsZWF0ZXIuZ2lmIn0="
        },
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
          "id": 100,
          "type": "Creature",
          "title": "Elder Bonelord",
          "formerNames": null,
          "healthPoints": 500,
          "xpPoints": 280,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9Cb25lbG9yZC5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4768,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 40000,
      "percentage": 0.13,
      "isInestimable": false,
      "item": {
        "id": 1396,
        "type": "Item",
        "title": "Spirit Container",
        "pluralizedTitle": "Spirit Containers",
        "formerNames": null,
        "minValue": 40000,
        "maxValue": 80000,
        "npcBuyValue": 40000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwaXJpdF9Db250YWluZXIuZ2lmIn0="
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
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 196,
      "type": "HuntRequirement",
      "huntId": 123,
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
      "id": 493,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "paladin",
      "supply": {
        "id": 77,
        "type": "Supply",
        "item": {
          "id": 3811,
          "type": "Item",
          "title": "Enchanted Sleep Shawl",
          "pluralizedTitle": "Enchanted Sleep Shawls",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuY2hhbnRlZF9TbGVlcF9TaGF3bC5naWYifQ=="
        }
      }
    },
    {
      "id": 494,
      "type": "HuntSupply",
      "quantity": 1000,
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
      "id": 495,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "paladin",
      "supply": {
        "id": 43,
        "type": "Supply",
        "item": {
          "id": 1949,
          "type": "Item",
          "title": "Great Fireball Rune",
          "pluralizedTitle": "Great Fireball Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X0ZpcmViYWxsX1J1bmUuZ2lmIn0="
        }
      }
    },
    {
      "id": 496,
      "type": "HuntSupply",
      "quantity": 1000,
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
    }
  ],
  "lootUpdatedAt": "2021-12-16T13:14:12.032Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-16T13:14:12.004Z",
  "youtubeChannel": {
    "id": 41,
    "type": "YoutubeChannel",
    "name": "Xarkost",
    "youtubeId": "UC-QoyM7EJJQOf3obGbjaINw",
    "verifiedAt": "Wed Dec 08 2021 23:46:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 31,
      "type": "User",
      "username": "Xarkost",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
