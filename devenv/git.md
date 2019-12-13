# Git 

## Submodule

### Add

```sh
git submodule add [url]
```

### Update

```sh
git submodule update --init
```

### Remove

```sh
git submodule deinit -f [submodule]
rm -rf .git/modules/[submodule]
git rm -f [submodule]
```
