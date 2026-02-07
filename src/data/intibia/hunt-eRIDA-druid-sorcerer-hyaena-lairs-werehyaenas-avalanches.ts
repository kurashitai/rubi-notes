// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "eRIDA",
  "type": "Hunt",
  "title": "Werehyaenas + Avalanches",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTQ4L1N0VlhFajVGLTAwNC1kcnVpZC1zb3JjZXJlci1oeWFlbmEtbGFpcnMtd2VyZWh5YWVuYXMtYXZhbGFuY2hlcy1taW4ucG5nIn0=",
  "minLevel": 200,
  "maxLevel": 300,
  "minProfitH": 200000,
  "maxProfitH": 450000,
  "minXpH": 1200000,
  "maxXpH": 1800000,
  "upvoteCount": 10,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1156,
    "type": "User",
    "username": "saycao",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "tSTLKOp0nRo",
  "videoStartAt": null,
  "centerCoordinates": "33212,32358,7",
  "instructions": "<p>Preferably, invoke your summon to block the creatures. Keep a good distance from the creatures and kill them with avalanches while walking around.</p>\n<p></p>\n<p>Keep using <em>utani gran hur</em> and if you get surrounded by creatures, use <em>utamo vita</em>.</p>\n<p></p>\n<p>☄️ Often use your UE spell (<em>mas vis</em> for MS and <em>mas frigo</em> for ED).</p>\n<p></p>\n<p>🛡️ Wear death and physical protection.</p>",
  "createdAt": "2022-01-05T00:11:34.079Z",
  "updatedAt": "2024-03-17T21:37:55.839Z",
  "dungeon": {
    "id": 415,
    "type": "Dungeon",
    "title": "Hyaena Lairs",
    "accountStatus": "premium",
    "entranceCoordinates": "33212,32358,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"72jks\",\"text\":\"Hyaena Lairs are located north of Darashia. To get there, walk to the Darashia desert and go down the hole, [map c=\\\"33212,32358,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 960,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1530,
          "type": "Creature",
          "title": "Werehyaena",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 2200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlaHlhZW5hLmdpZiJ9"
        },
        {
          "id": 1531,
          "type": "Creature",
          "title": "Werehyaena Shaman",
          "formerNames": null,
          "healthPoints": 2500,
          "xpPoints": 2200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XZXJlaHlhZW5hX1NoYW1hbi5naWYifQ=="
        },
        {
          "id": 83,
          "type": "Creature",
          "title": "Lich",
          "formerNames": null,
          "healthPoints": 880,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaWNoLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 837,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 400000,
      "percentage": 0.05,
      "isInestimable": false,
      "item": {
        "id": 1936,
        "type": "Item",
        "title": "Maxilla Maximus",
        "pluralizedTitle": "Maxilla Maximus",
        "formerNames": null,
        "minValue": 400000,
        "maxValue": 1100000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01heGlsbGFfTWF4aW11cy5naWYifQ=="
      }
    },
    {
      "id": 13720,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.2,
      "isInestimable": false,
      "item": {
        "id": 4317,
        "type": "Item",
        "title": "Werehyaena Trophy",
        "pluralizedTitle": "Werehyaena Trophies",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": null,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dlcmVoeWFlbmFfVHJvcGh5LmdpZiJ9"
      }
    },
    {
      "id": 836,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.2,
      "isInestimable": false,
      "item": {
        "id": 58,
        "type": "Item",
        "title": "Blue Robe",
        "pluralizedTitle": "Blue Robes",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 15000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JsdWVfUm9iZS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 127,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 62,
        "type": "DungeonRequiredItem",
        "dungeonId": 415,
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
      "huntId": 148
    },
    {
      "id": 128,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 88,
        "type": "DungeonRequiredItem",
        "dungeonId": 415,
        "requiredItem": {
          "id": 9,
          "type": "RequiredItem",
          "item": {
            "id": 10,
            "type": "Item",
            "title": "Pick",
            "pluralizedTitle": "Picks",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1BpY2suZ2lmIn0="
          }
        }
      },
      "huntId": 148
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 639,
      "type": "HuntSupply",
      "quantity": 250,
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
      "id": 640,
      "type": "HuntSupply",
      "quantity": 800,
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
  "lootUpdatedAt": "2022-01-08T14:15:38.981Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-08T14:15:38.951Z",
  "youtubeChannel": {
    "id": 62,
    "type": "YoutubeChannel",
    "name": "Manga Joga",
    "youtubeId": "UCOFZkualHPOS8Biibep2pOQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
