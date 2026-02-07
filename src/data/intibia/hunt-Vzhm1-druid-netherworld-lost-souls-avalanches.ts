// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Vzhm1",
  "type": "Hunt",
  "title": "Lost Souls + Avalanches",
  "vocation": "druid",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNzgvUmhZaExTMEQtMDEzLWRydWlkLW5ldGhlcndvcmxkLWxvc3Qtc291bHMtYXZhbGFuY2hlcy1taW4ucG5nIn0=",
  "minLevel": 300,
  "maxLevel": 600,
  "minProfitH": -10000,
  "maxProfitH": 10000,
  "minXpH": 2300000,
  "maxXpH": 2800000,
  "upvoteCount": 2,
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
  "videoId": "gzxbQ6mtDX0",
  "videoStartAt": null,
  "centerCoordinates": "33540,31443,8",
  "instructions": "<p>Good hunt for experience for mages level 300+. The loot pays the waste, but no more than that.</p>\n<p></p>\n<p>🛡️ Use equipments for life drain protection, like:</p>\n<ul>\n  <li>Bone Fiddle</li>\n  <li>Garlic Necklace</li>\n  <li>Necklace of the Deep</li>\n  <li>Ring of Souls</li>\n</ul>\n<p>❄️ Start luring 4 lost souls and shoot avalanches to kill them. Lure more as you feel more confident.</p>",
  "createdAt": "2021-11-24T05:42:42.210Z",
  "updatedAt": "2024-03-17T23:19:42.231Z",
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
      "id": 62,
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
      "huntId": 78
    }
  ],
  "huntRequirements": [
    {
      "id": 121,
      "type": "HuntRequirement",
      "huntId": 78,
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
      "id": 285,
      "type": "HuntSupply",
      "quantity": 350,
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
      "id": 286,
      "type": "HuntSupply",
      "quantity": 650,
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
      "id": 287,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "druid",
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
    }
  ],
  "lootUpdatedAt": "2021-11-25T20:23:36.797Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-25T20:23:36.741Z",
  "youtubeChannel": {
    "id": 34,
    "type": "YoutubeChannel",
    "name": "Carpels TV",
    "youtubeId": "UCjOLDb8I23vR3gBp8I80uEQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
