// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "hJD36",
  "type": "Hunt",
  "title": "Floor -3",
  "vocation": null,
  "teamSize": "squad",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTY5L2duOG9KNVp2LWhKRDM2LW1pbi5wbmcifQ==",
  "minLevel": 50,
  "maxLevel": 100,
  "minProfitH": -200000,
  "maxProfitH": -100000,
  "minXpH": 530000,
  "maxXpH": 800000,
  "upvoteCount": 5,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1402,
    "type": "User",
    "username": "Cremoso",
    "avatar": "orc",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "3bi4z0zzRiw",
  "videoStartAt": null,
  "centerCoordinates": "33261,31660,10",
  "instructions": "<p>Beware with the <strong>Vile Grandmaster</strong>, it hits very hard. If possible, the knight should use Utamo Tempo on Vile Grandmaster boxes.</p>\n<p></p>\n<p>Use <strong>Fire Bomb</strong> when there are a lot of creatures not attacking the knight.</p>",
  "createdAt": "2022-01-12T21:30:18.801Z",
  "updatedAt": "2024-10-20T14:04:11.728Z",
  "dungeon": {
    "id": 278,
    "type": "Dungeon",
    "title": "Old Fortress",
    "accountStatus": "premium",
    "entranceCoordinates": "33224,31651,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"bivr\",\"text\":\"Old Fortress is located north of Edron, [map c=\\\"33224,31651,7\\\" map]here[/map]. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"7vh9g\",\"text\":\"Cross the mountain, [map c=\\\"33241,31767,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dgske\",\"text\":\"Walk to the north and go down the ladder, [map c=\\\"33224,31651,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 9,
      "type": "City",
      "name": "Edron"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1168,
      "type": "DungeonSection",
      "name": "Floor -3",
      "position": 4,
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
          "id": 2,
          "type": "Creature",
          "title": "Hero",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZXJvLmdpZiJ9"
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
          "id": 802,
          "type": "Creature",
          "title": "Blood Priest",
          "formerNames": null,
          "healthPoints": 820,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbG9vZF9Qcmllc3QuZ2lmIn0="
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
          "id": 408,
          "type": "Creature",
          "title": "Undead Gladiator",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9VbmRlYWRfR2xhZGlhdG9yLmdpZiJ9"
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
          "id": 24,
          "type": "Creature",
          "title": "Necromancer",
          "formerNames": null,
          "healthPoints": 580,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OZWNyb21hbmNlci5naWYifQ=="
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
      "id": 6514,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.18,
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
      "id": 6512,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 13000,
      "percentage": 0.3,
      "isInestimable": false,
      "item": {
        "id": 1123,
        "type": "Item",
        "title": "Spellbook of Mind Control",
        "pluralizedTitle": "Spellbook of Mind Controls",
        "formerNames": null,
        "minValue": 13000,
        "maxValue": 30000,
        "npcBuyValue": 13000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwZWxsYm9va19vZl9NaW5kX0NvbnRyb2wuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 670,
      "type": "HuntSupply",
      "quantity": 60,
      "vocation": "knight",
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
      "id": 671,
      "type": "HuntSupply",
      "quantity": 300,
      "vocation": "knight",
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
      "id": 672,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "druid",
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
      "id": 673,
      "type": "HuntSupply",
      "quantity": 200,
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
      "id": 674,
      "type": "HuntSupply",
      "quantity": 15,
      "vocation": "druid",
      "supply": {
        "id": 39,
        "type": "Supply",
        "item": {
          "id": 1947,
          "type": "Item",
          "title": "Fire Bomb Rune",
          "pluralizedTitle": "Fire Bomb Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfQm9tYl9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 675,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "sorcerer",
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
      "id": 676,
      "type": "HuntSupply",
      "quantity": 200,
      "vocation": "sorcerer",
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
      "id": 677,
      "type": "HuntSupply",
      "quantity": 15,
      "vocation": "sorcerer",
      "supply": {
        "id": 39,
        "type": "Supply",
        "item": {
          "id": 1947,
          "type": "Item",
          "title": "Fire Bomb Rune",
          "pluralizedTitle": "Fire Bomb Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfQm9tYl9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 678,
      "type": "HuntSupply",
      "quantity": 40,
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
      "id": 679,
      "type": "HuntSupply",
      "quantity": 300,
      "vocation": "paladin",
      "supply": {
        "id": 121,
        "type": "Supply",
        "item": {
          "id": 89,
          "type": "Item",
          "title": "Burst Arrow",
          "pluralizedTitle": "Burst Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0J1cnN0X0Fycm93LmdpZiJ9"
        }
      }
    },
    {
      "id": 680,
      "type": "HuntSupply",
      "quantity": 200,
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
      "id": 681,
      "type": "HuntSupply",
      "quantity": 15,
      "vocation": "paladin",
      "supply": {
        "id": 39,
        "type": "Supply",
        "item": {
          "id": 1947,
          "type": "Item",
          "title": "Fire Bomb Rune",
          "pluralizedTitle": "Fire Bomb Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfQm9tYl9SdW5lLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-13T17:46:48.075Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-13T17:46:48.057Z",
  "youtubeChannel": {
    "id": 20,
    "type": "YoutubeChannel",
    "name": "Mp3_Player",
    "youtubeId": "UCSKoJ_uQlpvieN0NfCtg_wA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Time x4"
} as const;

export default hunt;
