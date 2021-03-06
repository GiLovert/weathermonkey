'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7df9ee303decd8ff9cd782fc9752af6f",
".git/config": "ec74159891b09a0fb69e0922c359d96b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a817f9dac0ca33b8f43f5df03f8722d1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "3c256fc70fffb5741d6130b998fc6fc4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "660b5ea288cf25f734269e8f77856035",
".git/logs/refs/heads/main": "95f2291aeb7d534ad521bb468c19d1ca",
".git/logs/refs/remotes/origin/main": "32073efd5775eba2e8e041ef8737bbce",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/16/4d30737444730cc35191a6340e54979ff0cd0c": "93a09b61a4a9892eecc910cfaddde4cd",
".git/objects/18/55f16aff7adba8033bffc5f5baafb47fff5db9": "7394c1ed5dc8a9f9d33ff9381045c52b",
".git/objects/1b/b705060534e62b22812352084d67655a190666": "186d51fb87bf7a3b3f81cac503414f3e",
".git/objects/1c/f76f23f030041dcc6b11a7b1b95b409aec98f6": "6f790d413c2f782e89486ccf920429b0",
".git/objects/24/f095a5e63656822ff9c610ab90cde4bc620d68": "da56e8e18558a2c0ab6ce1c36b43bca0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/a0b4eb8a995f6a0975ee6748f1c7abad98f2d1": "de9d98d55376b4ec47b8559fe61fb1de",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/38/d03d6b58688054c4e06063c9ea38a3de2a5299": "9b0d2d47ff31518ec65b8c175a05146c",
".git/objects/39/35e78d05e85ff4f4495969f5891982dfa06d87": "87271aabe618c406f245cc864742004f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/1a6b9bfd69a6540c69e1702ccca10487c1d4aa": "451c8db42e5e5eb1dd73062eaee3acd9",
".git/objects/4e/4e400581b49b3752a2a8cf9c19e5d339874936": "145c02924c2c8b4ead8497fcb7664ce0",
".git/objects/54/729efc903c16fca20ca5e882ae832bdd7e59f8": "d3f9f275faeaa8ed12fd93cb512e738d",
".git/objects/57/77ab34b7d409f288fa7d73fdaf5fd74264ade0": "e84afb2033e15a62b3af40d46c200f4d",
".git/objects/58/7ff1f8dce969901927f011136c303f9969b89f": "90b17a28300e71af976a9669c94c0655",
".git/objects/5a/d99d6af991548e06a9ed0c7b931b167d8e946c": "6cc74f8a6b892587705d0567e3321608",
".git/objects/5b/990dde50eea4ebdaaea88963371fdc5eb036f9": "d52318c58f474214b6760cba6ee76947",
".git/objects/5c/07d8546879e4019920806cf583a27a4702099d": "72ba9bc68bd62c0a4fdf03f8846fa7b9",
".git/objects/5f/73344af610855abd07110a4328eb27a61b84b3": "1212e91b9ba671ced0965b55a8012880",
".git/objects/5f/f6f10d48093d1a143739365cd413f872133d9d": "906cf405d509e2e7da9c690757065c0a",
".git/objects/65/e19b084ed8bde4c83d7d3c4bb4fc292b89511b": "3945951238c3a24ccd5fd9f76bc5903c",
".git/objects/66/d8a692d229b081ce102079aacd6f82e1e006d5": "6e0ee681947c63ebb36f65187e81bd95",
".git/objects/67/7048423e2fd50d4d098d49fc97446e728eb9f1": "831fc3c5a8854887027aa5ee83637ebf",
".git/objects/6b/2a03ed1c15d1b9136fb96250dc3461af1a6f0d": "5b283773a51cb9d3c716aa550c741f04",
".git/objects/6e/6e1e15653ff166421ada7ef66fa5b1789db948": "4870caa3dfca064e3404ae0c9249c4e2",
".git/objects/6f/c76a4c1f36b3e561bfac0b8caf6aa5eaca7dd8": "6fff4b10ed2a544742a763367de3e1fb",
".git/objects/6f/c7fb5f22a5bf9ef2d0b5e303a3abf0a3bd933d": "8bb7e8b43894c1ac89a12426899f4774",
".git/objects/6f/e2f8d986f9c0c1256cf3261230072bb15b9ea2": "5c69f4a410ed287bdf29cd20eb7478b2",
".git/objects/74/acaa07b4d56f956018d6e4a04e4c7175acb736": "e3c2ecc0b0a529905a801e99bfdaf334",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/578eea53b91b7051996a8f048165475077d4f5": "a113c3d0b198c365043e5658417240da",
".git/objects/81/86817c10bd4d76d7c4f999749b25f3c2081218": "460f21959dc09f13bcb0311f25183517",
".git/objects/85/602b0f3066c7a2f293c82b16a1c516c9c9f852": "72a96bc226cf7a40f939081e31d8dc85",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3f67d551851e36476f1e1e1950fd96c8f4fffe": "e3f85d10f0ea81cee6dbeb5b1a5c0d6d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0ccc19d684d4c313d91d1d4ad8a99227510472": "b2429f7dad3b54d11fda961ee8e93f84",
".git/objects/8e/8ecedf7aa856e947a932f348febe54850bb15c": "5eed1b238df3c1be545824375ad5deac",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/5a0f01d4e21dd27ab863881d3b8450d57a6935": "ad3116c9a0a16f15e07659e90a5631fb",
".git/objects/94/e49c45f50890949ee2a28532054098157ca0fb": "c536e5548197d1a2344c98091579ae91",
".git/objects/94/fe8a3d57a115712053baab24a7ff38935db0fa": "0c6f4cc656ebaad3b54cf8e47ba1c592",
".git/objects/97/e45d509c72bc2574da405592cd32273428c597": "76f69f76a3e1ae73761bca217a2fb8db",
".git/objects/98/72401e14c79946d655d924e5386d80b7766508": "d82b01e02654ec5a08363d92278add90",
".git/objects/98/a4c511789097f908658f3991eb5828c9070832": "c2faec57e5f69523df7ef981c22556ef",
".git/objects/9b/23dda1e9b531c398a7321e81c52bdc56326c2b": "e9ab1378118f290b04252efc71733a58",
".git/objects/9b/c708bd820186a56d2dc6f8771c740ec6b2161e": "159b3be8cabdb44c386cd4c836f16585",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/0540cd0bb102fd7630a8ea799e0724e7f78567": "4915fdc9b8bf516ec8c30e5a4ab268ec",
".git/objects/a0/bd3885e6fb177a7bb03916fea266461b3405d2": "420dd5f60e130bfcf16af65bf9a37559",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/6cfe0cd7a258d420de293a0c33d03129fc5f85": "0e6ec1e50b88019b1648161cbfa6863a",
".git/objects/a7/dd5d6bf17cbef616889c774da0f86ad0f3f173": "ddba2306851d22ce69bed70bd228fe3d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b5/171ef842e7f1bdf803d0aa4774e685943bd7eb": "44bfbae5295c0457adf69733f9592520",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/669b286f411a2d2cc70ebba72678f5e179436d": "be02676a1c91bc4b228ab4fd38da9283",
".git/objects/c0/e00fa391e392fbf0c36509303f00b17fa8c730": "7af57da792bd458e9ae1dc97515ebdf7",
".git/objects/c1/a1111fef4428d7ad1662a0a65ae2f5c1a68c9a": "88ec911c975918bcc24591b11bfb7bb4",
".git/objects/c4/8bc10d330e02248f78b4bbcdef88145bc480d1": "a50536e3b9001f0c47eedd1da752a4a8",
".git/objects/c6/ddcc41827d29b169f5e11cda23201cc336dbfc": "33f98292c530d0ee50f913555242e068",
".git/objects/c7/de7ce95922a9d94b196cb7e31f864c251283e5": "a6a84325345a6ac3245fb3de4a4d4b80",
".git/objects/c8/71d6fe0b6035371151668723a469bd79cefa13": "99b27507083ebcbe4b232c22e5cb7b2e",
".git/objects/d0/16338e63d1ae08bb9e19e17f9b236ccff7f5ab": "c892fdeaa46955a6a933d8bb20a9781a",
".git/objects/d0/2da252ffd930dc6b9c0c3c2a1702c4acca615a": "839b7bd939ed0404f22d607cb72cd311",
".git/objects/d4/f9777181b26c74949a9717f0a8209d22caf979": "2de7dbe36b7c14f897e2f3989b242bd9",
".git/objects/d5/b178ba58bdba8ecc49dbd0c130fea8aaecf547": "df67a5d6cf36d40f078a3376eff426e3",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ab6368a3ee02a8d62a1e7619c68e85e29f86d7": "5091b6210b199468b2ba75eece7fc70d",
".git/objects/d6/b77d6fe485403bb9ead0c6ea2019839d6be5af": "883bacd56da75df4de2590f038981ade",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/da/1997409b50fdc39e401a9784b541c795ada008": "38d850e1815c87974e65f78bd7944f69",
".git/objects/db/37423e2eff4ca18a8168df077e51ba4dfe2669": "2a8053460bf1f8e0cdfe75039cb97703",
".git/objects/df/b0aeddc67aab27c4cf19972319ff9239c3a558": "aae35facda4c7eefe7ce3d22653cab44",
".git/objects/e2/e607d2b2cfa16119f295f3371322eeb5070dd4": "d7a2847f9df72aae599eb4fcd41f8791",
".git/objects/e3/4e75057ff0561d098858d89ffdbb2dde98dbd6": "934a33137f6042708a40af6a2fc765bb",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/377f1b4975187e898c41c037a1636c7af87c68": "45948f83dc24a555ab1bab062ad71859",
".git/objects/e8/14735f97eb6ce6f244002182fdf92d6175ce35": "9de2b7f496c32870ae8fe1ad74ddab00",
".git/objects/e8/92e99094536f531d31ea5708868d12d327f2a3": "e169c45987c870c50f8015175c3a12c0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/7ad43f2bf4beaf8c042fd6d6673b415b1647f9": "e10b5138ef78e382bc425e99b54ac669",
".git/objects/f1/e0a2a14d7e475024d63e16205321a4a61f3fac": "77fa4ac4920a9b829b8d49c078db63c8",
".git/objects/f2/0766018652aaf5f4ea631d475c30b74b1f1e08": "3a2f04f4b3e1f86caa32fdedc9706564",
".git/objects/f4/bb2da3ed79c9e1688e60fdebe189e66393f0f4": "3db613f22e26174e9d91a7141b414680",
".git/objects/f9/3725ca5d09f2661f45262c468b921e1d3b63ec": "04901e3efb13595264189fe01550cafb",
".git/objects/f9/6a9e5bec147ded6b71ae414264282f1013f07a": "11cb7b5e9afb76a85ee55d46375b33a9",
".git/objects/fb/3e06bb989574a4714ac23f43af53bbd3602b41": "fc5f17c5083dbdd95c6cef60c18af4c8",
".git/ORIG_HEAD": "60e0a0e33f977e30bf2f7839187c8537",
".git/refs/heads/main": "53cc6931dc793308da80a406855b4592",
".git/refs/remotes/origin/main": "53cc6931dc793308da80a406855b4592",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1d8485d541cdfbe6ea1f660e39b69281",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.ico": "742788fb6e37e3d095b19436ab9f833b",
"icons/favicon.ico": "742788fb6e37e3d095b19436ab9f833b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71e16d4b2864067329b678c12dd72bcb",
"/": "71e16d4b2864067329b678c12dd72bcb",
"main.dart.js": "1d6b55117a39f9cdf8e583cdbfa94dd5",
"manifest.json": "f60493910c9fb1345c45482474763475",
"version.json": "d1d07fd61357967faee79ad0cec611ee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
