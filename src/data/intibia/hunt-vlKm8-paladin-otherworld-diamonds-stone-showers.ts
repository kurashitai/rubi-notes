// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "vlKm8",
  "type": "Hunt",
  "title": "Diamonds + Stone showers",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTIyL21XMWEyY1lOLTYucG5nIn0=",
  "minLevel": 400,
  "maxLevel": 800,
  "minProfitH": 300000,
  "maxProfitH": 700000,
  "minXpH": 2100000,
  "maxXpH": 2700000,
  "upvoteCount": 10,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 31,
    "type": "User",
    "username": "Xarkost",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "Zxk3JubEwFM",
  "videoStartAt": null,
  "centerCoordinates": "32164,31293,6",
  "instructions": "<p>Depending on the vortice you used, you can be teleported to three places. Check 0:54 📹 to understand how to get to the hunting place.</p>\n<p></p>\n<p>🐗 When hunting in the Otherworld you will find Breach Brood, Dread Intruder, Reality Reaver, and Sparkion. You could start hunting this spawn as early as level 400 if you have the right gear but you will have to be careful.&nbsp;</p>\n<p></p>\n<p>🛡️ If you wanted additional protection though you could use either a Pristmatic Ring which is 10% physical and 8% energy protection or a Ring of Souls which has 2% physical and 10% life drain protection. For a trinket you could either use Bone Fiddle or Moon Mirror. These will probably reduce about the same amount of damage overall.&nbsp;</p>",
  "createdAt": "2021-12-10T16:55:56.527Z",
  "updatedAt": "2024-03-18T00:13:40.818Z",
  "dungeon": {
    "id": 296,
    "type": "Dungeon",
    "title": "Otherworld",
    "accountStatus": "premium",
    "entranceCoordinates": "33034,31370,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"473l4\",\"text\":\"Otherworld is located in the depths of Svargrond. To get there you must complete the mission Entering the Otherworld of the Heart of Destruction Quest.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":93,\"length\":57,\"key\":0}],\"data\":{}},{\"key\":\"4hst5\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9r3v8\",\"text\":\"To reach the dungeon you have to enter one of the vortices, that changes places every 2 hours. The possible vortices locations are:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ev92r\",\"text\":\"North of Ankrahmun, [map c=\\\"33168,32637,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7udsb\",\"text\":\"South-west of Svargrond, [map c=\\\"32164,31293,6\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5ae3\",\"text\":\"West of Zao Steppe, [map c=\\\"33034,31370,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c78mr\",\"text\":\"👀 If you have the item Spying Eye you can know the exact location of the vortice by using it.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":1,\"key\":1},{\"offset\":23,\"length\":10,\"key\":2}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Heart_of_Destruction_Quest#Entering_the_Otherworld\"}},\"1\":{\"type\":\"emoji\",\"mutability\":\"IMMUTABLE\",\"data\":{\"emojiUnicode\":\"👀\"}},\"2\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Spying_Eye\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 16,
      "type": "City",
      "name": "Svargrond"
    }
  },
  "requirements": [
    {
      "id": 292,
      "type": "DungeonRequirement",
      "dungeonId": 296,
      "description": "Mission \"Entering the Otherworld\" done of the Heart of Destruction Quest",
      "link": "https://tibia.fandom.com/wiki/Heart_of_Destruction_Quest#Entering_the_Otherworld"
    }
  ],
  "sections": [
    {
      "id": 1192,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 987,
          "type": "Creature",
          "title": "Dread Intruder",
          "formerNames": null,
          "healthPoints": 4500,
          "xpPoints": 2400,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmVhZF9JbnRydWRlci5naWYifQ=="
        },
        {
          "id": 989,
          "type": "Creature",
          "title": "Breach Brood",
          "formerNames": null,
          "healthPoints": 3500,
          "xpPoints": 1760,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CcmVhY2hfQnJvb2QuZ2lmIn0="
        },
        {
          "id": 986,
          "type": "Creature",
          "title": "Sparkion",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 1520,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcGFya2lvbi5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 8933,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.08,
      "isInestimable": false,
      "item": {
        "id": 959,
        "type": "Item",
        "title": "Lightning Legs",
        "pluralizedTitle": "Lightning Legs",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 40000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpZ2h0bmluZ19MZWdzLmdpZiJ9"
      }
    },
    {
      "id": 8877,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 1.03,
      "isInestimable": false,
      "item": {
        "id": 341,
        "type": "Item",
        "title": "Violet Gem",
        "pluralizedTitle": "Violet Gems",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 100000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Zpb2xldF9HZW0uZ2lmIn0="
      }
    },
    {
      "id": 8878,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 0.34,
      "isInestimable": false,
      "item": {
        "id": 3105,
        "type": "Item",
        "title": "Ring of Red Plasma",
        "pluralizedTitle": "Ring of Red Plasmas",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": null,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfUmVkX1BsYXNtYS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 228,
      "type": "HuntRequirement",
      "huntId": 122,
      "dungeonRequirement": {
        "id": 292,
        "type": "DungeonRequirement",
        "dungeonId": 296,
        "description": "Mission \"Entering the Otherworld\" done of the Heart of Destruction Quest",
        "link": "https://tibia.fandom.com/wiki/Heart_of_Destruction_Quest#Entering_the_Otherworld"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 507,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "paladin",
      "supply": {
        "id": 76,
        "type": "Supply",
        "item": {
          "id": 3810,
          "type": "Item",
          "title": "Enchanted Pendulet",
          "pluralizedTitle": "Enchanted Pendulets",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuY2hhbnRlZF9QZW5kdWxldC5naWYifQ=="
        }
      }
    },
    {
      "id": 508,
      "type": "HuntSupply",
      "quantity": 800,
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
    },
    {
      "id": 509,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "paladin",
      "supply": {
        "id": 59,
        "type": "Supply",
        "item": {
          "id": 1961,
          "type": "Item",
          "title": "Stone Shower Rune",
          "pluralizedTitle": "Stone Shower Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0b25lX1Nob3dlcl9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 510,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "paladin",
      "supply": {
        "id": 123,
        "type": "Supply",
        "item": {
          "id": 3340,
          "type": "Item",
          "title": "Diamond Arrow",
          "pluralizedTitle": "Diamond Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RpYW1vbmRfQXJyb3cuZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-12-18T22:09:09.233Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-18T22:09:09.207Z",
  "youtubeChannel": {
    "id": 41,
    "type": "YoutubeChannel",
    "name": "Xarkost",
    "youtubeId": "UC-QoyM7EJJQOf3obGbjaINw",
    "verifiedAt": "Wed Dec 08 2021 23:46:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 31,
      "type": "User",
      "username": "Xarkost",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
