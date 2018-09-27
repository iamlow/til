```sh
pip install mutagen
find . -iname "*.mp3" -execdir mid3iconv -e cp949 {} \;
```
