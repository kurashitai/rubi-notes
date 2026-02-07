// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "ANKi7",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNDkvZjd2SnlmZUEtQU5LaTctbWluLnBuZyJ9",
  "minLevel": 150,
  "maxLevel": 350,
  "minProfitH": -200000,
  "maxProfitH": -50000,
  "minXpH": 1000000,
  "maxXpH": 3000000,
  "upvoteCount": 27,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 11,
    "type": "User",
    "username": "guimaplayer",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "GVtAhyc2IyY",
  "videoStartAt": 12,
  "centerCoordinates": "32717,31448,8",
  "instructions": "<p>Despite the negative profit it is a great place to do xp 💯.</p>\n<p></p>\n<p>Going little by little you can go there even before level 150, but to close a box it's recommend at least level 230.</p>",
  "createdAt": "2021-11-14T17:30:43.893Z",
  "updatedAt": "2025-05-23T15:25:04.111Z",
  "dungeon": {
    "id": 441,
    "type": "Dungeon",
    "title": "The Barkless",
    "accountStatus": "premium",
    "entranceCoordinates": "32717,31448,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"1koeu\",\"text\":\"The Barkless is located north of Ab'dendriel in the underground. If you have started the Cults of Tibia Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":72,\"length\":37,\"key\":0}],\"data\":{}},{\"key\":\"2473r\",\"text\":\"Go down the hole [map c=\\\"32689,31581,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"916i6\",\"text\":\"Go down again and go up in the rope spot to the south.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"63ceb\",\"text\":\"Walk to the north-east until you reach a mystic flame ([map c=\\\"32721,31546,8\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"e3i3v\",\"text\":\"Walk to the west and ask for a mission to the NPC Tigo if you haven't yet. The teleport to the hunt is to the west of Tigo.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#Method\",\"rel\":\"noopener noreferrer\",\"target\":\"_blank\",\"url\":\"https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#Method\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 6,
      "type": "City",
      "name": "Ab'Dendriel"
    }
  },
  "requirements": [
    {
      "id": 276,
      "type": "DungeonRequirement",
      "dungeonId": 441,
      "description": "Must have started the Cults of Tibia Quest",
      "link": "https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#Method"
    }
  ],
  "sections": [
    {
      "id": 1500,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1146,
          "type": "Creature",
          "title": "Barkless Fanatic",
          "formerNames": null,
          "healthPoints": 3200,
          "xpPoints": 2500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CYXJrbGVzc19GYW5hdGljLmdpZiJ9"
        },
        {
          "id": 1145,
          "type": "Creature",
          "title": "Barkless Devotee",
          "formerNames": null,
          "healthPoints": 2800,
          "xpPoints": 2200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CYXJrbGVzc19EZXZvdGVlLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 9989,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 500,
      "percentage": 1.23,
      "isInestimable": false,
      "item": {
        "id": 3398,
        "type": "Item",
        "title": "Bed of Nails",
        "pluralizedTitle": "Bed of Nails",
        "formerNames": null,
        "minValue": 500,
        "maxValue": null,
        "npcBuyValue": 500,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JlZF9vZl9OYWlscy5naWYifQ=="
      }
    },
    {
      "id": 9993,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 350,
      "percentage": 4.97,
      "isInestimable": false,
      "item": {
        "id": 3275,
        "type": "Item",
        "title": "Tiger Eye",
        "pluralizedTitle": "Tiger Eyes",
        "formerNames": null,
        "minValue": 350,
        "maxValue": null,
        "npcBuyValue": 350,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RpZ2VyX0V5ZS5naWYifQ=="
      }
    },
    {
      "id": 9990,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 250,
      "percentage": 0.85,
      "isInestimable": false,
      "item": {
        "id": 3401,
        "type": "Item",
        "title": "Torn Shirt",
        "pluralizedTitle": "Torn Shirts",
        "formerNames": null,
        "minValue": 250,
        "maxValue": null,
        "npcBuyValue": 250,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Rvcm5fU2hpcnQuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 40,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 29,
        "type": "DungeonRequiredItem",
        "dungeonId": 441,
        "requiredItem": {
          "id": 7,
          "type": "RequiredItem",
          "item": {
            "id": 13,
            "type": "Item",
            "title": "Machete",
            "pluralizedTitle": "Machetes",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hY2hldGUuZ2lmIn0="
          }
        }
      },
      "huntId": 49
    },
    {
      "id": 41,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 30,
        "type": "DungeonRequiredItem",
        "dungeonId": 441,
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
      "huntId": 49
    },
    {
      "id": 42,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 31,
        "type": "DungeonRequiredItem",
        "dungeonId": 441,
        "requiredItem": {
          "id": 13,
          "type": "RequiredItem",
          "item": {
            "id": 45,
            "type": "Item",
            "title": "Shovel",
            "pluralizedTitle": "Shovels",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Nob3ZlbC5naWYifQ=="
          }
        }
      },
      "huntId": 49
    }
  ],
  "huntRequirements": [
    {
      "id": 189,
      "type": "HuntRequirement",
      "huntId": 49,
      "dungeonRequirement": {
        "id": 276,
        "type": "DungeonRequirement",
        "dungeonId": 441,
        "description": "Must have started the Cults of Tibia Quest",
        "link": "https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#Method"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 162,
      "type": "HuntSupply",
      "quantity": 500,
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
      "id": 163,
      "type": "HuntSupply",
      "quantity": 40,
      "vocation": "knight",
      "supply": {
        "id": 5,
        "type": "Supply",
        "item": {
          "id": 1062,
          "type": "Item",
          "title": "Ultimate Health Potion",
          "pluralizedTitle": "Ultimate Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-21T02:30:09.034Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-21T02:18:58.297Z",
  "youtubeChannel": {
    "id": 3,
    "type": "YoutubeChannel",
    "name": "Guima Player",
    "youtubeId": "UC1EGV6XwsRdDHgcG3XEMPXw",
    "verifiedAt": "Mon Nov 15 2021 20:53:10 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 11,
      "type": "User",
      "username": "guimaplayer",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
