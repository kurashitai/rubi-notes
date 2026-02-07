// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Cr2s0",
  "type": "Hunt",
  "title": "ED + EK or RP",
  "vocation": null,
  "teamSize": "duo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMzAyL25LeGpwanplLUNyMnMwLW1pbi5wbmcifQ==",
  "minLevel": 200,
  "maxLevel": 320,
  "minProfitH": 200000,
  "maxProfitH": 650000,
  "minXpH": 1000000,
  "maxXpH": 3000000,
  "upvoteCount": 3,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1173,
    "type": "User",
    "username": "Minorello",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "Y1v7sxDI-WQ",
  "videoStartAt": 10,
  "centerCoordinates": "32677,32654,8",
  "instructions": "<p>Very good hunt for DRUID + KNIGHT or PALADIN.</p>\n<p></p>\n<p>As gazers only attack who they see first, it's not necessary to use \"exeta res\", which is a good hunt for paladins to block (the only problem is hitting the creatures, as they take very little physical damage).</p>\n<p></p>\n<p>⚔️ EKs with winterblade do some damage!</p>\n<p></p>\n<p>🔥 Always Imbued and with fire protection if possible.</p>",
  "createdAt": "2022-06-20T17:50:07.626Z",
  "updatedAt": "2024-03-17T23:56:43.637Z",
  "dungeon": {
    "id": 361,
    "type": "Dungeon",
    "title": "Haunted Temple",
    "accountStatus": "premium",
    "entranceCoordinates": "32677,32651,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"37pvg\",\"text\":\"Haunted Temple is located north-east of Tiquanda ([map c=\\\"32677,32651,7\\\" map]here[/map]).\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"b113l\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"63fjf\",\"text\":\"Find the NPC Stricken Soul in Plains of Havoc [map c=\\\"32699,32247,8\\\" map]here[/map], he will give you access to the three Haunted Houses.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
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
      "id": 153,
      "type": "DungeonRequirement",
      "dungeonId": 361,
      "description": "Must have started mission \"Haunted House\" of The Dream Courts Quest",
      "link": "https://tibia.fandom.com/wiki/The_Dream_Courts_Quest#Haunted_House"
    }
  ],
  "sections": [
    {
      "id": 907,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1359,
          "type": "Creature",
          "title": "Thanatursus",
          "formerNames": null,
          "healthPoints": 7200,
          "xpPoints": 6300,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9UaGFuYXR1cnN1cy5naWYifQ=="
        },
        {
          "id": 1353,
          "type": "Creature",
          "title": "Gazer Spectre",
          "formerNames": null,
          "healthPoints": 4500,
          "xpPoints": 4200,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HYXplcl9TcGVjdHJlLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 11965,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 2.05,
      "isInestimable": false,
      "item": {
        "id": 3825,
        "type": "Item",
        "title": "Hexagonal Ruby",
        "pluralizedTitle": "Hexagonal Rubies",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": null,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hleGFnb25hbF9SdWJ5LmdpZiJ9"
      }
    },
    {
      "id": 11970,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.58,
      "isInestimable": false,
      "item": {
        "id": 2159,
        "type": "Item",
        "title": "Ornate Crossbow",
        "pluralizedTitle": "Ornate Crossbows",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": null,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ybmF0ZV9Dcm9zc2Jvdy5naWYifQ=="
      }
    },
    {
      "id": 12076,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 1.71,
      "isInestimable": false,
      "item": {
        "id": 2129,
        "type": "Item",
        "title": "Warrior's Axe",
        "pluralizedTitle": "Warrior's Axes",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 11000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhcnJpb3JfMjdzX0F4ZS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 93,
      "type": "HuntRequirement",
      "huntId": 302,
      "dungeonRequirement": {
        "id": 153,
        "type": "DungeonRequirement",
        "dungeonId": 361,
        "description": "Must have started mission \"Haunted House\" of The Dream Courts Quest",
        "link": "https://tibia.fandom.com/wiki/The_Dream_Courts_Quest#Haunted_House"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 1116,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "druid",
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
      "id": 1117,
      "type": "HuntSupply",
      "quantity": 600,
      "vocation": "druid",
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
      "id": 1118,
      "type": "HuntSupply",
      "quantity": 1200,
      "vocation": "knight",
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
      "id": 1119,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "knight",
      "supply": {
        "id": 6,
        "type": "Supply",
        "item": {
          "id": 3058,
          "type": "Item",
          "title": "Supreme Health Potion",
          "pluralizedTitle": "Supreme Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N1cHJlbWVfSGVhbHRoX1BvdGlvbi5naWYifQ=="
        }
      }
    },
    {
      "id": 1120,
      "type": "HuntSupply",
      "quantity": 50,
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
  "lootUpdatedAt": "2022-07-02T04:46:57.196Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-07-02T04:46:57.124Z",
  "youtubeChannel": {
    "id": 63,
    "type": "YoutubeChannel",
    "name": "Minorello",
    "youtubeId": "UCZo-0qCJDYw7Jx0_9-s0IdA",
    "verifiedAt": "Sat Jan 08 2022 11:28:11 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 1173,
      "type": "User",
      "username": "Minorello",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Duo"
} as const;

export default hunt;
