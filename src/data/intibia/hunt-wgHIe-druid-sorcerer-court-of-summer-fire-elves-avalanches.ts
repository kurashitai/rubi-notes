// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "wgHIe",
  "type": "Hunt",
  "title": "Fire Elves + Avalanches",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTU3L2NBVGFIVTNuLTAwNy1kcnVpZC1zb3JjZXJlci1jb3VydC1vZi1zdW1tZXItZmlyZS1lbHZlcy1hdmFsYW5jaGVzLW1pbi5wbmcifQ==",
  "minLevel": 350,
  "maxLevel": 500,
  "minProfitH": 200000,
  "maxProfitH": 350000,
  "minXpH": 2000000,
  "maxXpH": 3000000,
  "upvoteCount": 7,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1340,
    "type": "User",
    "username": "rsoliveira85",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "yj9gK2xtdIQ",
  "videoStartAt": null,
  "centerCoordinates": "33693,32208,7",
  "instructions": "<p>Great hunt for mages level 350+ for both experience and loot. It's better for druids because of the ice UE ❄️.</p>\n<p></p>\n<p>Lure some creatures and shoot avalanches. Be careful to not get trapped.</p>\n<p></p>\n<p>🛡️ Use fire protection. If you are 400+, you can replace sun catcher by moon mirror, for the arachnophobicas' death damage, and nightmare boots for thanatursus' energy damage.</p>\n<p></p>\n<p>⚗️ If you have money to invest, 1 powerful fire protection imbuement on shield.</p>",
  "createdAt": "2022-01-06T03:30:23.081Z",
  "updatedAt": "2024-04-27T02:24:08.417Z",
  "dungeon": {
    "id": 365,
    "type": "Dungeon",
    "title": "Court of Summer",
    "accountStatus": "premium",
    "entranceCoordinates": "33694,32225,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"9i7ne\",\"text\":\"Court of Summer (or Summer Court) is located east of Fae Village. After completing the mission \\\"Court of Summer\\\" of The Dream Courts Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":87,\"length\":52,\"key\":0}],\"data\":{}},{\"key\":\"50n0u\",\"text\":\"Go to Venore, go up the ladder ([map c=\\\"32957,32076,6\\\" map]here[/map]) and enter the earth gate.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"aar3q\",\"text\":\"Use a small emerald in the earth shrine to be teleported to Fae Village.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"61u0q\",\"text\":\"Go to the north-east and pass through the teleport, [map c=\\\"33583,32208,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/The_Dream_Courts_Quest#Court_of_Summer\",\"rel\":\"noopener noreferrer\",\"target\":\"_blank\",\"url\":\"https://tibia.fandom.com/wiki/The_Dream_Courts_Quest#Court_of_Summer\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 18,
      "type": "City",
      "name": "Feyrist"
    }
  },
  "requirements": [
    {
      "id": 105,
      "type": "DungeonRequirement",
      "dungeonId": 365,
      "description": "Mission \"Court of Summer\" done of The Dream Courts Quest",
      "link": "https://tibia.fandom.com/wiki/The_Dream_Courts_Quest#Court_of_Summer"
    }
  ],
  "sections": [
    {
      "id": 365,
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
          "id": 1354,
          "type": "Creature",
          "title": "Insane Siren",
          "formerNames": null,
          "healthPoints": 6500,
          "xpPoints": 6000,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9JbnNhbmVfU2lyZW4uZ2lmIn0="
        },
        {
          "id": 1362,
          "type": "Creature",
          "title": "Crazed Summer Vanguard",
          "formerNames": null,
          "healthPoints": 5500,
          "xpPoints": 5000,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmF6ZWRfU3VtbWVyX1Zhbmd1YXJkLmdpZiJ9"
        },
        {
          "id": 1351,
          "type": "Creature",
          "title": "Arachnophobica",
          "formerNames": null,
          "healthPoints": 5000,
          "xpPoints": 4700,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BcmFjaG5vcGhvYmljYS5naWYifQ=="
        },
        {
          "id": 1361,
          "type": "Creature",
          "title": "Crazed Summer Rearguard",
          "formerNames": null,
          "healthPoints": 5300,
          "xpPoints": 4700,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcmF6ZWRfU3VtbWVyX1JlYXJndWFyZC5naWYifQ=="
        },
        {
          "id": 1366,
          "type": "Creature",
          "title": "Lacewing Moth",
          "formerNames": null,
          "healthPoints": 900,
          "xpPoints": 800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYWNld2luZ19Nb3RoLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 12121,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35000,
      "percentage": null,
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
    },
    {
      "id": 11986,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.71,
      "isInestimable": false,
      "item": {
        "id": 1002,
        "type": "Item",
        "title": "Magma Legs",
        "pluralizedTitle": "Magma Legs",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 40000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hZ21hX0xlZ3MuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 123,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 87,
        "type": "DungeonRequiredItem",
        "dungeonId": 365,
        "requiredItem": {
          "id": 123,
          "type": "RequiredItem",
          "item": {
            "id": 35,
            "type": "Item",
            "title": "Small Emerald",
            "pluralizedTitle": "Small Emeralds",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX0VtZXJhbGQuZ2lmIn0="
          }
        }
      },
      "huntId": 157
    }
  ],
  "huntRequirements": [
    {
      "id": 43,
      "type": "HuntRequirement",
      "huntId": 157,
      "dungeonRequirement": {
        "id": 105,
        "type": "DungeonRequirement",
        "dungeonId": 365,
        "description": "Mission \"Court of Summer\" done of The Dream Courts Quest",
        "link": "https://tibia.fandom.com/wiki/The_Dream_Courts_Quest#Court_of_Summer"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 621,
      "type": "HuntSupply",
      "quantity": 400,
      "vocation": "mage",
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
      "id": 622,
      "type": "HuntSupply",
      "quantity": 1000,
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
    }
  ],
  "lootUpdatedAt": "2022-01-06T04:03:51.472Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-06T04:03:51.448Z",
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
