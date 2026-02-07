// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "lG1I8",
  "type": "Hunt",
  "title": "Protective Charm Farm",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTU2LzZMV1AwY0RnLTAwNi1kcnVpZC1zb3JjZXJlci12ZW5vcmUtYW1hem9uLWNhbXAtcHJvdGVjdGl2ZS1jaGFybS1mYXJtLW1pbi5wbmcifQ==",
  "minLevel": 10,
  "maxLevel": 30,
  "minProfitH": 15000,
  "maxProfitH": 45000,
  "minXpH": 30000,
  "maxXpH": 55000,
  "upvoteCount": 16,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1275,
    "type": "User",
    "username": "Thiago",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "2tY2R4tPbnM",
  "videoStartAt": 11,
  "centerCoordinates": "32853,31923,7",
  "instructions": "<p>💰 Excellent hunt for any vocation to make good money at low level.</p>\n<p></p>\n<p>If you are between level 10 and level 15, it's better to hunt on the surface and in the tower where there are few Amazons and Valkyries.</p>\n<p></p>\n<p>If you are level 16 or more, it's interesting to hunt underground, facing the Witches, Ghouls and Mummy, so the exp/h improves and you will continue to farm the main item of this hunt for profit: Protective Charm.</p>",
  "createdAt": "2022-01-06T01:18:12.258Z",
  "updatedAt": "2025-04-26T23:23:28.161Z",
  "dungeon": {
    "id": 138,
    "type": "Dungeon",
    "title": "Venore Amazon Camp",
    "accountStatus": "free",
    "entranceCoordinates": "32853,31923,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"8dem0\",\"text\":\"Venore Amazon Camp is located north-west of Venore, [map c=\\\"32853,31923,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":18,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 2,
      "type": "City",
      "name": "Venore"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1449,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 20,
          "type": "Creature",
          "title": "Amazon",
          "formerNames": null,
          "healthPoints": 110,
          "xpPoints": 60,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BbWF6b24uZ2lmIn0="
        }
      ]
    },
    {
      "id": 1450,
      "type": "DungeonSection",
      "name": "Floor +1",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 28,
          "type": "Creature",
          "title": "Witch",
          "formerNames": null,
          "healthPoints": 300,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaXRjaC5naWYifQ=="
        },
        {
          "id": 27,
          "type": "Creature",
          "title": "Valkyrie",
          "formerNames": null,
          "healthPoints": 190,
          "xpPoints": 85,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WYWxreXJpZS5naWYifQ=="
        },
        {
          "id": 73,
          "type": "Creature",
          "title": "Lion",
          "formerNames": null,
          "healthPoints": 80,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaW9uLmdpZiJ9"
        }
      ]
    },
    {
      "id": 1451,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 28,
          "type": "Creature",
          "title": "Witch",
          "formerNames": null,
          "healthPoints": 300,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaXRjaC5naWYifQ=="
        },
        {
          "id": 27,
          "type": "Creature",
          "title": "Valkyrie",
          "formerNames": null,
          "healthPoints": 190,
          "xpPoints": 85,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WYWxreXJpZS5naWYifQ=="
        },
        {
          "id": 20,
          "type": "Creature",
          "title": "Amazon",
          "formerNames": null,
          "healthPoints": 110,
          "xpPoints": 60,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BbWF6b24uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 335,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1800000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1733,
        "type": "Item",
        "title": "Stuffed Toad",
        "pluralizedTitle": "Stuffed Toads",
        "formerNames": null,
        "minValue": 1800000,
        "maxValue": 2500000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0dWZmZWRfVG9hZC5naWYifQ=="
      }
    },
    {
      "id": 334,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.09,
      "isInestimable": false,
      "item": {
        "id": 1703,
        "type": "Item",
        "title": "Witch Hat",
        "pluralizedTitle": "Witch Hats",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 25000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dpdGNoX0hhdC5naWYifQ=="
      }
    },
    {
      "id": 332,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000,
      "percentage": 0.89,
      "isInestimable": false,
      "item": {
        "id": 2061,
        "type": "Item",
        "title": "Bag of Apple Slices",
        "pluralizedTitle": "Bag of Apple Slices",
        "formerNames": null,
        "minValue": 2000,
        "maxValue": 8000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JhZ19vZl9BcHBsZV9TbGljZXMuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 623,
      "type": "HuntSupply",
      "quantity": 50,
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
      "id": 624,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "mage",
      "supply": {
        "id": 117,
        "type": "Supply",
        "item": {
          "id": 107,
          "type": "Item",
          "title": "Stealth Ring",
          "pluralizedTitle": "Stealth Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWFsdGhfUmluZy5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-06T04:25:20.636Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-06T04:25:20.606Z",
  "youtubeChannel": {
    "id": 56,
    "type": "YoutubeChannel",
    "name": "Canal do Tibiano",
    "youtubeId": "UCPBwSf6azJ95ihbKUpZPVZQ",
    "verifiedAt": "Thu Jan 06 2022 01:15:30 GMT-0300 (Horário Padrão de Brasília)",
    "user": {
      "id": 1275,
      "type": "User",
      "username": "Thiago",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
