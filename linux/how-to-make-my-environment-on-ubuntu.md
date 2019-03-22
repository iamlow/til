# How to make my environment on Ubuntu

## User

### Add and grant

```sh
sudo adduser iamlow sudo
```

**OR**

### Add user

```sh
sudo adduser iamlow
```

### Grant sudo privileges to user

```sh
sudo usermod -aG sudo iamlow
```

**References:**

- [How To Add, Delete, and Grant Sudo Privileges to Users on a Debian VPS](https://www.digitalocean.com/community/tutorials/how-to-add-delete-and-grant-sudo-privileges-to-users-on-a-debian-vps)
- [Add user](https://twpower.github.io/31-add-user-in-ubuntu)

## ZSH

### Install zsh

```sh
sudo apt-get install git-core zsh #zsh-syntax-highlighting
```

### Change my default shell

```sh
chsh -s /usr/bin/zsh

# OR
sudo chsh (user id) -s /bin/zsh
```

### Antigen

https://github.com/zsh-users/antigen/wiki/Quick-start

**Installation:**

```sh
curl -L git.io/antigen > antigen.zsh
```

**Configure:**

```sh
source $HOME/antigen.zsh
    
# Load the oh-my-zsh's library
antigen use oh-my-zsh

antigen bundle <<EOBUNDLES
    # Bundles from the default repo (robbyrussell's oh-my-zsh)
    git

    # Syntax highlighting bundle.
    zsh-users/zsh-syntax-highlighting

    # Fish-like auto suggestions
    zsh-users/zsh-autosuggestions

    # Extra zsh completions
    zsh-users/zsh-completions
EOBUNDLES

# Load the theme
antigen theme refined

# Tell antigen that you're done
antigen apply
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

```sh
git clone https://github.com/sindresorhus/pure.git $ZSH_CUSTOM/themes/pure
cd $ZSH_CUSTOM/themes/pure

# global
sudo ln -s "$PWD/pure.zsh" /usr/local/share/zsh/site-functions/prompt_pure_setup
sudo ln -s "$PWD/async.zsh" /usr/local/share/zsh/site-functions/async

# OR user
mkdir -p $ZSH/functions
ln -s "$PWD/pure.zsh" $ZSH/functions/prompt_pure_setup
ln -s "$PWD/async.zsh" $ZSH/functions/async

# add to ~/.zshrc
autoload -U promptinit; promptinit
prompt pure
```

### Plugins

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

## Gnome Terminal Themes

```sh
sudo apt-get install dconf-cli
wget -O gogh https://git.io/vQgMr && chmod +x gogh && ./gogh && rm gogh
```

**References:**

* https://mayccoll.github.io/Gogh/#0
* https://github.com/zsh-users/antigen
