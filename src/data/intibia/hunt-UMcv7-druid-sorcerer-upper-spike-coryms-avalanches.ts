// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "UMcv7",
  "type": "Hunt",
  "title": "Coryms + Avalanches",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNTYvazRKZHhlRDEtVU1jdjctbWluLnBuZyJ9",
  "minLevel": 30,
  "maxLevel": 50,
  "minProfitH": 20000,
  "maxProfitH": 100000,
  "minXpH": 180000,
  "maxXpH": 240000,
  "upvoteCount": 9,
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
  "videoId": "ITx7h-A4nSs",
  "videoStartAt": 47,
  "centerCoordinates": "32264,32590,8",
  "instructions": "<p>Great hunt for low level mages to rush experience and get a nice profit.</p>\n<p></p>\n<p>🐀 Start the hunt to the east, in the coryms spawn. Lure many creatures and kill them with avalanche.</p>\n<p></p>\n<p>💰 Then go to the north, in the mummies area and clear it. Loot all the Flasks of Embalming Fluid, an imbuement item that can be sold for a good price.</p>\n<p></p>\n<p>🐾 The number of creatures is high and you can finish many bestiaries in this hunt.</p>",
  "createdAt": "2021-11-21T23:39:27.145Z",
  "updatedAt": "2024-03-18T00:14:59.671Z",
  "dungeon": {
    "id": 245,
    "type": "Dungeon",
    "title": "Upper Spike",
    "accountStatus": "premium",
    "entranceCoordinates": "32242,32605,10",
    "entranceDirections": "{\"blocks\":[{\"key\":\"8tm5j\",\"text\":\"Upper Spike is located under Kazordoon. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"5jsjk\",\"text\":\"Go to Kazordoon and step on the large crystal teleporter ([map c=\\\"32624,31854,11\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"e80h\",\"text\":\"Go down two floors and step on the teleporter ([map c=\\\"32235,32604,10\\\" map]here[/map]) to get to the hunt.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 4,
      "type": "City",
      "name": "Kazordoon"
    }
  },
  "requirements": [
    {
      "id": 254,
      "type": "DungeonRequirement",
      "dungeonId": 245,
      "description": "Level 25 to 49",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 245,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 787,
          "type": "Creature",
          "title": "Corym Vanguard",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 490,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db3J5bV9WYW5ndWFyZC5naWYifQ=="
        },
        {
          "id": 413,
          "type": "Creature",
          "title": "Zombie",
          "formerNames": null,
          "healthPoints": 500,
          "xpPoints": 280,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9ab21iaWUuZ2lmIn0="
        },
        {
          "id": 782,
          "type": "Creature",
          "title": "Corym Skirmisher",
          "formerNames": null,
          "healthPoints": 450,
          "xpPoints": 260,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db3J5bV9Ta2lybWlzaGVyLmdpZiJ9"
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
          "id": 781,
          "type": "Creature",
          "title": "Corym Charlatan",
          "formerNames": null,
          "healthPoints": 250,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db3J5bV9DaGFybGF0YW4uZ2lmIn0="
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
          "id": 81,
          "type": "Creature",
          "title": "Gargoyle",
          "formerNames": null,
          "healthPoints": 250,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HYXJnb3lsZS5naWYifQ=="
        },
        {
          "id": 824,
          "type": "Creature",
          "title": "Enraged Soul",
          "formerNames": null,
          "healthPoints": 150,
          "xpPoints": 120,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbnJhZ2VkX1NvdWwuZ2lmIn0="
        },
        {
          "id": 82,
          "type": "Creature",
          "title": "Ghost",
          "formerNames": null,
          "healthPoints": 150,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG9zdC5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 6301,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2500,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 2465,
        "type": "Item",
        "title": "Rat God Doll",
        "pluralizedTitle": "Rat God Dolls",
        "formerNames": null,
        "minValue": 2500,
        "maxValue": null,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JhdF9Hb2RfRG9sbC5naWYifQ=="
      }
    },
    {
      "id": 725,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 196,
        "type": "Item",
        "title": "Guardian Shield",
        "pluralizedTitle": "Guardian Shields",
        "formerNames": null,
        "minValue": 2000,
        "maxValue": 4000,
        "npcBuyValue": 2000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0d1YXJkaWFuX1NoaWVsZC5naWYifQ=="
      }
    },
    {
      "id": 809,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1000,
      "percentage": 0.18,
      "isInestimable": false,
      "item": {
        "id": 1649,
        "type": "Item",
        "title": "Shiny Stone",
        "pluralizedTitle": "Shiny Stones",
        "formerNames": null,
        "minValue": 1000,
        "maxValue": 3000,
        "npcBuyValue": 500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NoaW55X1N0b25lLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 175,
      "type": "HuntRequirement",
      "huntId": 56,
      "dungeonRequirement": {
        "id": 254,
        "type": "DungeonRequirement",
        "dungeonId": 245,
        "description": "Level 25 to 49",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 216,
      "type": "HuntSupply",
      "quantity": 120,
      "vocation": "mage",
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
      "id": 217,
      "type": "HuntSupply",
      "quantity": 250,
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
    },
    {
      "id": 218,
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
    },
    {
      "id": 219,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "mage",
      "supply": {
        "id": 14,
        "type": "Supply",
        "item": {
          "id": 895,
          "type": "Item",
          "title": "Mastermind Potion",
          "pluralizedTitle": "Mastermind Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hc3Rlcm1pbmRfUG90aW9uLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-22T02:29:45.250Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-22T02:29:45.228Z",
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
