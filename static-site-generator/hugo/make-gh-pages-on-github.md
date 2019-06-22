# Github Project Pages

## How to install hugo

## Create a github repository

* Repository Name: artepiano

## Trace

```sh
git clone https://github.com/iamlow/artepiano.git
hugo new site artepiano --force && cd artepiano
git clone https://github.com/StefMa/hugo-fresh themes/hugo-fresh
rm -rf !$/.git
rm config.toml
curl -O https://raw.githubusercontent.com/StefMa/hugo-fresh/master/exampleSite/config.yaml
# replace to https://iamlow.github.io/artepiano on base_url
# git add directories
git commit -m "first commit"
echo "public" >> .gitignore
git remote rename origin upstream
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push upstream gh-pages
git checkout master
# create a publish_to_ghpages.sh
sh ./publish_to_ghpages.sh
git push --all
```

**publish_to_ghpages.sh**

```sh

#!/bin/sh

if [ "`git status -s`" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public upstream/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo

echo "Updating gh-pages branch"
cd public && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

#echo "Pushing to github"
#git push --all

```
