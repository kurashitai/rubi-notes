// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "SBlpN",
  "type": "Hunt",
  "title": "Surface + Avalanches",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNzMvamZYYkJQTDctMDE3LWRydWlkLXNvcmNlcmVyLW9yYW1vbmQtd2VzdGVybi1wbGFpbnMtc3VyZmFjZS1hdmFsYW5jaGVzLW1pbi5wbmcifQ==",
  "minLevel": 170,
  "maxLevel": 320,
  "minProfitH": -150000,
  "maxProfitH": -70000,
  "minXpH": 900000,
  "maxXpH": 1700000,
  "upvoteCount": 9,
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
  "videoId": "1I1XggGI_Cw",
  "videoStartAt": null,
  "centerCoordinates": "33526,31933,7",
  "instructions": "<p>Great spawn to rush experience on mages level 170+. Be prepared to have a big waste though.</p>\n<p></p>\n<p>⚡️ Lure big groups of creatures and shoot Thunderstorm runes on them. Check the route at (📹 0:55).</p>\n<p></p>\n<p>Be careful to not get surrounded because it can be a passage to the temple.</p>\n<p></p>\n<p>👕 Wear the best earth protection set that you can and at level 250+ use a spellbook instead of a shield.</p>",
  "createdAt": "2021-11-24T00:06:47.116Z",
  "updatedAt": "2024-03-18T00:13:16.425Z",
  "dungeon": {
    "id": 335,
    "type": "Dungeon",
    "title": "Oramond Western Plains",
    "accountStatus": "premium",
    "entranceCoordinates": "33526,31933,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"1pniv\",\"text\":\"Oramond Western Plains is located west of Rathleton. To get there, levitate down [map c=\\\"33574,31915,6\\\" map]here[/map] and walk to the west.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":22,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 14,
      "type": "City",
      "name": "Rathleton"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1190,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 866,
          "type": "Creature",
          "title": "Devourer",
          "formerNames": null,
          "healthPoints": 1900,
          "xpPoints": 1755,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZXZvdXJlci5naWYifQ=="
        },
        {
          "id": 865,
          "type": "Creature",
          "title": "Blood Beast",
          "formerNames": null,
          "healthPoints": 1600,
          "xpPoints": 1000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbG9vZF9CZWFzdC5naWYifQ=="
        },
        {
          "id": 869,
          "type": "Creature",
          "title": "Rot Elemental",
          "formerNames": null,
          "healthPoints": 850,
          "xpPoints": 750,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Sb3RfRWxlbWVudGFsLmdpZiJ9"
        },
        {
          "id": 867,
          "type": "Creature",
          "title": "Glooth Blob",
          "formerNames": null,
          "healthPoints": 750,
          "xpPoints": 700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HbG9vdGhfQmxvYi5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 7470,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 7000,
      "percentage": 0.24,
      "isInestimable": false,
      "item": {
        "id": 2677,
        "type": "Item",
        "title": "Glooth Cape",
        "pluralizedTitle": "Glooth Capes",
        "formerNames": null,
        "minValue": 7000,
        "maxValue": null,
        "npcBuyValue": 7000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dsb290aF9DYXBlLmdpZiJ9"
      }
    },
    {
      "id": 7508,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 425,
        "type": "Item",
        "title": "Green Gem",
        "pluralizedTitle": "Green Gems",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 25000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWVuX0dlbS5naWYifQ=="
      }
    },
    {
      "id": 7467,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3600,
      "percentage": 1.22,
      "isInestimable": false,
      "item": {
        "id": 1076,
        "type": "Item",
        "title": "Springsprout Rod",
        "pluralizedTitle": "Springsprout Rods",
        "formerNames": null,
        "minValue": 3600,
        "maxValue": 6000,
        "npcBuyValue": 3600,
        "npcSellValue": 18000,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwcmluZ3Nwcm91dF9Sb2QuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 313,
      "type": "HuntSupply",
      "quantity": 800,
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
      "id": 314,
      "type": "HuntSupply",
      "quantity": 350,
      "vocation": "mage",
      "supply": {
        "id": 9,
        "type": "Supply",
        "item": {
          "id": 971,
          "type": "Item",
          "title": "Great Mana Potion",
          "pluralizedTitle": "Great Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X01hbmFfUG90aW9uLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-25T03:22:33.352Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-25T03:22:33.332Z",
  "youtubeChannel": {
    "id": 2,
    "type": "YoutubeChannel",
    "name": "Eric / Psykik",
    "youtubeId": "UCl3CvJSRKWrZ-Nvj6tBqz-g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
