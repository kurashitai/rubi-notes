// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "VIsFp",
  "type": "Hunt",
  "title": "Exori vis + Thunderstorms",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTM1L3BMNFlEcnJoLTEucG5nIn0=",
  "minLevel": 50,
  "maxLevel": 85,
  "minProfitH": 10000,
  "maxProfitH": 15000,
  "minXpH": 180000,
  "maxXpH": 200000,
  "upvoteCount": 4,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 976,
    "type": "User",
    "username": "Granadogames",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "dh9HJqlVGEU",
  "videoStartAt": 10,
  "centerCoordinates": "32560,32860,7",
  "instructions": "<p>Good place to rush experience on mages level 50+. The loot is not good but if you want to improve, bring a fishing rod and use on water elemental corpses, so you can loot precious stones.</p>\n<p></p>\n<p>🛡️ The Water Elemental has little health and is easy to kill, but his attack is quite strong. Using a Helmet of the Deep you can protect yourself from strong attacks.</p>\n<p></p>\n<p>⚔️ Lure one creature at a time, keep a distance and throw SDs. From level 60 onwards you can kill single targets with <em>exori vis</em> instead of SDs, and lure more than one creature (carefully) killing them with Thunderstorm Runes.</p>",
  "createdAt": "2022-01-04T16:19:38.798Z",
  "updatedAt": "2024-03-17T23:01:39.749Z",
  "dungeon": {
    "id": 146,
    "type": "Dungeon",
    "title": "Tiquanda West Water Elemental Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "32560,32860,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"6akk1\",\"text\":\"Tiquanda West Water Elemental Cave is located to the south-west of Port Hope. To get there, just go to Port Hope and walk to the dungeon entrance, [map c=\\\"32560,32860,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":34,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": true,
      "mailbox": false,
      "npc": false,
      "quest": false,
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
      "id": 297,
      "type": "DungeonRequirement",
      "dungeonId": 146,
      "description": "Level 50 expertise gate",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 146,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 179,
          "type": "Creature",
          "title": "Water Elemental",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 650,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYXRlcl9FbGVtZW50YWwuZ2lmIn0="
        },
        {
          "id": 192,
          "type": "Creature",
          "title": "Quara Mantassin Scout",
          "formerNames": null,
          "healthPoints": 220,
          "xpPoints": 100,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9RdWFyYV9NYW50YXNzaW5fU2NvdXQuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 1841,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 0.19,
      "isInestimable": false,
      "item": {
        "id": 1438,
        "type": "Item",
        "title": "Leviathan's Amulet",
        "pluralizedTitle": "Leviathan's Amulets",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": null,
        "npcBuyValue": 3000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xldmlhdGhhbl8yN3NfQW11bGV0LmdpZiJ9"
      }
    },
    {
      "id": 1837,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 1.51,
      "isInestimable": false,
      "item": {
        "id": 986,
        "type": "Item",
        "title": "Giant Shimmering Pearl",
        "pluralizedTitle": "Giant Shimmering Pearls",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": 10000,
        "npcBuyValue": 3000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dpYW50X1NoaW1tZXJpbmdfUGVhcmwuZ2lmIn0="
      }
    },
    {
      "id": 1922,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 450,
      "percentage": 0.8,
      "isInestimable": false,
      "item": {
        "id": 160,
        "type": "Item",
        "title": "Two Handed Sword",
        "pluralizedTitle": "Two Handed Swords",
        "formerNames": null,
        "minValue": 450,
        "maxValue": null,
        "npcBuyValue": 450,
        "npcSellValue": 950,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1R3b19IYW5kZWRfU3dvcmQuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 101,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 75,
        "type": "DungeonRequiredItem",
        "dungeonId": 146,
        "requiredItem": {
          "id": 17,
          "type": "RequiredItem",
          "item": {
            "id": 642,
            "type": "Item",
            "title": "Helmet of the Deep",
            "pluralizedTitle": "Helmet of the Deeps",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hlbG1ldF9vZl90aGVfRGVlcC5naWYifQ=="
          }
        }
      },
      "huntId": 135
    }
  ],
  "huntRequirements": [
    {
      "id": 243,
      "type": "HuntRequirement",
      "huntId": 135,
      "dungeonRequirement": {
        "id": 297,
        "type": "DungeonRequirement",
        "dungeonId": 146,
        "description": "Level 50 expertise gate",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 612,
      "type": "HuntSupply",
      "quantity": 150,
      "vocation": "mage",
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
      "id": 613,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "mage",
      "supply": {
        "id": 61,
        "type": "Supply",
        "item": {
          "id": 1956,
          "type": "Item",
          "title": "Thunderstorm Rune",
          "pluralizedTitle": "Thunderstorm Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1RodW5kZXJzdG9ybV9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 614,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "mage",
      "supply": {
        "id": 60,
        "type": "Supply",
        "item": {
          "id": 115,
          "type": "Item",
          "title": "Sudden Death Rune",
          "pluralizedTitle": "Sudden Death Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N1ZGRlbl9EZWF0aF9SdW5lLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-06T02:32:36.850Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-06T02:32:36.814Z",
  "youtubeChannel": {
    "id": 53,
    "type": "YoutubeChannel",
    "name": "GranadoGames",
    "youtubeId": "UC1mcBuXeRdq4TgOoebB6s3Q",
    "verifiedAt": "Wed Jan 05 2022 23:34:12 GMT-0300 (Horário Padrão de Brasília)",
    "user": {
      "id": 976,
      "type": "User",
      "username": "Granadogames",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
