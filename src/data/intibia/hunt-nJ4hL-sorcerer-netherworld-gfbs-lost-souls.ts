// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "nJ4hL",
  "type": "Hunt",
  "title": "GFBs + Lost Souls",
  "vocation": "sorcerer",
  "teamSize": "solo",
  "image": null,
  "minLevel": 400,
  "maxLevel": 600,
  "minProfitH": -100000,
  "maxProfitH": 300000,
  "minXpH": 2400000,
  "maxXpH": 4000000,
  "upvoteCount": 5,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1323,
    "type": "User",
    "username": "Paralecus",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "WdcxUYuapHY",
  "videoStartAt": 102,
  "centerCoordinates": "33540,31443,8",
  "instructions": "<p>Lure several creatures and throw GFBs or Avalanches, every once in a while use Hell's Core (Fire UE).</p>\n<p></p>\n<p>You can use Sap Strength (Exori kor) if you feel they hit you too hard or Expose Weakness (Exori moe) if you want to kill faster, at your own criteria depending on what you need.</p>\n<p></p>\n<p>Beware of over luring and getting trapped as 3-4 can easily combo any mage on close range</p>",
  "createdAt": "2022-12-06T15:59:15.991Z",
  "updatedAt": "2024-03-18T00:12:00.005Z",
  "dungeon": {
    "id": 377,
    "type": "Dungeon",
    "title": "Netherworld",
    "accountStatus": "premium",
    "entranceCoordinates": "33540,31443,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"cc6q3\",\"text\":\"Netherworld is located north-east of Port Hope. If you have done the Mission \\\"Journey to the Netherworld\\\" of Feaster of Souls Quest you are able to access the dungeon:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":69,\"length\":62,\"key\":0}],\"data\":{}},{\"key\":\"m3co\",\"text\":\"Walk to the invisible teleport, [map c=\\\"32885,32520,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"d63he\",\"text\":\"Equip a Burial Shroud (obtained in Feaster of Souls Quest) and step into the teleport.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Feaster_of_Souls_Quest#Journey_to_the_Netherworld\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
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
      "id": 190,
      "type": "DungeonRequirement",
      "dungeonId": 377,
      "description": "Mission \"Journey to the Netherworld\" done of Feaster of Souls Quest",
      "link": "https://tibia.fandom.com/wiki/Feaster_of_Souls_Quest#Journey_to_the_Netherworld"
    }
  ],
  "sections": [
    {
      "id": 377,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1457,
          "type": "Creature",
          "title": "Freakish Lost Soul",
          "formerNames": null,
          "healthPoints": 7000,
          "xpPoints": 7020,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GcmVha2lzaF9Mb3N0X1NvdWwuZ2lmIn0="
        },
        {
          "id": 1456,
          "type": "Creature",
          "title": "Mean Lost Soul",
          "formerNames": null,
          "healthPoints": 5000,
          "xpPoints": 5580,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NZWFuX0xvc3RfU291bC5naWYifQ=="
        },
        {
          "id": 1455,
          "type": "Creature",
          "title": "Flimsy Lost Soul",
          "formerNames": null,
          "healthPoints": 4000,
          "xpPoints": 4500,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GbGltc3lfTG9zdF9Tb3VsLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 13319,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35000,
      "percentage": 0.78,
      "isInestimable": false,
      "item": {
        "id": 2321,
        "type": "Item",
        "title": "Crystal Crossbow",
        "pluralizedTitle": "Crystal Crossbows",
        "formerNames": null,
        "minValue": 35000,
        "maxValue": null,
        "npcBuyValue": 35000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NyeXN0YWxfQ3Jvc3Nib3cuZ2lmIn0="
      }
    },
    {
      "id": 13309,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 28000,
      "percentage": 0.43,
      "isInestimable": false,
      "item": {
        "id": 1827,
        "type": "Item",
        "title": "Twiceslicer",
        "pluralizedTitle": "Twiceslicers",
        "formerNames": null,
        "minValue": 28000,
        "maxValue": null,
        "npcBuyValue": 28000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1R3aWNlc2xpY2VyLmdpZiJ9"
      }
    },
    {
      "id": 13306,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 1.29,
      "isInestimable": false,
      "item": {
        "id": 934,
        "type": "Item",
        "title": "Mercenary Sword",
        "pluralizedTitle": "Mercenary Swords",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": 40000,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01lcmNlbmFyeV9Td29yZC5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 200,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 47,
        "type": "DungeonRequiredItem",
        "dungeonId": 377,
        "requiredItem": {
          "id": 122,
          "type": "RequiredItem",
          "item": {
            "id": 4156,
            "type": "Item",
            "title": "Burial Shroud",
            "pluralizedTitle": "Burial Shrouds",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0J1cmlhbF9TaHJvdWQuZ2lmIn0="
          }
        }
      },
      "huntId": 424
    }
  ],
  "huntRequirements": [
    {
      "id": 124,
      "type": "HuntRequirement",
      "huntId": 424,
      "dungeonRequirement": {
        "id": 190,
        "type": "DungeonRequirement",
        "dungeonId": 377,
        "description": "Mission \"Journey to the Netherworld\" done of Feaster of Souls Quest",
        "link": "https://tibia.fandom.com/wiki/Feaster_of_Souls_Quest#Journey_to_the_Netherworld"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 1451,
      "type": "HuntSupply",
      "quantity": 1000,
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
      "id": 1452,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "sorcerer",
      "supply": {
        "id": 78,
        "type": "Supply",
        "item": {
          "id": 4008,
          "type": "Item",
          "title": "Enchanted Theurgic Amulet",
          "pluralizedTitle": "Enchanted Theurgic Amulets",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuY2hhbnRlZF9UaGV1cmdpY19BbXVsZXQuZ2lmIn0="
        }
      }
    },
    {
      "id": 1453,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "sorcerer",
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
      "id": 1454,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "sorcerer",
      "supply": {
        "id": 109,
        "type": "Supply",
        "item": {
          "id": 2285,
          "type": "Item",
          "title": "Prismatic Ring",
          "pluralizedTitle": "Prismatic Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1ByaXNtYXRpY19SaW5nLmdpZiJ9"
        }
      }
    },
    {
      "id": 1455,
      "type": "HuntSupply",
      "quantity": 2,
      "vocation": "sorcerer",
      "supply": {
        "id": 111,
        "type": "Supply",
        "item": {
          "id": 3106,
          "type": "Item",
          "title": "Ring of Green Plasma",
          "pluralizedTitle": "Ring of Green Plasmas",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfR3JlZW5fUGxhc21hLmdpZiJ9"
        }
      }
    },
    {
      "id": 1456,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "sorcerer",
      "supply": {
        "id": 114,
        "type": "Supply",
        "item": {
          "id": 4148,
          "type": "Item",
          "title": "Ring of Souls",
          "pluralizedTitle": "Ring of Souls",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfU291bHMuZ2lmIn0="
        }
      }
    },
    {
      "id": 1457,
      "type": "HuntSupply",
      "quantity": 400,
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
  "lootUpdatedAt": "2022-12-16T01:51:53.372Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-12-16T01:51:53.248Z",
  "youtubeChannel": {
    "id": 75,
    "type": "YoutubeChannel",
    "name": "Tibia Mago",
    "youtubeId": "UCA29xeaplZINU0OuE-OVwjg",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
