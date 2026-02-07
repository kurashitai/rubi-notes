// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "fDMtu",
  "type": "Hunt",
  "title": null,
  "vocation": "druid",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNjQvelZ5elNDWTUtZkRNdHUtbWluLnBuZyJ9",
  "minLevel": 180,
  "maxLevel": 220,
  "minProfitH": -150000,
  "maxProfitH": -50000,
  "minXpH": 1100000,
  "maxXpH": 1400000,
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
  "videoId": "T6jdFr4OCyA",
  "videoStartAt": 7,
  "centerCoordinates": "32351,31679,8",
  "instructions": "<p>Alternative hunt for mages level 180+. It's not a very good place for mages as the xp is average, the loot is bad, the corridors are small and you can get trapped.</p>\n<p></p>\n<p>That being said, it still is a good place to do the bestiary and can be an option if the other hunting places are full.</p>\n<p></p>\n<p>❄️ Lure the creatures and shoot avalanche runes. Use <em>exevo gran mas frigo </em>in as many monsters as you can.</p>\n<p></p>\n<p>💖 Heal yourself with <em>exura vita </em>and avoid to be surrounded by more than 4 monsters.</p>\n<p></p>\n<p>🛡️ Bring some defense equipments because the physical damage is high here.</p>",
  "createdAt": "2021-11-22T21:20:57.699Z",
  "updatedAt": "2024-03-17T23:16:29.980Z",
  "dungeon": {
    "id": 314,
    "type": "Dungeon",
    "title": "Carlin Forbidden Temple",
    "accountStatus": "premium",
    "entranceCoordinates": "32351,31679,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"435ku\",\"text\":\"Carlin Forbidden Temple (aka Carlin Cults) is located under the Carlin Graveyard:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":24,\"style\":\"BOLD\"},{\"offset\":29,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"a775e\",\"text\":\"If you don't have Key 3520, pick it inside a chest near the Carlin boat ([map c=\\\"32376,31802,7\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4i30n\",\"text\":\"Go to the graveyard ([map c=\\\"32404,31790,7\\\" map]here[/map]) and use the Fragile Torch Bearer south-west of the stairs, ([map c=\\\"32400,31793,8\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9hbb5\",\"text\":\"Walk south-west and unlock the doors using the Key 3520 if necessary.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"eic6b\",\"text\":\"Enter the corridor to the south and enter the teleport ([map c=\\\"32403,31812,8\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"969l7\",\"text\":\"⚠️ Be careful when you go in the portal since you will be immediately targeted by over 10 creatures.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":2,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"emoji\",\"mutability\":\"IMMUTABLE\",\"data\":{\"emojiUnicode\":\"⚠️\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 5,
      "type": "City",
      "name": "Carlin"
    }
  },
  "requirements": [
    {
      "id": 134,
      "type": "DungeonRequirement",
      "dungeonId": 314,
      "description": "Mission \"Zathroth Remnants\" done of Cults of Tibia Quest",
      "link": "https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#Zathroth_Remnants_.28Humans.29"
    }
  ],
  "sections": [
    {
      "id": 787,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 951,
          "type": "Creature",
          "title": "Vile Grandmaster",
          "formerNames": null,
          "healthPoints": 1700,
          "xpPoints": 1500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWxlX0dyYW5kbWFzdGVyLmdpZiJ9"
        },
        {
          "id": 950,
          "type": "Creature",
          "title": "Renegade Knight",
          "formerNames": null,
          "healthPoints": 1450,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SZW5lZ2FkZV9LbmlnaHQuZ2lmIn0="
        },
        {
          "id": 949,
          "type": "Creature",
          "title": "Vicious Squire",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWNpb3VzX1NxdWlyZS5naWYifQ=="
        },
        {
          "id": 1173,
          "type": "Creature",
          "title": "Cult Believer",
          "formerNames": null,
          "healthPoints": 975,
          "xpPoints": 850,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DdWx0X0JlbGlldmVyLmdpZiJ9"
        }
      ]
    },
    {
      "id": 788,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 951,
          "type": "Creature",
          "title": "Vile Grandmaster",
          "formerNames": null,
          "healthPoints": 1700,
          "xpPoints": 1500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWxlX0dyYW5kbWFzdGVyLmdpZiJ9"
        },
        {
          "id": 950,
          "type": "Creature",
          "title": "Renegade Knight",
          "formerNames": null,
          "healthPoints": 1450,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SZW5lZ2FkZV9LbmlnaHQuZ2lmIn0="
        },
        {
          "id": 1174,
          "type": "Creature",
          "title": "Cult Enforcer",
          "formerNames": null,
          "healthPoints": 1150,
          "xpPoints": 1000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DdWx0X0VuZm9yY2VyLmdpZiJ9"
        },
        {
          "id": 949,
          "type": "Creature",
          "title": "Vicious Squire",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWNpb3VzX1NxdWlyZS5naWYifQ=="
        },
        {
          "id": 1173,
          "type": "Creature",
          "title": "Cult Believer",
          "formerNames": null,
          "healthPoints": 975,
          "xpPoints": 850,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DdWx0X0JlbGlldmVyLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 8282,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.88,
      "isInestimable": false,
      "item": {
        "id": 78,
        "type": "Item",
        "title": "Crown Legs",
        "pluralizedTitle": "Crown Legs",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": 20000,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Nyb3duX0xlZ3MuZ2lmIn0="
      }
    },
    {
      "id": 8264,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 12000,
      "percentage": 0.62,
      "isInestimable": false,
      "item": {
        "id": 130,
        "type": "Item",
        "title": "Crown Armor",
        "pluralizedTitle": "Crown Armors",
        "formerNames": null,
        "minValue": 12000,
        "maxValue": 15000,
        "npcBuyValue": 12000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Nyb3duX0FybW9yLmdpZiJ9"
      }
    },
    {
      "id": 8267,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 0.21,
      "isInestimable": false,
      "item": {
        "id": 199,
        "type": "Item",
        "title": "Crown Shield",
        "pluralizedTitle": "Crown Shields",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": 15000,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Nyb3duX1NoaWVsZC5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 52,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 10,
        "type": "DungeonRequiredItem",
        "dungeonId": 314,
        "requiredItem": {
          "id": 22,
          "type": "RequiredItem",
          "item": {
            "id": 402,
            "type": "Item",
            "title": "Key 3520",
            "pluralizedTitle": "Key 3520s",
            "formerNames": "Carlin Crypt Key, Fanfare Quest Key",
            "image": null
          }
        }
      },
      "huntId": 64
    }
  ],
  "huntRequirements": [
    {
      "id": 75,
      "type": "HuntRequirement",
      "huntId": 64,
      "dungeonRequirement": {
        "id": 134,
        "type": "DungeonRequirement",
        "dungeonId": 314,
        "description": "Mission \"Zathroth Remnants\" done of Cults of Tibia Quest",
        "link": "https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#Zathroth_Remnants_.28Humans.29"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 239,
      "type": "HuntSupply",
      "quantity": 320,
      "vocation": "druid",
      "supply": {
        "id": 29,
        "type": "Supply",
        "item": {
          "id": 1963,
          "type": "Item",
          "title": "Avalanche Rune",
          "pluralizedTitle": "Avalanche Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0F2YWxhbmNoZV9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 240,
      "type": "HuntSupply",
      "quantity": 320,
      "vocation": "druid",
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
    },
    {
      "id": 241,
      "type": "HuntSupply",
      "quantity": 4,
      "vocation": "druid",
      "supply": {
        "id": 14,
        "type": "Supply",
        "item": {
          "id": 895,
          "type": "Item",
          "title": "Mastermind Potion",
          "pluralizedTitle": "Mastermind Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hc3Rlcm1pbmRfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 242,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "druid",
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
    }
  ],
  "lootUpdatedAt": "2021-11-24T16:50:07.519Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-24T16:50:07.471Z",
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
