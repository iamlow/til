Get Started
===========

# Quick Start

## Install Hugo for macOS
```sh
brew install hugo
```

## Create a New Site
```sh
hugo new site quickstart
```

## Add a theme
```sh
cd quickstart/themes
git clone https://github.com/sethmacleod/aerial.git
```

## Config file
Copy the config.toml file from the exampleSite directory into root directory of Hugo:
```sh
cp -rf ./aerial/exampleSite/* ../
```

Be sure to change the baseurl:
```sh
cd ..
vi ../config.toml
baseurl = "/"
```

## Github
### New repository for webpages
`git@github.com:iamlow/hugo-pages.git`

### Add submodule
```sh
git submodule add -b master git@github.com:iamlow/hugo-pages.git public
```

## Generate web site
```sh
hugo -t aerial
```
> This generates your website to the public/ directory by default

## Deploy to github
The following are the contents of the deploy.sh script:
```sh
#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back up to the Project Root
cd ..
```

Run deploy.sh script:
```sh
./deploy.sh "First commit!"
```

## Github repository settings
You will also need to set master as your publishable branch from within the GitHub UI:

Go to **Settings** → **GitHub Pages**
From **Source**, select “master branch” and then **Save**.

## Connect to the site with a browser
[`https://iamlow.github.io/hugo-pages`](https://iamlow.github.io/hugo-pages)

## Like themes

### Requirements

* White background
* Single Page

### Best themes

* https://uicard.io/blog/10-best-hugo-themes-2018/
* https://themefisher.com/best-hugo-themes/

### Candidates

* https://themes.gohugo.io/hugo-coder/
* https://themes.gohugo.io/hugo-fresh/
* https://themes.gohugo.io/hugo-theme-introduction/
* https://themes.gohugo.io/slick/
* https://themes.gohugo.io/hugo-theme-terminal/
* https://themes.gohugo.io/theme/hugo-elate-theme/
* https://themes.gohugo.io/theme/restaurant-hugo/#subscribe
* https://themes.gohugo.io/theme/hugo-lime/
* https://themes.gohugo.io/hugo-sodium-theme/

## References
- https://gohugo.io/getting-started/quick-start/
- https://gohugo.io/getting-started/usage/
- https://gohugo.io/hosting-and-deployment/hosting-on-github/
