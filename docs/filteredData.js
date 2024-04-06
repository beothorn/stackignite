var data = {
    "name": "InPlaceQuickSortRoot",
    "entryTime": 1699396565812,
    "exitTime": 1699396565820,
    "value": 84,
    "arguments": [
        {
            "type": "int[]",
            "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
        }
    ],
    "children": [
        {
            "name": "InplaceQuickSort.sort(int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]) => int[] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]",
            "entryTime": 1699396565812,
            "exitTime": 1699396565820,
            "value": 84,
            "arguments": [
                {
                    "type": "int[]",
                    "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                }
            ],
            "return": {
                "type": "int[]",
                "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
            },
            "children": [
                {
                    "name": "Common.copyArray(int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6], int[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) => int[] [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]",
                    "entryTime": 1699396565813,
                    "exitTime": 1699396565813,
                    "value": 1,
                    "arguments": [
                        {
                            "type": "int[]",
                            "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                        },
                        {
                            "type": "int[]",
                            "value": "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"
                        }
                    ],
                    "return": {
                        "type": "int[]",
                        "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                    }
                },
                {
                    "name": "InplaceQuickSort.sort(int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6], int = 0, int = 14) => void",
                    "entryTime": 1699396565813,
                    "exitTime": 1699396565820,
                    "value": 83,
                    "arguments": [
                        {
                            "type": "int[]",
                            "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                        },
                        {
                            "type": "int",
                            "value": "0"
                        },
                        {
                            "type": "int",
                            "value": "14"
                        }
                    ],
                    "return": {
                        "type": "void",
                        "value": ""
                    },
                    "children": [
                        {
                            "name": "InplaceQuickSort.getPivotAt(int = 14, int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]) => Integer 6",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "14"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "6"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 6, int = 0, int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]) => Integer 0",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "0"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "0"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 6, int = 14, int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]) => Integer 14",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "14"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "14"
                            }
                        },
                        {
                            "name": "Common.swap(int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6], int = 0, int = 14) => int[] [6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10]",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int[]",
                                    "value": "[10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6]"
                                },
                                {
                                    "type": "int",
                                    "value": "0"
                                },
                                {
                                    "type": "int",
                                    "value": "14"
                                }
                            ],
                            "return": {
                                "type": "int[]",
                                "value": "[6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10]"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 6, int = 1, int[] = [6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10]) => Integer 1",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "1"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "1"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 6, int = 13, int[] = [6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10]) => Integer 12",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "13"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "12"
                            }
                        },
                        {
                            "name": "Common.swap(int[] = [6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10], int = 1, int = 12) => int[] [6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10]",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int[]",
                                    "value": "[6, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 10]"
                                },
                                {
                                    "type": "int",
                                    "value": "1"
                                },
                                {
                                    "type": "int",
                                    "value": "12"
                                }
                            ],
                            "return": {
                                "type": "int[]",
                                "value": "[6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10]"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 6, int = 2, int[] = [6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10]) => Integer 2",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "2"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "2"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 6, int = 11, int[] = [6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10]) => Integer 11",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "11"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "11"
                            }
                        },
                        {
                            "name": "Common.swap(int[] = [6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10], int = 2, int = 11) => int[] [6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10]",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 14, 13, 10]"
                                },
                                {
                                    "type": "int",
                                    "value": "2"
                                },
                                {
                                    "type": "int",
                                    "value": "11"
                                }
                            ],
                            "return": {
                                "type": "int[]",
                                "value": "[6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10]"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 6, int = 3, int[] = [6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10]) => Integer 3",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "3"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "3"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 6, int = 10, int[] = [6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10]) => Integer 10",
                            "entryTime": 1699396565813,
                            "exitTime": 1699396565813,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "10"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "10"
                            }
                        },
                        {
                            "name": "Common.swap(int[] = [6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10], int = 3, int = 10) => int[] [6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10]",
                            "entryTime": 1699396565814,
                            "exitTime": 1699396565814,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 11, 8, 5, 15, 12, 1, 9, 3, 7, 14, 13, 10]"
                                },
                                {
                                    "type": "int",
                                    "value": "3"
                                },
                                {
                                    "type": "int",
                                    "value": "10"
                                }
                            ],
                            "return": {
                                "type": "int[]",
                                "value": "[6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10]"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 6, int = 4, int[] = [6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10]) => Integer 4",
                            "entryTime": 1699396565814,
                            "exitTime": 1699396565814,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "4"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "4"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 6, int = 9, int[] = [6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10]) => Integer 8",
                            "entryTime": 1699396565814,
                            "exitTime": 1699396565814,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "9"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "8"
                            }
                        },
                        {
                            "name": "Common.swap(int[] = [6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10], int = 4, int = 8) => int[] [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]",
                            "entryTime": 1699396565814,
                            "exitTime": 1699396565814,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 3, 8, 5, 15, 12, 1, 9, 11, 7, 14, 13, 10]"
                                },
                                {
                                    "type": "int",
                                    "value": "4"
                                },
                                {
                                    "type": "int",
                                    "value": "8"
                                }
                            ],
                            "return": {
                                "type": "int[]",
                                "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 6, int = 5, int[] = [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 6",
                            "entryTime": 1699396565814,
                            "exitTime": 1699396565814,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "5"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "6"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 6, int = 7, int[] = [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 5",
                            "entryTime": 1699396565814,
                            "exitTime": 1699396565814,
                            "value": 1,
                            "arguments": [
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "7"
                                },
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                }
                            ],
                            "return": {
                                "type": "Integer",
                                "value": "5"
                            }
                        },
                        {
                            "name": "InplaceQuickSort.sort(int[] = [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 0, int = 5) => void",
                            "entryTime": 1699396565814,
                            "exitTime": 1699396565816,
                            "value": 24,
                            "arguments": [
                                {
                                    "type": "int[]",
                                    "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                },
                                {
                                    "type": "int",
                                    "value": "0"
                                },
                                {
                                    "type": "int",
                                    "value": "5"
                                }
                            ],
                            "return": {
                                "type": "void",
                                "value": ""
                            },
                            "children": [
                                {
                                    "name": "InplaceQuickSort.getPivotAt(int = 5, int[] = [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 5",
                                    "entryTime": 1699396565814,
                                    "exitTime": 1699396565814,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "5"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "5"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 5, int = 0, int[] = [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 0",
                                    "entryTime": 1699396565814,
                                    "exitTime": 1699396565814,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "5"
                                        },
                                        {
                                            "type": "int",
                                            "value": "0"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "0"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 5, int = 5, int[] = [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 5",
                                    "entryTime": 1699396565814,
                                    "exitTime": 1699396565814,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "5"
                                        },
                                        {
                                            "type": "int",
                                            "value": "5"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "5"
                                    }
                                },
                                {
                                    "name": "Common.swap(int[] = [6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 0, int = 5) => int[] [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]",
                                    "entryTime": 1699396565814,
                                    "exitTime": 1699396565814,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int[]",
                                            "value": "[6, 2, 4, 3, 1, 5, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        },
                                        {
                                            "type": "int",
                                            "value": "0"
                                        },
                                        {
                                            "type": "int",
                                            "value": "5"
                                        }
                                    ],
                                    "return": {
                                        "type": "int[]",
                                        "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 5, int = 1, int[] = [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 5",
                                    "entryTime": 1699396565814,
                                    "exitTime": 1699396565814,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "5"
                                        },
                                        {
                                            "type": "int",
                                            "value": "1"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "5"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 5, int = 4, int[] = [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 4",
                                    "entryTime": 1699396565814,
                                    "exitTime": 1699396565814,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "5"
                                        },
                                        {
                                            "type": "int",
                                            "value": "4"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "4"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.sort(int[] = [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 0, int = 4) => void",
                                    "entryTime": 1699396565814,
                                    "exitTime": 1699396565816,
                                    "value": 18,
                                    "arguments": [
                                        {
                                            "type": "int[]",
                                            "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        },
                                        {
                                            "type": "int",
                                            "value": "0"
                                        },
                                        {
                                            "type": "int",
                                            "value": "4"
                                        }
                                    ],
                                    "return": {
                                        "type": "void",
                                        "value": ""
                                    },
                                    "children": [
                                        {
                                            "name": "InplaceQuickSort.getPivotAt(int = 4, int[] = [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 1",
                                            "entryTime": 1699396565814,
                                            "exitTime": 1699396565814,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "4"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "1"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 1, int = 0, int[] = [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 0",
                                            "entryTime": 1699396565814,
                                            "exitTime": 1699396565814,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "0"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "0"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 1, int = 4, int[] = [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 4",
                                            "entryTime": 1699396565814,
                                            "exitTime": 1699396565814,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "4"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "4"
                                            }
                                        },
                                        {
                                            "name": "Common.swap(int[] = [5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 0, int = 4) => int[] [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]",
                                            "entryTime": 1699396565815,
                                            "exitTime": 1699396565815,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int[]",
                                                    "value": "[5, 2, 4, 3, 1, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "0"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "4"
                                                }
                                            ],
                                            "return": {
                                                "type": "int[]",
                                                "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 1, int = 1, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 1",
                                            "entryTime": 1699396565815,
                                            "exitTime": 1699396565815,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "1"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 1, int = 3, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 0",
                                            "entryTime": 1699396565815,
                                            "exitTime": 1699396565815,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "3"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "0"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.sort(int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 1, int = 4) => void",
                                            "entryTime": 1699396565815,
                                            "exitTime": 1699396565816,
                                            "value": 12,
                                            "arguments": [
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "4"
                                                }
                                            ],
                                            "return": {
                                                "type": "void",
                                                "value": ""
                                            },
                                            "children": [
                                                {
                                                    "name": "InplaceQuickSort.getPivotAt(int = 4, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 5",
                                                    "entryTime": 1699396565815,
                                                    "exitTime": 1699396565815,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "4"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "5"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 5, int = 1, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 4",
                                                    "entryTime": 1699396565815,
                                                    "exitTime": 1699396565815,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "5"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "4"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 5, int = 4, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 4",
                                                    "entryTime": 1699396565815,
                                                    "exitTime": 1699396565815,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "5"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "4"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "4"
                                                    }
                                                },
                                                {
                                                    "name": "Common.swap(int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 4, int = 4) => int[] [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]",
                                                    "entryTime": 1699396565815,
                                                    "exitTime": 1699396565815,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "4"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "4"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "int[]",
                                                        "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.sort(int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 1, int = 3) => void",
                                                    "entryTime": 1699396565815,
                                                    "exitTime": 1699396565816,
                                                    "value": 8,
                                                    "arguments": [
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "3"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "void",
                                                        "value": ""
                                                    },
                                                    "children": [
                                                        {
                                                            "name": "InplaceQuickSort.getPivotAt(int = 3, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 3",
                                                            "entryTime": 1699396565815,
                                                            "exitTime": 1699396565815,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "3"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "3"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 3, int = 1, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 2",
                                                            "entryTime": 1699396565815,
                                                            "exitTime": 1699396565815,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "3"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "1"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "2"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 3, int = 3, int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 3",
                                                            "entryTime": 1699396565815,
                                                            "exitTime": 1699396565815,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "3"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "3"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "3"
                                                            }
                                                        },
                                                        {
                                                            "name": "Common.swap(int[] = [1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 2, int = 3) => int[] [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]",
                                                            "entryTime": 1699396565815,
                                                            "exitTime": 1699396565815,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 4, 3, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "2"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "3"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "int[]",
                                                                "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 1, int = 2) => void",
                                                            "entryTime": 1699396565815,
                                                            "exitTime": 1699396565816,
                                                            "value": 4,
                                                            "arguments": [
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "1"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "2"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "void",
                                                                "value": ""
                                                            },
                                                            "children": [
                                                                {
                                                                    "name": "InplaceQuickSort.getPivotAt(int = 2, int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 3",
                                                                    "entryTime": 1699396565816,
                                                                    "exitTime": 1699396565816,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int",
                                                                            "value": "2"
                                                                        },
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "Integer",
                                                                        "value": "3"
                                                                    }
                                                                },
                                                                {
                                                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 3, int = 1, int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 2",
                                                                    "entryTime": 1699396565816,
                                                                    "exitTime": 1699396565816,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int",
                                                                            "value": "3"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "1"
                                                                        },
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "Integer",
                                                                        "value": "2"
                                                                    }
                                                                },
                                                                {
                                                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 3, int = 2, int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 2",
                                                                    "entryTime": 1699396565816,
                                                                    "exitTime": 1699396565816,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int",
                                                                            "value": "3"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "2"
                                                                        },
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "Integer",
                                                                        "value": "2"
                                                                    }
                                                                },
                                                                {
                                                                    "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 2, int = 2) => int[] [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]",
                                                                    "entryTime": 1699396565816,
                                                                    "exitTime": 1699396565816,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "2"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "2"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "int[]",
                                                                        "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 6, int = 14) => void",
                            "entryTime": 1699396565816,
                            "exitTime": 1699396565820,
                            "value": 41,
                            "arguments": [
                                {
                                    "type": "int[]",
                                    "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                },
                                {
                                    "type": "int",
                                    "value": "6"
                                },
                                {
                                    "type": "int",
                                    "value": "14"
                                }
                            ],
                            "return": {
                                "type": "void",
                                "value": ""
                            },
                            "children": [
                                {
                                    "name": "InplaceQuickSort.getPivotAt(int = 14, int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 10",
                                    "entryTime": 1699396565816,
                                    "exitTime": 1699396565816,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "14"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "10"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 10, int = 6, int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 6",
                                    "entryTime": 1699396565816,
                                    "exitTime": 1699396565816,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int",
                                            "value": "6"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "6"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 10, int = 14, int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]) => Integer 14",
                                    "entryTime": 1699396565816,
                                    "exitTime": 1699396565816,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int",
                                            "value": "14"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "14"
                                    }
                                },
                                {
                                    "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10], int = 6, int = 14) => int[] [1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15]",
                                    "entryTime": 1699396565816,
                                    "exitTime": 1699396565816,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 15, 12, 8, 9, 11, 7, 14, 13, 10]"
                                        },
                                        {
                                            "type": "int",
                                            "value": "6"
                                        },
                                        {
                                            "type": "int",
                                            "value": "14"
                                        }
                                    ],
                                    "return": {
                                        "type": "int[]",
                                        "value": "[1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15]"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 10, int = 7, int[] = [1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15]) => Integer 7",
                                    "entryTime": 1699396565816,
                                    "exitTime": 1699396565816,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int",
                                            "value": "7"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "7"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 10, int = 13, int[] = [1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15]) => Integer 11",
                                    "entryTime": 1699396565816,
                                    "exitTime": 1699396565816,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int",
                                            "value": "13"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "11"
                                    }
                                },
                                {
                                    "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15], int = 7, int = 11) => int[] [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]",
                                    "entryTime": 1699396565817,
                                    "exitTime": 1699396565817,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 10, 12, 8, 9, 11, 7, 14, 13, 15]"
                                        },
                                        {
                                            "type": "int",
                                            "value": "7"
                                        },
                                        {
                                            "type": "int",
                                            "value": "11"
                                        }
                                    ],
                                    "return": {
                                        "type": "int[]",
                                        "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 10, int = 8, int[] = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]) => Integer 10",
                                    "entryTime": 1699396565817,
                                    "exitTime": 1699396565817,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int",
                                            "value": "8"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "10"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 10, int = 10, int[] = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]) => Integer 9",
                                    "entryTime": 1699396565817,
                                    "exitTime": 1699396565817,
                                    "value": 1,
                                    "arguments": [
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                        }
                                    ],
                                    "return": {
                                        "type": "Integer",
                                        "value": "9"
                                    }
                                },
                                {
                                    "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15], int = 6, int = 9) => void",
                                    "entryTime": 1699396565817,
                                    "exitTime": 1699396565818,
                                    "value": 16,
                                    "arguments": [
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                        },
                                        {
                                            "type": "int",
                                            "value": "6"
                                        },
                                        {
                                            "type": "int",
                                            "value": "9"
                                        }
                                    ],
                                    "return": {
                                        "type": "void",
                                        "value": ""
                                    },
                                    "children": [
                                        {
                                            "name": "InplaceQuickSort.getPivotAt(int = 9, int[] = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]) => Integer 9",
                                            "entryTime": 1699396565817,
                                            "exitTime": 1699396565817,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "9"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 9, int = 6, int[] = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]) => Integer 6",
                                            "entryTime": 1699396565817,
                                            "exitTime": 1699396565817,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "6"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "6"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 9, int = 9, int[] = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]) => Integer 9",
                                            "entryTime": 1699396565817,
                                            "exitTime": 1699396565817,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "9"
                                            }
                                        },
                                        {
                                            "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15], int = 6, int = 9) => int[] [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]",
                                            "entryTime": 1699396565817,
                                            "exitTime": 1699396565817,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 11, 12, 14, 13, 15]"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "6"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "9"
                                                }
                                            ],
                                            "return": {
                                                "type": "int[]",
                                                "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 9, int = 7, int[] = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]) => Integer 9",
                                            "entryTime": 1699396565817,
                                            "exitTime": 1699396565817,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "7"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "9"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 9, int = 8, int[] = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]) => Integer 8",
                                            "entryTime": 1699396565817,
                                            "exitTime": 1699396565817,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "8"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "8"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15], int = 6, int = 8) => void",
                                            "entryTime": 1699396565817,
                                            "exitTime": 1699396565818,
                                            "value": 10,
                                            "arguments": [
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "6"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "8"
                                                }
                                            ],
                                            "return": {
                                                "type": "void",
                                                "value": ""
                                            },
                                            "children": [
                                                {
                                                    "name": "InplaceQuickSort.getPivotAt(int = 8, int[] = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]) => Integer 8",
                                                    "entryTime": 1699396565817,
                                                    "exitTime": 1699396565817,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "8"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "8"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 8, int = 6, int[] = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]) => Integer 6",
                                                    "entryTime": 1699396565817,
                                                    "exitTime": 1699396565817,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "8"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "6"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "6"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 8, int = 8, int[] = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]) => Integer 8",
                                                    "entryTime": 1699396565817,
                                                    "exitTime": 1699396565817,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "8"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "8"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "8"
                                                    }
                                                },
                                                {
                                                    "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15], int = 6, int = 8) => int[] [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]",
                                                    "entryTime": 1699396565818,
                                                    "exitTime": 1699396565818,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 9, 7, 8, 10, 11, 12, 14, 13, 15]"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "6"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "8"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "int[]",
                                                        "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 8, int = 7, int[] = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]) => Integer 8",
                                                    "entryTime": 1699396565818,
                                                    "exitTime": 1699396565818,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "8"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "7"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "8"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 8, int = 7, int[] = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]) => Integer 7",
                                                    "entryTime": 1699396565818,
                                                    "exitTime": 1699396565818,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "8"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "7"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "7"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15], int = 6, int = 7) => void",
                                                    "entryTime": 1699396565818,
                                                    "exitTime": 1699396565818,
                                                    "value": 4,
                                                    "arguments": [
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "6"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "7"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "void",
                                                        "value": ""
                                                    },
                                                    "children": [
                                                        {
                                                            "name": "InplaceQuickSort.getPivotAt(int = 7, int[] = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]) => Integer 7",
                                                            "entryTime": 1699396565818,
                                                            "exitTime": 1699396565818,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "7"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "7"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 7, int = 6, int[] = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]) => Integer 6",
                                                            "entryTime": 1699396565818,
                                                            "exitTime": 1699396565818,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "7"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "6"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "6"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 7, int = 7, int[] = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]) => Integer 7",
                                                            "entryTime": 1699396565818,
                                                            "exitTime": 1699396565818,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "7"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "7"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "7"
                                                            }
                                                        },
                                                        {
                                                            "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15], int = 6, int = 7) => int[] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]",
                                                            "entryTime": 1699396565818,
                                                            "exitTime": 1699396565818,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 14, 13, 15]"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "6"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "7"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "int[]",
                                                                "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15], int = 10, int = 14) => void",
                                    "entryTime": 1699396565818,
                                    "exitTime": 1699396565820,
                                    "value": 16,
                                    "arguments": [
                                        {
                                            "type": "int[]",
                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                        },
                                        {
                                            "type": "int",
                                            "value": "10"
                                        },
                                        {
                                            "type": "int",
                                            "value": "14"
                                        }
                                    ],
                                    "return": {
                                        "type": "void",
                                        "value": ""
                                    },
                                    "children": [
                                        {
                                            "name": "InplaceQuickSort.getPivotAt(int = 14, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]) => Integer 15",
                                            "entryTime": 1699396565818,
                                            "exitTime": 1699396565818,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "14"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "15"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 15, int = 10, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]) => Integer 14",
                                            "entryTime": 1699396565818,
                                            "exitTime": 1699396565818,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "15"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "10"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "14"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 15, int = 14, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]) => Integer 14",
                                            "entryTime": 1699396565818,
                                            "exitTime": 1699396565818,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int",
                                                    "value": "15"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "14"
                                                },
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                }
                                            ],
                                            "return": {
                                                "type": "Integer",
                                                "value": "14"
                                            }
                                        },
                                        {
                                            "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15], int = 14, int = 14) => int[] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]",
                                            "entryTime": 1699396565818,
                                            "exitTime": 1699396565818,
                                            "value": 1,
                                            "arguments": [
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "14"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "14"
                                                }
                                            ],
                                            "return": {
                                                "type": "int[]",
                                                "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                            }
                                        },
                                        {
                                            "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15], int = 10, int = 13) => void",
                                            "entryTime": 1699396565818,
                                            "exitTime": 1699396565820,
                                            "value": 12,
                                            "arguments": [
                                                {
                                                    "type": "int[]",
                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "10"
                                                },
                                                {
                                                    "type": "int",
                                                    "value": "13"
                                                }
                                            ],
                                            "return": {
                                                "type": "void",
                                                "value": ""
                                            },
                                            "children": [
                                                {
                                                    "name": "InplaceQuickSort.getPivotAt(int = 13, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]) => Integer 13",
                                                    "entryTime": 1699396565818,
                                                    "exitTime": 1699396565818,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "13"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "13"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 13, int = 10, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]) => Integer 12",
                                                    "entryTime": 1699396565818,
                                                    "exitTime": 1699396565818,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "13"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "10"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "12"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 13, int = 13, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]) => Integer 13",
                                                    "entryTime": 1699396565819,
                                                    "exitTime": 1699396565819,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int",
                                                            "value": "13"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "13"
                                                        },
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "Integer",
                                                        "value": "13"
                                                    }
                                                },
                                                {
                                                    "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15], int = 12, int = 13) => int[] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]",
                                                    "entryTime": 1699396565819,
                                                    "exitTime": 1699396565819,
                                                    "value": 1,
                                                    "arguments": [
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15]"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "12"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "13"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "int[]",
                                                        "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                    }
                                                },
                                                {
                                                    "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], int = 10, int = 12) => void",
                                                    "entryTime": 1699396565819,
                                                    "exitTime": 1699396565820,
                                                    "value": 8,
                                                    "arguments": [
                                                        {
                                                            "type": "int[]",
                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "10"
                                                        },
                                                        {
                                                            "type": "int",
                                                            "value": "12"
                                                        }
                                                    ],
                                                    "return": {
                                                        "type": "void",
                                                        "value": ""
                                                    },
                                                    "children": [
                                                        {
                                                            "name": "InplaceQuickSort.getPivotAt(int = 12, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) => Integer 13",
                                                            "entryTime": 1699396565819,
                                                            "exitTime": 1699396565819,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "12"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "13"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 13, int = 10, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) => Integer 12",
                                                            "entryTime": 1699396565819,
                                                            "exitTime": 1699396565819,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "13"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "10"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "12"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 13, int = 12, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) => Integer 12",
                                                            "entryTime": 1699396565819,
                                                            "exitTime": 1699396565819,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int",
                                                                    "value": "13"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "12"
                                                                },
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "Integer",
                                                                "value": "12"
                                                            }
                                                        },
                                                        {
                                                            "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], int = 12, int = 12) => int[] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]",
                                                            "entryTime": 1699396565819,
                                                            "exitTime": 1699396565819,
                                                            "value": 1,
                                                            "arguments": [
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "12"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "12"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "int[]",
                                                                "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                            }
                                                        },
                                                        {
                                                            "name": "InplaceQuickSort.sort(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], int = 10, int = 11) => void",
                                                            "entryTime": 1699396565820,
                                                            "exitTime": 1699396565820,
                                                            "value": 4,
                                                            "arguments": [
                                                                {
                                                                    "type": "int[]",
                                                                    "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "10"
                                                                },
                                                                {
                                                                    "type": "int",
                                                                    "value": "11"
                                                                }
                                                            ],
                                                            "return": {
                                                                "type": "void",
                                                                "value": ""
                                                            },
                                                            "children": [
                                                                {
                                                                    "name": "InplaceQuickSort.getPivotAt(int = 11, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) => Integer 12",
                                                                    "entryTime": 1699396565820,
                                                                    "exitTime": 1699396565820,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int",
                                                                            "value": "11"
                                                                        },
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "Integer",
                                                                        "value": "12"
                                                                    }
                                                                },
                                                                {
                                                                    "name": "InplaceQuickSort.findNextValueBiggerOrEqualThanPivotOnLeft(int = 12, int = 10, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) => Integer 11",
                                                                    "entryTime": 1699396565820,
                                                                    "exitTime": 1699396565820,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int",
                                                                            "value": "12"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "10"
                                                                        },
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "Integer",
                                                                        "value": "11"
                                                                    }
                                                                },
                                                                {
                                                                    "name": "InplaceQuickSort.findNextValueSmallerOrEqualThanPivotOnRight(int = 12, int = 11, int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) => Integer 11",
                                                                    "entryTime": 1699396565820,
                                                                    "exitTime": 1699396565820,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int",
                                                                            "value": "12"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "11"
                                                                        },
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "Integer",
                                                                        "value": "11"
                                                                    }
                                                                },
                                                                {
                                                                    "name": "Common.swap(int[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], int = 11, int = 11) => int[] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]",
                                                                    "entryTime": 1699396565820,
                                                                    "exitTime": 1699396565820,
                                                                    "value": 1,
                                                                    "arguments": [
                                                                        {
                                                                            "type": "int[]",
                                                                            "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "11"
                                                                        },
                                                                        {
                                                                            "type": "int",
                                                                            "value": "11"
                                                                        }
                                                                    ],
                                                                    "return": {
                                                                        "type": "int[]",
                                                                        "value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}