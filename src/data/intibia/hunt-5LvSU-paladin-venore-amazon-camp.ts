// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "5LvSU",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODEvRUxWNlE4T2ktNUx2U1UtbWluLnBuZyJ9",
  "minLevel": 8,
  "maxLevel": 40,
  "minProfitH": 10000,
  "maxProfitH": 100000,
  "minXpH": 15000,
  "maxXpH": 40000,
  "upvoteCount": 26,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
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
  "videoId": "VOqJH9VU9Qc",
  "videoStartAt": 11,
  "centerCoordinates": "32853,31923,7",
  "instructions": "<p>Great spawn for low level paladins to make a nice profit.</p>\n<p></p>\n<p>💰 The Amazons drop Protective Charm, which can be sold for 8k+, depending on your server.</p>\n<p></p>\n<p>🏹 Bring spears and, if you are able, kill some Valkyries in the tower from time to time to get more spears.</p>",
  "createdAt": "2021-11-27T18:53:46.658Z",
  "updatedAt": "2024-03-17T21:16:55.512Z",
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
    }
  ],
  "notableLoots": [
    {
      "id": 209,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1400,
      "percentage": 5.25,
      "isInestimable": false,
      "item": {
        "id": 1790,
        "type": "Item",
        "title": "Protective Charm",
        "pluralizedTitle": "Protective Charms",
        "formerNames": null,
        "minValue": 1400,
        "maxValue": 2600,
        "npcBuyValue": 60,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Byb3RlY3RpdmVfQ2hhcm0uZ2lmIn0="
      }
    },
    {
      "id": 211,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 400,
      "percentage": 0.24,
      "isInestimable": false,
      "item": {
        "id": 169,
        "type": "Item",
        "title": "Crystal Necklace",
        "pluralizedTitle": "Crystal Necklaces",
        "formerNames": null,
        "minValue": 400,
        "maxValue": null,
        "npcBuyValue": 400,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NyeXN0YWxfTmVja2xhY2UuZ2lmIn0="
      }
    },
    {
      "id": 212,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 250,
      "percentage": 0.13,
      "isInestimable": false,
      "item": {
        "id": 295,
        "type": "Item",
        "title": "Small Ruby",
        "pluralizedTitle": "Small Rubies",
        "formerNames": null,
        "minValue": 250,
        "maxValue": null,
        "npcBuyValue": 250,
        "npcSellValue": 500,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX1J1YnkuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 328,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "paladin",
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
      "id": 329,
      "type": "HuntSupply",
      "quantity": 7,
      "vocation": "paladin",
      "supply": {
        "id": 143,
        "type": "Supply",
        "item": {
          "id": 60,
          "type": "Item",
          "title": "Spear",
          "pluralizedTitle": "Spears",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwZWFyLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:27:47.792Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:27:47.775Z",
  "youtubeChannel": {
    "id": 30,
    "type": "YoutubeChannel",
    "name": "Tibia Guides",
    "youtubeId": "UCr6NQdsbK42m2y9fuCd83cw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
