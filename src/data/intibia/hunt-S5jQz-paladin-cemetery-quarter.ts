// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "S5jQz",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODMvcU1XT1ZLQ1ctUzVqUXotbWluLnBuZyJ9",
  "minLevel": 60,
  "maxLevel": 110,
  "minProfitH": -10000,
  "maxProfitH": 10000,
  "minXpH": 110000,
  "maxXpH": 150000,
  "upvoteCount": 0,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "es",
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
  "videoId": "uqSPQU3opWY",
  "videoStartAt": null,
  "centerCoordinates": "32751,31090,7",
  "instructions": "<p>Easy place for paladins level 60+. The experience and loot are average and the spawn is close to the depot (easy deposit/refill).</p>\n<p></p>\n<p>🏹 Use Onyx Arrows (or Drill Bolts if you have enough level) and kill the creatures from distance.</p>\n<p></p>\n<p>🔮 It's a nice spot to farm charm points and you don't need imbuements. To unlock the bestiary for Zombies, Necromancers and Nightstalkers you have to kill 1000 of each to receive 25 charm points (75 in total).</p>\n<p></p>\n<p>💰 It's possible to make a loot bag to improve the profit but you will get less xp.</p>",
  "createdAt": "2021-11-27T20:42:37.327Z",
  "updatedAt": "2024-03-17T21:18:58.907Z",
  "dungeon": {
    "id": 124,
    "type": "Dungeon",
    "title": "Cemetery Quarter",
    "accountStatus": "premium",
    "entranceCoordinates": "32777,31072,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"7otdo\",\"text\":\"Cemetery Quarter is located north of Yalahar.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":17,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"8tbh0\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8skor\",\"text\":\"If you've started Mission 6 of In Service of Yalahar Quest go to the Cemetery Quarter's Gate, [map c=\\\"32779,31151,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":18,\"length\":40,\"key\":0}],\"data\":{}},{\"key\":\"f1in0\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"93ba7\",\"text\":\"Otherwise:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dtbhf\",\"text\":\"Go to the magician quarter, [map c=\\\"32833,31155,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bbgkm\",\"text\":\"Pass to the cemetery quarter, [map c=\\\"32804,31104,7\\\" map]here[/map], (hi - pass - cemetery).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/In_Service_of_Yalahar_Quest/Spoiler#Mission_06:_Frightening_Fuel\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 17,
      "type": "City",
      "name": "Yalahar"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 509,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": "Top left area",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 83,
          "type": "Creature",
          "title": "Lich",
          "formerNames": null,
          "healthPoints": 880,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaWNoLmdpZiJ9"
        },
        {
          "id": 24,
          "type": "Creature",
          "title": "Necromancer",
          "formerNames": null,
          "healthPoints": 580,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OZWNyb21hbmNlci5naWYifQ=="
        },
        {
          "id": 406,
          "type": "Creature",
          "title": "Nightstalker",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OaWdodHN0YWxrZXIuZ2lmIn0="
        },
        {
          "id": 413,
          "type": "Creature",
          "title": "Zombie",
          "formerNames": null,
          "healthPoints": 500,
          "xpPoints": 280,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9ab21iaWUuZ2lmIn0="
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
      "id": 273,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.2,
      "isInestimable": false,
      "item": {
        "id": 1,
        "type": "Item",
        "title": "Boots of Haste",
        "pluralizedTitle": "Boots of Hastes",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": null,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jvb3RzX29mX0hhc3RlLmdpZiJ9"
      }
    },
    {
      "id": 276,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 989,
        "type": "Item",
        "title": "Noble Axe",
        "pluralizedTitle": "Noble Axes",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 20000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL05vYmxlX0F4ZS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 332,
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
      "id": 333,
      "type": "HuntSupply",
      "quantity": 25,
      "vocation": "paladin",
      "supply": {
        "id": 3,
        "type": "Supply",
        "item": {
          "id": 972,
          "type": "Item",
          "title": "Strong Health Potion",
          "pluralizedTitle": "Strong Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19IZWFsdGhfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 334,
      "type": "HuntSupply",
      "quantity": 10,
      "vocation": "paladin",
      "supply": {
        "id": 65,
        "type": "Supply",
        "item": {
          "id": 269,
          "type": "Item",
          "title": "Brown Mushroom",
          "pluralizedTitle": "Brown Mushrooms",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jyb3duX011c2hyb29tLmdpZiJ9"
        }
      }
    },
    {
      "id": 335,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "paladin",
      "supply": {
        "id": 128,
        "type": "Supply",
        "item": {
          "id": 879,
          "type": "Item",
          "title": "Onyx Arrow",
          "pluralizedTitle": "Onyx Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ueXhfQXJyb3cuZ2lmIn0="
        }
      }
    },
    {
      "id": 336,
      "type": "HuntSupply",
      "quantity": 500,
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
      "id": 337,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "paladin",
      "supply": {
        "id": 106,
        "type": "Supply",
        "item": {
          "id": 102,
          "type": "Item",
          "title": "Life Ring",
          "pluralizedTitle": "Life Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpZmVfUmluZy5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:30:12.858Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:30:12.828Z",
  "youtubeChannel": {
    "id": 37,
    "type": "YoutubeChannel",
    "name": "Shawnzilla",
    "youtubeId": "UCM7TIyKco_WsQDVWyPu6P0w",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
