// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "K8HEf",
  "type": "Hunt",
  "title": "Summon + Stone showers",
  "vocation": "mage",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTE2LzAwd1NRMVpoLTAwOC1kcnVpZC1zb3JjZXJlci1waXJhdC1taW5lLXN1bW1vbi1zdG9uZS1zaG93ZXJzLW1pbi5wbmcifQ==",
  "minLevel": 150,
  "maxLevel": 250,
  "minProfitH": 50000,
  "maxProfitH": 200000,
  "minXpH": 750000,
  "maxXpH": 1200000,
  "upvoteCount": 9,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 73,
    "type": "User",
    "username": "Aegg",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "b_XR9msR0W4",
  "videoStartAt": null,
  "centerCoordinates": "33882,31342,9",
  "instructions": "<p>🐀 Pirat cutthroats stop hitting after they hit twice, so you can lure quite much.</p>\n<p></p>\n<p>👜 You won't have much cap for all the loot there as a mage (which is why I recommended only 400 Stone shower runes) , so I would recommend enchanting your backpack and also gaining the shortcut from Eustacio in Venore (A Pirate's Tail Quest).</p>\n<p></p>\n<p>⚡️ Wear energy resistance set for the first time so you get the feel of how much damage they deal and then gradually wear ML gear.</p>\n<p></p>\n<p>⚗️ If you have your items imbued with mana, you would probably not need as much as ultimate mana potions (if at all).</p>",
  "createdAt": "2021-12-06T21:02:11.312Z",
  "updatedAt": "2024-05-06T01:29:28.881Z",
  "dungeon": {
    "id": 431,
    "type": "Dungeon",
    "title": "Pirat Mine",
    "accountStatus": "premium",
    "entranceCoordinates": "33851,31352,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"dbqgc\",\"text\":\"Pirat Mine is located underground Issavi. After starting the mission Isle Events of A Pirate's Tail Quest you can get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":69,\"length\":36,\"key\":0}],\"data\":{}},{\"key\":\"drh83\",\"text\":\"Go to Eustacio in Venore, [map c=\\\"32936,32030,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6h44e\",\"text\":\"Say hi - shortcut - yes.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":4,\"length\":19,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"3n7m7\",\"text\":\"Walk to the north-east and open the hole, [map c=\\\"33788,31335,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/A_Pirate%27s_Tail_Quest/Spoiler#Isle_Events\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 19,
      "type": "City",
      "name": "Issavi"
    }
  },
  "requirements": [
    {
      "id": 290,
      "type": "DungeonRequirement",
      "dungeonId": 431,
      "description": "Must have started mission Isle Events of A Pirate's Tail Quest",
      "link": "https://tibia.fandom.com/wiki/A_Pirate%27s_Tail_Quest/Spoiler#Isle_Events"
    }
  ],
  "sections": [
    {
      "id": 1228,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 1588,
          "type": "Creature",
          "title": "Pirat Cutthroat",
          "formerNames": null,
          "healthPoints": 2600,
          "xpPoints": 1800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdF9DdXR0aHJvYXQuZ2lmIn0="
        },
        {
          "id": 1590,
          "type": "Creature",
          "title": "Pirat Bombardier",
          "formerNames": null,
          "healthPoints": 2300,
          "xpPoints": 1700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdF9Cb21iYXJkaWVyLmdpZiJ9"
        },
        {
          "id": 1589,
          "type": "Creature",
          "title": "Pirat Scoundrel",
          "formerNames": null,
          "healthPoints": 2200,
          "xpPoints": 1600,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QaXJhdF9TY291bmRyZWwuZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 14320,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 2.15,
      "isInestimable": false,
      "item": {
        "id": 3107,
        "type": "Item",
        "title": "Ring of Blue Plasma",
        "pluralizedTitle": "Ring of Blue Plasmas",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": null,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfQmx1ZV9QbGFzbWEuZ2lmIn0="
      }
    },
    {
      "id": 14306,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 2.03,
      "isInestimable": false,
      "item": {
        "id": 1142,
        "type": "Item",
        "title": "Focus Cape",
        "pluralizedTitle": "Focus Capes",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 8000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZvY3VzX0NhcGUuZ2lmIn0="
      }
    },
    {
      "id": 14305,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 2.79,
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
  "huntRequiredItems": [
    {
      "id": 97,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 69,
        "type": "DungeonRequiredItem",
        "dungeonId": 431,
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
      "huntId": 116
    },
    {
      "id": 98,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 73,
        "type": "DungeonRequiredItem",
        "dungeonId": 431,
        "requiredItem": {
          "id": 13,
          "type": "RequiredItem",
          "item": {
            "id": 45,
            "type": "Item",
            "title": "Shovel",
            "pluralizedTitle": "Shovels",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Nob3ZlbC5naWYifQ=="
          }
        }
      },
      "huntId": 116
    }
  ],
  "huntRequirements": [
    {
      "id": 226,
      "type": "HuntRequirement",
      "huntId": 116,
      "dungeonRequirement": {
        "id": 290,
        "type": "DungeonRequirement",
        "dungeonId": 431,
        "description": "Must have started mission Isle Events of A Pirate's Tail Quest",
        "link": "https://tibia.fandom.com/wiki/A_Pirate%27s_Tail_Quest/Spoiler#Isle_Events"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 502,
      "type": "HuntSupply",
      "quantity": 400,
      "vocation": "mage",
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
      "id": 503,
      "type": "HuntSupply",
      "quantity": 50,
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
    }
  ],
  "lootUpdatedAt": "2021-12-17T16:03:50.476Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-12-17T16:03:50.456Z",
  "youtubeChannel": null,
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
