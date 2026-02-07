// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "3EQQS",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODgvQU5CRDJHTzYtM0VRUVMtbWluLnBuZyJ9",
  "minLevel": 80,
  "maxLevel": 130,
  "minProfitH": 30000,
  "maxProfitH": 70000,
  "minXpH": 180000,
  "maxXpH": 220000,
  "upvoteCount": 1,
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
  "videoId": "pIDjfnR-ytk",
  "videoStartAt": null,
  "centerCoordinates": "33644,31950,7",
  "instructions": "<p>Good place for paladins level 80+ to get profit. The experience is not very good but the loot pays off.</p>\n<p></p>\n<p>🚩 The spot is in the entrace of the city, so it's very easy to deposit, sell loot and refill.</p>\n<p></p>\n<p>✨ Lure the monsters, attack from distance and use <em>exori san</em> to kill them.</p>\n<p></p>\n<p>🏹 You can use Drill Bolts or Assassin Stars to be more protected.</p>\n<p></p>\n<p>🛡️ Use a regular set or a death protection set. You can also use strange amulets to protect against energy.</p>",
  "createdAt": "2021-11-28T00:02:08.266Z",
  "updatedAt": "2024-03-17T23:20:03.767Z",
  "dungeon": {
    "id": 445,
    "type": "Dungeon",
    "title": "Rathleton Metal Gargoyles",
    "accountStatus": "premium",
    "entranceCoordinates": "33644,31950,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"86ufj\",\"text\":\"Rathleton Metal Gargoyles is located in the entrance of Rathleton, [map c=\\\"33644,31950,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":26,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": true,
      "quest": false,
      "raid": false,
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
      "id": 1515,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 868,
          "type": "Creature",
          "title": "Rustheap Golem",
          "formerNames": null,
          "healthPoints": 2800,
          "xpPoints": 2100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SdXN0aGVhcF9Hb2xlbS5naWYifQ=="
        },
        {
          "id": 858,
          "type": "Creature",
          "title": "Metal Gargoyle",
          "formerNames": null,
          "healthPoints": 2100,
          "xpPoints": 1278,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NZXRhbF9HYXJnb3lsZS5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 7317,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 1.03,
      "isInestimable": false,
      "item": {
        "id": 2680,
        "type": "Item",
        "title": "Alloy Legs",
        "pluralizedTitle": "Alloy Legs",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": null,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0FsbG95X0xlZ3MuZ2lmIn0="
      }
    },
    {
      "id": 7495,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 9000,
      "percentage": 0.91,
      "isInestimable": false,
      "item": {
        "id": 2714,
        "type": "Item",
        "title": "Metal Bat",
        "pluralizedTitle": "Metal Bats",
        "formerNames": null,
        "minValue": 9000,
        "maxValue": null,
        "npcBuyValue": 9000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01ldGFsX0JhdC5naWYifQ=="
      }
    },
    {
      "id": 7496,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.51,
      "isInestimable": false,
      "item": {
        "id": 882,
        "type": "Item",
        "title": "Spiked Squelcher",
        "pluralizedTitle": "Spiked Squelchers",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwaWtlZF9TcXVlbGNoZXIuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 353,
      "type": "HuntSupply",
      "quantity": 150,
      "vocation": "paladin",
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
      "id": 354,
      "type": "HuntSupply",
      "quantity": 650,
      "vocation": "paladin",
      "supply": {
        "id": 135,
        "type": "Supply",
        "item": {
          "id": 2313,
          "type": "Item",
          "title": "Drill Bolt",
          "pluralizedTitle": "Drill Bolts",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyaWxsX0JvbHQuZ2lmIn0="
        }
      }
    },
    {
      "id": 355,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "paladin",
      "supply": {
        "id": 11,
        "type": "Supply",
        "item": {
          "id": 1061,
          "type": "Item",
          "title": "Great Spirit Potion",
          "pluralizedTitle": "Great Spirit Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X1NwaXJpdF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:32:29.483Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:32:29.464Z",
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
