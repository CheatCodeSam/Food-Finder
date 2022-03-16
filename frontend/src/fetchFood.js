import { sampleSize } from "lodash-es"

const _listOfFood = [
    {
        title: "Gyoza",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/5ceR3nWnGCrSDG1pVdt_Aw/o.jpg",
        price: ["$8.95"],
        id: "c04a7fb0-f4fa-472c-8188-5a53143501d3",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Heart Attack",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/Hm33PVTGvAFpz4U5mKP6xA/o.jpg",
        price: ["$10.95"],
        id: "b9fe127f-44a7-4832-83ed-be386ed42a65",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Baked Mussel",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/ni5jkRzXZ7yKgv0mf6cyHg/o.jpg",
        price: ["$11.95"],
        id: "c17aec9f-1f01-4ea2-b216-cf6fa0508945",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Japanese Burrito",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/WXnB910vq_qWorsSOtCl1w/o.jpg",
        price: ["$12.95"],
        id: "b2e48b6c-b976-4f50-871e-0d65ea9c8e21",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Maui Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/7ypm6FClMBoKp_TfwZg5Xg/o.jpg",
        price: ["$15.95"],
        id: "93ed524a-02da-435a-b11c-5e54ff063faa",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Tomo Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/JfgU9mu6xtcR94kUAg9e0w/o.jpg",
        price: ["$17.95"],
        id: "d7fbc720-2e34-48de-8564-2f02f601712a",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Mexico Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/ZOELPiS9dCHuA-992qvGXw/o.jpg",
        price: ["$14.95"],
        id: "96c852e8-2f3e-4538-bd17-94a61009b7f6",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Spicy Rainbow Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/zRabIWaKN8RwZh2YOUpbnQ/o.jpg",
        price: ["$15.95"],
        id: "13b0ac36-0705-4eb2-8144-50f17a8af594",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Tiger Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/aA2JXl1Z_JoJsfIb9fXhhQ/o.jpg",
        price: ["$14.95"],
        id: "1f5fa7fb-7965-4a1c-a5e4-8da90d310bfd",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Energy Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/VT8GibEDbkBW0jFws3CbLg/o.jpg",
        price: ["$15.95"],
        id: "fe57c577-857d-4655-b6e7-37f7bddb528d",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Las Vegas Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/ehZBV7Ob3DOBLlRW5SIhkQ/o.jpg",
        price: ["$16.95"],
        id: "d5bb20c2-b94f-4d9c-bd80-e26f5caedbfa",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Dragon Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/GpqIU_7CERkJfcAUcU0oiQ/o.jpg",
        price: ["$15.95"],
        id: "6f5ee18a-4d94-4157-923e-6de04cbd21cb",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Popcorn Lobster Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/StvRE4sIxkF2oSxsZJzEXg/o.jpg",
        price: ["$17.95"],
        id: "f072f619-64e5-4a16-a32d-576f8d178fe1",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Space Needle Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/dM7q5TI_Qnwod5l8dMwbqA/o.jpg",
        price: ["$17.95"],
        id: "d8590fd3-f508-46aa-bd50-dfe7ed90bb4e",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Salmon On Fire",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/NXJ682tVZLQavoMznAVNLg/o.jpg",
        price: ["$15.95"],
        id: "6f8b2f1d-ab8f-402f-950c-db803d3c7632",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Baked Lobster Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/gd3d-U-9RhWh0VvcmdLe6A/o.jpg",
        price: ["$17.95"],
        id: "46402260-4990-40a7-9b20-b768fe2021ee",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Caterpillar Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/36Ad2SibUInyAevWwaOWgQ/o.jpg",
        price: ["$15.95"],
        id: "1fee21a8-cc12-496c-bd37-bcf014724bf7",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Dumb And Dumber Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/bn-o2-7M0-gdJ3OML-2bjg/o.jpg",
        price: ["$16.95"],
        id: "bd0afe8c-9656-4f0a-b00c-436d1c485af6",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Volcano Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/QZKbDWpsKNXj-ARgPCmu-w/o.jpg",
        price: ["$17.95"],
        id: "7f8dc03d-95ca-454d-8d58-4f0e8455d573",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Rice",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/V81_GGiOZuEo_biF95W_9Q/o.jpg",
        price: ["$2.50"],
        id: "ffe0f5f0-e02b-4ef4-9989-a0f42708ed81",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "Miso Soup",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/zxnvtLZyjd0w0vqVI6OMVg/o.jpg",
        price: ["$2.50"],
        id: "d696f1cf-82b7-49d5-b3e0-53af583c0b16",
        business: "Sushi Tomo",
        distance: 1873.635383146099,
    },
    {
        title: "6 Fried Wings",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/eAEdowp3XXWbwSf7hqBy_Q/o.jpg",
        price: ["$8.40"],
        id: "7a4c4d8a-fa29-4aee-8d9a-4b70ac54393f",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Popcorn Shrimp",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/BJCx7F4ceTCS7ZYyygxAbg/o.jpg",
        price: ["$11.00"],
        id: "e16d7e15-f3fd-46a3-9625-63d36e74c268",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "2 Famous Shrimp Tacos",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/w8HcuMvPk1wams-7HDb-gg/o.jpg",
        price: ["$11.00"],
        id: "496e87b4-fde6-40e2-a28b-821f53d56377",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Cajun Shrimp And Grits",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/FbywB07_mi72DLUWoAxkUw/o.jpg",
        price: ["$16.50"],
        id: "6a2314c5-7060-4d16-9075-a39d29accb53",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Shrimp Basket And Fries",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/W0r-ipIOW7BFhqKY0l18Iw/o.jpg",
        price: ["$13.00"],
        id: "e1d3c0fc-44d5-4842-8d3d-854f45569f90",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Shrimp N' Cajun Garlic Noodles",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/Fo5Xhzf-djDrS4FFp3I5jQ/o.jpg",
        price: ["$15.00"],
        id: "fff65687-5653-4e0a-952d-7f81fba202ec",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Cajun Shack Burger",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/yXHNuL8FoYTfUUCUJGMikw/o.jpg",
        price: ["$14.50"],
        id: "d751b431-1cfa-4a8e-b71f-f14c81f0751d",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Cajun Shrimp Po' Boy",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/O7tOF4t-zhsQA3i2tS3iKg/o.jpg",
        price: ["$13.00"],
        id: "96f982db-e3b9-481b-a04f-c420dff7dcaa",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Cajun Fries",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/4TxPAVTyTigsBumnGRl8CQ/o.jpg",
        price: ["$6.00"],
        id: "7b24f39b-00ac-411b-8136-fec67c8afbdb",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Mac And Cheese",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/2eft8FWCNlUWist-qLhJaA/o.jpg",
        price: ["$6.00"],
        id: "12b3955a-a7f0-49b9-8f70-28ff05463bec",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Lemonade Refresher",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/A0ZYgpccj6w67EmO5sB-_w/o.jpg",
        price: ["$5.00"],
        id: "9b78b3a9-3428-4841-b46c-d156215e1cbd",
        business: "Shrimp Shack Cajun Fusion - San Bernardino",
        distance: 648.9067622158169,
    },
    {
        title: "Edamame",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/149xoL4dtrcCFBTll1vhIQ/o.jpg",
        price: ["$7.50"],
        id: "8be04a25-d684-4c60-9dc7-7509d2bebcc0",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Shumai",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/y7BHMIc6-OpRkjobE2CMvg/o.jpg",
        price: ["$8.50"],
        id: "e238d9cc-0238-43ec-98ae-c21c1fb8ec0d",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Chicken Teriyaki",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/qzvlT1l-6TIY16QMO5AbWw/o.jpg",
        price: ["$12.50"],
        id: "275e04ee-e3e5-42bc-8aab-f585ded92bd8",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Golden Tiger Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/Z5Hk8ZtOhFBxhONYm6zWfg/o.jpg",
        price: ["$16.95"],
        id: "74217c5d-d84b-4879-8ed3-787db7c03d0f",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Crispy Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/0MB8yZTwQ97aPNW7sajWhQ/o.jpg",
        price: ["$13.95"],
        id: "3c89e0d3-5a11-46cc-bf35-f600478ace71",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Miami Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/8yXALBOkGauouM0riPRZWg/o.jpg",
        price: ["$16.95"],
        id: "b9920b45-9431-452e-abbd-0eb1311bf7bf",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Spider Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/pKIfbmw0lZZ_U2_TGH1Cqg/o.jpg",
        price: ["$15.95"],
        id: "04e72e41-ada8-436c-a67c-831a8951e34a",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "4 Piece Humming Bird Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/AKLNcR0nBN1pGALkJ9wBhg/o.jpg",
        price: ["$10.95"],
        id: "86003a51-c0ae-4764-95c6-744a46d358a6",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Golden Spicy Tuna Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/V8LWBlj8XdZVoyqEx-u_ag/o.jpg",
        price: ["$14.95"],
        id: "965ece2a-5058-4d32-9b7d-5f3e7a69a1c1",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Ricky Bobby Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/5WZXaLTik7Tmq6NlRjZMFQ/o.jpg",
        price: ["$17.95"],
        id: "6e8e28cc-2a26-407d-ac2f-5a1e93f06e10",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Seared Albacore Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/1rJaAph7mWR3IWwU_5xA9w/o.jpg",
        price: ["$15.95"],
        id: "6a8d63a2-7650-4e7a-a3f5-470ab10d5a68",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Crazy Salmon Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/xyDGqMz0rJh6lceK5CPfkQ/o.jpg",
        price: ["$16.95"],
        id: "8ab35beb-3d66-44e6-a0e7-f113eb6e972b",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Aloha Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/gb4Wpww68rVjn_tS9-F2Hw/o.jpg",
        price: ["$17.95"],
        id: "cb2eac4b-115b-475e-8771-bbe44034cfdf",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Nami Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/4ATSI1dH0FRVdeRUe9jJxg/o.jpg",
        price: ["$18.95"],
        id: "78ad3780-d253-47e1-930f-49d78d8d8d35",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Xxx Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/Sz0yVAkbTuIdat5VtFSU2w/o.jpg",
        price: ["$15.95"],
        id: "6a7fae74-8a39-480a-95c0-947a51e7fba2",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Papa Smurf Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/dgNIglLg1ClXKX1L1kvq7g/o.jpg",
        price: ["$15.95"],
        id: "256f182b-660d-4355-8ef2-fd0275fe5f67",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "I Love Salmon Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/7kZcupqGJ6vuznttvDWMSQ/o.jpg",
        price: ["$15.95"],
        id: "b69450d2-06f1-40a6-bbab-f97a49246331",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Miyagi Special Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/8Q6LwPQTfJMHPuxCGPN-gQ/o.jpg",
        price: ["$15.95"],
        id: "ec2ff6d6-9b88-4a9e-854b-028ae61d7054",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Baseline Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/pN7_vgn3DY7M1azoTzQhrg/o.jpg",
        price: ["$16.95"],
        id: "1b5163ce-adfd-47e8-98cf-fcf055ff90ad",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Alaska Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/qtQPlJIo5TR7QA6Az5SjKw/o.jpg",
        price: ["$13.95"],
        id: "1c749519-d28c-472e-b43d-eb993e0e4ce8",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Dragon Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/QbtKmppLQURgwY2UP3zNLw/o.jpg",
        price: ["$13.95"],
        id: "ea2bde39-535a-4b05-b1c8-520b378eecc2",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Gangster Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/AZrUagidITE5hemdVBm4NQ/o.jpg",
        price: ["$13.95"],
        id: "f26af55a-d5c1-423e-9b95-316f623ede07",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Hawaiian Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/qGv9fDwu4PX1V_fmUIGiwA/o.jpg",
        price: ["$13.95"],
        id: "16801b43-a6dc-4632-9754-0c4161dfdbc5",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Las Vegas Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/nVc6-QpmARBa4Ka8VbWaOg/o.jpg",
        price: ["$15.95"],
        id: "e5503e90-45eb-4e35-8471-38a7f81a0d36",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Philadelphia Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/e3QsLswcLz6KUGsHW3ffjw/o.jpg",
        price: ["$14.95"],
        id: "ab19d2fd-f2ae-4cc4-9dee-4b59301e2a0c",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Rainbow Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/qk3Orsu2bYz_zv4Ol21BgA/o.jpg",
        price: ["$13.95"],
        id: "a87ad2ef-1a08-47e4-8af6-aeb3b9a55662",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Samurai Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/eDxkhX08nnHn96lJAY0AoA/o.jpg",
        price: ["$14.95"],
        id: "34789496-d455-4191-853a-6a0bebf1504c",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Shrimp Tempura Roll(Crunch Roll)",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/tPcIJoxD7Gg8B2nTTjbBew/o.jpg",
        price: ["$11.95"],
        id: "c3cb6c1b-7459-4a94-855c-ec5d72ef4c60",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Tiger Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/vP38iA2qxbB394XznHpUCg/o.jpg",
        price: ["$14.95"],
        id: "e29c6ce8-74b6-4098-b2f4-0c94a6b3e579",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Vegetable Tempura Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/NM1yP5z5abcEnBztj42fkQ/o.jpg",
        price: ["$9.95"],
        id: "a5095e7b-443b-44cb-9f0b-df77d2fee026",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Dynamite Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/FBVsyoRiOZW6jEQyxJnqwg/o.jpg",
        price: ["$12.95"],
        id: "a7e47e76-6938-43c0-acb8-f2a8b7e0618c",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Pizza Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/aVs_diMf1wVPbbrD0A4kug/o.jpg",
        price: ["$13.95"],
        id: "6fd085ac-4a62-4774-bdf1-d62a35bfa780",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "California Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/s7im3u7zbd6xfDkOZBEaDA/o.jpg",
        price: ["$6.95"],
        id: "529b0a21-5f3a-4979-91c5-497f535a13b0",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Scallop Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/lK_rJXXEx-3L6vPNroHT8A/o.jpg",
        price: ["$11.95"],
        id: "f6de178b-6ac2-44ae-9b50-a369b2004d46",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Cucumber Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/WTH-GTdczEZv_MRG9ShSUA/o.jpg",
        price: ["$7.95"],
        id: "f4d34fa8-229e-4044-a9d1-2eca75e18980",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Mexican Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/cA5HPagdp5_6749JVJLrBQ/o.jpg",
        price: ["$9.59"],
        id: "d16a4df6-22da-4516-b516-5fe320231ed9",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Salmon Skin Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/5bHwxgefvJpdHsl22wlqSQ/o.jpg",
        price: ["$7.95"],
        id: "734a933d-92b6-46b6-aadb-edb35a9b64c3",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Spicy Tuna Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/ntL1Z1BKioK8aY3voO0hzQ/o.jpg",
        price: ["$7.95"],
        id: "6c0d1509-f634-43c9-a1ae-3af1de429bcc",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Shrimp Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/WKSOA2fXkg4pWmXMeahdAQ/o.jpg",
        price: ["$10.95"],
        id: "c3b02807-b7fe-4ae4-b3a6-49afa289caa9",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Vegetable Roll",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/Gq-CrzeywpoJzxZLNBPlRw/o.jpg",
        price: ["$9.95"],
        id: "d7dfd56e-c1d4-4191-8515-1679c9227fe1",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Albacore Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/nwNm7Mv0ZEzVPX78R4D4yg/o.jpg",
        price: ["$7.95"],
        id: "6e804ccb-a45b-40aa-963d-bd88d18b3695",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Imitation Crab Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/sFs2S0MxgAlCjq0fy7ZYNA/o.jpg",
        price: ["$6.95"],
        id: "5537692c-2cc4-41d3-b6b8-79e9fc3303d3",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "F.W.Eel Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/sFs2S0MxgAlCjq0fy7ZYNA/o.jpg",
        price: ["$7.95"],
        id: "42ba72bb-da7e-4bd5-a044-715e0e6c000b",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Mackerel Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/H-sZOKJ17vhPIUCScXYxyQ/o.jpg",
        price: ["$7.25"],
        id: "9e214e6b-ca4c-430e-81c2-e4763bf68fdc",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Salmon Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/emMUh453R2C__WzWpV_5iA/o.jpg",
        price: ["$7.25"],
        id: "36e927f8-ff12-45fb-bf88-337b8921ef4c",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Tuna Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/oF6lQxtzmkO8txEAah6jTQ/o.jpg",
        price: ["$7.95"],
        id: "613af9eb-5fe6-4b10-8602-15d81ec14068",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Seared Escolar Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/jJmNgxoI08Ne11YtTqdfuA/o.jpg",
        price: ["$7.95"],
        id: "da22add6-9339-42f0-a8ff-86e2a688a2f7",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Yellowtail Sushi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/-4uCcl-U234g7aL1ZfNzJw/o.jpg",
        price: ["$8.25"],
        id: "48d7660a-8392-42f3-8b25-bef0768e380b",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Tim",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/osKXkvV3npBt1AgRuiilcw/o.jpg",
        price: ["$10.25"],
        id: "0df5beaf-03ee-4273-8c19-57d214e38998",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Octopus Sashimi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/i3lhA-ycw6okeNaZ25AuyQ/o.jpg",
        price: ["$20.95"],
        id: "0a45b2cc-a71a-4683-95bf-44a3465349b5",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Yellowtail Sashimi",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/zOITnj7eg517LKpKWxW8uw/o.jpg",
        price: ["$20.95"],
        id: "5f134b6f-d9e1-40ab-8155-fed8295f7370",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Seaweed Salad",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/vZ5Il9RgSmu4z4JzB9k6lg/o.jpg",
        price: ["$11.95"],
        id: "c31373bc-4900-4add-a822-77b735fea3b2",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Cucumber Salad",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/H-sZOKJ17vhPIUCScXYxyQ/o.jpg",
        price: ["$5.95"],
        id: "3ba0d2ca-1a75-4da3-86ef-270263729d84",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Udon",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/0uJxMHzf4FdH54jX4r0nAQ/o.jpg",
        price: ["$11.95"],
        id: "12415e43-7f1f-43b7-9e15-ac8686597079",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Tempura Udon",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/mplAb4zNr5Y5LR5FXYlWjQ/o.jpg",
        price: ["$13.95"],
        id: "c1f2e16a-9391-4ed0-9c48-c352f68aeb01",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Miso Soup",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/VtHnWFa1PO_5GvpK7TBqDQ/o.jpg",
        price: ["$1.95"],
        id: "a68e429b-89ee-4837-9bc2-541f1cc6f3f8",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Steamed Rice",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/3cZCw_O8IV31WyFq2I0vrQ/o.jpg",
        price: ["$2.95"],
        id: "b1d9ad3e-64e8-46c2-82c8-a85e0f54d3db",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Ice Cream",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/mhC3i0AIHg9lNmQJawSr8Q/o.jpg",
        price: ["$3.95"],
        id: "2002cdc3-6bf7-45ef-aaa8-266cae25fc40",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Mochi Ice Cream",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/_Zzi54UN7Lnjzt7ukKW4Nw/o.jpg",
        price: ["$4.50"],
        id: "b89a333d-f6df-4c04-ab1e-f1f5aeb44d8c",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
    {
        title: "Ice Tea",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/bigM2gu7QiGWk1mIqz-qrQ/o.jpg",
        price: ["$2.95"],
        id: "5acec33a-231e-4770-8de7-8fe4cbc7543d",
        business: "Miyagi Sushi",
        distance: 7588.634025958019,
    },
]
const fetchFood = () => {
    const randomFoodItems = sampleSize(_listOfFood, 10)
    return new Promise((resolve) => {
        setTimeout(() => resolve(randomFoodItems), 3000)
    })
}

export default fetchFood
