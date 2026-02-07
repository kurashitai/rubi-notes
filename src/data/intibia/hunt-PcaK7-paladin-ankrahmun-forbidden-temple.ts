// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "PcaK7",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMzEveTVNelF1YnMtMDIzLXBhbGFkaW4tYW5rcmFobXVuLWZvcmJpZGRlbi10ZW1wbGUucG5nIn0=",
  "minLevel": 40,
  "maxLevel": 65,
  "minProfitH": 0,
  "maxProfitH": 25000,
  "minXpH": 90000,
  "maxXpH": 120000,
  "upvoteCount": 5,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
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
  "videoId": "pHbqvPuxIpg",
  "videoStartAt": null,
  "centerCoordinates": "33315,32674,7",
  "instructions": "<p>Good hunt for paladins level 40+ for experience and loot. Recommended skills is 75+.</p>\n<p></p>\n<p>🛡️ <strong>Equipment</strong></p>\n<p>Use a bow (Composite or Elvish) and some Onyx Arrows to help you in the hunt. It's good to bring some runes like Energy Wall and Thunderstorm. An important item for this hunt is the Garlic Necklace, because it decreases the life drain caused by Cultists.</p>\n<p></p>\n<p>⚔️ <strong>Strategy</strong></p>\n<p>In this respawn, the floors get harder as you go down. Start doing the floor -2 and as you explore and get to know the place you can keep going down. Be careful when going down the stairs, not to get traped and unable to come back up. If you feel the respawn is weak, hunt on multiple floors to garantee the best experience gain.</p>\n<p></p>\n<p>In the last floor there may be the Boss of Cultists. It may be dangerous because it summons 2 fire elementals, but it is a desirable loot.</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>You will drop Rope Belt (imbuement) and many other items to sell, like Skull Staff, Amber Staff, Blue Robe and more.</p>",
  "createdAt": "2021-11-10T14:33:53.661Z",
  "updatedAt": "2024-03-17T23:13:50.261Z",
  "dungeon": {
    "id": 269,
    "type": "Dungeon",
    "title": "Ankrahmun Forbidden Temple",
    "accountStatus": "premium",
    "entranceCoordinates": "33315,32674,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"7rjoc\",\"text\":\"Ankrahmun Forbidden Temple is located north-east of Ankrahmun. The entrance is located [map c=\\\"33315,32674,7\\\" map]here[/map], hidden by the tree. You may need to dig a few times before it opens.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":26,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 7,
      "type": "City",
      "name": "Ankrahmun"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 791,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 157,
          "type": "Creature",
          "title": "Acolyte of the Cult",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BY29seXRlX29mX3RoZV9DdWx0LmdpZiJ9"
        },
        {
          "id": 108,
          "type": "Creature",
          "title": "Lizard Snakecharmer",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 210,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfU25ha2VjaGFybWVyLmdpZiJ9"
        },
        {
          "id": 145,
          "type": "Creature",
          "title": "Lizard Templar",
          "formerNames": null,
          "healthPoints": 410,
          "xpPoints": 155,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfVGVtcGxhci5naWYifQ=="
        },
        {
          "id": 144,
          "type": "Creature",
          "title": "Lizard Sentinel",
          "formerNames": null,
          "healthPoints": 265,
          "xpPoints": 110,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfU2VudGluZWwuZ2lmIn0="
        },
        {
          "id": 163,
          "type": "Creature",
          "title": "Novice of the Cult",
          "formerNames": null,
          "healthPoints": 285,
          "xpPoints": 100,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ob3ZpY2Vfb2ZfdGhlX0N1bHQuZ2lmIn0="
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
    },
    {
      "id": 792,
      "type": "DungeonSection",
      "name": "Floor -3",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 162,
          "type": "Creature",
          "title": "Enlightened of the Cult",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbmxpZ2h0ZW5lZF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 158,
          "type": "Creature",
          "title": "Adept of the Cult",
          "formerNames": null,
          "healthPoints": 430,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BZGVwdF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 157,
          "type": "Creature",
          "title": "Acolyte of the Cult",
          "formerNames": null,
          "healthPoints": 390,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BY29seXRlX29mX3RoZV9DdWx0LmdpZiJ9"
        },
        {
          "id": 108,
          "type": "Creature",
          "title": "Lizard Snakecharmer",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 210,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfU25ha2VjaGFybWVyLmdpZiJ9"
        },
        {
          "id": 145,
          "type": "Creature",
          "title": "Lizard Templar",
          "formerNames": null,
          "healthPoints": 410,
          "xpPoints": 155,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfVGVtcGxhci5naWYifQ=="
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
    },
    {
      "id": 793,
      "type": "DungeonSection",
      "name": "Floor -4",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 162,
          "type": "Creature",
          "title": "Enlightened of the Cult",
          "formerNames": null,
          "healthPoints": 700,
          "xpPoints": 500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbmxpZ2h0ZW5lZF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 158,
          "type": "Creature",
          "title": "Adept of the Cult",
          "formerNames": null,
          "healthPoints": 430,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9BZGVwdF9vZl90aGVfQ3VsdC5naWYifQ=="
        },
        {
          "id": 108,
          "type": "Creature",
          "title": "Lizard Snakecharmer",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 210,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfU25ha2VjaGFybWVyLmdpZiJ9"
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
      "id": 1662,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.08,
      "isInestimable": false,
      "item": {
        "id": 58,
        "type": "Item",
        "title": "Blue Robe",
        "pluralizedTitle": "Blue Robes",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 15000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JsdWVfUm9iZS5naWYifQ=="
      }
    },
    {
      "id": 1660,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 888,
        "type": "Item",
        "title": "Amber Staff",
        "pluralizedTitle": "Amber Staffs",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": 15000,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0FtYmVyX1N0YWZmLmdpZiJ9"
      }
    },
    {
      "id": 1615,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 0.06,
      "isInestimable": false,
      "item": {
        "id": 1758,
        "type": "Item",
        "title": "Broken Key Ring",
        "pluralizedTitle": "Broken Key Rings",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": null,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jyb2tlbl9LZXlfUmluZy5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 13,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 12,
        "type": "DungeonRequiredItem",
        "dungeonId": 269,
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
      "huntId": 31
    },
    {
      "id": 14,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 13,
        "type": "DungeonRequiredItem",
        "dungeonId": 269,
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
      "huntId": 31
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 97,
      "type": "HuntSupply",
      "quantity": 100,
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
      "id": 98,
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
      "id": 99,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "paladin",
      "supply": {
        "id": 88,
        "type": "Supply",
        "item": {
          "id": 172,
          "type": "Item",
          "title": "Garlic Necklace",
          "pluralizedTitle": "Garlic Necklaces",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dhcmxpY19OZWNrbGFjZS5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.124Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-10T14:33:53.661Z",
  "youtubeChannel": {
    "id": 19,
    "type": "YoutubeChannel",
    "name": "Gabriel Reis - Games",
    "youtubeId": "UCl4DPb2ucvawja7P8EvL99g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
