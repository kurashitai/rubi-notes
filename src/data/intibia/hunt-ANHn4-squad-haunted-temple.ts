// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "ANHn4",
  "type": "Hunt",
  "title": null,
  "vocation": null,
  "teamSize": "squad",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTMzL1ByaUtESW9oLUFOSG40LW1pbi5wbmcifQ==",
  "minLevel": 130,
  "maxLevel": 400,
  "minProfitH": 150000,
  "maxProfitH": 400000,
  "minXpH": 1000000,
  "maxXpH": 1600000,
  "upvoteCount": 9,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 780,
    "type": "User",
    "username": "Odria",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "X7qwx-m-NSQ",
  "videoStartAt": null,
  "centerCoordinates": "32677,32651,7",
  "instructions": "<ul>\n  <li>Beware in the first respawn.</li>\n  <li>When the knight descends the ladder, walk 6 sqm down, this forming the most critical box in the hunt.</li>\n  <li>Best rotation is clockwise.&nbsp;</li>\n  <li>💰 Hexagonal Ruby is the best drop in the hunt.&nbsp;</li>\n  <li>⚠️ Watch out for 2 Tanathurso's respawn towards the Northwest.</li>\n</ul>",
  "createdAt": "2021-12-27T12:44:50.745Z",
  "updatedAt": "2024-03-17T21:39:00.261Z",
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
      "id": 90,
      "type": "HuntRequirement",
      "huntId": 133,
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
      "id": 542,
      "type": "HuntSupply",
      "quantity": 30,
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
    },
    {
      "id": 543,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "knight",
      "supply": {
        "id": 88,
        "type": "Supply",
        "item": {
          "id": 172,
          "type": "Item",
          "title": "Garlic Necklace",
          "pluralizedTitle": "Garlic Necklaces",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dhcmxpY19OZWNrbGFjZS5naWYifQ=="
        }
      }
    },
    {
      "id": 544,
      "type": "HuntSupply",
      "quantity": 300,
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
      "id": 545,
      "type": "HuntSupply",
      "quantity": 700,
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
      "id": 546,
      "type": "HuntSupply",
      "quantity": 300,
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
    },
    {
      "id": 547,
      "type": "HuntSupply",
      "quantity": 700,
      "vocation": "sorcerer",
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
      "id": 548,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "paladin",
      "supply": {
        "id": 12,
        "type": "Supply",
        "item": {
          "id": 3060,
          "type": "Item",
          "title": "Ultimate Spirit Potion",
          "pluralizedTitle": "Ultimate Spirit Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX1NwaXJpdF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-02T19:53:30.556Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-02T19:53:30.528Z",
  "youtubeChannel": {
    "id": 52,
    "type": "YoutubeChannel",
    "name": "Lyos Gameplays",
    "youtubeId": "UC7saqFoulQctKUXh0yJEobw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Time x4"
} as const;

export default hunt;
