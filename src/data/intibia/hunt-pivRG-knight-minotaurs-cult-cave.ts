// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "pivRG",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMjAva2dST3hlSEItMDE1LWtuaWdodC1taW5vdGF1cnMtY3VsdC1jYXZlLnBuZyJ9",
  "minLevel": 150,
  "maxLevel": 650,
  "minProfitH": 250000,
  "maxProfitH": 600000,
  "minXpH": 600000,
  "maxXpH": 900000,
  "upvoteCount": 30,
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
  "videoId": "fFj7oSfolrU",
  "videoStartAt": null,
  "centerCoordinates": "32496,32102,15",
  "instructions": "<p>One of the greatest places in Tibia for knights to profit, often crowded. You can come here as early as level 150 and make tons of money 🤑.</p>\n<p></p>\n<p>If you are level 150~250 go slow and be careful not to lure more than 3 monsters, to avoid using many health potions or getting killed ☠️ in a combo. As you feel more confident start luring more.</p>\n<p></p>\n<p>⚠️ Warning with Zealots and Prophets together, the damage of their combo is very high.</p>\n<p></p>\n<p>💥 Spam attack spells on the groups (<em>exori, exori gran, exori min, exori ico, exori mas</em>) and heal with <em>exori ico</em>.</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>The loot is excellent, going from 250k in lower levels, up to 600k+ in higher levels as you clear the spawn faster.</p>\n<p></p>\n<p>Come with a lot of cap because the droped items are heavy. If you have done Postman Quest you can make a bagloot and send it in a mailbox, [map c=\"32423,32099,15\" map]here[/map]. In that case remember to bring a parcel.</p>\n<p></p>\n<p>🛡️ <strong>Equipments</strong></p>\n<p>Prismatic Ring and Collar of Red Plasma will help to kill a lot of creatures at once and increase experience on lower levels.</p>",
  "createdAt": "2021-11-02T05:57:51.789Z",
  "updatedAt": "2025-12-30T21:10:55.179Z",
  "dungeon": {
    "id": 327,
    "type": "Dungeon",
    "title": "Minotaurs Cult Cave",
    "accountStatus": "premium",
    "entranceCoordinates": "32496,32102,15",
    "entranceDirections": "{\"blocks\":[{\"key\":\"92jh8\",\"text\":\"Minotaurs Cult Cave is located in Mintwallin, underground Thais. To get there see Mintwallin Route. The first time you access, talk to the NPC Jamesfrancis ([map c=\\\"31942,32502,8\\\" map]here[/map]) to enter the area with creatures.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":19,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":82,\"length\":16,\"key\":0}],\"data\":{}},{\"key\":\"el7ts\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"od1q\",\"text\":\"Once you complete a mission for him, you can enter the teleport at the end of the second floor to go back to the entrance of the dungeon, avoiding walking back past dead creatures.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Route:Mintwallin\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 3,
      "type": "City",
      "name": "Thais"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 327,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1177,
          "type": "Creature",
          "title": "Minotaur Cult Zealot",
          "formerNames": null,
          "healthPoints": 1800,
          "xpPoints": 1350,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9DdWx0X1plYWxvdC5naWYifQ=="
        },
        {
          "id": 1160,
          "type": "Creature",
          "title": "Minotaur Cult Prophet",
          "formerNames": null,
          "healthPoints": 1700,
          "xpPoints": 1100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9DdWx0X1Byb3BoZXQuZ2lmIn0="
        },
        {
          "id": 1176,
          "type": "Creature",
          "title": "Minotaur Cult Follower",
          "formerNames": null,
          "healthPoints": 1600,
          "xpPoints": 950,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9DdWx0X0ZvbGxvd2VyLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 10375,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 7000,
      "percentage": 1.96,
      "isInestimable": false,
      "item": {
        "id": 2710,
        "type": "Item",
        "title": "Mino Lance",
        "pluralizedTitle": "Mino Lances",
        "formerNames": null,
        "minValue": 7000,
        "maxValue": null,
        "npcBuyValue": 7000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01pbm9fTGFuY2UuZ2lmIn0="
      }
    },
    {
      "id": 10154,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 1.21,
      "isInestimable": false,
      "item": {
        "id": 1312,
        "type": "Item",
        "title": "Gold Ingot",
        "pluralizedTitle": "Gold Ingots",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 15000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dvbGRfSW5nb3QuZ2lmIn0="
      }
    },
    {
      "id": 10378,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.52,
      "isInestimable": false,
      "item": {
        "id": 142,
        "type": "Item",
        "title": "Warrior Helmet",
        "pluralizedTitle": "Warrior Helmets",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 8000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhcnJpb3JfSGVsbWV0LmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 8,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 8,
        "type": "DungeonRequiredItem",
        "dungeonId": 327,
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
      "huntId": 20
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 49,
      "type": "HuntSupply",
      "quantity": 650,
      "vocation": "knight",
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
      "id": 50,
      "type": "HuntSupply",
      "quantity": 100,
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
  "lootUpdatedAt": "2021-11-15T00:45:47.959Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-02T05:57:51.789Z",
  "youtubeChannel": {
    "id": 14,
    "type": "YoutubeChannel",
    "name": "Itexo",
    "youtubeId": "UCBTvWhQOR4-hAP36FI0T7kQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
