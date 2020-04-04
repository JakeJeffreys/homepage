import urllib.request

for x in range(31):
    urllib.request.urlretrieve("https://picsum.photos/g/1600/800?random", f"../images/backgrounds/background{x}.jpg")
