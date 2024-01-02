'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d6ce474bcacad144bd31056836df3468",
"index.html": "0a2f263a1e02fccc7a84ed84e9e14cfd",
"/": "0a2f263a1e02fccc7a84ed84e9e14cfd",
"main.dart.js": "801b8e27bf7b8dc0ab05ba3ae6d14040",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7bd2dfeb0481482fa14d06f7e6e8d9ae",
".git/config": "54fce1e61897a48caeedfde854be0407",
".git/objects/95/64c76e4eade48387f9341480337d223e743805": "baf7c9081dd9af77b20d86c5a593140c",
".git/objects/95/e4be44b5c76841f27742fbf1864c94c15706d5": "ff1760ae1fc37673747e93d4bcfdf752",
".git/objects/66/7f1905e1939ad2dd19551273ce31c77676a955": "2cbead4fdea737537281e59043f9ab3e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/56/8fe9f90ddeba664ca517e58f0cfc253b6f3cdf": "aa925422d902f07f31041dd4e40fcd05",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/34/b19dd3099f8d35a017d1732805c9e3108ea5d3": "988032d2e2a8790b4909d640b029325b",
".git/objects/9c/22308d7ab50dbeda08e9e28d5ab36cf4bbe690": "4b137783bca653217805ee2fd5c6d22d",
".git/objects/b5/1b2467cc87f0de271d7203ed11fed5f143eee2": "c3e73d4737543fff5b242719fdfad9ed",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/7c85a05b32caf79bf2f4cdf8d904b8cd8ba30a": "52f0c9757cf7080fe5d4e327c882671c",
".git/objects/f3/ff72aa0c5eefe9211fbd6b19a464253f05872a": "52e8a46d4cba20bcfbe61376380fa080",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/df45fcfd53544d895786de1c7b457eb0550114": "e1cd74a3988d914a64feca1f7a243d42",
".git/objects/c9/9eb8e9f67a0ec7504c529cd77c0f7fd0296a39": "960927f51eca1939c3919ef5c666e690",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/29/9e73edb37e573a9e5e3f3c451d3c9c1a0ba208": "3bc44dd86190431df4b6ded4f0930183",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/524723583204141f6c72a28db9c704f8310550": "3f5755cf8af25af1509aa44bd94d9278",
".git/objects/6e/eb93f6f79ee566421c14a5ce957f7a8f3969ab": "50a40254a96301b6032104ed5f1de56f",
".git/objects/5c/6668b6c7c44e8869c617a560fbe1ab7e509935": "7ad1c14d11f6ae2705138321f51d5a80",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/1ceb6dacb6a4042752fcbd88433dcc14ad4c1d": "62aec813f83b8390523485441ffd7e2f",
".git/objects/64/e62b263bb6df131e7a53ceb3d274f193b84ebe": "a12d9665ea229f20a506408aed87c069",
".git/objects/90/bafcdfd5ab8e0b7b4e84bd35d28c53086250ad": "dfeca1241a380852caeae4446604db9a",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a0/846e48a434d0ba2c9cbd5ef54c63bdf99108ec": "cacf57c3e15d3dfbb55f6a3a8e4d0c48",
".git/objects/b6/cb48732844f4d99b52243cc346e2b33af7b9ee": "c65f6eca9ec27e26337e218f233ccb3b",
".git/objects/a9/b7f0e521b40fc0e13be417f65ed392438b9c43": "d0516c079151d60d9a510e15939eef12",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/b26e3587ec841c9fc0fb0d6fbbd26f23110f02": "2d9d7b6b7086f81d4ca22306d740c13f",
".git/objects/a6/08ee9e1fd709f15e8c21688a1437dc449af0b0": "2716d5c4a45c5f05e0956bdadb2148a5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8a45a7b58c9bfce41c63048809e13a28433122": "ec44411e121ab317746c1cf6c9e48221",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/cb/c86d4b5a3a774cdbe4c9cb680eaffbadd2cc1a": "349232f9877843972a9aa280759494b4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/23/8b4184cad127e62b141ea33d5a60708c716b10": "f50ff388bfd9fe2bc243d84f4b38a830",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/70ed1b8d12a0c6ecdd324e233893f461698d94": "08af79033eae3c8232e36e3b35576972",
".git/objects/15/797ea266f5dfd37bda283483de4dd6de13f2cb": "f29b7264e32336299a711df358226bbf",
".git/objects/82/7b1ce472fc66692a7748f3a06c17d41df8964f": "8af688b591aa30b827fcf45575a101c1",
".git/objects/49/e9c4bf81598c5f9a847215f0580297b67912e4": "6f84334cd0cf35f163efb8b42c528944",
".git/objects/40/ef20c4647b90192efd842b13f2e68a73b2c558": "1bac8c0d7e7412ccc1ecd4eb4cd8ce77",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/5a11dbd681ccd4251b0ca962d774aafbc3aab4": "b6e9ead14b2bd1a02fb1160329bbe10f",
".git/objects/8b/56721a0a240590ff6f351f04be5a2c4ddade3f": "d698bcf42367744c0ae3aea2b4aac3c5",
".git/objects/8b/f97b75c9a51dde852982728b201b2b578f95c4": "f37e0e3f8a9627409f73436bc2186a12",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb9fec675a19fed428d15b97e04b60b4",
".git/logs/refs/heads/main": "4d52327704792dc01f7bdecb53e484b8",
".git/logs/refs/remotes/origin/main": "72c223cca2e9c8558290e0b4249a9d9d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "677d2f61f72c46e26c7c0f980131b4b0",
".git/refs/remotes/origin/main": "677d2f61f72c46e26c7c0f980131b4b0",
".git/index": "29918686448b6b03ec54818a11006475",
".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "226abf050e2b2096e92303ca99b7beac",
"assets/NOTICES": "a2a3573c37e0f2ac2922b14d0de3b7e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "44818596592486c815c4a114db014f87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "fc931466f19a2c36be8f54b393de9d71",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/imgs/add.png": "3b2d94dded7537ff61836acc8fb070ca",
"assets/assets/imgs/book.png": "d3f197a687e7be519c8643c2d789f140",
"assets/assets/imgs/scales.png": "8a9deed52b4673728acb743cd9e50eeb",
"assets/assets/imgs/ok.png": "7776d46c244bd210cd2126839ee730eb",
"assets/assets/imgs/x.png": "a965582ed5deb3a963c8e45782942f83",
"assets/assets/imgs/home.png": "47f5b6f60eeec8444d3f8d5906e1f6aa",
"assets/assets/imgs/person.png": "e910d651f06fb842e2a4c3bf9ce698de",
"assets/assets/imgs/persons.png": "f0c25e00e341acb64b2adbb781ba842c",
"assets/assets/imgs/config.png": "72259483d668a1ec4b919083ff887668",
"assets/assets/imgs/menu.png": "eb6cfe638e032fefe884fe24b9240818",
"assets/assets/imgs/arrowLeft.png": "8d379ab992c3cc2da42faacdeccab518",
"assets/assets/imgs/logo.png": "d2962686997d2095dabe20006ea240a6",
"assets/assets/imgs/manual.png": "3c948fa938554aaaefb0b47882c55411",
"assets/assets/imgs/car.png": "eb2f969f227d5836d501f64b4a7af29d",
"assets/assets/imgs/trash.png": "910de4cd87d532673b77384dfa38be22",
"assets/assets/imgs/truck.png": "3b3ed9e541df3cb4dc8217533aa2fd3b",
"assets/assets/imgs/printer.png": "358476550a2559ade66990941083186f",
"assets/assets/imgs/box.png": "8686e620128c33bc1110cead452a08f9",
"assets/assets/imgs/loading.png": "06da292523dc55c4180c68c296884fbb",
"assets/assets/imgs/save.png": "c3017ac2e45900764070533d59d3fae8",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
