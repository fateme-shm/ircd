'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "7c317d36a15cad462f15fa935c86c496",
"main.dart.js_197.part.js": "89a8f96547d47b1d2a316c5d01cd86c7",
"flutter_bootstrap.js": "7fcf4262c1a172df6662f1943b379aad",
"main.dart.js_79.part.js": "f1b671af64f1958511dce3f6fc9ba27f",
"main.dart.js_69.part.js": "fe92845361d5fea8e4f73fcc2e8b6f88",
"main.dart.js_101.part.js": "4811c87c85c638875ecf1450d7ed9265",
"main.dart.js_111.part.js": "c2b156c58a04369e23af59443200aa16",
"main.dart.js_24.part.js": "3b56b95716a951145569ba89cdc3f63f",
"main.dart.js_205.part.js": "54ac326f45db593e298eca2df1d42b93",
"main.dart.js_46.part.js": "11d5a921af89d234c9c468548cc64544",
"main.dart.js_163.part.js": "3171c516347819d90652807193547012",
"main.dart.js_173.part.js": "c6cb61bc1a766fe26a859524dede7416",
"main.dart.js_145.part.js": "cd5aec3eb4f8b5b1cf14347a8aaa7a71",
"main.dart.js_155.part.js": "0fdab439f0a4590a26c25b696595df5b",
"version.json": "c75e29535499f16b501bfef7f7ead00d",
"main.dart.js_60.part.js": "43b76143e72c3bfd0e760dca7f771c38",
"main.dart.js_70.part.js": "2277dab8aa68fc87d6f7be8a5225d767",
"main.dart.js_127.part.js": "8fa740233313e38ba27c6bab91f574d2",
"main.dart.js_137.part.js": "933d8f7dc44b97d62aa85606cccd8ccd",
"main.dart.js_84.part.js": "3bd93038d73118d43427f7d8ef77d0a0",
"main.dart.js_94.part.js": "718d32e0675506a2204c48383add0af7",
"main.dart.js_118.part.js": "6a0ce469eaac8112b6e920c23243ac41",
"main.dart.js_108.part.js": "f323f9b410cd2619336a408708ec34ad",
"main.dart.js_154.part.js": "d9cf038cbd47b8183fc47a9bd8c070a6",
"main.dart.js_144.part.js": "7d652cef06c4c0386f675a799216e7c9",
"main.dart.js_71.part.js": "8b1a962d5280cd8d88b0d3aa755ff62a",
"main.dart.js_6.part.js": "8dca0993ea171f3d5cfeb1a5af06f88a",
"index.html": "2524b01f498c3ea7792104e8d671bc52",
"/": "2524b01f498c3ea7792104e8d671bc52",
"main.dart.js_13.part.js": "7ae019c2af9654c6ee34d66c74aa0264",
"main.dart.js_136.part.js": "3da17b04f6d9ec8917dc445bacd3c52e",
"main.dart.js_126.part.js": "0149a10ee2c8bd7a97a4efac0463d01a",
"main.dart.js_95.part.js": "a02ce1830c86f63dd8e5557d9df33e42",
"main.dart.js_196.part.js": "3fdd9ad096298efdf33f236b720faee2",
"main.dart.js_186.part.js": "e156ab77a2b0e65b194763759ee57386",
"main.dart.js_68.part.js": "0be5c9cf196e53651acb1ea702e4ee61",
"main.dart.js_78.part.js": "bb4de93df49b9bd112216cb6f88e2184",
"main.dart.js_110.part.js": "00e4c28028585ff5da98654f389bdfed",
"main.dart.js_100.part.js": "b890e99b33782aee52e77b5da6906398",
"main.dart.js_35.part.js": "4821a9775bc4bf287b928a54b14655de",
"main.dart.js_25.part.js": "939904c0fc255e010b5cb679d58ffc82",
"main.dart.js_57.part.js": "51a72762cf174b695bbc5557e12c595c",
"main.dart.js_47.part.js": "83488162ff0ed4c87a98fdea328d54b4",
"main.dart.js_204.part.js": "bb334e355a51951ea66be5b8d1dc5d19",
"main.dart.js_172.part.js": "2abb8a7029869bc229732c2a3f4e47b6",
"main.dart.js_162.part.js": "e744fcbc4000601a1b6044d284465fdc",
"firebase-messaging-sw.js": "d031e67ed4f1dd1debb7fc5cec463194",
"main.dart.js_124.part.js": "98176ce50344ee90e58e4c4acb6e04f8",
"main.dart.js_134.part.js": "1e407b5c9218f80bcc19591d73a79b57",
"main.dart.js_11.part.js": "1ab044d97339b173f61c524f02cd5c1b",
"main.dart.js_4.part.js": "3b59f0ace3346fd4064bd2e836288755",
"main.dart.js_73.part.js": "db81ea0d0437807eab8bab6b6aa1e003",
"main.dart.js_146.part.js": "78463b3d09dd7ccd7b2ddcb9f1e9f0ff",
"main.dart.js_156.part.js": "5c04afdf709a45dba2c50e500996d42c",
"main.dart.js": "4f03e0a12bd66597a9ee6f0aea6af435",
"main.dart.js_87.part.js": "8ac58126f703751a1189d68f2cc2c5fb",
"main.dart.js_97.part.js": "a871fa867eb26a66f181e8ec011c169b",
"main.dart.js_179.part.js": "b6f4d1a508e31755e749f5565288bcce",
"main.dart.js_169.part.js": "5275cb14490363825209067b9d0984e3",
"main.dart.js_184.part.js": "32b917b796da5c971288c70021e4e217",
"main.dart.js_194.part.js": "15573a1e08841e0c941534a52c5ed44d",
"main.dart.js_18.part.js": "ba90c8bf0c23bdef60a6229ff4568574",
"main.dart.js_160.part.js": "74eb07bdf5bf1b1a014ca27fe395d75f",
"main.dart.js_170.part.js": "8d7966f070e87bcc03c7a4f15940e1e2",
"main.dart.js_45.part.js": "1d5771a8799e4d23d697dbd011bad278",
"main.dart.js_206.part.js": "1eea0b344484a5fa113a130e625dda28",
"main.dart.js_55.part.js": "0df9f320cb414cb664b2549f49e96e8a",
"main.dart.js_27.part.js": "34efc577a71ce7ea9697d517373b908d",
"main.dart.js_37.part.js": "7562a85eb75e295a5d88f288f6a69b9f",
"main.dart.js_102.part.js": "5d8612d136f58030fa4e5e6844c9d24c",
"main.dart.js_112.part.js": "8db3e3620bf8a70a39e171cc1492f11f",
"main.dart.js_19.part.js": "b7b469440bbf04810abd823fe1c31860",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_195.part.js": "f19bb0fb90f238bca309e2e54ab43c87",
"main.dart.js_185.part.js": "f58a8ec034f0d00f518b03fc67a3bac0",
"main.dart.js_171.part.js": "cbd8bcafec6b6467d159a1a5bfc9abf0",
"main.dart.js_161.part.js": "be322ab2c0a364e823b4b3a286adc247",
"main.dart.js_54.part.js": "621bc73ed85a465899db44ce3d2cd67a",
"main.dart.js_207.part.js": "efdfb7ac304cfffa43f73e56568d0238",
"main.dart.js_44.part.js": "cd151546891f9b3f04e1e8dede6c7831",
"main.dart.js_36.part.js": "c2990f1bb30f5cc80fa3694db6932ff0",
"main.dart.js_113.part.js": "be059c49ee0b6d99bc3ff3b9abb31b03",
"main.dart.js_103.part.js": "997688207ed6126a8f8b298796eeb7c4",
"main.dart.js_135.part.js": "7660f07d343e73663ef5c2b2f14175c1",
"main.dart.js_10.part.js": "d13e5eb4d666f2b4c7f4102322d67043",
"main.dart.js_72.part.js": "9ca06e86fe8a76a5b84a183fa31351bd",
"main.dart.js_5.part.js": "1e0f53fdb13480255c58b0bf0c2717a9",
"main.dart.js_62.part.js": "19da23103c656dd7c6ee56924d812b26",
"main.dart.js_157.part.js": "9906ee821ab6a4fc55b3b385138f761b",
"main.dart.js_147.part.js": "a6fcaa93b43762bdc651b0d38fccf985",
"main.dart.js_96.part.js": "39292e70c7cc9911dbeabb52f4a855b2",
"main.dart.js_86.part.js": "38ebf0c276b3ae84d46d9867ab54a0b7",
"main.dart.js_168.part.js": "7fb4cbb150547e1bbc9df61831e31b6e",
"main.dart.js_178.part.js": "f14af30b4889ba66b70754f98682b641",
"script/main-screen.js": "3d5bc5294be6af88d28077e8038df128",
"script/firebase/firebase-app-compat.js": "467d3d0962cc899d6a5fae5aa5772e12",
"script/firebase/firebase-messaging-compat.js": "4d70c7d8c0d7124238774ab7fb422f6f",
"script/load_app_translation.js": "f3bf758665683e98c610f6ddec661c30",
"script/app-translation.js": "77b3461538cb82aae23339a46a4315c4",
"script/web-engage.js": "2d9f3c7a1e1501a246889bb38f72995c",
"script/status-bar-color.js": "b32b9779cd6f0b22f1d1515075d0116a",
"main.dart.js_83.part.js": "bec38a322f2f49cc572ac17484338484",
"main.dart.js_58.part.js": "85b31eb31a15568d6497e1b0750c8c5d",
"main.dart.js_48.part.js": "10c0a2e31ebfe42d49ce7674a94dc79b",
"main.dart.js_15.part.js": "1f245d702f1cd386f6046a244f046acb",
"main.dart.js_120.part.js": "7114387d53c8a649535c6f20a85fec4f",
"main.dart.js_130.part.js": "0ef05a910875812e33072876d6a31d61",
"main.dart.js_199.part.js": "ccc6ed2a5ab7b797c1217aaea913967c",
"main.dart.js_189.part.js": "b31f67b398e908f605b04ba8bc6f1c46",
"main.dart.js_152.part.js": "da78378ac5fc6d77c8266946fb67b0af",
"main.dart.js_67.part.js": "2fddfba766322cce42214b8ff9774e6a",
"main.dart.js_77.part.js": "9ac09feb860be75ff79a38ca684546b2",
"favicon.png": "1a25d97f54f92d7b09943ad18b425163",
"main.dart.js_202.part.js": "2dc0630c521c45e590a0cde59b06dd4f",
"main.dart.js_41.part.js": "64830cf64bf2e73ebce8a53295802cd8",
"main.dart.js_164.part.js": "71af95c90ec87781aa853fcb70b3c9dc",
"main.dart.js_116.part.js": "e7829dbca25204bf53bc0d15991a855a",
"main.dart.js_23.part.js": "373f64aeb4b430333231f84df3ea1de1",
"main.dart.js_33.part.js": "95564db9ae918f2cfcb941b49ee52ff6",
"main.dart.js_9.part.js": "071e862c6f21a836b23b38dd1e2653e2",
"main.dart.js_139.part.js": "835017adef259be142bd2970a1013b07",
"main.dart.js_129.part.js": "13156425fac4a5ab0240cf05bde2bbf1",
"main.dart.js_180.part.js": "8d8af2aa4990a916e5bd87d14f5a7323",
"main.dart.js_190.part.js": "6348f9dd47453cea80422a1b0af72984",
"main.dart.js_40.part.js": "2b82df48eb492daa8361d4dcb2c6659e",
"main.dart.js_203.part.js": "5807d01a9b9c450c712e2867ed571f9c",
"main.dart.js_175.part.js": "3548569ed7ddb6f0c440141e0e674dce",
"main.dart.js_165.part.js": "5bff739090a24f7120dade0bffec6fc8",
"main.dart.js_117.part.js": "d8a6ce570c72ab2f7fadff1351168e0f",
"main.dart.js_107.part.js": "9fc313abddc4d7af65cb2483b7f3ffbe",
"main.dart.js_32.part.js": "171ba4f98a8664594fcc3bff77d74009",
"icons/icsearchlogo.svg": "36f35a5085eca998645c46a15374a609",
"icons/irc_logo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"icons/qrcode.png": "bd029fd3617d36c0ac34aaa83d3e9e44",
"icons/Icon-192.png": "a6be17a814215d094788718b440ed822",
"icons/Icon-maskable-192.png": "a6be17a814215d094788718b440ed822",
"icons/bazaar.svg": "43fbfde52a4be5337d03b76a48bd186e",
"icons/myket.svg": "e8a262ee05935988bcbbb568d385c50f",
"icons/google_play.svg": "7c0da843b1fc5c18d7dfff458181789c",
"icons/irx_notification_icon.png": "9ac13cab0f11ef8c4f00a07f9349c3bd",
"icons/Icon-maskable-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"icons/irc_notification_icon.png": "af47c737ec82f1066fbfaa8e4ecec61f",
"icons/Icon-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"main.dart.js_181.part.js": "014a2b868c134ce61f61e59036a5c4da",
"style.css": "371296e94d0469beabc2396c1cdfecd8",
"main.dart.js_128.part.js": "55b2596cd00f4b75d2bddb7cd87b3fd7",
"main.dart.js_138.part.js": "ac59e7b08139cf9748fdb83318424917",
"manifest.json": "3111d79515bb8fe8a491c8107602ddd6",
"main.dart.js_92.part.js": "cf4ed95119c5a223b43b239af7107874",
"main.dart.js_49.part.js": "b184bca276da375e430713361a0d4454",
"main.dart.js_59.part.js": "22da207e33f9c9bf8678ea9050f22991",
"main.dart.js_188.part.js": "25bc0b16e8ef39619bf54a1e7c8611d0",
"main.dart.js_198.part.js": "e64d9e96f0bb7d5f8bba29f2f666115d",
"main.dart.js_14.part.js": "954cf347a2434fdbb12285fed4b973f5",
"main.dart.js_131.part.js": "ebf034f01ca6a07fd47007131f3de0da",
"main.dart.js_121.part.js": "a8c73d27c54731f874c9ed312c79caff",
"main.dart.js_153.part.js": "d978c24b606d6f8fdee81bf3f68192c4",
"main.dart.js_66.part.js": "afe362615607a5ce2794cc5df7e91a3f",
"main.dart.js_1.part.js": "991e9a8c607ec21cb7d84c0ef7e8f5d9",
"main.dart.js_20.part.js": "d4dcd1a7bf204cc548039296857be287",
"main.dart.js_30.part.js": "6fa00479bf41178009bc9d8894555f87",
"main.dart.js_105.part.js": "7aac6fc161b26976a4ce27fc8392a62b",
"main.dart.js_89.part.js": "7f95ad28815a74790c872832ca97ca53",
"main.dart.js_167.part.js": "e6caa70866cbf32389d44d05acdf7527",
"main.dart.js_177.part.js": "e9fb2b9c60405c21a52356bf613c456a",
"main.dart.js_42.part.js": "3c0c98ddb590aac0c9b4d6929e9118e1",
"main.dart.js_201.part.js": "77ce07bb60f4057d88a1d308f2eda990",
"main.dart.js_183.part.js": "9a6d814ab62ffbb0cfc2b6dca131d920",
"main.dart.js_158.part.js": "545174a5f44ce567657455a7cfd185aa",
"main.dart.js_148.part.js": "f09e726b2a0efcfca67060e5fae09d25",
"main.dart.js_208.part.js": "f2080e67e3ebe09802cf871df36bd4a4",
"main.dart.js_39.part.js": "c61dcf9289fc83112f194dc9b5c551ac",
"main.dart.js_29.part.js": "4b439d916d6f93dda8bfe4e69d528528",
"main.dart.js_80.part.js": "240070aab02a38f25f481a0bc37b44f3",
"main.dart.js_90.part.js": "55dbb83d45449a54fb580611ff0ab98f",
"main.dart.js_64.part.js": "87ac02435848af2ed1193e28c6c59178",
"main.dart.js_3.part.js": "e5959028c70aec648b1b2574b42af0f7",
"main.dart.js_74.part.js": "d274e8c339647b403be971fc68a9c351",
"main.dart.js_141.part.js": "b17bec8b12ce99ab9603b1813e7ffcd3",
"main.dart.js_151.part.js": "399f35f954f86e9da081d68249854514",
"fonts/Estedad-Medium.svg": "9bf8092db7ad56745c36877fe5057c26",
"fonts/Estedad-Medium.woff": "770254b595a0041c27bcc7ccd258ab49",
"fonts/Estedad-Medium.eot": "512be8ffa330e50352c27289fee7c772",
"fonts/Estedad-Medium.woff2": "93ce551680f95aaabe97a034bad7f14b",
"fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"main.dart.js_123.part.js": "3ac64f4abf1565e5d264e0b477202ce3",
"main.dart.js_133.part.js": "9e2b4fdba87f2c8a100cef554a8e8535",
"main.dart.js_16.part.js": "715b51750c14cf6aafd9c4fd395932e5",
"assets/AssetManifest.json": "f0680400de378acfbdb5ba01e01f32d5",
"assets/NOTICES": "4bcf16e794dd5cb9b64a3d4abe8c8101",
"assets/pubspec.yaml": "a978d1b5ebb49fe838fa6fad11ba71cd",
"assets/FontManifest.json": "f80e794ee2b47ec834e8f656cfeaa72b",
"assets/AssetManifest.bin.json": "756e8cf52059f15569122071051019de",
"assets/android/app/build.gradle": "12dd5a796179a18b92bfa0defb0a99f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/dual_custom_date_picker/screenshots/single_date_picker.jpg": "666e6cf9371a70948b5ede76a7e88635",
"assets/packages/dual_custom_date_picker/screenshots/range_date_picker.jpg": "87326a21281ded78393d4b43d1683eb3",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/iranexchange/pubspec.yaml": "6a70359bc2cc369c4657d88510913bd6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/should_have_vpn.svg": "17bf80adf3cc6920b18408c8c7932c1d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_transactions_no_item.svg": "b01bdaff142699fa9383e2c45f70e437",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/play_circle.svg": "a72bf513ba48c877fcde790768270454",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/autho_clock.svg": "2060ba413a828e3c3c3e72908b19d50a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/emptytickets.svg": "e2f56c2ced12d7315f5a354bb3cacd66",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/autho_video.svg": "cdb43884f162d183c6027fe8aa91d4d6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/no_custodial_wallet_found.svg": "cb26adc686f176b60065e11b53102dc4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_header_up.svg": "29d3bfd9eba7dabcd72c4b4d360d2543",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/irc_logo.svg": "3f97cf6386a9983c4740e14d1197a7aa",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/failed_video_authorization_status.svg": "cdf0d3db74d18b2dc42f3aa2d91f961f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/customerclublogo.svg": "7f81bebd7761a99e3d01e402c870f210",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_2.svg": "5125da0dca3cfbfdf1a6fc203251fe95",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_3.svg": "ca8c454213ea9b30c24a06c9e34c13c5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_1.svg": "b8dbbd3d36d7640e1611f08f0de832b1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/shield-tick.svg": "f9239da9f3b47e2607679fdafeb9f3a1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/release_note.svg": "115e96e9e7808d243fd2f0c97ead0577",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/deposit_bitcoin_convert.svg": "d79f45939c1bf0af8841c5b23fb64171",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/bitcoin_convert.svg": "8cf30a546a63146d37f861e741326db2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/undraw_mobile_pay.svg": "e151927c9df86b95ee524bc0b5cf3e9f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/empty_crypto_wallet.svg": "5b22980380b28cd326af78dc19b15ab9",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro_bitcoin_convert.svg": "33bec6b299af320f74a8a735a939bcae",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_login.svg": "a7f75c2aa5942405bb6b86ac514298fe",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/empty_wallet_tick.svg": "f0b2f49366090282a08a49ddd0d04abc",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/close-circle.svg": "bd1235d5cfc0b26425d833d295bd28a0",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_profile_icon.svg": "3c03e6f6eeb35a720507f2409533bf5d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/video_authorization_status.svg": "08b843df244f3da7484b0ebf9265701a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet.svg": "dba74014d77565f4aa40d23f3ca3efee",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_success.svg": "f6daeb3f37a3ba9cfd2918cab770f435",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/update.svg": "09d48ee48e7c4cd0efe808a7b8018e4c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/launch_day_not_found.svg": "3e6681040e56ededbe823bc2d0da110f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_waiting.svg": "2daef954704d0b7bde440af6663e1663",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/info_circle.svg": "e44af0cc09c474765f679fcc594ee46c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/up_by_gateway_limit.svg": "853c6a6ba53d1c6dc9c294f26d68ca83",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/not_found.svg": "94fb008f692e1b0509b99ab71403bd6f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_fail.svg": "032db3533b37e0a1e955532cd2ba6145",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/create_referral_code.svg": "920a3571a2f526964aa7a000d2331c90",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/striped_background.svg": "9eb845b94c9ffe39a113b40cf9344b2f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/tick-circle.svg": "b9ad5983905e1526c6075fde385ae607",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/emptyorders.svg": "7dedbb8d6fcfef68ecf6ee308dc24023",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/autho_personal_card.svg": "9699fdb7648d0a4bc7906fb38a9d0f13",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/star.svg": "ccf2b2603251b40ffe312dbd870cf094",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/danger.svg": "5ac5ea61302be958ff767b323347549e",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/deposit_money.svg": "34a053cd994444f4291810a67fa639ac",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/gift_box.svg": "982052b1aab2f6a1e5cb3d39ebf73231",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/national_card_sample.svg": "5305ccd5bd4b76c48503e32797a6f9a6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/hour_support.svg": "32fbec8b778070881496add95a9a8fff",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/gift.svg": "e687103fd463d2646db6a2783a7390fc",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/profile.svg": "27416b2facaa25600730cfed1bd5808c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/user_tick.svg": "680d75f4aefca617cfc07dc3b6a56f1d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/security-safe.svg": "40d088a1ed5720e8f47f5708532294ca",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/irx_main_logo.svg": "dfd6c04e827724ca2cad0af893ef61c1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/lovely.svg": "53af5b63f06c786736bf5b109e78fbc1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/security_account.svg": "c75011199603fe196a8e35d7d629afa9",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/logo.svg": "c89f9c60174ce67ada7efc82e1611539",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/authorization_starter.svg": "510c5620d701377eeda7144584bc0b42",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee%2520Saderat.svg": "26a3901f863e25bab04b00f595897045",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Khavar%2520Mianeh.svg": "f465d2a1f613a5f0152768a03c2eba85",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Melli.svg": "5394613066e593aad6c1061f46e0dec6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Pasargad.svg": "e5783d441bc104704ef12463493be22d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sanat%2520Madan.svg": "1e1f8bc4f05adf75ce61c16f6e890620",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Shahr.svg": "919b153f3f4b007228bea0acdfeea178",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Keshavarzi.svg": "afb559dc0e4eeff88eaf6cd352df2be2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sepah.svg": "a045657670fb0b21ae4ed8514e501706",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Europe.svg": "7e85f63c67264f2794b206b0cf3085c6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Futurebank.svg": "35e37b42866ddcd4b77e652a770764a0",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Zamin.svg": "de9a881806444829e1aaf1cc96f1ff0a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Saman.svg": "d425d65150e2123a5b5a082c71ac8705",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Post.svg": "3ea0f7fbafc01ee9f0080ac53bf7251c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Maskan.svg": "c2df9814941c5bdb8a840cc776ac56a4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sina.svg": "49e37ff59ca8b740e3311a049d34a7a5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Bankino.svg": "d797cc31be7dbb532fe7643d0bab43c8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sepah%2520Merged.svg": "ba661639a4575c091f3908cc162951f8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Mehr%2520Iran.svg": "49d2409977c6f70c299b999550a47eee",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Resalat.svg": "a495ecf5f44e1f20ebc4f8ffa2904a42",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee%2520Taavon.svg": "deb2eb565389ba8823b830bc2ca76a93",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Ayandeh.svg": "92c8b0bc1192e2932de98ad6a5d7670d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Bank%2520Markazi.svg": "f181fa3895a629907bd3475845c1a804",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Caspian.svg": "c68f473c777f5fc13377a7b6d7f58135",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Noor.svg": "8083e7e1a3f22c9230948fb75a0c439f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Blu%2520Bank.svg": "9a7ed630219ee6a24bc307a366561629",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Eghtesad%2520Novin.svg": "1e33ccb3e743a89558d1c33ae15e94a8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Standard%2520Chartered.svg": "37206a527ba4998cf895e16e09e4fc58",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Saderat.svg": "83bcf79cf7f66067526c65cb4b854402",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Refah.svg": "46f7db2d6e855106c2268f3e3ac6a3f4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Venezuela.svg": "aebbec34e96d4475d41b186fe7494af8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Melall.svg": "ae847ccd46fcc1a64e9eb2cd03eb6f4c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Taavon%2520Eslami.svg": "5e6b8289919117a23d3a2bb19f950c6e",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Parsian.svg": "728b4f98771ab4df9697ba94575534b2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee.svg": "c18dd0a1fc1613dd25eed26ad776cd5f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tejarat.svg": "0e8a6ef1ccceed0f67905d9a8a2ce92b",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sarmayeh.svg": "60fb3e923ba1043bbab65ac67d6f447a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Mellat.svg": "2927c51db5179868def85da420b8d587",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Karafarin.svg": "280c0051134c51ebe51dd1954b011fd3",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Dey.svg": "3de9b6a7d5e23bf6e5458e9a407e53c5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Gardeshgari.svg": "179250ca80cac8ee2d7c2d35c652ce9b",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/danger_grey.svg": "7e1ed1a1c95a928cd0ca879283efe3dd",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/video_authorization.svg": "c6112bcd6a1abd3bc3f51a637c8ed085",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/landing.svg": "b5de2a89b1c5858bc49bf42bc3679a68",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/receive_gift.svg": "95d6507007ad5d68d0a6f8ed88689313",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_header_down.svg": "35f8a941a76963f280a390c30180ba17",
"assets/packages/iranexchange/iran_exchange_assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/packages/iranexchange/iran_exchange_assets/animations/landing_black.gif": "03307fcda403f4df94759b9f91287039",
"assets/packages/iranexchange/iran_exchange_assets/animations/irx_splash.json": "e5de14fe8858f08429dc2e60eda0d57c",
"assets/packages/iranexchange/iran_exchange_assets/animations/landing_white.gif": "00a9939f562fdbbf6293a721b73c4166",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6a7aadce9a661bc11431074ad8f8ea5f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svgs/should_have_vpn.svg": "17bf80adf3cc6920b18408c8c7932c1d",
"assets/assets/images/svgs/wallet_transactions_no_item.svg": "4bd74a41632ddff58ea30d9e44ff5dd9",
"assets/assets/images/svgs/emptyaddress.svg": "cf697910934a6e34091ddddefe2206f2",
"assets/assets/images/svgs/bag_fill.svg": "5d4eb6143d09fe84fcaed2310eddd75e",
"assets/assets/images/svgs/emptytickets.svg": "e2f56c2ced12d7315f5a354bb3cacd66",
"assets/assets/images/svgs/icsearchlogo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"assets/assets/images/svgs/amazon-dark.svg": "ce057e7d425a3a3003ee0895f1864b83",
"assets/assets/images/svgs/emptycryptowallet.svg": "5b22980380b28cd326af78dc19b15ab9",
"assets/assets/images/svgs/circle.svg": "1e9c7d6b0f68b86dae9b11398c3d894b",
"assets/assets/images/svgs/iran_exchange_solid_logo.svg": "b9c8319dbf7ef21857bfecbe557154bf",
"assets/assets/images/svgs/briefcase.svg": "01c9aee855e6c89e30518bf2274c99f7",
"assets/assets/images/svgs/customerclublogo.svg": "7f81bebd7761a99e3d01e402c870f210",
"assets/assets/images/svgs/messages_square.svg": "4e8a1f27cfa284e691a325bc7f476e7e",
"assets/assets/images/svgs/stock.svg": "be420e1f790970e35b5a0bd08e930a07",
"assets/assets/images/svgs/prefetchimage.svg": "e04d851a3ee3a4843f4ca5323a730223",
"assets/assets/images/svgs/release_note.svg": "115e96e9e7808d243fd2f0c97ead0577",
"assets/assets/images/svgs/undraw_mobile_pay.svg": "e151927c9df86b95ee524bc0b5cf3e9f",
"assets/assets/images/svgs/dashboardsites.svg": "10c88a3a621c33cd0ab07acebdc46bce",
"assets/assets/images/svgs/trash_square.svg": "7829493caa0136930db0129def648b5c",
"assets/assets/images/svgs/shopping-bag.svg": "c819124c275b099e27c4bd37d7ed44e4",
"assets/assets/images/svgs/ircmainlogo.svg": "3f00b1fa830aae39921952dce76bb5f9",
"assets/assets/images/svgs/operator_avatar.svg": "0698d95c8b044e9d4cd246bda658ec38",
"assets/assets/images/svgs/app_icon.svg": "ec327c57ef23791871e4c9bcd65f0ac7",
"assets/assets/images/svgs/foreground_banner.svg": "e4eff339921644a1b9d763e19928316d",
"assets/assets/images/svgs/empty_wallet_tick.svg": "f0b2f49366090282a08a49ddd0d04abc",
"assets/assets/images/svgs/game.svg": "94816832644db1a3858aceae8f4381c9",
"assets/assets/images/svgs/card-pos.svg": "67cb477e79fe36933ab01677b5392b38",
"assets/assets/images/svgs/crypto_out_of_stock.svg": "62ccb3212579badb8662e396e632ebf2",
"assets/assets/images/svgs/fb_desc_background.svg": "9eb845b94c9ffe39a113b40cf9344b2f",
"assets/assets/images/svgs/wallet.svg": "657b343409a7e76399dfa3fe3fc468fb",
"assets/assets/images/svgs/wallet_charge_success.svg": "f6daeb3f37a3ba9cfd2918cab770f435",
"assets/assets/images/svgs/update.svg": "09d48ee48e7c4cd0efe808a7b8018e4c",
"assets/assets/images/svgs/wallet_charge_waiting.svg": "2daef954704d0b7bde440af6663e1663",
"assets/assets/images/svgs/dashboardcrypto.svg": "26e9d6c3d93f5074eaf82bb054e4be8f",
"assets/assets/images/svgs/buy-crypto.svg": "f416c308cc0f968ebebf933376698653",
"assets/assets/images/svgs/searchprofile.svg": "60b5285ba1d8d911cfecc47c4996f2b6",
"assets/assets/images/svgs/irctitlelogo.svg": "fd1959faaa58081ca2655323669ee04d",
"assets/assets/images/svgs/calling.svg": "1949a652ed373539888890955b85e95d",
"assets/assets/images/svgs/scrollable_background_banner.svg": "e9b6185eeb4dc281ed5cf0af093dcfc7",
"assets/assets/images/svgs/irclogodark.svg": "31bbf0f6991e0423672bd8500353ff12",
"assets/assets/images/svgs/paliz_logo.svg": "6926c3b338d5f4115773a247ae4d0ff7",
"assets/assets/images/svgs/wallet-profile-icon.svg": "3c03e6f6eeb35a720507f2409533bf5d",
"assets/assets/images/svgs/up_by_gateway_limit.svg": "853c6a6ba53d1c6dc9c294f26d68ca83",
"assets/assets/images/svgs/not_found.svg": "94fb008f692e1b0509b99ab71403bd6f",
"assets/assets/images/svgs/bookmarks.svg": "f762dd9bb585aec8111074a35b928fe6",
"assets/assets/images/svgs/wallet_charge_fail.svg": "032db3533b37e0a1e955532cd2ba6145",
"assets/assets/images/svgs/create_referral_code.svg": "920a3571a2f526964aa7a000d2331c90",
"assets/assets/images/svgs/messages_bubble.svg": "263391cca13542a02ab837b20df387de",
"assets/assets/images/svgs/paypal.svg": "9d837bb4b78e8cbd9a15d427a4e8bd82",
"assets/assets/images/svgs/send.svg": "3ec7b7b9b63d9700c3461e79972a222c",
"assets/assets/images/svgs/crypto_stock_default.svg": "62ccb3212579badb8662e396e632ebf2",
"assets/assets/images/svgs/virtual_card.svg": "f9c34306dd21490db1f62845e889e97a",
"assets/assets/images/svgs/emptyorders.svg": "7dedbb8d6fcfef68ecf6ee308dc24023",
"assets/assets/images/svgs/dashboardincome.svg": "c45757ead30b35a2900c812fac84cc8a",
"assets/assets/images/svgs/irclogo.svg": "0d616d1a7441689f7116e5f7bdd6028d",
"assets/assets/images/svgs/bitcoin-card.svg": "492cc13ac97be882062d0ebf1c8dbc09",
"assets/assets/images/svgs/selected-crypto.svg": "31357a38e6e2cbea7faa21e80961a6c7",
"assets/assets/images/svgs/stock_unavailable.svg": "09697e346ac754c5786153e799fe2462",
"assets/assets/images/svgs/iran_exchange_logo.svg": "3261455fd65a797e5f6bdffcac2bb1cd",
"assets/assets/images/svgs/gift_box.svg": "982052b1aab2f6a1e5cb3d39ebf73231",
"assets/assets/images/svgs/headphone.svg": "64534581b092b1be6f3baf6c2f79e481",
"assets/assets/images/svgs/gift.svg": "e687103fd463d2646db6a2783a7390fc",
"assets/assets/images/svgs/irx_logo.svg": "de4386f7079f0be0d9ff9159b0644227",
"assets/assets/images/svgs/profile.svg": "7ad3c3f6766f9320d47b4b9584979d2a",
"assets/assets/images/svgs/user_tick.svg": "680d75f4aefca617cfc07dc3b6a56f1d",
"assets/assets/images/svgs/one_time_virtual_number.svg": "05248a9f039c1eee41a34cfd22c9d43a",
"assets/assets/images/svgs/buliding.svg": "7af70d856469d47c1500ae137ab0b701",
"assets/assets/images/svgs/banks/Tosee%2520Saderat.svg": "26a3901f863e25bab04b00f595897045",
"assets/assets/images/svgs/banks/Khavar%2520Mianeh.svg": "f465d2a1f613a5f0152768a03c2eba85",
"assets/assets/images/svgs/banks/Melli.svg": "5394613066e593aad6c1061f46e0dec6",
"assets/assets/images/svgs/banks/Pasargad.svg": "e5783d441bc104704ef12463493be22d",
"assets/assets/images/svgs/banks/Sanat%2520Madan.svg": "1e1f8bc4f05adf75ce61c16f6e890620",
"assets/assets/images/svgs/banks/Shahr.svg": "919b153f3f4b007228bea0acdfeea178",
"assets/assets/images/svgs/banks/Keshavarzi.svg": "afb559dc0e4eeff88eaf6cd352df2be2",
"assets/assets/images/svgs/banks/Sepah.svg": "a045657670fb0b21ae4ed8514e501706",
"assets/assets/images/svgs/banks/Iran%2520Europe.svg": "7e85f63c67264f2794b206b0cf3085c6",
"assets/assets/images/svgs/banks/Futurebank.svg": "35e37b42866ddcd4b77e652a770764a0",
"assets/assets/images/svgs/banks/Iran%2520Zamin.svg": "de9a881806444829e1aaf1cc96f1ff0a",
"assets/assets/images/svgs/banks/Saman.svg": "d425d65150e2123a5b5a082c71ac8705",
"assets/assets/images/svgs/banks/Post.svg": "3ea0f7fbafc01ee9f0080ac53bf7251c",
"assets/assets/images/svgs/banks/Maskan.svg": "c2df9814941c5bdb8a840cc776ac56a4",
"assets/assets/images/svgs/banks/Sina.svg": "49e37ff59ca8b740e3311a049d34a7a5",
"assets/assets/images/svgs/banks/Bankino.svg": "d797cc31be7dbb532fe7643d0bab43c8",
"assets/assets/images/svgs/banks/Sepah%2520Merged.svg": "ba661639a4575c091f3908cc162951f8",
"assets/assets/images/svgs/banks/Mehr%2520Iran.svg": "49d2409977c6f70c299b999550a47eee",
"assets/assets/images/svgs/banks/Resalat.svg": "a495ecf5f44e1f20ebc4f8ffa2904a42",
"assets/assets/images/svgs/banks/Tosee%2520Taavon.svg": "deb2eb565389ba8823b830bc2ca76a93",
"assets/assets/images/svgs/banks/Ayandeh.svg": "92c8b0bc1192e2932de98ad6a5d7670d",
"assets/assets/images/svgs/banks/Bank%2520Markazi.svg": "f181fa3895a629907bd3475845c1a804",
"assets/assets/images/svgs/banks/Caspian.svg": "c68f473c777f5fc13377a7b6d7f58135",
"assets/assets/images/svgs/banks/Noor.svg": "8083e7e1a3f22c9230948fb75a0c439f",
"assets/assets/images/svgs/banks/Blu%2520Bank.svg": "9a7ed630219ee6a24bc307a366561629",
"assets/assets/images/svgs/banks/Eghtesad%2520Novin.svg": "1e33ccb3e743a89558d1c33ae15e94a8",
"assets/assets/images/svgs/banks/Standard%2520Chartered.svg": "37206a527ba4998cf895e16e09e4fc58",
"assets/assets/images/svgs/banks/Saderat.svg": "83bcf79cf7f66067526c65cb4b854402",
"assets/assets/images/svgs/banks/Refah.svg": "46f7db2d6e855106c2268f3e3ac6a3f4",
"assets/assets/images/svgs/banks/Iran%2520Venezuela.svg": "aebbec34e96d4475d41b186fe7494af8",
"assets/assets/images/svgs/banks/Melall.svg": "ae847ccd46fcc1a64e9eb2cd03eb6f4c",
"assets/assets/images/svgs/banks/Taavon%2520Eslami.svg": "5e6b8289919117a23d3a2bb19f950c6e",
"assets/assets/images/svgs/banks/Parsian.svg": "728b4f98771ab4df9697ba94575534b2",
"assets/assets/images/svgs/banks/Tosee.svg": "c18dd0a1fc1613dd25eed26ad776cd5f",
"assets/assets/images/svgs/banks/Tejarat.svg": "0e8a6ef1ccceed0f67905d9a8a2ce92b",
"assets/assets/images/svgs/banks/Sarmayeh.svg": "60fb3e923ba1043bbab65ac67d6f447a",
"assets/assets/images/svgs/banks/Mellat.svg": "2927c51db5179868def85da420b8d587",
"assets/assets/images/svgs/banks/Karafarin.svg": "280c0051134c51ebe51dd1954b011fd3",
"assets/assets/images/svgs/banks/Dey.svg": "3de9b6a7d5e23bf6e5458e9a407e53c5",
"assets/assets/images/svgs/banks/Gardeshgari.svg": "179250ca80cac8ee2d7c2d35c652ce9b",
"assets/assets/images/svgs/bank_card_overlay.svg": "9e51fb565d0ad15980a80ac1348643ce",
"assets/assets/images/svgs/no_crypto_found.svg": "cb26adc686f176b60065e11b53102dc4",
"assets/assets/images/svgs/dashboardshopping.svg": "2f53ef165a3ad2c6d641d3ce75acd4dd",
"assets/assets/images/svgs/star_search.svg": "62c6582527f3e7d5a198be9993e5d63a",
"assets/assets/images/svgs/receive_gift.svg": "95d6507007ad5d68d0a6f8ed88689313",
"assets/assets/images/chat_bot_avatar.jpg": "7ff169986b1aa448148bc11c75076501",
"assets/assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/assets/animations/loading.json": "8204daf7b3cccadccfd00eedddefb56e",
"assets/assets/animations/text.json": "bf0d2b3bc8afe9c5eff21e5f28c60803",
"assets/assets/super_app/svgs/afrak_main_logo.svg": "1c362838199a8987be12a23deb97f4a2",
"assets/assets/super_app/svgs/paliz_company_main_logo.svg": "0df4195c9c2e3147c2813c64daf3296e",
"assets/assets/super_app/svgs/pateh_main_logo.svg": "a0a5a150aeb7918165cc810a0511d7e0",
"assets/assets/super_app/svgs/wallet_container_image.svg": "620b2f1daffeba9d3f2e507ef037f10d",
"assets/assets/super_app/svgs/shepa_main_logo.svg": "02ff9a078f00afdf368fd16c5899fc29",
"assets/assets/super_app/svgs/iranicard_main_logo.svg": "3f00b1fa830aae39921952dce76bb5f9",
"assets/assets/super_app/svgs/axha_main_logo.svg": "a6435a19cca866d86d0ee7c4000fed73",
"assets/assets/super_app/svgs/iranexchange_main_logo.svg": "c89f9c60174ce67ada7efc82e1611539",
"assets/assets/super_app/svgs/wallet_container.svg": "dd229c16dff415950de6ce141563c858",
"assets/assets/super_app/wallet_container.png": "7962122f3e596a81222bf626212f439d",
"assets/assets/super_app/main_slider_test.png": "4af1ec2e1be21188e90b15885fac3e0e",
"assets/assets/super_app/customer_club_banner.png": "e8e1753079d747d5c2bef021b1df3fe8",
"main.dart.js_91.part.js": "da98c4c3bc9809f89b74b37f4aa3d514",
"main.dart.js_81.part.js": "164c4867769203b56ddf5cc7cd9bf014",
"main.dart.js_28.part.js": "a94de98f64253d7c245f76e598e81e8a",
"main.dart.js_75.part.js": "796611df16717427e59448db5db283a6",
"main.dart.js_2.part.js": "1b78c36704cb1ac80ed10b9f03897549",
"main.dart.js_150.part.js": "a8d773e4ff2722ccdb3e1a3b173ac2ff",
"main.dart.js_132.part.js": "c4c47d5992dae27df2424ac959055d1e",
"main.dart.js_122.part.js": "ac1f749f87f04311f7f0eb2b15156211",
"main.dart.js_17.part.js": "6f5822f919e2051ea02c7866ff778143",
"main.dart.js_88.part.js": "3e1b83e82bb9faead5ae3f276d5e1626",
"main.dart.js_98.part.js": "27a1199ef19e5ba364d2e8109378e0f1",
"main.dart.js_31.part.js": "33c53336e6943bf189e9eea5a4d50ece",
"main.dart.js_104.part.js": "96cef5b03b828c6c092de1e7dae3695c",
"main.dart.js_166.part.js": "133b283c5abaf870e4032159154469ec",
"main.dart.js_200.part.js": "19a8cca5b684b865a30ee833f316d136",
"main.dart.js_43.part.js": "9e974f09ebac897269246a72c0f69bb1",
"main.dart.js_192.part.js": "567ceac3f96c15707409bbe35004f447",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"main.dart.js_149.part.js": "7de883ff920e50cd4b7f6407cfbc6908",
"main.dart.js_159.part.js": "ba531677248d145884f520009443470a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
