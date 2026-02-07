// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "So6ro",
  "type": "Hunt",
  "title": "Coryms + GFBs",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTE5L1c3TzZUMEMzLTAxMS1kcnVpZC1zb3JjZXJlci11cHBlci1zcGlrZS1jb3J5bXMtZ2Zicy1taW4ucG5nIn0=",
  "minLevel": 30,
  "maxLevel": 50,
  "minProfitH": 0,
  "maxProfitH": 1000,
  "minXpH": 200000,
  "maxXpH": 300000,
  "upvoteCount": 11,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 209,
    "type": "User",
    "username": "Icarouo",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": "guard"
  },
  "videoId": "2qJ8BJtsMmc",
  "videoStartAt": 13,
  "centerCoordinates": "32242,32605,10",
  "instructions": "<p>Great hunt to rush experience on low level mages. For a better xp you won't be looting, only lure creatures and shoot GFBs 🔥, but if you wish you can loot mummy's Flask of Embalming Fluid, imbuement item that gives a nice profit.</p>\n<p></p>\n<p>❄️ Focus demon skeletons with avalanches because they cause the most damage.</p>",
  "createdAt": "2021-12-09T00:50:15.040Z",
  "updatedAt": "2024-03-17T21:07:46.959Z",
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
      "id": 174,
      "type": "HuntRequirement",
      "huntId": 119,
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
      "id": 465,
      "type": "HuntSupply",
      "quantity": 150,
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
      "id": 466,
      "type": "HuntSupply",
      "quantity": 150,
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
      "id": 467,
      "type": "HuntSupply",
      "quantity": 150,
      "vocation": "mage",
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
    }
  ],
  "lootUpdatedAt": "2021-12-09T19:47:16.294Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-09T19:47:16.254Z",
  "youtubeChannel": {
    "id": 43,
    "type": "YoutubeChannel",
    "name": "Icarouou",
    "youtubeId": "UCzya2oco3fcaBOtnn1-Bl4A",
    "verifiedAt": "Thu Dec 09 2021 16:34:11 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 209,
      "type": "User",
      "username": "Icarouo",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": "guard"
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
