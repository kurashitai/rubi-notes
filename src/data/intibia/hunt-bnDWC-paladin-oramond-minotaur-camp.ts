// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "bnDWC",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODkvbFptcnlNalctYm5EV0MtbWluLnBuZyJ9",
  "minLevel": 90,
  "maxLevel": 140,
  "minProfitH": 5000,
  "maxProfitH": 30000,
  "minXpH": 300000,
  "maxXpH": 450000,
  "upvoteCount": 15,
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
  "videoId": "mVDzaDw_fOQ",
  "videoStartAt": null,
  "centerCoordinates": "33698,31944,7",
  "instructions": "<p>Amazing spawn for paladins level 90+ to get a great experience and a decent loot.</p>\n<p></p>\n<p>🛡️ Bring your usual equipment and for ammunition choose between Assassin Stars, Drill Bolts and Crystalline Arrows.</p>\n<p></p>\n<p>🏹 Lure 2~3 monsters and kill them from distance with <em>exori san </em>(or <em>exori con</em> if your skills are high).</p>\n<p></p>\n<p>🚩 There isn't a specific route to follow, basically just do a big loop.</p>",
  "createdAt": "2021-11-28T00:16:41.353Z",
  "updatedAt": "2024-03-18T00:14:29.625Z",
  "dungeon": {
    "id": 334,
    "type": "Dungeon",
    "title": "Oramond Minotaur Camp",
    "accountStatus": "premium",
    "entranceCoordinates": "33703,31954,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"2elu7\",\"text\":\"Oramond Minotaur Camp is located east of Rathleton. To get there, cross the bridge [map c=\\\"33682,31942,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":22,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
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
      "id": 1182,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 861,
          "type": "Creature",
          "title": "Minotaur Hunter",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NaW5vdGF1cl9IdW50ZXIuZ2lmIn0="
        },
        {
          "id": 863,
          "type": "Creature",
          "title": "Worm Priestess",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 1500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb3JtX1ByaWVzdGVzcy5naWYifQ=="
        },
        {
          "id": 857,
          "type": "Creature",
          "title": "Mooh'Tah Warrior",
          "formerNames": null,
          "healthPoints": 1200,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Nb29oXzI3VGFoX1dhcnJpb3IuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 7386,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 2678,
        "type": "Item",
        "title": "Mooh'tah Plate",
        "pluralizedTitle": "Mooh'tah Plates",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": null,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01vb2hfMjd0YWhfUGxhdGUuZ2lmIn0="
      }
    },
    {
      "id": 7305,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.69,
      "isInestimable": false,
      "item": {
        "id": 42,
        "type": "Item",
        "title": "Knight Legs",
        "pluralizedTitle": "Knight Legs",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0tuaWdodF9MZWdzLmdpZiJ9"
      }
    },
    {
      "id": 7306,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.49,
      "isInestimable": false,
      "item": {
        "id": 41,
        "type": "Item",
        "title": "Knight Armor",
        "pluralizedTitle": "Knight Armors",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0tuaWdodF9Bcm1vci5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 356,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "paladin",
      "supply": {
        "id": 147,
        "type": "Supply",
        "item": {
          "id": 871,
          "type": "Item",
          "title": "Assassin Star",
          "pluralizedTitle": "Assassin Stars",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Fzc2Fzc2luX1N0YXIuZ2lmIn0="
        }
      }
    },
    {
      "id": 357,
      "type": "HuntSupply",
      "quantity": 175,
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
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:36:50.774Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:36:50.753Z",
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
