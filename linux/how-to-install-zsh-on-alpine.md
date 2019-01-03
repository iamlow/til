# How to install zsh on alpine

### install zsh

```sh
apk update && \
    apk add --no-cache zsh && \
    rm -f /tmp/* /etc/apk/cache/*

sed -i -e "s/bin\/ash/bin\/zsh/" /etc/passwd
```

### Install oh-my-zsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

**OR**

```sh
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

#### Theme

https://github.com/sindresorhus/pure

### Install plugins

```sh
# zsh-completions
git clone https://github.com/zsh-users/zsh-completions ~/.oh-my-zsh/custom/plugins/zsh-completions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# zsh-autosuggestions
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# add to ~/.zshrc
plugins=(
    git
    zsh-completions
    zsh-syntax-highlighting
    zsh-autosuggestions
)
```

### Install fonts

Powerline fonts: https://github.com/powerline/fonts
