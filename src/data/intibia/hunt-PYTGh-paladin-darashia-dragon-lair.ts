// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "PYTGh",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODIvRjJlT0tXbnktUFlUR2gtbWluLnBuZyJ9",
  "minLevel": 70,
  "maxLevel": 120,
  "minProfitH": -10000,
  "maxProfitH": 20000,
  "minXpH": 200000,
  "maxXpH": 300000,
  "upvoteCount": 16,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "es",
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
  "videoId": "EijONwttZ0Q",
  "videoStartAt": 10,
  "centerCoordinates": "33237,32258,10",
  "instructions": "<p>Good place for paladins level 70+ to get experience.</p>\n<p></p>\n<p>💸 The loot is not very good, you may even waste sometimes. But if you are lucky you can drop Royal Helmet/DSM and make a good profit.</p>\n<p></p>\n<p>If you have an obsidian knife you can skin dragons/DLs and improve your profit.</p>\n<p></p>\n<p>🏹 Use a Ornate Crossbow + Drillbolts, or Arbalest if you are level 75+. Just walk in circles luring 2 creatures and attacking from distance.</p>\n<p></p>\n<p>🔥 Don't stay in front of the dragon lords, their wave is strong and can kill. If you feel the need, use a Magma Amulet to take less fire damage.</p>",
  "createdAt": "2021-11-27T19:09:36.986Z",
  "updatedAt": "2024-03-17T21:18:14.652Z",
  "dungeon": {
    "id": 148,
    "type": "Dungeon",
    "title": "Darashia Dragon Lair",
    "accountStatus": "premium",
    "entranceCoordinates": "33237,32258,10",
    "entranceDirections": "{\"blocks\":[{\"key\":\"d7d89\",\"text\":\"Darashia Dragon Lair is located to the north of Darashia desert.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":20,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"9i2ps\",\"text\":\"Pass the level 40 door [map c=\\\"33265,32278,7\\\" map](here)[/map] and go down the ladders.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
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
      "id": 108,
      "type": "DungeonRequirement",
      "dungeonId": 148,
      "description": "Level 40",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 589,
      "type": "DungeonSection",
      "name": "2nd floor",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 45,
          "type": "Creature",
          "title": "Dragon Lord",
          "formerNames": null,
          "healthPoints": 1900,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb25fTG9yZC5naWYifQ=="
        },
        {
          "id": 36,
          "type": "Creature",
          "title": "Dragon",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb24uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 554,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 40000,
      "percentage": 0.13,
      "isInestimable": false,
      "item": {
        "id": 50,
        "type": "Item",
        "title": "Dragon Scale Mail",
        "pluralizedTitle": "Dragon Scale Mails",
        "formerNames": null,
        "minValue": 40000,
        "maxValue": 60000,
        "npcBuyValue": 40000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyYWdvbl9TY2FsZV9NYWlsLmdpZiJ9"
      }
    },
    {
      "id": 553,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.23,
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
      "id": 555,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 15000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 873,
        "type": "Item",
        "title": "Dragon Slayer",
        "pluralizedTitle": "Dragon Slayers",
        "formerNames": null,
        "minValue": 15000,
        "maxValue": 25000,
        "npcBuyValue": 15000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyYWdvbl9TbGF5ZXIuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 64,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 49,
        "type": "DungeonRequiredItem",
        "dungeonId": 148,
        "requiredItem": {
          "id": 8,
          "type": "RequiredItem",
          "item": {
            "id": 696,
            "type": "Item",
            "title": "Obsidian Knife",
            "pluralizedTitle": "Obsidian Knives",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ic2lkaWFuX0tuaWZlLmdpZiJ9"
          }
        }
      },
      "huntId": 82
    }
  ],
  "huntRequirements": [
    {
      "id": 48,
      "type": "HuntRequirement",
      "huntId": 82,
      "dungeonRequirement": {
        "id": 108,
        "type": "DungeonRequirement",
        "dungeonId": 148,
        "description": "Level 40",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 330,
      "type": "HuntSupply",
      "quantity": 200,
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
      "id": 331,
      "type": "HuntSupply",
      "quantity": 600,
      "vocation": "paladin",
      "supply": {
        "id": 135,
        "type": "Supply",
        "item": {
          "id": 2313,
          "type": "Item",
          "title": "Drill Bolt",
          "pluralizedTitle": "Drill Bolts",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyaWxsX0JvbHQuZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:28:51.553Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:28:51.534Z",
  "youtubeChannel": {
    "id": 36,
    "type": "YoutubeChannel",
    "name": "Sawu",
    "youtubeId": "UC_Y7rUTQ9BTV8L0bvtJu4kA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
