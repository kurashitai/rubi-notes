// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "S1sMM",
  "type": "Hunt",
  "title": "Surface",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMzIvdDNjVFNmVjAtMDI0LXBhbGFkaW4tcmFtb2EucG5nIn0=",
  "minLevel": 50,
  "maxLevel": 80,
  "minProfitH": 0,
  "maxProfitH": 1000,
  "minXpH": 140000,
  "maxXpH": 170000,
  "upvoteCount": 1,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": null,
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 6,
    "type": "User",
    "username": "V4SK",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "zCTfP0VB_aw",
  "videoStartAt": null,
  "centerCoordinates": "31929,32571,7",
  "instructions": "<p>Good hunting for low level paladins to get XP, for loot not so good.</p>\n<p>Quest needed to access the hunt:</p>\n<ul>\n  <li><a href=\"https://tibia.fandom.com/es/wiki/Eleonore_Quest/Spoiler\">Eleonore Quest</a></li>\n  <li><a href=\"https://tibia.fandom.com/es/wiki/VoodooMaster_Quest/Spoiler\">Voodoo Master Quest</a></li>\n  <li><a href=\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#Access_to_Ramoa\" rel=\"noopener noreferrer\" title=\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#Access_to_Ramoa\">Mission \"Access to Ramoa\" of The Shattered Isles Quests</a></li>\n</ul>\n<p></p>\n<p>⚔️ <strong>Strategy</strong></p>\n<p>This hunt has a very satisfactory respawn, you can go around the island to clear all the respawn. Keep a good distance from monsters to avoid damage.</p>\n<p></p>\n<p>If you have many creatures lured on you use area spells, such as <em>Exevo Mas San</em>. To speed up the process of clearing the respawn, use <em>Exori Con</em> on monsters.</p>\n<p></p>\n<p>If you are between level 50-79 remember to start the <a href=\"https://tibia.fandom.com/wiki/Killing_in_the_Name_of..._Quest#Bonebeasts\">Bonebeast task</a> before going hunting.</p>\n<p></p>\n<p>🛡️ <strong>Equipment</strong></p>\n<p>Use a Composite Bow and some Onyx Arrows.</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>The loot on the focus floor of this hunt is not good, but with a higher level it is possible to go down floors and get loot with the respawn of Undead Cavebear (Boss Bonebeast), with him it is possible to get the mount.</p>",
  "createdAt": "2021-11-11T19:21:06.818Z",
  "updatedAt": "2024-03-17T23:02:24.511Z",
  "dungeon": {
    "id": 65,
    "type": "Dungeon",
    "title": "Ramoa",
    "accountStatus": "premium",
    "entranceCoordinates": "31931,32569,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"f95j6\",\"text\":\"Traveling from Liberty Bay to Thais one who is at least level 20 may eventually get lost in a tropical storm and become stranded on Goroma.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"78ec9\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"b66gq\",\"text\":\"Once in Goroma, if you have done Mission \\\"Access to Ramoa\\\" of The Shattered Isles Quests, you are able to use the teleportation hubs to go to Ramoa.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":33,\"length\":55,\"key\":0}],\"data\":{}},{\"key\":\"dv72d\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7ugu\",\"text\":\"The teleports in Goroma are downstairs, [map c=\\\"32038,32560,7\\\" map]here[/map]. You will have to use the portals to the right 1 more time to reach Ramoa.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest/Spoiler#Access_to_Ramoa\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 12,
      "type": "City",
      "name": "Liberty Bay"
    }
  },
  "requirements": [
    {
      "id": 208,
      "type": "DungeonRequirement",
      "dungeonId": 65,
      "description": "Mission \"Access to Ramoa\" done of The Shattered Isles Quest",
      "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Ramoa"
    }
  ],
  "sections": [
    {
      "id": 65,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 51,
          "type": "Creature",
          "title": "Giant Spider",
          "formerNames": null,
          "healthPoints": 1300,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaWFudF9TcGlkZXIuZ2lmIn0="
        },
        {
          "id": 179,
          "type": "Creature",
          "title": "Water Elemental",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 650,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYXRlcl9FbGVtZW50YWwuZ2lmIn0="
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
          "id": 79,
          "type": "Creature",
          "title": "Bonebeast",
          "formerNames": null,
          "healthPoints": 515,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lYmVhc3QuZ2lmIn0="
        },
        {
          "id": 25,
          "type": "Creature",
          "title": "Priestess",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 420,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Qcmllc3Rlc3MuZ2lmIn0="
        },
        {
          "id": 8,
          "type": "Creature",
          "title": "Vampire",
          "formerNames": null,
          "healthPoints": 475,
          "xpPoints": 305,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WYW1waXJlLmdpZiJ9"
        },
        {
          "id": 65,
          "type": "Creature",
          "title": "Demon Skeleton",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 240,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZW1vbl9Ta2VsZXRvbi5naWYifQ=="
        },
        {
          "id": 80,
          "type": "Creature",
          "title": "Crypt Shambler",
          "formerNames": null,
          "healthPoints": 330,
          "xpPoints": 195,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcnlwdF9TaGFtYmxlci5naWYifQ=="
        },
        {
          "id": 82,
          "type": "Creature",
          "title": "Ghost",
          "formerNames": null,
          "healthPoints": 150,
          "xpPoints": 120,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG9zdC5naWYifQ=="
        },
        {
          "id": 55,
          "type": "Creature",
          "title": "Scorpion",
          "formerNames": null,
          "healthPoints": 45,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY29ycGlvbi5naWYifQ=="
        },
        {
          "id": 50,
          "type": "Creature",
          "title": "Cobra",
          "formerNames": null,
          "healthPoints": 65,
          "xpPoints": 30,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Db2JyYS5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
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
      "id": 87,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 15000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 202,
        "type": "Item",
        "title": "Vampire Shield",
        "pluralizedTitle": "Vampire Shields",
        "formerNames": null,
        "minValue": 15000,
        "maxValue": 20000,
        "npcBuyValue": 15000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1ZhbXBpcmVfU2hpZWxkLmdpZiJ9"
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
  "huntRequiredItems": [
    {
      "id": 15,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 14,
        "type": "DungeonRequiredItem",
        "dungeonId": 65,
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
      "huntId": 32
    }
  ],
  "huntRequirements": [
    {
      "id": 142,
      "type": "HuntRequirement",
      "huntId": 32,
      "dungeonRequirement": {
        "id": 208,
        "type": "DungeonRequirement",
        "dungeonId": 65,
        "description": "Mission \"Access to Ramoa\" done of The Shattered Isles Quest",
        "link": "https://tibia.fandom.com/wiki/The_Shattered_Isles_Quest#Access_to_Ramoa"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 100,
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
      "id": 101,
      "type": "HuntSupply",
      "quantity": 900,
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
    }
  ],
  "lootUpdatedAt": "2021-11-15T19:22:41.932Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-11T19:21:06.818Z",
  "youtubeChannel": null,
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
