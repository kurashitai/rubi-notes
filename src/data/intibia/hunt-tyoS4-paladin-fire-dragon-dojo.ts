// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "tyoS4",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOTEvUGpXeXRLbGktdHlvUzQtbWluLnBuZyJ9",
  "minLevel": 100,
  "maxLevel": 150,
  "minProfitH": 20000,
  "maxProfitH": 80000,
  "minXpH": 300000,
  "maxXpH": 400000,
  "upvoteCount": 8,
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
  "videoId": "IAtuRFUrhYU",
  "videoStartAt": null,
  "centerCoordinates": "33177,31196,7",
  "instructions": "<p>Awesome hunting spot for paladins level 100+. Good experience, great profit and a fun place to hunt.</p>\n<p></p>\n<p>🏹 You can use Assassin Stars or Crystalline Arrows. Lure 1~2 Lizard Chosen and attack from distance. Use <em>exori con</em> (if you have high skills) or <em>exori san </em>to kill faster.</p>\n<p></p>\n<p>⚡️ To play safer you can bring some energy wall runes and run in circles while you attack. Lizard Chosen doesn't step in the energy field (warning, if you do it on RETRO servers you can get a RED/BLACK skull).</p>\n<p></p>\n<p>🔥 In higher levels using GFBs and <em>exevo mas san </em>might increase your experience.</p>\n<p></p>\n<p>🐾 Between level 80-129 you can make <a href=\"https://tibia.fandom.com/wiki/Killing_in_the_Name_of..._Quest/Spoiler#High_Class_Lizards\">High Class Lizard's task</a>. Kill 800 lizards for 30k experience reward.</p>",
  "createdAt": "2021-11-29T01:19:32.893Z",
  "updatedAt": "2024-03-18T00:12:37.423Z",
  "dungeon": {
    "id": 236,
    "type": "Dungeon",
    "title": "Fire Dragon Dojo",
    "accountStatus": "premium",
    "entranceCoordinates": "33177,31197,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"eclaq\",\"text\":\"Fire Dragon Dojo is located in the northern Zao, under the Temple of Equilibrium, [map c=\\\"33181,31201,7\\\" map]here[/map]. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":16,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"broft\",\"text\":\"Take the teleport to nothern Zao, [map c=\\\"33198,31348,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9md3e\",\"text\":\"Enter the Temple of Equilibrium, [map c=\\\"33178,31209,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1nk3t\",\"text\":\"Go up one floor, [map c=\\\"33172,31202,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c7i7q\",\"text\":\"Levitate down, [map c=\\\"33175,31195,5\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4ocbh\",\"text\":\"Go down the hidden stairs, behind the visible stairs, [map c=\\\"33177,31192,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 10,
      "type": "City",
      "name": "Farmine"
    }
  },
  "requirements": [
    {
      "id": 285,
      "type": "DungeonRequirement",
      "dungeonId": 236,
      "description": "Mission \"An Offer You Can't Refuse\" done of The New Frontier Quest",
      "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler#Mission_08:_An_Offer_You_Can.27t_Refuse"
    }
  ],
  "sections": [
    {
      "id": 236,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 504,
          "type": "Creature",
          "title": "Lizard Chosen",
          "formerNames": null,
          "healthPoints": 3050,
          "xpPoints": 2200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfQ2hvc2VuLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4443,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 45000,
      "percentage": 0.13,
      "isInestimable": false,
      "item": {
        "id": 1685,
        "type": "Item",
        "title": "Zaoan Helmet",
        "pluralizedTitle": "Zaoan Helmets",
        "formerNames": null,
        "minValue": 45000,
        "maxValue": 60000,
        "npcBuyValue": 45000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 4440,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 14000,
      "percentage": 0.99,
      "isInestimable": false,
      "item": {
        "id": 1586,
        "type": "Item",
        "title": "Zaoan Armor",
        "pluralizedTitle": "Zaoan Armors",
        "formerNames": null,
        "minValue": 14000,
        "maxValue": 20000,
        "npcBuyValue": 14000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX0FybW9yLmdpZiJ9"
      }
    },
    {
      "id": 4441,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 14000,
      "percentage": 0.88,
      "isInestimable": false,
      "item": {
        "id": 1676,
        "type": "Item",
        "title": "Zaoan Legs",
        "pluralizedTitle": "Zaoan Legs",
        "formerNames": null,
        "minValue": 14000,
        "maxValue": 20000,
        "npcBuyValue": 14000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX0xlZ3MuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 70,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 52,
        "type": "DungeonRequiredItem",
        "dungeonId": 236,
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
      "huntId": 91
    }
  ],
  "huntRequirements": [
    {
      "id": 203,
      "type": "HuntRequirement",
      "huntId": 91,
      "dungeonRequirement": {
        "id": 285,
        "type": "DungeonRequirement",
        "dungeonId": 236,
        "description": "Mission \"An Offer You Can't Refuse\" done of The New Frontier Quest",
        "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler#Mission_08:_An_Offer_You_Can.27t_Refuse"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 360,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "paladin",
      "supply": {
        "id": 122,
        "type": "Supply",
        "item": {
          "id": 2328,
          "type": "Item",
          "title": "Crystalline Arrow",
          "pluralizedTitle": "Crystalline Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NyeXN0YWxsaW5lX0Fycm93LmdpZiJ9"
        }
      }
    },
    {
      "id": 361,
      "type": "HuntSupply",
      "quantity": 300,
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
  "lootUpdatedAt": "2021-11-29T19:37:46.989Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:37:46.969Z",
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
